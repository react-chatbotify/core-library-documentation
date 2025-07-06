---
sidebar_position: 6
title: Events
description: Understanding chatbot events and how to use them.
keywords: [react, chat, chatbot, chatbotify, events, concepts]
---

# Events

[**Custom events**](/api/events) in React ChatBotify provide a way for your application to react to specific occurrences within the chatbot. They are an opt-in feature, meaning all events are disabled by default and individual events should be enabled only when necessary.

## Overview

The chatbot can emit various events throughout its lifecycle and during user interactions. Your application can "listen" for these events and execute a callback function (handler) when an event occurs. You might want to use events if:

*   You need to execute custom logic in your application when certain things happen in the chatbot (e.g., logging messages, tracking user interactions).
*   You are developing or using [**plugins**](/concepts/plugins) that rely on the chatbot emitting specific events (refer to the plugin's documentation to see which events it requires)

For specific details on the usage of events, kindly refer to its [**API documentation**](/api/events).

## Enabling Events

Note that events are disabled by default and if you wish to enable specific events, you need to configure them in the `settings.event` object when initializing the chatbot. For example, to enable the `RcbChangePathEvent`:

```jsx
const botSettings = {
  event: {
    rcbChangePath: true,
    // ... other events
  }
};

<ChatBot flow={myFlow} settings={botSettings} />
```

:::tip Tip

Check out the example for [**custom events**](/examples/custom_events) and experiment with the live editor!

:::