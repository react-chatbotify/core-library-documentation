---
sidebar_position: 3
title: Styles
description: content describing chatbot styles
keywords: [react, chat, chatbot, chatbotify]
---

# Styles

The chatbot provides a [**`styles`**](/api/styles) prop that provides you with the means to alter the appearance of your chatbot. Within `styles`, you can customize various components of your chatbot to fit your desired design, such as replacing the bot avatar or changing the background color of the footer.

Similar to the `settings` prop, the `styles` prop is an object that contains `sections` (which in turn contains **React CSS Properties**) and they may be passed to the `ChatBot` in the form of `section: {property: value}` as shown in the examples below:

- `botBubbleStyle: {fontSize: "10"}`
- `sendButtonStyle: {backgroundColor: "#00ff00"}`
- `chatButtonStyle: {background: "red"}`
- `headerStyle: {background: "#00ff00", color: "#0000ff"}`
- `footerStyle: {fontSize: 12}`

:::tip Tip

If any of the explanations or usages are unclear to you, you may always reference the [**default styles**](/api/styles) for an example.

:::

## Sections

Within `styles`, you will find different **sections** corresponding to different components of the chatbot. Below are some available sections:

- **bodyStyle**: Styles for the chatbot body.
- **botBubbleStyle**: Styles for bot chat bubbles.
- **botOptionStyle**:	Styles for settings.
- **chatHistoryButtonStyle**: Styles for the chat history button.
- **loadingSpinnerStyle**: Styles for the loading spinner.
- **notificationBadgeStyle**:	Styles for the chatbot notification badge.
- **sendButtonHoveredStyle**:	Styles for the hovered send button.
- **audioButtonDisabledStyle**: Styles for the disabled audio button.
- **tooltipStyle**: Styles for the chatbot tooltip.

For the full list of available sections, you may refer to the [**API documentation**](/api/styles#sections).

Each section receives **React CSS Properties** that allow you to style your chatbot, and they are extensively documented in the [**API documentation for styles**](/api/styles). Below is an example demonstrating how you may style various aspects of the chatbot. Experiment with it!

```jsx live noInline title=MyComponent.js
const MyComponent = () => {
  // necessary to embed the chatbot for it to show on the page
  const settings = {
    general: {
      embedded: true
    }
  }

  // styles here
  const styles = {
    headerStyle: {
      background: '#42b0c5',
      color: '#ffffff',
      padding: '10px',
    },
    chatWindowStyle: {
      backgroundColor: '#f2f2f2',
    },
    // ...other styles
  };


  return (
    <ChatBot styles={styles} settings={settings}/>
  );
};

render(
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <MyComponent/>
  </div>
)
```

:::tip Tip

You can potentially save time by [**browsing for themes**](https://react-chatbotify.com/themes) to pick out designs close to your desired appearance, and then customize on top of it.

:::