---
sidebar_position: 25
title: Markdown Render
description: markdown render chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Markdown Render

The following is an example for rendering markdown messages. It leverages on the [**Markdown Renderer Plugin**](https://www.npmjs.com/package/@rcb-plugins/markdown-renderer), which is maintained separately on the [**React ChatBotify Plugins**](https://github.com/orgs/React-ChatBotify-Plugins) organization. If you require support with the plugin, please reach out to support on the [**plugins discord**](https://discord.gg/J6pA4v3AMW) instead.

:::tip

If you're looking to render html markup messages, you may refer to the [**html render example**](/examples/html_render.md) instead.

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// loads markdown renderer plugin to be passed into chatbot
	const plugins = [MarkdownRenderer()];

	// example flow for rendering markdown
	const flow: Flow = {
		start: {
			message: "### Hey there, feel free to send me a markdown message!",
			path: "try_again",
			renderMarkdown: ["BOT", "USER"],
		} as MarkdownRendererBlock,
		try_again : {
			message: "Interesting, **give it a try again**!",
			path: "try_again",
            renderMarkdown: ["BOT", "USER"],
		} as MarkdownRendererBlock,
	}
	
	const settings = {
		general: {
			embedded: true
		},
		chatHistory: {
			storageKey: "example_markdown_render"
		}
	}

	return (
		<ChatBot plugins={plugins} settings={settings} flow={flow}/>
	);
};

render(<MyChatBot/>)
```