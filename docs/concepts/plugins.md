---
sidebar_position: 5
title: Plugins
description: content describing chatbot plugins
keywords: [react, chat, chatbot, chatbotify]
---

# Plugins

A newly added feature in **v2** of the chatbot, the `plugins` prop provides users with the means to install and use custom plugins. Similar to [**themes**](/docs/concepts/themes), the browsing of plugins can be done on [**React ChatBotify Gallery**](https://gallery.react-chatbotify.com), where you will find both **official and community plugins**.

## Overview

There is a small group of official plugins maintained, which provide useful functionalities in common use cases. As of the last update, the list of official plugins are as below:

- [**Input Validator**](https://github.com/react-chatbotify-plugins/input-validator)
- [**Markdown Renderer**](https://github.com/react-chatbotify-plugins/markdown-renderer)
- [**Markdown Renderer**](https://github.com/react-chatbotify-plugins/html-renderer)
- [**LLM Connector**](https://github.com/react-chatbotify-plugins/llm-connector)
- [**Discord Live Chat**](https://github.com/react-chatbotify-plugins/discord-live-chat) (WIP)

If you strongly believe that there are common use cases with no suitable plugins, feel free to make a suggestion on [**discord**](https://discord.gg/J6pA4v3AMW).

For instructions on using plugins (both official or community-based), please refer to the plugin's documentation. Note that the maintenance of plugins are **separate** from the maintenance of the core React ChatBotify library.

:::tip Tip

Most plugins tend to rely on specific chatbot [**settings**](/docs/api/settings) for their logic (e.g. [**events**](/docs/api/events)). Ideally, plugin developers should provide auto-config options out of the box. If not, make sure you read the plugin's setup instructions in detail to understand which settings are required to be enabled!

:::

## Building Your Own Plugin

In the ideal scenario, there is already an existing plugin out there to address your use case. At times however, it may be necessary to build your own custom plugins. To assist you with creating your own plugins, a **skeleton repository has been setup with a comprehensive README** to guide you in the process. Kindly refer to the [**react-chatbotify-plugin-template**](https://github.com/React-ChatBotify-Plugins/react-chatbotify-plugin-template) repository to get started.

If you're keen to dive into creating plugins, you are strongly encouraged to join the [**discord**](https://discord.gg/6R4DK4G5Zh) to stay up to date with the latest information and for ease of support.

## Adapters

When exploring some of the **official plugins**, you may encounter the term "Adapters". These are integrations designed to connect third-party services or applications, such as [**OpenAI**](https://platform.openai.com/). For instance, the [**LLM Connector**](https://github.com/react-chatbotify-plugins/llm-connector) plugin includes an `adapter` configuration that allows users to pass in LLM adapters. Official adapters such as the [**OpenAI Adapter**](https://github.com/react-chatbotify-adapters/openai) and the [**Gemini Adapter**](https://github.com/react-chatbotify-adapters/gemini) are provided, but users can also create and share their own custom adapters.

:::info Info

"Adapters" serve as a modular approach for plugins to integrate third-party services. However, they are **not a key concept** of the core library. Instead, their usage and creation guidelines are outlined within the **specific plugin documentation**.

:::