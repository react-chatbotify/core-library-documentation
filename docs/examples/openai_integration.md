---
sidebar_position: 10
title: OpenAI Integration
description: openai integration chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# OpenAI Integration

The following is an example showing how to integrate [**OpenAI**](https://platform.openai.com/) into React ChatBotify. It leverages on the [**LLM Connector Plugin**](https://www.npmjs.com/package/@rcb-plugins/llm-connector), which is maintained separately on the [**React ChatBotify Plugins**](https://github.com/orgs/React-ChatBotify-Plugins) organization. This example also taps on the [**OpenaiProvider**](https://github.com/React-ChatBotify-Plugins/llm-connnector/blob/main/docs/providers/OpenAI.md), which ships by default with the LLM Connector Plugin. If you require support with the plugin, please reach out to support on the [**plugins discord**](https://discord.gg/J6pA4v3AMW) instead.

:::tip

The plugin also comes with other default providers, which you can try out in the [**LLM Conversation Example**](/docs/examples/llm_conversation.md) and [**Gemini Integration Example**](/docs/examples/gemini_integration.md).

:::

:::tip

If you expect your LLM responses to contain markdown, consider using the [**Markdown Renderer Plugin**](https://www.npmjs.com/package/@rcb-plugins/markdown-renderer) as well!

:::

:::caution

This example uses 'direct' mode for demonstration purposes which exposes API keys client-side. In production, you should look to proxy your request and have your API keys stored server-side. A lightweight demo project for an LLM proxy can be found [**here**](https://github.com/tjtanjin/llm-proxy). You may also refer to [**this article**](https://tjtanjin.medium.com/how-to-build-and-integrate-a-react-chatbot-with-llms-a-react-chatbotify-guide-part-4-b40cd59fd6e6) for more details.

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// openai api key, required since we're using 'direct' mode for testing
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
				return "openai";
			},
		},
		openai: {
			llmConnector: {
				// provider configuration guide:
				// https://github.com/React-ChatBotify-Plugins/llm-connnector/blob/main/docs/providers/OpenAI.md
				provider: new OpenaiProvider({
					mode: 'direct',
					model: 'gpt-4.1-nano',
					responseFormat: 'stream',
					apiKey: apiKey,
				}),
				outputType: 'character',
			},
		},
	};

	return (
		<ChatBot
			settings={{general: {embedded: true}, chatHistory: {storageKey: "example_openai_integration"}}}
			plugins={plugins}
			flow={flow}
		></ChatBot>
	);
};

render(<MyChatBot/>)
```