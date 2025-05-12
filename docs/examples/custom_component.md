---
sidebar_position: 13
title: Custom Component
description: custom component chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Custom Component

The following is an example for rendering a simple custom hint button within the chat window.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const flow={
		start: {
			message: (params) => {
				if (params.prevPath == "incorrect_answer") {
					return;
				}
				return "Hello there! Would you like to guess my favourite color? I've left you a hint below!"
			},
			component: (
				<div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 10}}>
					<button 
						className="secret-fav-color"
						onClick={() => alert("it is very dark")}>
						Hint
					</button>
				</div>
			),
			path: "check_answer",
		},
		check_answer: {
			transition: (params) => {
				if (params.prevPath === "incorrect_answer") {
					return;
				}
				return {duration: 0};
			},
			path: (params) => {
				if (params.userInput.toLowerCase() != "black") {
					return "incorrect_answer"
				} else {
					return "correct_answer";
				}
			},
		},
		incorrect_answer: {
			message: "Your answer is incorrect, try again!",
			transition: {duration: 0},
			path: (params) => params.prevPath
		},
		correct_answer: {
			message: "Brilliant! Come back next time!",
			chatDisabled: true
		}
	}
	return (
		<ChatBot settings={{general: {embedded: true}, voice: {disabled: false}, chatHistory: {storageKey: "example_custom_component"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```