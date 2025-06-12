---
sidebar_position: 9
title: Gemini Integration
description: gemini integration chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Gemini Integration

The following is an example showing how to integrate [**Google Gemini**](https://ai.google.dev/gemini-api/docs) into React ChatBotify. It leverages on the [**LLM Connector Plugin**](https://www.npmjs.com/package/@rcb-plugins/llm-connector), which is maintained separately on the [**React ChatBotify Plugins**](https://github.com/orgs/React-ChatBotify-Plugins) organization. This example also taps on the [**GeminiProvider**](https://github.com/React-ChatBotify-Plugins/llm-connector/blob/main/docs/providers/Gemini.md), which ships by default with the LLM Connector Plugin. If you require support with the plugin, please reach out to support on the [**plugins discord**](https://discord.gg/J6pA4v3AMW) instead.

:::tip

The plugin also comes with other default providers, which you can try out in the [**LLM Conversation Example**](/docs/examples/llm_conversation.md) and [**OpenAI Integration Example**](/docs/examples/openai_integration.md).

:::

:::tip

If you expect your LLM responses to contain markdown, consider using the [**Markdown Renderer Plugin**](https://www.npmjs.com/package/@rcb-plugins/markdown-renderer) as well!

:::

:::caution

This example uses 'direct' mode for demonstration purposes which exposes API keys client-side. In production, you should look to proxy your request and have your API keys stored server-side. A lightweight demo project for an LLM proxy can be found [**here**](https://github.com/tjtanjin/llm-proxy). You may also refer to [**this article**](https://tjtanjin.medium.com/how-to-build-and-integrate-a-react-chatbot-with-llms-a-react-chatbotify-guide-part-4-b40cd59fd6e6) for more details.

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// gemini api key, required since we're using 'direct' mode for testing
	let apiKey = "";

	// initialize the plugin
	const plugins = [LlmConnector()];

	// example flow for testing
	const flow: Flow = {
		start: {
			message: "Hello! Make sure you've set your API key before getting started!",
			options: ["I am ready!"],
			chatDisabled: true,
			path: async (params) => {
				if (!apiKey) {
					await params.simulateStreamMessage("You have not set your API key!");
					return "start";
				}
				await params.simulateStreamMessage("Ask away!");
				return "gemini";
			},
		},
		gemini: {
			llmConnector: {
				// provider configuration guide:
				// https://github.com/React-ChatBotify-Plugins/llm-connector/blob/main/docs/providers/Gemini.md
				provider: new GeminiProvider({
					mode: 'direct',
					model: 'gemini-1.5-flash',
					responseFormat: 'stream',
					apiKey: apiKey,
				}),
				outputType: 'character',
			},
		},
	};

	return (
		<ChatBot
			settings={{general: {embedded: true}, chatHistory: {storageKey: "example_gemini_integration"}}}
			plugins={plugins}
			flow={flow}
		></ChatBot>
	);
};

render(<MyChatBot/>)
```