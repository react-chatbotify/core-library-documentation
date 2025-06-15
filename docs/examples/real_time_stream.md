---
sidebar_position: 12
title: Real-time Stream
description: real-time stream chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Real-time Stream

The following is a detailed example demonstrating real-time message streaming. Given the current popularity of Large Language Models (LLMs), I've opted to showcase real-time streaming using [**Google's Gemini AI**](https://ai.google.dev/), which generously offers free API usage. This example can easily be extended to interact with other providers such in the [**OpenAI example**](/examples/llm_conversation) or even your own custom endpoints.

However, you will need to acquire your own API key for testing within this editor. It's important to highlight that streaming functionality is exclusively supported through the `params.streamMessage` parameter, as illustrated below. If you are unable to obtain an API key but would still like to visualize the streaming in action, you may wish to check out the [**simulated stream**](/examples/simulated_stream) example.

:::caution

This is for testing purposes only, **do not** embed your API keys on your website in production. You may refer to [**this article**](https://tjtanjin.medium.com/how-to-build-and-integrate-a-react-chatbot-with-llms-a-react-chatbotify-guide-part-4-b40cd59fd6e6) for more details.

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	let apiKey = null;
	const modelType = "gemini-pro";
	let hasError = false;

	// example gemini stream
	// you can replace with other LLMs or even have a simulated stream
	const gemini_stream = async (params) => {
		try {
			const genAI = new GoogleGenerativeAI(apiKey);
			const model = genAI.getGenerativeModel({ model: modelType });
			const result = await model.generateContentStream(params.userInput);

			let text = "";
			let offset = 0;
			for await (const chunk of result.stream) {
				const chunkText = chunk.text();
				text += chunkText;
				// inner for-loop used to visually stream messages character-by-character
				// feel free to remove this loop if you are alright with visually chunky streams
				for (let i = offset; i < chunkText.length; i++) {
					// while this example shows params.streamMessage taking in text input,
					// you may also feed it custom JSX.Element if you wish
					await params.streamMessage(text.slice(0, i + 1));
					await new Promise(resolve => setTimeout(resolve, 30));
				}
				offset += chunkText.length;
			}

			// in case any remaining chunks are missed (e.g. timeout)
			// you may do your own nicer logic handling for large chunks
			for (let i = offset; i < text.length; i++) {
				await params.streamMessage(text.slice(0, i + 1));
				await new Promise(resolve => setTimeout(resolve, 30));
			}
			await params.streamMessage(text);

			// we call endStreamMessage to indicate that all streaming has ended here
			await params.endStreamMessage();
		} catch (error) {
			await params.injectMessage("Unable to load model, is your API Key valid?");
			hasError = true;
		}
	}
	const flow={
		start: {
			message: "Enter your Gemini api key and start asking away!",
			path: "api_key",
			isSensitive: true
		},
		api_key: {
			message: (params) => {
				apiKey = params.userInput.trim();
				return "Ask me anything!";
			},
			path: "loop",
		},
		loop: {
			message: async (params) => {
				await gemini_stream(params);
			},
			path: () => {
				if (hasError) {
					return "start"
				}
				return "loop"
			}
		}
	}
	return (
		<ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_real_time_stream"}, botBubble: {simulateStream: true}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```