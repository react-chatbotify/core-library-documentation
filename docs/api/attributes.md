---
sidebar_position: 4
title: Attributes
description: api documentation for attributes
keywords: [react, chat, chatbot, chatbotify]
---

# Attributes

This page documents all the attributes that may be used in a conversation [**Block**](/concepts/conversations#block). Take note that [**Attributes**](/concepts/conversations#attributes) are divided into **pre-processing** and **post-processing** as listed in the table below. For a quick look at the usage of attributes, you may refer to the **sample flow** in the dropdown which uses `message` and `path`.

<details>
<summary>Click to view sample flow</summary>

```jsx
const flow = {
  start: {
    message: "Hello there! What is your name?",
    path: "ask_age",
  },
  ask_age: {
    message: (params) => `Good to see you ${params.userInput}, how old are you?`
  }
}
```
</details>

:::tip Tip

Note that as of `v2`, **all attributes** support functions which can access [`params`](/api/params). The sample flow above shows how the [`message`](/api/attributes#message) attribute uses [`params`](/api/params) to retrieve the user input.

:::

## Overview

Below is a list of available attributes along with a brief description for each of them. Note that for **all attributes**, if `function` is used, it optionally accepts [**params**](/api/params) as a parameter.

| Name | Type | Processing | Description |
|------|------|------------|-------------|
| message | `string` \| `function` | Pre-processing | Message sent by the bot to the user. |
| options | `Array<string>` \| `object` \| `function` | Pre-processing | Represents options presented to the user. |
| checkboxes | `Array<string>` \| `object` \| `function` | Pre-processing | Represents checkboxes presented to the user. |
| component | `JSX.Element` \| `function` | Pre-processing | Custom component to render in the chat window to the user. |
| isSensitive | `boolean` \| `function` | Pre-processing | Indicates if chat input is sensitive. |
| chatDisabled | `boolean` \| `function` | Pre-processing | Indicates if chat input is disabled. |
| transition | `number` \| `object` \| `function` | Pre-processing | Represents transition options for the block. |
| function | `function` | Post-processing | Function called after user input. |
| file | `function` | Post-processing | Function called after file upload. |
| path | `string` \| `function` | Post-processing | Path to navigate after processing the block. |

Note that if you choose to pass in a `function` for attributes, you may choose to have it `sync` or `async` depending on your use case.

:::tip Tip
If you're unsure of any of the attributes explained on this page, it might help to check out the [**live examples**](/examples/basic_form) to see how these attributes are being used.
:::

## Pre-processing Attributes

Below is a detailed description on the usage of each **pre-processing** attribute (processed upon entering a [**block**](/concepts/conversations/#block) and before user input).

---

### message

#### Description
Message sent by the bot to the user.

#### Type
`string` | `function`

#### Details
- If a `string` is passed, the bot sends the string to the user.
- If a `function` is passed, it must return a `string` which the bot will then send to the user.

#### Usages
- `message: "Hello there!"`
- `message: () => "Hello there!"`
- `message: async (params) => "Hello there!"`

#### Code Example
```jsx
start: {
  message: "Hello there!"
}
```

### options

#### Description
Specifies the options presented to the user.

#### Type
`Array<string>` | `object` | `function`

#### Details
- If an `Array<string>` is passed, it represents `items` shown, with other fields using default values (recommended).
- If an `object` is passed, it includes:
  - `items` (required): an `Array<string>` of options.
  - `sendOutput` (optional): boolean indicating if the chosen option will be sent in chat. Defaults to `settings.chatInput.sendOptionOutput`.
  - `reusable` (optional): boolean specifying if the options are reusable. Defaults to `false`.
- If a `function` is passed, it must return an `Array<string>` or `object` in the format specified in the previous points.

#### Usages
- `options: ["Dog", "Cat", "Rabbit"]`
- `options: {items: ["Dog", "Cat", "Rabbit"], sendOutput: false}`
- `options: () => ["Dog", "Cat", "Rabbit"]`
- `options: async (params) => {items: ["Dog", "Cat", "Rabbit"], sendOutput: false}`

#### Code Example
```jsx
start: {
  options: ["Dog", "Cat", "Rabbit"]
}
```

### checkboxes

#### Description
Specifies the checkboxes presented to the user.

#### Type
`Array<string>` | `object` | `function`

#### Details
- If an `Array<string>` is passed, it represents `items` shown, with other fields using default values (recommended).
- If an `object` is passed, it includes:
  - `items` (required): an `Array<string>` of selections.
  - `max` (optional): maximum allowed selections. Defaults to `all`.
  - `min` (optional): minimum allowed selections. Defaults to `1`.
  - `sendOutput` (optional): boolean indicating if selections will be sent in chat. Defaults to `settings.chatInput.sendCheckboxesOutput`.
  - `reusable` (optional): whether selections are reusable. Defaults to `false`.
- If a `function` is passed, it must return an `Array<string>` or `object` in the format specified in the previous points.

#### Usages
- `checkboxes: ["Dog", "Cat", "Rabbit"]`
- `checkboxes: {items: ["Dog", "Cat", "Rabbit"], min: 2, sendOutput: false}`
- `checkboxes: () => ["Dog", "Cat", "Rabbit"]`
- `checkboxes: async () => {items: ["Dog", "Cat", "Rabbit"], min: 2, sendOutput: false}`

#### Code Example
```jsx
start: {
  checkboxes: ["Dog", "Cat", "Rabbit"]
}
```

### component

#### Description
Custom component to render in the chat window to the user

#### Type
`JSX.Element` | `function`

#### Details
- If a `JSX.Element` is passed, it represents the custom component to render in chat.
- If a `function` is passed, it must return a `JSX.Element` that can be rendered in chat.

#### Usages
- `component: <MyCustomComponent/>`
- `component: () => <MyCustomComponent/>`

#### Code Example
```jsx
start: {
  component: <MyCustomComponent/>
}
```

### isSensitive

#### Description
Indicates if the chat input is sensitive and needs to be masked.

#### Type
`boolean` | `function`

#### Details
- If a `boolean` is passed, it specifies if the chat input should be sensitive.
- If a `function` is passed, it must return a `boolean` which the bot will use to determine if chat input should be sensitive.

#### Usages
- `isSensitive: true`
- `isSensitive: () => true`
- `isSensitive: async (params) => false`

#### Code Example
```jsx
start: {
  isSensitive: true
}
```

### chatDisabled

#### Description
Indicates whether chat input is enabled or disabled for this block (overrides the chatInput section in [**Configurations**](/api/settings#chatinput)).

#### Type
`boolean` | `function`

#### Details
- If a `boolean` is passed, it specifies if the chat input should be disabled.
- If a `function` is passed, it must return a `boolean` which the bot will use to determine if chat input should be disabled.

#### Usages
- `chatDisabled: true`
- `chatDisabled: () => true`
- `chatDisabled: async (params) => false`

#### Code Example
```jsx
start: {
  chatDisabled: true
}
```

### transition

#### Description
Represents the transition options for the block.

#### Type
`number` | `object` | `function`

#### Details
- If a `number` is passed, it represents the `duration` (in milliseconds) to wait before transition, with other fields using default values (recommended).
- If an `object` is passed, it includes:
  - `duration` (required): time in milliseconds before post-processing of attributes are triggered.
  - `interruptable` (optional): boolean specifying if user input will halt the transition. Defaults to `false`.
- If a `function` is passed, it must return a `number` or `object` in the format specified in the previous points.

#### Usages
- `transition: 3000`
- `transition: {duration: 3000}`
- `transition: () => {duration: 3000, interruptable: true}`
- `transition: async () => 3000`

#### Code Example
```jsx
start: {
  transition: 3000
}
```

## Post-processing Attributes

Below is a detailed description on the usage of each **post-processing** attribute (processed upon user input and before exiting a [**block**](/concepts/conversations/#block)).

---

### function

#### Description
Function that is called after a user input.

#### Type
`function`

#### Details
- It simply accepts a function.

#### Usages
- `function: () => console.log("I logged something!")`
- `function: async () => console.log("I logged something!")`

#### Code Example
```jsx
start: {
  function: () => console.log("I logged something!")
}
```

### file

#### Description
Function that is called after file upload.

#### Type
`function`

#### Details
- It simply accepts a function (use [`params`](/api/params) to access the `files` uploaded).

#### Usages
- `function: (params) => console.log(params.files)`
- `function: async (params) => console.log(params.files)`

#### Code Example
```jsx
start: {
  function: (params) => console.log(params.files)
}
```

### path

#### Description
Path to navigate to after processing this block.

#### Type
`string` | `function`

#### Details
- If a `string` is passed, it specifies if the next path to go to.
- If a `function` is passed, it must return a `string` which the bot will use to determine the next path to go to.

#### Usages
- `path: "next_path"`
- `path: () => "next_path"`
- `path: async () => "next_path"`

#### Code Example
```jsx
start: {
  path: "next_path"
}
```

:::tip Tip
There are multiple ways to work with attributes to achieve the same flow/interactions you wish to have for your users. Find the one most intuitive or comfortable for you!
:::