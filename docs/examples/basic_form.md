---
sidebar_position: 1
title: Basic Form
description: basic form chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Basic Form

The following example is a basic recruitment form for a pet store. Note that there are no validations performed for the user input. If you wish to look at an example with validation, you may look at the [**Advanced Form**](/examples/complex_form).

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	const formRef = React.useRef({});

	// simple helper to update form
	const updateForm = (patch) => {
		Object.assign(formRef.current, patch);
	};

	const formStyle = {
		color: "black",
		marginTop: 10,
		marginLeft: 20,
		border: "1px solid #491d8d",
		padding: 10,
		borderRadius: 5,
		maxWidth: 300
	}

	const flow={
		start: {
			message: "Hello there! What is your name?",
			function: (params) => updateForm({ name: params.userInput }),
			path: "ask_age"
		},
		ask_age: {
			message: (params) => `Nice to meet you ${params.userInput}, what is your age?`,
			function: (params) => updateForm({ age: params.userInput }),
			path: "ask_pet"
		},
		ask_pet: {
			message: "Do you own any pets?",
			// alternative way to declare options, with sending of output disabled
			// more info here: https://react-chatbotify.com/docs/api/attributes
			// options: {items: ["Yes", "No"], sendOutput: false}
			options: ["Yes", "No"],
			chatDisabled: true,
			function: (params) => updateForm({ pet_ownership: params.userInput }),
			path: "ask_choice"
		},
		ask_choice: {
			message: "Select at least 2 pets that you are comfortable to work with:",
			// alternative way to declare checkboxes, with default configurations (i.e. min 1, max 4, send output and not reusable)
			// more info here: https://react-chatbotify.com/docs/api/attributes
			// checkboxes: ["Dog", "Cat", "Rabbit", "Hamster"]
			checkboxes: {items: ["Dog", "Cat", "Rabbit", "Hamster"], min: 2},
			chatDisabled: true,
			function: (params) => updateForm({ pet_choices: params.userInput }),
			path: "ask_work_days"
		},
		ask_work_days: {
			message: "How many days can you work per week?",
			function: (params) => updateForm({ num_work_days: params.userInput }),
			path: "end"
		},
		end: {
			message: "Thank you for your interest, we will get back to you shortly!",
			component: () => {
				const form = formRef.current;
				return (
				<div style={formStyle}>
					<p>Name: {form.name}</p>
					<p>Age: {form.age}</p>
					<p>Pet Ownership: {form.pet_ownership}</p>
					<p>Pet Choices: {form.pet_choices}</p>
					<p>Num Work Days: {form.num_work_days}</p>
				</div>
				);
			},
			options: ["New Application"],
			chatDisabled: true,
			path: "start"
		},
	}
	return (
		<ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_basic_form"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```