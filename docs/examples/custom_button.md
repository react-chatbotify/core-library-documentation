---
sidebar_position: 14
title: Custom Button
description: custom button chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Custom Button

The following is an example for adding a custom button to the chatbot header that opens up an alert.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const flow={
		start: {
			message: "Click on the custom button in the header!"
		}
	}
	
	const settings = {
		general: {
			embedded: true
		},
		chatHistory: {
			storageKey: "example_custom_button"
		},
		header: {
			// note: if features are disabled, their buttons will not show up even if specified here
			buttons: [<button onClick={() => alert("You clicked the custom button!")}>Click me!</button>, Button.NOTIFICATION_BUTTON]
		}
		
	}
	return (
		<ChatBot settings={settings} flow={flow}/>
	);
};

render(<MyChatBot/>)
```