---
sidebar_position: 3
title: Migration (v2)
description: Migration guide for upgrading to ChatBotify v2
keywords: [react, chat, chatbot, chatbotify]
---

# Migration to v2

## Foreword
The **v2** release of React ChatBotify is now stable! You are strongly encouraged to migrate from [**v1**](https://react-chatbotify/docs/v1) as soon as possible. This update includes significant internal rewrites and changes that bring about a bunch of improvements and powerful features which includes but is not limited to:
- Plugins
- Themes
- LLM Integration
- Performance Optimizations
- Hooks
- Events

 That said, kindly report any bugs encountered on [**discord**](https://discord.gg/6R4DK4G5Zh) or via [**github**](https://github.com/react-chatbotify/react-chatbotify).

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

## Post-Beta Breaking Changes
This section outlines breaking changes introduced in beta versions *after* the initial `v2.0.0-beta.1` release. If you are migrating directly from v1, the changes in the "Breaking Changes" section above are the primary ones to consider, followed by these. If you are updating from an earlier v2 beta version, these changes are crucial for bringing your implementation up to date.

### Asynchronous Operations for Params and Hooks (`v2.0.0-beta.23`)
To support more complex operations and prevent blocking, several utility functions available through `params` (in flow blocks) and hooks have been made asynchronous.

-   **Change:** Many functions that were previously synchronous are now `async` and return a `Promise`.
-   **Reason:** This allows these functions to perform operations that might take time (like animations or external calls) and provides a standard way to await their completion if needed.
-   **Action Required:** You should review your use of the affected functions. If your code relies on an operation being complete before the next line executes, you must now `await` the function call. Ensure the calling function is also `async`.

**Affected `params` functions (passed to flow blocks):**
The following functions within the `params` object are now `async`:
*   `params.showToast`
*   `params.dismissToast`
*   `params.goToPath`
*   `params.setTextAreaValue`
*   `params.toggleChatWindow` (previously `params.openChat` at the time of this change in beta.23, now also async)

**Affected Hook Functions:**
The following functions returned by their respective hooks are now `async`:
*   `showToast` (from `useToasts`)
*   `dismissToast` (from `useToasts`)
*   `toggleAudio` (from `useAudio`)
*   `toggleNotifications` (from `useNotifications`)
*   `toggleVoice` (from `useVoice`)
*   `toggleChatWindow` (from `useChatWindow`)
*   `goToPath` (from `useFlow`)
*   `setTextAreaValue` (from `useTextArea`)

Additionally, if you are creating custom event handlers, you can push Promises into the `event.promises` array for the chatbot to await their resolution.

### Removed `dangerouslySetInnerHtml` from Bubbles (`v2.0.0-beta.31`)
To streamline core library features and promote safer HTML rendering, the direct HTML injection properties have been deprecated and their functionality moved to a dedicated plugin.

-   **Change:** The `styles.botBubble.dangerouslySetInnerHtml` and `styles.userBubble.dangerouslySetInnerHtml` properties have been removed.
-   **Reason:** This functionality is now handled by the official [**HTML Renderer Plugin**](https://www.npmjs.com/package/@rcb-plugins/html-renderer). This change encourages a more secure and standardized way of rendering HTML content within messages.
-   **Action Required:** If you were using `dangerouslySetInnerHtml` to render HTML in messages, you need to:
    1.  Install the [**HTML Renderer Plugin**](https://www.npmjs.com/package/@rcb-plugins/html-renderer).
    2.  Add the plugin to the `plugins` prop of your `ChatBot` component.
    3.  Ensure your messages that require HTML rendering are compatible with how the plugin processes them (typically by ensuring the content is valid HTML).

### Simulated Streaming and Bubble API Changes (`v2.0.0-beta.33`)
This version introduced changes to improve consistency in how messages are handled, particularly for simulated streaming.

**1. `simStream` Property Renamed**
   - **Change:** The `simStream` properties within `botBubble` and `userBubble` style configurations have been renamed:
     - `styles.botBubble.simStream` is now `styles.botBubble.simulateStream`.
     - `styles.userBubble.simStream` is now `styles.userBubble.simulateStream`.
   - **Reason:** The new name `simulateStream` offers greater clarity.
   - **Action Required:** Update these property names in your `styles` prop if you are using them to control default stream simulation behavior for messages defined in blocks.

**2. Behavior of `simulateStream` Style Settings**
   - **Change:** The `styles.botBubble.simulateStream` and `styles.userBubble.simulateStream` settings are no longer automatically applied to messages injected using the `params.injectMessage` utility function. These style settings now *only* affect messages defined directly via the `message` attribute within a flow block.
   - **Reason:** This change provides more explicit control. For simulating streams via utility functions, a dedicated function is now available.
   - **Action Required:** If you previously relied on `styles.botBubble.simulateStream` or `styles.userBubble.simulateStream` to have `params.injectMessage` simulate a stream, you must now use the `params.simulateStreamMessage` utility function instead for those specific messages.

**3. `simStreamChunker` Renamed and Relocated**
   - **Change:** The `simStreamChunker` data field, which allows custom parsing logic for simulated streams via events, has been:
     1. Renamed to `simulateStreamChunker`.
     2. Moved from the `rcb-pre-inject-message` event's `event.detail.data` to the `rcb-start-simulate-stream-message` event's `event.detail.data`.
   - **Reason:** This aligns the chunker logic with the newly introduced `params.simulateStreamMessage` function and its dedicated start/stop events, centralizing simulated streaming customization.
   - **Action Required:** If you have event listeners for `rcb-pre-inject-message` that utilized the `simStreamChunker`, you need to:
     1. Update your listener to target the `rcb-start-simulate-stream-message` event.
     2. Change your code to access `event.detail.data.simulateStreamChunker` (note the new field name).
   - **Note:** Plugin developers using Markdown or HTML renderer plugins should ensure they update to version 0.2.0 or higher of those plugins, as they incorporate support for these new events.

### API Function Changes (`v2.0.0-beta.34`)
Several API functions were updated for consistency and enhanced functionality:

**1. `params.openChat` Renamed to `params.toggleChatWindow`**
   - **Change:** The `params.openChat` function, used to programmatically open or close the chat window, has been renamed to `params.toggleChatWindow`.
   - **Reason:** This change was made to align the naming with the `toggleChatWindow` function available in the `useChatWindow` hook, promoting consistency across the API.
   - **Action Required:** Search your codebase for `params.openChat` and replace all instances with `params.toggleChatWindow`. The functionality remains the same.

**2. Return Value of Message Manipulation Functions**
   - **Change:** The following functions now return the complete `Message` object instead of just the message `id` (string):
     - `injectMessage`
     - `streamMessage`
     - `simulateStreamMessage`
     - `removeMessage`
   - **Reason:** Returning the full `Message` object provides more context and flexibility, allowing developers to immediately access all properties of the message that was injected, streamed, or removed.
   - **Action Required:** If your code was previously expecting only an `id` (string) as the return value from these functions, you'll need to update it. For example, if you had `const messageId = params.injectMessage(...);`, you should change it to `const messageObject = params.injectMessage(...); const messageId = messageObject.id;` or directly use `messageObject` if you need other properties.

### File Upload Type Change (`v2.0.0-beta.36`)
To address an issue with file uploads not resetting correctly, the data type for files has been updated.
- **Change:** The type for file collections (e.g., as accessed via `params.files` if you are inspecting flow parameters, or in event details related to file uploads) has changed from `FileList` to `Array<File>`.
- **Action Required:** If your custom logic directly interacts with the file list from file upload events or parameters, ensure you update your type definitions and handling to expect an `Array<File>` instead of a `FileList`.

## Concept Changes

Conceptual changes do not break any existing features, functionalities or appearance, but they will aid your understanding in how the chatbot is designed and possibly help with your implementation.

### Dynamic Attributes Dropped
Previously, `params` (now `AttributeParams`) were used within predefined dynamic attributes. In version 2, all attributes can take `AttributeParams`, simplifying the process.

### SSR Support Improved
Previously, using the library in SSR frameworks (e.g. NextJS) involved importing the chatbot dynamically/lazily. This is **no longer needed** in v2 as support for SSR frameworks has been improved and the library now doesn't utilize window before it is defined!

### Message Sender Field Capitalization (`v2.0.0-beta.25`)
A minor internal change was made to how the `sender` field of a message object is stored.

-   **Change:** The `sender` field (e.g., `message.sender`) now defaults to being fully capitalized (e.g., "bot" is stored as "BOT", "user" as "USER").
-   **Impact:** This change is primarily for internal consistency. Crucially, the `sender` field is **no longer case-sensitive** when evaluated by the library. For instance, conditions checking `message.sender === 'bot'` will still work as expected even if the stored value is `BOT`.
-   **Action Required:** None. This is a purely informational note, and no changes are needed in your existing flows or logic that inspects the `sender` field.

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

### Granular Update Functions for Settings and Styles (`v2.0.0-beta.19`)
To simplify partial updates to settings and styles, new utility functions have been added to their respective hooks.

-   **New Utility Functions:**
    *   `useSettings()` now provides an `updateSettings(partialSettings)` function.
    *   `useStyles()` now provides an `updateStyles(partialStyles)` function.
-   **Purpose:** These functions allow you to update only specific parts of your chatbot's settings or styles. For instance, you can change just the `header.title` in settings without affecting other settings, or update only `chatWindow.backgroundColor` without altering other styles. The provided partial object will be merged with the existing state.
-   **Benefit:** This offers a more convenient way to make targeted modifications compared to retrieving the full state, manually merging, and then using a `replace` function.
-   **Usage Example (`updateSettings`):**
    ```javascript
    // Assuming you have access to 'updateSettings' from useSettings()
    // To change only the bot avatar and header title:
    // updateSettings({
    //   botBubble: {
    //     avatar: "new_avatar_url.png"
    //   },
    //   header: {
    //     title: "New Bot Title"
    //   }
    // });
    // Other settings remain untouched.
    ```
-   **Note:** For details on the merge behavior (e.g., deep vs. shallow merge), refer to the main documentation for `useSettings` and `useStyles`. These functions are distinct from the `replaceSettings` and `replaceStyles` functions (introduced in `v2.0.0-beta.20`), which are used to replace the entire state object.

### State Replacement Functions for Hooks (`v2.0.0-beta.20`)
To improve internal architecture and enable future optimizations, the way state is updated via hooks has been refined.

-   **Change:** Hooks like `useSettings`, `useStyles`, `useMessages`, `usePaths`, and `useToasts` no longer directly expose their underlying state setter functions (e.g., `setSettings`, `setStyles`).
-   **New Utility Functions:** Instead, new functions are provided on these hooks for replacing the entire state:
    *   `useSettings()` now provides `replaceSettings(newSettings)`
    *   `useStyles()` now provides `replaceStyles(newStyles)`
    *   `useMessages()` now provides `replaceMessages(newMessages)`
    *   `usePaths()` now provides `replacePaths(newPaths)`
    *   `useToasts()` now provides `replaceToasts(newToasts)`
-   **Reason:** Directly exposing state setters can sometimes hinder internal library optimizations and is generally not a recommended pattern. These new functions offer a clear and explicit way to replace the entire state for a particular hook.
-   **Action Required:** If you were previously using a direct state setter from one of these hooks (e.g., `const { settings, setSettings } = useSettings(); setSettings(newCompleteSettingsObject);`), you should update your code to use the corresponding `replace` function (e.g., `const { settings, replaceSettings } = useSettings(); replaceSettings(newCompleteSettingsObject);`). These are designed as drop-in replacements for full state overwrites.
-   **Note:** For more granular or additive changes (like adding a single message or updating a specific setting), prefer other utility functions provided by the hooks (e.g., `injectMessage` from `useMessages`, or `updateSettings` from `useSettings`).

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
- Rename all instances of `simStream` to `simulateStream`.
- Rename `params.openChat` to `params.toggleChatWindow`
- Replace `dangerouslySetInnerHtml` with [**HTML Renderer Plugin**](https://www.npmjs.com/package/@rcb-plugins/html-renderer)
- Test the chatbot for any visual changes (for those using custom components) and update styles if necessary.