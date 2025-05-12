---
sidebar_position: 9
title: OpenAI Integration
description: openai integration chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# OpenAI Integration

The following is an example showing how to integrate OpenAI into React ChatBotify. It leverages on the [**LLM Connector Plugin**](https://www.npmjs.com/package/@rcb-plugins/llm-connector), which is maintained separately on the [**React ChatBotify Plugins**](https://github.com/orgs/React-ChatBotify-Plugins) organization. If you require support with the plugin, please reach out to support on the [**plugins discord**](https://discord.gg/J6pA4v3AMW) instead.

:::tip

The plugin also comes with other default providers, which you can try out in the [**LLM Conversation Example**](/docs/examples/llm_conversation.md) and [**Gemini Integration Example**](/docs/examples/gemini_integration.md).

:::

:::caution

This example uses 'direct' mode for demonstration purposes which exposes API keys client-side. In production, you should look to proxy your request and have your API keys stored server-side. A lightweight demo project for an LLM proxy can be found [**here**](https://github.com/tjtanjin/llm-proxy). You may also refer to [**this article**](https://tjtanjin.medium.com/how-to-build-and-integrate-a-react-chatbot-with-llms-a-react-chatbotify-guide-part-4-b40cd59fd6e6) for more details.

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	let apiKey = null;
	let modelType = "gpt-3.5-turbo";
	let hasError = false;

	// example openai conversation
	// you can replace with other LLMs such as Google Gemini
	const call_openai = async (params) => {
		try {
			const openai = new OpenAI({
				apiKey: apiKey,
				dangerouslyAllowBrowser: true // required for testing on browser side, not recommended
			});

			// for streaming responses in parts (real-time), refer to real-time stream example
			const chatCompletion = await openai.chat.completions.create({
				// conversation history is not shown in this example as message length is kept to 1
				messages: [{ role: 'user', content: params.userInput }],
				model: modelType,
			});

			await params.injectMessage(chatCompletion.choices[0].message.content);
		} catch (error) {
			await params.injectMessage("Unable to load model, is your API Key valid?");
			hasError = true;
		}
	}
	const flow={
		start: {
			message: "Enter your OpenAI api key and start asking away!",
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
				await call_openai(params);
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
		<ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_llm_conversation"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```