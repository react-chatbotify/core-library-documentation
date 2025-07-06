---
sidebar_position: 8
title: Slots
description: Understanding how to use Slots to customize chatbot sections.
keywords: [react, chat, chatbot, chatbotify, slots, concepts, customization, ui]
---

# Slots

The `Slots` prop in React ChatBotify offers a powerful way to customize the visual structure of the chatbot by allowing you to replace entire major sections of its UI with your own custom React components. This provides a high degree of flexibility if you need to integrate the chatbot more deeply with your existing application's look and feel, or if you want to introduce unique functionality within these core sections.

## Purpose of Slots

Unlike the [**Styles**](/concepts/styles) prop, which allows you to change the CSS of existing components, or the [**Settings**](/concepts/settings) prop, which lets you tweak behaviors, the `Slots` prop is about replacing default chatbot UI parts with your own components. This is useful when:

*   You need a completely different header or footer structure.
*   You want to embed custom interactive elements within the chatbot's main areas.
*   The default rendering of a section doesn't meet specific design system requirements.

## Type Definition

The `Slots` prop accepts an object where each key corresponds to a specific section of the chatbot. You provide your custom React component as the value for the key.

```typescript
import React from "react";

/**
 * Defines the structure for custom components (e.g. header) that can be passed to the ChatBot.
 * Each property is optional and corresponds to a major section of the ChatBot UI.
 * If a component is provided, it will be rendered in place of the default component.
 */
export type Slots = {
	/** Custom component to render the header of the ChatBot. */
	chatBotHeader?: React.ElementType;
	/** Custom component to render the body/content area of the ChatBot. */
	chatBotBody?: React.ElementType;
	/** Custom component to render the input area of the ChatBot. */
	chatBotInput?: React.ElementType;
	/** Custom component to render the footer of the ChatBot. */
	chatBotFooter?: React.ElementType;
}
```

## Available Slots

You can provide custom components for the following slots:

*   **`chatBotHeader`**: Replaces the entire header section of the chatbot. This is where the title, close button, and other header controls typically reside.
*   **`chatBotBody`**: Replaces the main content area where messages between the user and the bot are displayed. Use this slot with caution, as you'll be responsible for rendering the message flow if you replace it.
*   **`chatBotInput`**: Replaces the area where the user types their message, including the text input field and send button. Replacing this means you'll need to handle user input submission.
*   **`chatBotFooter`**: Replaces the footer section, which might contain branding or supplementary controls.

Note that for the `chatBotHeader`, the value of `settings.header.buttons` is passed in via a `buttons` prop. Similarly, for the `chatBotFooter` and `chatBotInput`, the value of `setings.footer.buttons` and `settings.chatInput.buttons` are passed in via `buttons` props respectively.

:::info Info

If a component is not provided for a slot, the chatbot will use its default component for that section.

:::

## Usage Example

Here's how you might replace the default header with your own custom header component:

```jsx title=MyChatbot.js
import ChatBot from "react-chatbotify";
import MyCustomHeader from "./MyCustomHeader"; // Your custom component

// Your chatbot flow and settings
const flow = { /* ... */ };
const settings = { /* ... */ };

const slots = {
  header: MyCustomHeader
};

const MyChatbot = () => {
  return (
    <ChatBot flow={flow} settings={settings} slots={slots} />
  );
};

export default MyChatbot;
```

```jsx title=MyCustomHeader.js
import React from 'react';

const MyCustomHeader = (props) => {

  return (
    <div style={{ background: 'lightblue', padding: '10px', borderBottom: '1px solid gray' }}>
      <h2>My Company's Chatbot</h2>
      {/* Passed in by default via the chatbot */}
      {props.buttons}
      {/* You can add more custom elements here */}
    </div>
  );
};

export default MyCustomHeader;
```

## Considerations

*   **Passing of Props**: React ChatBotify passes the `buttons` prop to the `chatBotHeader`, `chatBotInput` and `chatBotFooter` components. When you provide a custom component, it will also receive these props.
*   **Functionality Replacement**: If you replace a slot like `chatBotInput` or `chatBotBody`, you take on the responsibility of replicating the core functionality (e.g. message display, input handling, sending messages). This involves the use of [**hooks**](/concepts/hooks) and while things can get complex, you may reference the core library implementation which will be very useful.
*   **Styling**: Your custom components will need their own styling. They won't automatically inherit all styles from the chatbot's theme or style props in the same way default components do.

Using slots is a powerful feature for deep customization. Start simple, perhaps by customizing less critical sections like the `chatBotHeader` or `chatBotFooter`, before attempting to replace core functional areas like `chatBotBody` or `chatBotInput`.