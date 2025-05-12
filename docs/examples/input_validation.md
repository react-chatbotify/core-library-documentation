---
sidebar_position: 23
title: Input Validation
description: input validation chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Input Validation

The following is an example for performing user input validation. It leverages on the [**Input Validator Plugin**](https://www.npmjs.com/package/@rcb-plugins/input-validator), which is maintained separately on the [**React ChatBotify Plugins**](https://github.com/orgs/React-ChatBotify-Plugins) organization. If you require support with the plugin, please reach out to support on the [**plugins discord**](https://discord.gg/J6pA4v3AMW) instead.

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// loads input validator plugin to be passed into chatbot
	const plugins = [InputValidator()];

	// example flow for testing validation that age must be a number
	const flow: Flow = {
		start: {
			message: "Hey there, please enter your age!",
			path: "try_again",
			validateTextInput: (userInput: string) => {
				if (typeof userInput === "string" && !Number.isNaN(Number(userInput))) {
					return {success: true};
				}
				return {success: false, promptContent: "Age must be a number!", promptDuration: 3000, promptType: "error", highlightTextArea: true};
			}
		} as InputValidatorBlock,
		try_again : {
			message: "Nice, you passed the input validation!",
			path: "start",
		}
	}
	
	const settings = {
		general: {
			embedded: true
		},
		chatHistory: {
			storageKey: "example_input_validation"
		}
	}

	return (
		<ChatBot plugins={plugins} settings={settings} flow={flow}/>
	);
};

render(<MyChatBot/>)
```