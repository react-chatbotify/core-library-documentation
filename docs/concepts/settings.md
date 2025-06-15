---
sidebar_position: 2
title: Settings
description: content describing chatbot settings
keywords: [react, chat, chatbot, chatbotify]
---

# Settings

The chatbot provides a [**`settings`**](/api/settings) prop that empowers you to tweak the **features and functionalities** of your chatbot. Within `settings`, you can customize the chatbot to align with your specific needs and preferences such as disabling notifications or enabling audio.

The `settings` prop is an object that contains `sections` (which in turn contains `properties`) and they may be passed to the `ChatBot` in the form of
`section: {property: value}` as shown in the examples below:

- `botBubble: {showAvatar: false}`
- `audio: {disabled: false}`
- `general: {primaryColor: "#ff0000", embedded: true}`
- `notifications: {disabled: true}`
- `voice: {language: "en-US"}`

:::tip Tip

If any of the explanations or usages are unclear to you, you may always reference the [**default settings**](/api/settings) for an example.

:::

## Sections

Within `settings`, configurable fields are grouped into different **sections**, each representing a specific aspect of the chatbot. Below are some available sections:

- **General**: General configurations for the chatbot
- **Advance**: Advanced configurations for the chatbot.
- **Audio**: Configuration for chatbot audio settings.
- **BotBubble**: Configuration for bot chat bubbles.
- **ChatWindow**: Configuration for the chatbot window.
- **Emoji**: Configuration for chatbot emojis.
- **FileAttachment**: Configuration for chatbot file attachments.
- **Notification**: Configuration for chatbot notifications.

For the full list of available sections, you may refer to the [**API documentation**](/api/settings#sections).

Each section contains distinct properties that provide granular control over the behavior of the chatbot. These properties are extensively documented in the [**API documentation for settings**](/api/settings), providing comprehensive details and guidance on customization. Below is an example demonstrating how **properties** within **sections** can be customized. Experiment with it!

```jsx live noInline title=MyComponent.js
const MyComponent = () => {
  const settings = {
    isOpen: true,
    general: {
      primaryColor: '#42b0c5',
      secondaryColor: '#491d8d',
      fontFamily: 'Arial, sans-serif',
      embedded: true
    },
    audio: {
      disabled: false,
    },
    chatHistory: {
      storageKey: "concepts_settings"
    }
    // other sections
  };


  return (
    <ChatBot settings={settings} />
  );
};

render(
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <MyComponent/>
  </div>
)
```