---
sidebar_position: 3
title: Migration (v2)
description: Migration guide for upgrading to ChatBotify v2
keywords: [react, chat, chatbot, chatbotify]
---

# Migration to v2

## Foreword
The **v2 beta release** of React ChatBotify is now available! This update includes significant internal rewrites and changes. The objectives of this **beta release** are to:
- Onboard users with the new changes early
- Identify and fix any bugs
- Gather feedback for improvements
- Prepare the chatbot for a stable release
- Lay the foundation for supporting plugins

Future beta releases are not expected to introduce further breaking changes, as all major changes have been consolidated into this first release. That said, kindly report any bugs encountered as soon as possible on [**discord**](https://discord.gg/6R4DK4G5Zh) or via [**github**](https://github.com/react-chatbotify/react-chatbotify).

This migration guide is organized by the importance of the changes:
- Breaking Changes (mandatory to address to prevent library breakage)
- Concept Changes (optional but beneficial for improving your flow)
- New Features (optional but potentially useful)
- Summary (a concise list of changes for quick reference)

It is recommended to read in order, but for a quick upgrade, refer to the [**summary**](#summary) section.

Note: The documentation site now resides on [**react-chatbotify.com**](https://react-chatbotify.com) instead of [**react-chatbotify.tjtanjin.com**](https://react-chatbotify.tjtanjin.com)

## Breaking Changes
In version 1, the focus was on **making things work**, ensuring features like audio behavior, mobile view, and message notifications functioned correctly.

In version 2, the focus shifts to **making things right**, improving design and presentation. This has inevitably introduced some breaking changes, but this short term hassle will see long term benefits for the maintenance and development of the chatbot. Breaking changes are outlined below.

### Removed Styles from BotOptions
Initially, the chatbot had fewer features, making **BotOptions** manageable. However, as it grew, separating styling logic from chatbot settings became necessary. **Styles** have been moved from **BotOptions** to a new [**`styles`**](/docs/concepts/styles) prop.

Changes Required:
- Remove all style sections from BotOptions and move them to the new `styles` prop (refer to new features)

### Removed isOpen from BotOptions
Up till now, the chat window state (open/close) of the chatbot has been tracked by the `isOpen` variable which was found within the chatbot's `options` (now `settings`) prop. Apart from this special variable, all that `options` contained were configuration sections. That said, `isOpen` always felt out of place and it's not great having to handle a special case as it breaks consistency. With the introduction of [**hooks**](/docs/api/hooks), the chat window state can now be exposed via the `useChatWindow` hook and `isOpen` can finally be retired.

Changes Required:
- Remove usage of `isOpen` variable found within the `options` (now `settings`) prop and use the `useChatWindow` hook if required

### Removed react-chatbotify.css import
Since v1.5.0, importing of `react-chatbotify.css` is no longer necessary. With v2, this is being enforced so remove any `react-chatbotify.css` imports from your codebase.

Changes Required:
- Remove all imports of `react-chatbotify.css`

### Renamed BotOptions to Settings
The term **BotOptions** was previously used for the [**`options`**](https://react-chatbotify.com/legacy/v1/docs/introduction/bot_options) prop, causing confusion with the [**`options attribute`**](https://react-chatbotify.com/legacy/v1/docs/api/attributes#pre-processing-attributes) in conversation blocks. To minimize the potential for confusion, **BotOptions** is now simply called **Settings**.

Changes Required:
- Replace `BotOptionsContext` with `SettingsContext`
- Replace `Options` (BotOptions) type with `Settings` type
- Replace `getDefaultBotOptions` with `getDefaultSettings`

### Renamed Theme Section to General Section
In version 1, the [**`theme`**](https://react-chatbotify.com/legacy/v1/docs/api/bot_options#theme) section within `options` (now `settings`) configured generic properties. With the introduction of a `themes` prop in version 2, this section is now called [**`general`**](/docs/api/settings#general) to avoid confusion.

Changes Required:
- Replace `theme` section with `general` section inside `settings` prop

### Moved desktopEnabled and mobileEnabled properties to device section
The `desktopEnabled` and `mobileEnabled` properties were previously under the `theme` (now `general`) section. These have been moved to a new `device` section for better clarity and extensibility.

### Renamed Render Attribute to Component Attribute
The [**`render`**](https://react-chatbotify.com/legacy/v1/docs/api/attributes#pre-processing-attributes) is understandably poorly named and has been a source of confusion for some users who mistakenly tried using `component` instead. Indeed, the purpose of this attribute was to allow users to provide their own components. With that said, it felt appropriate to update the name of this attribute to [**`component`**](/docs/api/attributes#pre-processing-attributes).

Changes Required:
- Replace `render` attribute with `component` attribute inside all applicable conversation blocks

### Moved and renamed sendAttachmentOutput to sendFileName
In the past, controlling whether file names were sent into chat for file attachments was determined via `sendAttachmentOutput` within `chatInput` section. However, this was a poor fit, as there was a `fileAttachment` section where such an option would be more relevant. With the addition of `showMediaDisplay`, it is also more appropriate to standardize these properties with `fileAttachment`. `sendAttachmentOutput` has also been renamed to `sendFileName` which more clearly communicates its purpose.

Changes Required:
- Remove `sendAttachmentOutput` property from `chatInput` section
- Add `sendFileName` property to `fileAttachment` section

### Internal Message Component Changes
This change is more subtle, but has a slight chance of breaking custom components. In short, updates were made to standardize the rules for displaying avatars beside chat bubbles. Where there are no configuration changes required, the update resulted in small styling changes in the core library, in particular to the message container for all messages in the chatbot. For users who are using the `render` (now `component`) attribute, you are advised to test the chatbot to see if there are any visual changes that require styling updates.

Changes Required (for users using `render` (now `component`) attribute):
- Test the chatbot to see if there are any visual changes that require updates to styling

Deepest apologies for this breaking change but standardizing the rules of showing avatar is important for delivering new features such as media display.

### Advance Section Removed
The `advance` section has been removed and replaced entirely by `ChatBotProvider` which exposes custom hooks. By moving to custom `hooks`, it is now possible to modify more than just settings, styles, messages and paths. It is now even possible to modify the text area, audio toggle, and toasts popup from outside the chatbot! The addition of custom `hooks` is covered [**here**](/docs/api/hooks).

Changes Required:
- Remove all instances of `advance` section from `settings` and move to [**custom hooks**](/docs/api/hooks) if required

### Message Attributes Expanded and Required
Previously, the `Message` attribute only had 2 required fields (`sender` and `content`). In v2, the `Message` attribute has been expanded to have 5 fields (`sender`, `content`, `id`, `type` and `timestamp`) with all of them being set as required. This should affect advanced users who were manipulating `messages` directly, but the advance section has since been replaced with [**hooks**](/docs/api/hooks).

Changes Required:
- move to [**custom hooks**](/docs/api/hooks) for direct manipulation of `messages` and include required fields

## Concept Changes

Conceptual changes do not break any existing features, functionalities or appearance, but they will aid your understanding in how the chatbot is designed and possibly help with your implementation.

### Dynamic Attributes Dropped
Previously, `params` (now `AttributeParams`) were used within predefined dynamic attributes. In version 2, all attributes can take `AttributeParams`, simplifying the process.

### SSR Support Improved
Previously, using the library in SSR frameworks (e.g. NextJS) involved importing the chatbot dynamically/lazily. This is **no longer needed** in v2 as support for SSR frameworks has been improved and the library now doesn't utilize window before it is defined!

## New Features

With the **v2** release, there are several new features that have been added, most of which are based on popular requests from users.

### New Themes Prop
With v2, there is now a `themes` prop available for users to browse and quickly customise their setup. You may browse themes on [**React ChatBotify Gallery**](https://react-chatbotify.com/themes) as well as read up on the [**documentation**](/docs/concepts/themes) or [**examples**](/docs/examples/multiple_themes) as well.

New Additions:
- Added [**`themes`**](/docs/concepts/themes) prop for quick customisation of chatbot

### New Styles Prop
Following the removal of `styles` from **BotOptions**, a new [**`styles`**](/docs/concepts/styles) prop has been introduced for tweaking chatbot styles.

New Additions:
- Added [**`styles`**](/docs/concepts/styles) prop (essentially the style sections previously under [**`BotOptions`**](https://react-chatbotify.com/legacy/v1/docs/api/bot_options#styles))
- Added `getDefaultStyles` which provides an empty default list of styles

### New Plugins Prop
With v2, there is now a `plugins` prop available for users to import and load custom plugins. More information on plugins can be found [**here**](/docs/concepts/plugins).

New Additions:
- Added [**`plugins`**](/docs/concepts/plugins) prop for using custom plugins

### New Hooks Feature
In v2, it is now possible to interact with the chatbot in many ways (e.g. toggle audio) from within your own components. This is done via custom hooks provided by the chatbot. More information on hooks may be found [**here**](/docs/api/hooks).

New Additions:
- Added custom [**`hooks`**](/docs/api/hooks) that users can import to use in their components for interacting with the chatbot

### New Events Feature
In v2, the chatbot now emits custom events (e.g. `RcbPreMessageInjectEvent`). Users can add event listeners to listen and respond to these custom events. More information on events may be found [**here**](/docs/api/events).

New Additions:
- Added custom [**`events`**](/docs/api/events) that users can listen and respond to

### Custom Buttons in Header, Chat Input, and Footer
A frequently requested feature, it is now possible to add custom buttons in the header, chat input, and footer. Furthermore, it is also possible to customize the order of the buttons as well as shift them across components of the chatbot. Want your file attachment button in the chat input component instead? No problem!

New Additions:
- Added `buttons` property to [**`header`**](/docs/api/settings#header), [**`chat input`**](/docs/api/settings#chatinput) and [**`footer`**](/docs/api/settings#footer)

### Path Control in Custom Components
To simplify user routing with custom components, a new `params.goToPath` has been added, replacing the previous workaround of using advance custom paths.

New Additions:
- Added `params.goToPath` to [**`Params`**](/docs/api/params)

### Displaying Media with File Attachments
It is now possible to show media display (preview) for file attachments that are either an image, video or audio via the `showMediaDisplay` property under the `fileAttachment` section.

New Additions:
- Added `showMediaDisplay` property to [**`fileAttachment`**](/docs/api/settings#fileattachment) section

### Sending Voice Input as Audio File
Voice inputs can now be configured to be sent as audio files via the `sendAsAudio` property under the `voice` section.

New Additions:
- Added `sendAsAudio` property to [**`voice`**](/docs/api/settings#voice) section

## Summary
For a quick upgrade, follow these succinct instructions:
- Move styles from **BotOptions** to the new [**`styles`**](/docs/concepts/styles) prop.
- Rename **BotOptions** to **Settings**, and adjust context and function names accordingly.
- Utilize the new [**`styles`**](/docs/concepts/styles) prop and `getDefaultStyles`.
- Rename `theme` section to `general` section under `settings` (previously `options`).
- Move `desktopEnabled` and `mobileEnabled` properties from `theme` (now `general`) section to the new `device` section.
- Rename `render` attribute in blocks to `component` attribute.
- Rename `sendAttachmentOutput` to `sendFileName` **and** move it from `chatInput` section to `fileAttachment` section.
- Rename `useAdvancedBotOptions` to `useAdvancedSettings` in `advance` section under `settings` (previously `options`).
- Test the chatbot for any visual changes (for those using custom components) and update styles if necessary.