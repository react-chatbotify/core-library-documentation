---
sidebar_position: 3
title: Complex Form
description: complex form chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Complex Form

The following example is a slightly more complex recruitment form for a pet store with validation for user input. If you would like a simpler example, you may refer to the [**Basic Form**](/examples/basic_form).

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
			path: async (params) => {
				if (isNaN(Number(params.userInput))) {
					await params.injectMessage("Age needs to be a number!");
					return;
				}
				return "ask_pet";
			}
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
			message: "Select at least 2 and at most 4 pets that you are comfortable to work with:",
			// alternative way to declare checkboxes, with default configurations (i.e. min 1, max 4, send output and not reusable)
			// more info here: https://react-chatbotify.com/docs/api/attributes
			// checkboxes: ["Dog", "Cat", "Rabbit", "Hamster", "Bird"]
			checkboxes: {items: ["Dog", "Cat", "Rabbit", "Hamster", "Bird"], min: 2, max: 4},
			chatDisabled: true,
			function: (params) => updateForm({ pet_choices: params.userInput }),
			path: "ask_work_days"
		},
		ask_work_days: {
			message: "How many days can you work per week?",
			function: (params) => updateForm({ num_work_days: params.userInput }),
			path: async (params) => {
				if (isNaN(Number(params.userInput))) {
					await params.injectMessage("Number of work day(s) need to be a number!");
					return;
				}
				return "end";
			}
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
		<ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_complex_form"}}} flow={flow}/>
	);
};

render(<MyChatBot/>)
```