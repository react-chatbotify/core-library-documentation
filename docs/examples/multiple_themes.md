---
sidebar_position: 20
title: Multiple Themes
description: multiple themes chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Multiple Themes

The following is an example of configuring the chatbot with multiple themes (e.g. `solid_purple_haze` and `simple_blue`). You can experiment with various themes available for browsing at [**React ChatBotify Gallery**](https://react-chatbotify.com/themes).

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// necessary to embed the chatbot for it to show on the page
	const settings = {
		general: {
			embedded: true
		},
		chatHistory: {
			storageKey: "example_multiple_themes"
		},
	}

	// themes available for browsing at: https://react-chatbotify.com
	const themes = [
		{id: "solid_purple_haze", version: "0.1.0"},
		{id: "simple_blue", version: "0.1.0"}
	]

	return (
		<ChatBot themes={themes} settings={settings}/>
	);
};

render(<MyChatBot/>)
```