---
sidebar_position: 8
title: LLM Conversation
description: llm conversation chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# LLM Conversation

The following is an example showing how to integrate in-browser models (e.g. via [**WebLlm**](https://webllm.mlc.ai/)/[**Wllama**](https://www.npmjs.com/package/@wllama/wllama)) into React ChatBotify. It leverages on the [**LLM Connector Plugin**](https://www.npmjs.com/package/@rcb-plugins/llm-connector), which is maintained separately on the [**React ChatBotify Plugins**](https://github.com/orgs/React-ChatBotify-Plugins) organization. This example also taps on the [**WebLlmProvider**](https://github.com/React-ChatBotify-Plugins/llm-connnector/blob/main/docs/providers/WebLlm.md) and [**WllamaProvider**](https://github.com/React-ChatBotify-Plugins/llm-connnector/blob/main/docs/providers/Wllama.md), both of which ships by default with the LLM Connector Plugin. If you require support with the plugin, please reach out to support on the [**plugins discord**](https://discord.gg/J6pA4v3AMW) instead.

:::tip

The plugin also comes with other default providers, which you can try out in the [**OpenAI Integration Example**](/docs/examples/openai_integration.md) and [**Gemini Integration Example**](/docs/examples/gemini_integration.md).

:::

:::tip

If you expect your LLM responses to contain markdown, consider using the [**Markdown Renderer Plugin**](https://www.npmjs.com/package/@rcb-plugins/markdown-renderer) as well!

:::

:::caution

Running models in the browser can be sluggish (especially if a large model is chosen). In production, you should pick a reasonably sized model or look to proxy your request to a backend. A lightweight demo project for an LLM proxy can be found [**here**](https://github.com/tjtanjin/llm-proxy). You may also refer to [**this article**](https://tjtanjin.medium.com/how-to-build-and-integrate-a-react-chatbot-with-llms-a-react-chatbotify-guide-part-4-b40cd59fd6e6) for more details.

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// initialize the plugin
	const plugins = [LlmConnector()];

	// checks user message stop condition to end llm conversation
	const onUserMessageCheck = async (message: Message) => {
		if (
			typeof message.content === 'string' &&
			message.content.toUpperCase() === 'RESTART'
		) {
			return 'start';
		}
	};

	// checks key down stop condition to end llm conversation
	const onKeyDownCheck = async (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			return 'start';
		}
		return null;
	}

	// example flow for testing
	const flow: Flow = {
		start: {
			message: "Hello, pick a model runtime to get started!",
			options: ["WebLlm", "Wllama"],
			chatDisabled: true,
			path: async (params) => {
				await params.simulateStreamMessage("Type 'RESTART' or hit 'ESC` to pick another runtime!");
				await params.simulateStreamMessage("Ask away!");
				return params.userInput.toLowerCase();
			},
		},
		webllm: {
			llmConnector: {
				// provider configuration guide:
				// https://github.com/React-ChatBotify-Plugins/llm-connnector/blob/main/docs/providers/WebLlm.md
				provider: new WebLlmProvider({
					model: 'Qwen2-0.5B-Instruct-q4f16_1-MLC',
				}),
				outputType: 'character',
				stopConditions: {
					onUserMessage: onUserMessageCheck,
					onKeyDown: onKeyDownCheck,
				},
			},
		},
		wllama: {
			llmConnector: {
				// provider configuration guide:
				// https://github.com/React-ChatBotify-Plugins/llm-connnector/blob/main/docs/providers/Wllama.md
				provider: new WllamaProvider({
					modelUrl: 'https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct-GGUF/resolve/main/smollm2-360m-instruct-q8_0.gguf',
					loadModelConfig: {
						n_ctx: 8192,
					},
				}),
				outputType: 'character',
				stopConditions: {
					onUserMessage: onUserMessageCheck,
					onKeyDown: onKeyDownCheck,
				},
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