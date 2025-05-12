---
sidebar_position: 17
title: Smart Conversation
description: smart conversation chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Smart Conversation

The following is an example of a conversation meant to showcase the possibility of the bot leveraging on backend services to make replies within a loop. Due to resource limitations, I am leveraging on a public API that may not always be available. Nonetheless, I hope that the example is clear and simple enough to assist in your understanding of how conversations can be integrated with backend services.

:::tip

A slightly more advanced example involving stream responses from LLM models can be found [**here**](/docs/examples/real_time_stream.md).

:::

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	async function fetchData() {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
			const data = await response.json();
			return data.title;
		} catch (error) {
			return "Oh no I don't know what to say!";
		}
	}
	let count = 0;
	const flow={
		start: {
			message: "Hey! I call an API!",
			path: "loop"
		},
		loop: {
			message: async (params) => {
				const result = await fetchData();
				return result;
			},
			path: "loop",
		}
	}
	return (
		<ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_smart_conversation"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```