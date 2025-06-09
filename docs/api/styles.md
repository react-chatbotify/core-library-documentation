---
sidebar_position: 3
title: Styles
description: api documentation for styles
keywords: [react, chat, chatbot, chatbotify]
---

# Styles

This page documents all available sections that may be passed into the `styles` prop of the `ChatBot`. For an example on how to structure your `styles`, please refer to the default styles in the dropdown below.

<details>
<summary>Click to view default styles</summary>

```jsx
export const DefaultStyles: Styles = {
	// styles
	tooltipStyle: {},
	notificationBadgeStyle: {},
	chatWindowStyle: {},
	headerStyle: {},
	bodyStyle: {},
	chatInputContainerStyle: {},
	chatInputAreaStyle: {},
	chatInputAreaFocusedStyle: {},
	chatInputAreaDisabledStyle: {},
	userBubbleStyle: {},
	botBubbleStyle: {},
	botOptionStyle: {},
	botOptionHoveredStyle: {},
	botCheckboxRowStyle: {},
	botCheckboxNextStyle: {},
	botCheckMarkStyle: {},
	botCheckMarkSelectedStyle: {},
	characterLimitStyle: {},
	characterLimitReachedStyle: {},
	chatHistoryLineBreakStyle: {},
	chatMessagePromptStyle: {},
	chatMessagePromptHoveredStyle: {},
	footerStyle: {},
	loadingSpinnerStyle: {},
	mediaDisplayContainerStyle: {},
	chatButtonStyle: {},
	chatHistoryButtonStyle: {},
	chatHistoryButtonHoveredStyle: {},
	sendButtonStyle: {},
	sendButtonHoveredStyle: {},
	sendButtonDisabledStyle: {},
	audioButtonStyle: {},
	audioButtonDisabledStyle: {},
	closeChatButtonStyle: {},
	emojiButtonStyle: {},
	emojiButtonDisabledStyle: {},
	fileAttachmentButtonStyle: {},
	fileAttachmentButtonDisabledStyle: {},
	notificationButtonStyle: {},
	notificationButtonDisabledStyle: {},
	voiceButtonStyle: {},
	voiceButtonDisabledStyle: {},
	chatIconStyle: {},
	audioIconStyle: {},
	audioIconDisabledStyle: {},
	closeChatIconStyle: {},
	emojiIconStyle: {},
	emojiIconDisabledStyle: {},
	fileAttachmentIconStyle: {},
	fileAttachmentIconDisabledStyle: {},
	notificationIconStyle: {},
	notificationIconDisabledStyle: {},
	voiceIconStyle: {},
	voiceIconDisabledStyle: {},
	sendIconStyle: {},
	sendIconDisabledStyle: {},
	sendIconHoveredStyle: {},
	rcbTypingIndicatorContainerStyle: {},
	rcbTypingIndicatorDotStyle: {},
	toastPromptContainerStyle: {},
	toastPromptStyle: {},
	toastPromptHoveredStyle: {}
}
```
</details>

:::tip Tip

Before diving into styling, you may be interested in [**browsing for themes**](https://react-chatbotify.com/themes) to pick out designs close to your desired appearance.

:::

## Sections

If you wish to refine the appearance of the chatbot, these are the list of sections available.

| Name                              | Type                            | Default | Description                                                                                                                   |
| --------------------------------- | ------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| bodyStyle                         | `object`                          | {}      | Styles for the chatbot body.                                                                                                  |
| botBubbleStyle                    | `object`                          | {}      | Styles for bot chat bubbles.                                                                                                  |
| botCheckboxNextStyle              | `object`                          | {}      | Styles for the next bot checkbox.                                                                                             |
| botCheckboxRowStyle               | `object`                          | {}      | Styles for bot checkbox rows.                                                                                                 |
| botCheckMarkSelectedStyle         | `object`                          | {}      | Styles for the selected bot checkmark.                                                                                        |
| botCheckMarkStyle                 | `object`                          | {}      | Styles for the bot checkmark.                                                                                                 |
| botOptionHoveredStyle             | `object`                          | {}      | Styles for hovered settings.                                                                                                  |
| botOptionStyle                    | `object`                          | {}      | Styles for settings.                                                                                                          |
| characterLimitStyle               | `object`                          | {}      | Styles for the character limit display.                                                                                       |
| characterLimitReachedStyle        | `object`                          | {}      | Styles for the character limit display when limit is reached.                                                                 |
| chatButtonStyle                   | `object`                          | {}      | Styles for the chatbot button.                                                                                                |
| chatHistoryButtonHoveredStyle     | `object`                          | {}      | Styles for the hovered chat history button.                                                                                   |
| chatHistoryButtonStyle            | `object`                          | {}      | Styles for the chat history button.                                                                                           |
| chatHistoryLineBreakStyle         | `object`                          | {}      | Styles for the chat history line break.                                                                                       |
| chatInputContainerStyle           | `object`                          | {}      | Styles for the chatbot input text area.                                                                                       |
| chatInputAreaStyle                | `object`                          | {}      | Styles for the chatbot input container.                                                                                       |
| chatInputAreaFocusedStyle         | `object`                          | {}      | Styles for the chatbot input container when it is focused.                                                                    |
| chatInputAreaDisabledStyle        | `object`                          | {}      | Styles for the chatbot input container when it is disabled.                                                                   |
| chatMessagePromptStyle            | `object`                          | {}      | Styles for the new message prompt.                                                                                            |
| chatMessagePromptHoveredStyle     | `object`                          | {}      | Styles for the new message prompt when it is hovered.                                                                         |
| chatWindowStyle                   | `object`                          | {}      | Styles for the chatbot window.                                                                                                |
| footerStyle                       | `object`                          | {}      | Styles for the chatbot footer.                                                                                                |
| headerStyle                       | `object`                          | {}      | Styles for the chatbot header.                                                                                                |
| loadingSpinnerStyle               | `object`                          | {}      | Styles for the loading spinner.                                                                                               |
| notificationBadgeStyle            | `object`                          | {}      | Styles for the chatbot notification badge.                                                                                    |
| sendButtonDisabledStyle           | `object`                          | {}      | Styles for the disabled send button.                                                                                           |
| sendButtonHoveredStyle            | `object`                          | {}      | Styles for the hovered send button.                                                                                           |
| sendButtonStyle                   | `object`                          | {}      | Styles for the send button.                                                                                                   |
| tooltipStyle                      | `object`                          | {}      | Styles for the chatbot tooltip.                                                                                               |
| userBubbleStyle                   | `object`                          | {}      | Styles for user chat bubbles.                                                                                                 |
| audioButtonStyle                  | `object`                          | {}      | Styles for the audio button.                                                                                                  |
| audioButtonDisabledStyle          | `object`                          | {}      | Styles for the disabled audio button.                                                                                         |
| closeChatButtonStyle              | `object`                          | {}      | Styles for the close chat button.                                                                                             |
| emojiButtonStyle                  | `object`                          | {}      | Styles for the emoji button.                                                                                                  |
| emojiButtonDisabledStyle          | `object`                          | {}      | Styles for the disabled emoji button.                                                                                         |
| fileAttachmentButtonStyle         | `object`                          | {}      | Styles for the file attachment button.                                                                                        |
| fileAttachmentButtonDisabledStyle | `object`                          | {}      | Styles for the disabled file attachment button.                                                                               |
| notificationButtonStyle           | `object`                          | {}      | Styles for the notification button.                                                                                           |
| notificationButtonDisabledStyle   | `object`                          | {}      | Styles for the disabled notification button.                                                                                  |
| voiceButtonStyle                  | `object`                          | {}      | Styles for the voice button.                                                                                                  |
| voiceButtonDisabledStyle          | `object`                          | {}      | Styles for the disabled voice button.                                                                                         |
| chatIconStyle                     | `object`                          | {}      | Styles for the chat icon.                                                                                                     |
| audioIconStyle                    | `object`                          | {}      | Styles for the audio icon.                                                                                                    |
| audioIconDisabledStyle            | `object`                          | {}      | Styles for the disabled audio icon.                                                                                           |
| closeChatIconStyle                | `object`                          | {}      | Styles for the close chat icon.                                                                                               |
| emojiIconStyle                    | `object`                          | {}      | Styles for the emoji icon.                                                                                                    |
| emojiIconDisabledStyle            | `object`                          | {}      | Styles for the disabled emoji icon.                                                                                           |
| fileAttachmentIconStyle           | `object`                          | {}      | Styles for the file attachment icon.                                                                                          |
| fileAttachmentIconDisabledStyle   | `object`                          | {}      | Styles for the disabled file attachment icon.                                                                                 |
| notificationIconStyle             | `object`                          | {}      | Styles for the notification icon.                                                                                             |
| notificationIconDisabledStyle     | `object`                          | {}      | Styles for the disabled notification icon.                                                                                    |
| voiceIconStyle                    | `object`                          | {}      | Styles for the voice icon.                                                                                                    |
| voiceIconDisabledStyle            | `object`                          | {}      | Styles for the disabled voice icon.                                                                                           |
| sendIconStyle                     | `object`                          | {}      | Styles for the send icon.                                                                                                     |
| sendIconDisabledStyle                     | `object`                          | {}      | Styles for the disabled send icon.                                                                                                     |
| sendIconHoveredStyle                     | `object`                          | {}      | Styles for the hovered send icon.                                                                                                     |
| rcbTypingIndicatorContainerStyle                     | `object`                          | {}      | Styles for the typing indicator container.                                                                                                     |
| rcbTypingIndicatorDotStyle                     | `object`                          | {}      | Styles for the typing indicator dot.                                                                                                     |
| toastPromptContainerStyle                     | `object`                          | {}      | Styles for the toast prompt container.                                                                                                     |
| toastPromptStyle                     | `object`                          | {}      | Styles for the toast prompt.                                                                                                     |
| toastPromptHoveredStyle                     | `object`                          | {}      | Styles for the hovered toast prompt.                                                                                                     |

The utilization of styles is remarkably simple, as each section readily accepts inline React styles. For instance, you can customise the headerStyle with `headerStyle: {background: "red"}`.

:::tip Tip

If you wish to customise the chatbot appearance with even more granularity, you may also overwrite the CSS classes directly. Class names for this library are appended with `rcb` and you may find the relevant classes through **inspect element** or by combing through the CSS files within the components in the [**code repository**](https://github.com/tjtanjin/react-chatbotify/tree/main/src/components).

:::