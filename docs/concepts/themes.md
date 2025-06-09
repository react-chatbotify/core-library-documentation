---
sidebar_position: 4
title: Themes
description: content describing chatbot themes
keywords: [react, chat, chatbot, chatbotify]
---

# Themes

A newly added feature in **v2** of the chatbot, the `themes` prop allows users a quick and convenient way to customize their chatbot. Browsing of themes can be done on [**React ChatBotify Gallery**](https://react-chatbotify.com) or manually via the [**GitHub Themes Repository**](https://github.com/react-chatbotify/react-chatbotify-themes/tree/main/themes).

The `theme` prop can accept a single **Theme** object or a list of it. A Theme object contains the following fields:
- **id**: id of the theme
- **version**: version number for the theme
- **cacheDuration**: duration to cache the theme for before fetching again
- **baseUrl**: base url for fetching the theme from

The only required field is **id**, though you are also encouraged to specify the **version** in case a theme update deviates from your intended design. The **cacheDuration** allows you to specify in seconds how long a theme should be cached for (default 30 days). The **baseUrl** is an advanced feature, useful only if you are hosting your own [**GitHub Themes Repository**](https://github.com/react-chatbotify/react-chatbotify-themes/tree/main/themes). If you are exploring such an option and need help setting up the repository, feel free to reach out on [**discord**](https://discord.gg/6R4DK4G5Zh).

:::tip Tip

Try stacking multiple of your favorite themes together, the chatbot will resolve styles in order (i.e. later themes take precedence in the presence of style conflicts!).

:::

Unlike [**`settings`**](/docs/api/settings) and [**`styles`**](/docs/api/styles), there are no sections to configure for themes apart from the 3 fields above. Below is an example demonstrating how you may stack themes with the chatbot. Experiment with it!

```jsx live noInline title=MyComponent.js
const MyComponent = () => {
  // necessary to embed the chatbot for it to show on the page
  const settings = {
    general: {
      embedded: true
    }
  }

  // themes available for browsing at: https://react-chatbotify.com
  const themes = [
    {id: "minimal_midnight", version: "0.1.0"},
    {id: "simple_blue", version: "0.1.0"}
  ]

  return (
    <ChatBot themes={themes} settings={settings}/>
  );
};

render(
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <MyComponent/>
  </div>
)
```

:::tip Tip

Check out more examples for [**single theme**](/docs/examples/single_theme) and [**multiple themes**](/docs/examples/multiple_themes)!

:::