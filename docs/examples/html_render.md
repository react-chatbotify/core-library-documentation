---
sidebar_position: 24
title: HTML Render
description: html render chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# HTML Render

The following is an example showing how you may allow markup syntax (e.g. `<br/>`, `<b>`, `<hr/>`) in user chat bubbles and bot chat bubbles. It leverages on the [**HTML Renderer Plugin**](https://www.npmjs.com/package/@rcb-plugins/html-renderer), which is maintained separately on the [**React ChatBotify Plugins**](https://github.com/orgs/React-ChatBotify-Plugins) organization. If you require support with the plugin, please reach out to support on the [**plugins discord**](https://discord.gg/J6pA4v3AMW) instead.

:::tip

If you're looking to render markdown messages, you may refer to the [**markdown render example**](/examples/markdown_render.md) instead.

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// loads html renderer plugin to be passed into chatbot
	const plugins = [HtmlRenderer()];

	const flow: Flow = {
		start: {
			message: "<b>Hey there, I am a bolded sentence!</b> Try typing a bolded message to me!",
			path: "reply",
			renderHtml: ["BOT", "USER"],
		} as HtmlRendererBlock,
		reply: {
			message: "Interesting, let's try again?",
			options: ["Try again"],
			chatDisabled: true,
			path: "start",
			renderHtml: ["BOT", "USER"],
		} as HtmlRendererBlock,
	}

	const settings = {
		general: {
			embedded: true
		},
		chatHistory: {
			storageKey: "example_html_render"
		}
	}

	return (
		<ChatBot plugins={plugins} settings={settings} flow={flow}
		/>
	);
};

render(<MyChatBot/>)
```