---
sidebar_position: 7
title: Hooks
description: Understanding chatbot hooks for external component interaction.
keywords: [react, chat, chatbot, chatbotify, hooks, concepts, provider]
---

# Hooks

React ChatBotify provides a set of [**custom hooks**](/api/hooks) that allow your own components—those outside the main `ChatBot` component structure—to interact with and control various aspects of the chatbot. This is powerful for creating custom UI elements that can, for example, **toggle audio**, **send messages**, or **open/close the chat window**.

## Overview

Note that to use any of the custom hooks provided by React ChatBotify, your components that call these hooks **must** be descendants of the `<ChatBotProvider>` component. The `ChatBot` component itself should also be a child of this provider. We'll look at 2 scenarios below.

**Scenario 1:** If you have no need for custom hooks, then you **do not need** to import `ChatBotProvider` and can simply use `ChatBot`. This is likely the scenario for a vast majority of users:

```jsx title=MyComponent.js
import ChatBot from "react-chatbotify";

const MyComponent = () => {
  return (
    <ChatBot/> {/* no custom hooks needed */}
  );
};
```

**Scenario 2:** If you require custom hooks to interact with the chatbot (e.g. toggle audio) from within your own components, you need to import `ChatBotProvider` and ensure that your components that need the hooks are nested within it:

```jsx title=MyComponent.js
import ChatBot, { ChatBotProvider } from "react-chatbotify";

const MyComponent = () => {
  return (
    <>
      <MyNotNestedComponent> {/* unable to access custom hooks */}
      <ChatBotProvider>
        <MyNestedComponent> {/* able to access custom hooks (e.g. useAudio) */}
        <ChatBot/>
      </ChatBotProvider>
    </>
  );
};
```

```jsx title=MyNestedComponent
import { useAudio } from "react-chatbotify";

const MyNestedComponent = () => {
  // can use custom hook
  const { toggleAudio } = useAudio();

  return (
    <button onClick={toggleAudio}></button>
  )
};

const MyNotNestedComponent = () => {
  // error, cannot use custom hook since outside of ChatBotProvider
  const { toggleAudio } = useAudio();

  return (
    <button onClick={toggleAudio}></button>
  )
};
```

For specific details on the usage of hooks, kindly refer to its [**API documentation**](/api/hooks).

:::warning Warning
It is a common mistake to import these custom hooks from a component outside of `<ChatBotProvider>`. If you're running into issues, make sure to check that your component is nested properly as a child of `<ChatBotProvider>`!
:::

:::tip Tip
An extensive example featuring how various hooks may be used can be found [**here**](/examples/custom_hooks).
:::
