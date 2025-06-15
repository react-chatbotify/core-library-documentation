---
sidebar_position: 1
title: ChatBot
description: api documentation for chatbot
keywords: [react, chat, chatbot, chatbotify]
---

# ChatBot

The `ChatBot` is the core component that holds all the logic together (you have probably seen it in the [**quickstart**](/introduction/quickstart)!). As long as you're using the chatbot, it is **always imported** and accepts a total of **6 props**. Note that while all the props are optional, you will end up with the default welcome chatbot if you do not specify any of them. An example of how to import `ChatBot` and pass it an `id` and `flow` prop is shown below:

```jsx title=MyComponent.js
import ChatBot from "react-chatbotify";

const MyComponent = () => {
  const id = "my-chatbot-id" // if not specified, will auto-generate uuidv4

  const flow = {
    "start": {
        message: "Hello there!",
        path: "end"
    },
    "end": {
        message: "See you, goodbye!"
    }
  }

  return (
    <ChatBot id={id} flow={flow}/>
  );
};
```

:::tip Tip
It is **not necessary** to specify all 6 props. For most use cases, you'll likely want to start by tinkering with `flow`, `settings` and `styles` before exploring other features.
:::

## Overview

Below is a list of available props along with a brief description for each of them:

| Name      | Type              | Description                                                                 |
| --------- | ----------------- | --------------------------------------------------------------------------- |
| id      | `string`          | Uniquely identifies the chatbot, useful if you have multiple chatbots or for plugins/events. |
| flow    | [`Flow`](/concepts/conversations#flow)            | Describes the conversation flow for the chatbot.                            |
| settings| [`Settings`](/concepts/settings)        | Provides the settings for the chatbot.                                      |
| styles  | [`Styles`](/concepts/styles)          | Provides the styles for the chatbot.                                        |
| themes  | [`Array<Theme>`](/concepts/themes)    | Specifies theme(s) to load for the chatbot.                                 |
| plugins | [`Array<Plugin>`](/plugins) | Initializes plugins that enhance the chatbot.                               |

## Using ChatBotProvider

The `ChatBotProvider` component is only necessary if you're hoping to interact with the chatbot externally **from your own custom components**. If you have such a use case, then you need to import `ChatBotProvider` and wrap it around `ChatBot` (for v1 users, this is a direct replacement for the [advanced section/features](https://react-chatbotify.com/docs/v1/api/bot_options/#advance) that were available). This will provide your custom components with access to the [**hooks**](/api/hooks) provided by the chatbot.

Note that `ChatBotProvider` **does not accept any props**, you would simply import and wrap it around `ChatBot` as shown in the example below:

```jsx title=MyComponent.js
import ChatBot, { ChatBotProvider } from "react-chatbotify";

const MyComponent = () => {
  const id = "my-chatbot-id" // if not specified, will auto-generate uuidv4

  const flow = {
    "start": {
        message: "Hello there!",
        path: "end"
    },
    "end": {
        message: "See you, goodbye!"
    }
  }

  return (
    <ChatBotProvider>
      <ChatBot id={id} flow={flow}/>
    </ChatBotProvider>
  );
};
```