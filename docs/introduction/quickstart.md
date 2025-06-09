---
sidebar_position: 1
title: Quickstart
description: content describing chatbot quickstart
keywords: [react, chat, chatbot, chatbotify]
---

# Quickstart

Getting started? 😊 The process of setting up the chatbot only involves **3 simple steps**, making it incredibly easy to jump right in!

## Installation

React ChatBotify is [**available on npm**](https://www.npmjs.com/package/react-chatbotify) so install it with the following command within your project folder:

```
npm install react-chatbotify --save
```

## Import

Import the ChatBot within your component of interest (e.g. `MyComponent.js`).

```jsx title=MyComponent.js
import ChatBot from "react-chatbotify";
```

## Initialization

Initialize the ChatBot and you will be greeted with a default welcome/help message when you run your app.

```jsx title=MyComponent.js
import ChatBot from "react-chatbotify";

const MyComponent = () => {
  return (
    <ChatBot/>
  );
};
```

:::info Info

If you are using [**NextJS**](https://nextjs.org/) and running into errors, look [**here**](/docs/faq#q8-i-am-using-nextjs-and-running-into-referenceerror-window-is-not-defined-errors-how-can-i-fix-this)!

:::

## Theming (Optional)

If you are looking for a quick way to customize your chatbot, consider browsing for [**`themes`**](/docs/concepts/themes) on [**React ChatBotify Gallery**](https://react-chatbotify.com/themes). You may then further refine the themes via [**`settings`**](/docs/concepts/settings) and [**`styles`**](/docs/concepts/styles). An example for this can be found [**here**](/docs/examples/single_theme).

Alternatively, you may also experiment with the `primaryColor` and `secondaryColor` properties in the `general` section of [**`settings`**](/docs/concepts/settings).

:::info Info

In the next few sections, we will go through a brief overview on React ChatBotify, cover important properties as well as explore conversations/configurations. It is recommended to sit through these sections without skipping them as they will help ease your use of the library and the understanding of this documentation 😊!

:::