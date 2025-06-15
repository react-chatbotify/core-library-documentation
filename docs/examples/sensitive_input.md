---
sidebar_position: 18
title: Sensitive Input
description: sensitive input chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Sensitive Input

The following is an example showing how you may allow users to enter sensitive information by masking or hiding away the input.

:::tip

The default sensitive input configuration is used here. For customizing the behavior for hiding sensitive information, you may check out its [API documentation](/api/settings#sensitiveinput).

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const flow={
		start: {
			message: "Hey there, please provide your unique token identifier!",
			path: "token",
			isSensitive: true
		},
		token: {
			message: "I have received your token!",
			options: ["Re-enter token"],
			chatDisabled: true,
			path: "start"
		},
	}
	return (
		<ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_sensitive_info"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```