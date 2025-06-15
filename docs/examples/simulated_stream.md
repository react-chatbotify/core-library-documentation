---
sidebar_position: 11
title: Simulated Stream
description: simulated stream chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Simulated Stream

The following is an example of a bot simulating stream messages. In the era of LLMs, streaming messages have become commonplace and while real-time streaming brings value in terms of speed of data transfer, simulating streams can also be aesthetically pleasing. Recognizing that need, the library comes built in with the `simulateStream` option to simulate streaming messages. If you wish to integrate with real-time streaming, [**look here**](/examples/real_time_stream) instead.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const flow={
		start: {
			message: "Hey! Look at my messages stream in, pretty cool isn't it?",
			path: "thank"
		},
		thank: {
			message: async (params) => {
				await params.simulateStreamMessage("I am a simulated stream message as well!");
				return "I am a return message!";
			},
			path: "start"
		}
	}
	return (
		<ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_simulation_stream"}, botBubble: {simulateStream: true}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```