---
sidebar_position: 5
title: Params
description: api documentation for params
keywords: [react, chat, chatbot, chatbotify]
---

# Params

This page documents all the parameters that may be used in an [**Attribute**](/docs/concepts/conversations#attributes). Parameters provide you with contextual detail or utility functions to base your decisions on and interact with the chatbot.

## Overview

The following table provides details about the parameters available for attributes. These parameters are accessible in all attributes, allowing dynamic behavior within your chatbot flows.

| Name            | Type                | Availability      | Description                                                                                                                       |
|-----------------|---------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| userInput       | `string`            | All Attributes    | Represents the user's input in the chat.                                                                                          |
| currPath        | `string`            | All Attributes    | Represents the current path in the chat (can be null if conversation flow has not started).                                                 |
| prevPath        | `string`            | All Attributes    | Represents the previous path in the chat (can be null if no previous path exists).                                                 |
| goToPath        | `async function`          | All Attributes    | A utility function for navigating to another block.                                                                                |
| injectMessage   | `async function`    | All Attributes    | A utility function to inject a message into the chat.   |
| simulateStreamMessage   | `async function`    | All Attributes    | Simulates streaming a message into the chat. You can refer to the [**Simulated Stream**](/docs/examples/simulated_stream) example.          |
| streamMessage   | `async function`    | All Attributes    | Streams a message into the chat. You can refer to the [**Real-Time Stream**](/docs/examples/real_time_stream) example.          |
| endStreamMessage   | `async function`    | All Attributes    | Ends an existing message stream. You can refer to the [**Real-Time Stream**](/docs/examples/real_time_stream) example.          |
| removeMessage   | `async function`    | All Attributes    | Removes a message from the chat by message id.          |
| setTextAreaValue| `async function`          | All Attributes    | Sets a value directly within the text area.                                                                                        |
| showToast       | `async function`          | All Attributes    | Shows a toast that is dismissed after a duration or on user click.                                                                                                          |
| dismissToast       | `async function`          | All Attributes    | Dismisses a toast by toast id.                                                                                                          |
| openChat        | `async function`          | All Attributes    | Opens or closes the chat component.                                                                                               |
| files           | `FileList`          | Only `file` Attribute | Represents the files uploaded by the user.                                                                                        |

:::caution Caution

If you are using functions from `params`, do remember that they are `async` and that without using `await`, behaviors may be unexpected (e.g. multiple messages sent at once). This is a common pitfall!

:::

:::tip Tip

Do consider checking out the [**live examples**](/docs/examples/basic_form) if you need more clarity on the usages of `params`.

:::

## Param Details

Below is a detailed description on the usage of each parameter that may be used in an [**attribute**](/docs/api/attributes).

---

### userInput

#### Description
The last text area input submitted by the user.

#### Type
`string`

#### Code Example
```jsx
start: {
  message: (params) => `This is what the user last said: ${params.userInput}!`
}
```

### currPath

#### Description
The current path the user is in, can be `null` if the conversation flow has not started.

#### Type
`string` | `null`

#### Code Example
```jsx
start: {
  message: (params) => `This is the user's current path: ${params.currPath}!`
}
```

### prevPath

#### Description
The previous path the user came from, can be `null` if no previous path (e.g. `start` block).

#### Type
`string` | `null`

#### Code Example
```jsx
start: {
  message: (params) => `This is the user's previous path: ${params.prevPath}!`
}
```

### goToPath

#### Description
Sends the user to the specified path.

#### Type
`function`

#### Parameters
- `pathToGo` (required): a `string` value representing the path to send the user to.

#### Code Example
```jsx
start: {
  message: (params) => {
    // some logic here
    params.goToPath("mystery_path");
  }
}
```

### injectMessage

#### Description
Sends a message into the chat.

#### Type
`async function`

#### Parameters
- `content` (required): a `string` or `JSX.Element` which is used as the content to send into the chat.
- `sender` (optional): a `string` value representing the sender of the message (`user` or `bot`). Defaults to `bot`.

#### Code Example
```jsx
start: {
  message: (params) => {
    await params.injectMessage("Good morning from the bot!");
    await params.injectMessage(<div>Saying hi for the user!</div>, "user");
  }
}
```

### simulateStreamMessage

#### Description
Simulates streaming a message into the chat. This works by taking the entire text string and splitting it up to insert into the chat bubbble. For a detailed example on how to use this parameter, refer to the [**simulated stream**](/docs/examples/simulated_stream) example.

#### Type
`async function`

#### Parameters
- `content` (required): a `string` value containing the text to simulate stream for.
- `sender` (optional): a `string` value representing the sender of the message (`user` or `bot`). Defaults to `bot`.
- `simulateStreamChunker` (optional): a `function` containing logic for chunking text content for streaming.

#### Code Example
```jsx
start: {
  message: (params) => {
    // take for example the text below is streamed in character by character
    const textToStream = "I'm just an example text"
    await params.simulateStreamMessage(textToStream);
  }
}
```

### streamMessage

#### Description
Streams a message into the chat. This works by replacing the last sent message from the `sender` with the `content` specified. For a detailed example on how to use this parameter, refer to the [**real-time stream**](/docs/examples/real_time_stream) example.

#### Type
`async function`

#### Parameters
- `content` (required): a `string` or `JSX.Element` which is used as the content to send into the chat.
- `sender` (optional): a `string` value representing the sender of the message (`user` or `bot`). Defaults to `bot`.

#### Code Example
```jsx
start: {
  message: (params) => {
    // take for example the text below is streamed in character by character
    const textToStream = "I'm just an example text"
    for (let i = 0; i < textToStream.length; i++) {
        // this call replaces the last message sent by the bot with the new content
        await params.streamMessage(textToStream.slice(0, i + 1));
    }
    // to end the stream once we're done streaming
    await params.endStreamMessage();
  }
}
```

### endStreamMessage

#### Description
Ends the streaming of message into the chat - users should call this when done with `params.streamMessage`. Note that not calling `params.endStreamMessage` may cause chat history and the emitting of events to function incorrectly.

#### Type
`async function`

#### Parameters
- `sender` (optional): a `string` value representing the sender to end the stream for (`user` or `bot`). Defaults to `bot`.

#### Code Example
```jsx
start: {
  message: (params) => {
    // take for example the text below is streamed in character by character
    const textToStream = "I'm just an example text"
    for (let i = 0; i < textToStream.length; i++) {
        // this call replaces the last message sent by the bot with the new content
        await params.streamMessage(textToStream.slice(0, i + 1));
    }
    // to end the stream once we're done streaming
    await params.endStreamMessage();
  }
}
```

### removeMessage

#### Description
Removes a message from chat with the given message id.

#### Type
`async function`

#### Parameters
- `id` (required): a `string` value representing the id of the message to remove.

#### Code Example
```jsx
start: {
  message: (params) => {
    await params.removeMessage("2e032ac4-b2bf-49e9-8897-706ad4dd214d");
  }
}
```

### setTextAreaValue

#### Description
Sets a value inside the input text area.

#### Type
`async function`

#### Parameters
- `value` (required): a `string` value to set inside the input text area.

#### Code Example
```jsx
start: {
  message: async (params) => {
    await params.setTextAreaValue("This is the new input text area value!");
  }
}
```

### showToast

#### Description
Shows a toast that lasts for a duration (if specified).

#### Type
`async function`

#### Parameters
- `content` (required): a `string` value representing the toast content to show.
- `timeout` (optional): a `number` value representing the duration (in milliseconds) to show the toast for.

#### Code Example
```jsx
start: {
  message: async (params) => {
    await params.showToast("Hello there, I last for 3 seconds!", 3000);
  }
}
```

### dismissToast

#### Description
Dismisses a toast with the given toast id.

#### Type
`async function`

#### Parameters
- `id` (required): a `string` value representing the id of the toast to remove.

#### Code Example
```jsx
start: {
  message: async (params) => {
    await params.dismissToast("fb8bf309-2a33-4683-955c-9e915768dadf");
  }
}
```

### openChat

#### Description
Sets the chat window to be open or close.

#### Type
`async function`

#### Parameters
- `isOpen` (required): a `boolean` indicating if chat window should be set open.

#### Code Example
```jsx
start: {
  message: async (params) => {
    await params.openChat(true);
  }
}
```

### files

#### Description
List of files uploaded by the user (only present in the [**file attribute**](/docs/api/attributes#file)).

#### Type
`FileList`

#### Parameters
- None

#### Code Example
```jsx
start: {
  file: (params) => {
    console.log(params.files);
  }
}
```

