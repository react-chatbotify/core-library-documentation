---
sidebar_position: 2
title: Overview
description: content describing chatbot overview
keywords: [react, chat, chatbot, chatbotify]
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Loading from '@theme/Loading';

# Overview

<div style={{display: "flex", justifyContent: "center"}}>
    <BrowserOnly>
      {() => {
        const ChatBot = require("react-chatbotify").default;
        const flow = {
          start: {
            message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify! I'm excited that you are checking out our " +
              "documentation 😊!",
            transition: {duration: 0},
            path: "playground"
          },
          playground: {
            message: "I hope you find the explanations and examples helpful 😊, feel free to experiment on the playground!",
            path: "unknown_input"
          },
          unknown_input: {
            message: "Sorry, I do not understand your message 😢! If you require further assistance, you may open an issue " +
              "on GitHub or visit our discord.",
            path: "unknown_input"
          },
        }

        const settings = {
          general: {embedded: true},
          chatHistory: {storageKey: "introduction_overview"},
          botBubble: {simulateStream: true}
        }

        return <ChatBot flow={flow} settings={settings}/>
      }}
    </BrowserOnly>
</div>

## About

React ChatBotify is an intuitive and versatile chatbot library tailored to streamline your development process while providing the flexibility to implement advanced features. It is crafted to meet a wide range of requirements, whether you're building a straightforward FAQ chatbot, an intricate conversational interface or even an integration with Large Language Models (LLMs).

React ChatBotify aims to simplify the creation of chatbots by offering a user-friendly experience while accommodating the diverse needs of developers. With its extensive capabilities, you can easily customize and expand your chatbot's functionalities. From basic interactions to sophisticated conversational flows, React ChatBotify empowers you to build chatbots that meet your specific project goals.

## Features

React ChatBotify offers a wide array of features designed to enhance your chatbot experience. Here are just a few of the key features:

- **Dynamic Outputs:** Create interactive conversations by dynamically generating messages and defining multiple conversation paths based on user inputs.
- **Custom Components:** Seamlessly integrate your own custom components into the chatbot interface to boast your application's unique design and functionality.
- **Stream Responses:** Integrate with LLM models and custom endpoints to stream (or even simulate) your bot responses for an elevated user experience.
- **Timeouts and Auto-Transitions:** Set timeouts and automate transitions between chatbot paths, providing users with a guided flow and journey.
- **Voice Input & Audio Output:** Enable voice input for users to interact with the chatbot through speech, and leverage audio output capabilities to provide spoken responses or prompts.
- **Chat Notifications:** Keep users informed with real-time chat notifications, ensuring they never miss important updates or new messages.
- **Checkbox & Options Support:** Utilize checkboxes and options within the chatbot interface, allowing users to select from a list of choices and easily make selections.
- **Emoji Picker:** Enhance the chatbot's expression and engagement with users by incorporating emojis into messages, adding a touch of personality and emotion.
- **File Attachments:** Seamlessly handle file attachments within the chatbot, enabling users to share and receive documents, images, or other relevant files during conversations.
- **Sensitive Input:** Handle sensitive information from your users by masking them, maintaining user confidentiality.
- **Mobile-Friendly Interface:** Provide smooth user experience across various devices with our mobile-friendly chatbot interface.
- **Themes:** Choose from a wide variety of community themes, stack multiple themes together, and explore endless possibilities to customize the appearance of your chatbot!

These features, **along with many others**, empower developers to create highly interactive and personalized chatbot experiences tailored to their specific application requirements.

Now that you've a rough idea on what the chatbot can do, we'll learn about the core concept of [**conversations**](/concepts/conversations), which determines the interactions between your users and your chatbot!