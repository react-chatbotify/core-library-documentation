---
sidebar_position: 2
title: Settings
description: api documentation for settings
keywords: [react, chat, chatbot, chatbotify]
---

# Settings

This page documents all available sections and properties that may be passed into the `settings` prop of the `ChatBot`. For an example on how to structure your `settings`, please refer to the default settings in the dropdown below.

<details>
<summary>Click to view default settings</summary>

```jsx
const DefaultSettings: Settings = {
	general: {
		primaryColor: "#42b0c5",
		secondaryColor: "#491d8d",
		fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', " +
			"'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', " +
			"sans-serif",
		showHeader: true,
		showFooter: true,
		showInputRow: true,
		actionDisabledIcon: actionDisabledIcon,
		embedded: false,
		flowStartTrigger: "ON_LOAD",
	},
	tooltip: {
		mode: "CLOSE",
		text: "Talk to me! 😊",
	},
	chatButton: {
		icon: ChatIcon,
	},
	header: {
		title: (
			<div style={{cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold"}} onClick={
				() => window.open("https://github.com/tjtanjin/")
			}>
				Tan Jin
			</div>
		),
		showAvatar: true,
		avatar: botAvatar,
		buttons: [Button.NOTIFICATION_BUTTON, Button.AUDIO_BUTTON, Button.CLOSE_CHAT_BUTTON],
		closeChatIcon: CloseChatIcon,
	},
	notification: {
		disabled: false,
		defaultToggledOn: true,
		volume: 0.2,
		icon: NotificationIcon,
		iconDisabled: NotificationIconDisabled,
		sound: notificationSound,
		showCount: true,
	},
	audio: {
		disabled: true,
		defaultToggledOn: false,
		language: "en-US",
		voiceNames: ["Microsoft David - English (United States)", "Alex (English - United States)"],
		rate: 1,
		volume: 1,
		icon: AudioIcon,
		iconDisabled: AudioIconDisabled,
	},
	chatHistory: {
		disabled: false,
		maxEntries: 30,
		storageKey: "rcb-history",
		storageType: "LOCAL_STORAGE",
		viewChatHistoryButtonText: "Load Chat History ⟳",
		chatHistoryLineBreakText: "----- Previous Chat History -----",
		autoLoad: false,
	},
	chatInput: {
		disabled: false,
		allowNewline: false,
		enabledPlaceholderText: "Type your message...",
		disabledPlaceholderText: "",
		showCharacterCount: false,
		characterLimit: -1,
		botDelay: 1000,
		sendButtonIcon: SendButtonIcon,
		blockSpam: true,
		sendOptionOutput: true,
		sendCheckboxOutput: true,
		buttons: [Button.VOICE_MESSAGE_BUTTON, Button.SEND_MESSAGE_BUTTON]
	},
	chatWindow: {
		showScrollbar: false,
		showTypingIndicator: true,
		autoJumpToBottom: false,
		showMessagePrompt: true,
		messagePromptText: "New Messages ↓",
		messagePromptOffset: 30,
		defaultOpen: false,
	},
	sensitiveInput: {
		maskInTextArea: true,
		maskInUserBubble: true,
		asterisksCount: 10,
		hideInUserBubble: false,
	},
	userBubble: {
		animate: true,
		showAvatar: false,
		avatar: userAvatar,
		simulateStream: false,
		streamSpeed: 30,
	},
	botBubble: {
		animate: true,
		showAvatar: false,
		avatar: botAvatar,
		simulateStream: false,
		streamSpeed: 30,
	},
	voice: {
		disabled: true,
		defaultToggledOn: false,
		language: "en-US",
		timeoutPeriod: 10000,
		autoSendDisabled: false,
		autoSendPeriod: 1000,
		sendAsAudio: false,
		icon: VoiceIcon,
		iconDisabled: VoiceIconDisabled,
	},
	footer: {
		text: (
			<div style={{cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", columnGap: 3}} 
				onClick={() => window.open("https://react-chatbotify.com")}
			>
				<span key={0}>Powered By </span>
				<div
					key={1}
					style={{
						borderRadius: "50%",
						width: 14,
						height: 14,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						background: "linear-gradient(to right, #42b0c5, #491d8d)",
					}}
				>
					<ChatIcon style={{ width: "80%", height: "80%", fill: "#fff" }} />
				</div>
				<span key={2} style={{fontWeight: "bold"}}> React ChatBotify</span>
			</div>
		),
		buttons: [Button.FILE_ATTACHMENT_BUTTON, Button.EMOJI_PICKER_BUTTON]
	},
	fileAttachment: {
		disabled: false,
		multiple: true,
		accept: ".png",
		icon: FileAttachmentIcon,
		iconDisabled: FileAttachmentIcon,
		sendFileName: true,
		showMediaDisplay: false,
	},
	emoji: {
		disabled: false,
		icon: EmojiIcon,
		iconDisabled: EmojiIcon,
		list: ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"]
	},
	toast: {
		maxCount: 3,
		forbidOnMax: false,
		dismissOnClick: true,
	},
	event: {
		rcbPreInjectMessage: false,
		rcbPostInjectMessage: false,
		rcbStartSimulateStreamMessage: false,
		rcbStopSimulateStreamMessage: false,
		rcbStartStreamMessage: false,
		rcbChunkStreamMessage: false,
		rcbStopStreamMessage: false,
		rcbRemoveMessage: false,
		rcbLoadChatHistory: false,
		rcbToggleChatWindow: false,
		rcbToggleAudio: false,
		rcbToggleNotifications: false,
		rcbToggleVoice: false,
		rcbChangePath: false,
		rcbShowToast: false,
		rcbDismissToast: false,
		rcbUserSubmitText: false,
		rcbUserUploadFile: false,
		rcbTextAreaChangeValue: false,
		rcbPreLoadChatBot: false,
		rcbPostLoadChatBot: false,
	},
	ariaLabel: {
		chatButton: "open chat",
		audioButton: "toggle audio",
		closeChatButton: "close chat",
		emojiButton: "emoji picker",
		fileAttachmentButton: "upload file",
		notificationButton: "toggle notifications",
		sendButton: "send message",
		voiceButton: "toggle voice",
		inputTextArea: "input text area",
	},
	device: {
		desktopEnabled: true,
		mobileEnabled: true,
		applyMobileOptimizations: true,
	}
}
```
</details>

:::info Info

Default values for icons, avatars and JSX Elements may not be reflected in the tables below due to space constraints. If you would like information on those, you may refer to the source code containing the default settings [**here**](https://github.com/react-chatbotify/react-chatbotify/blob/main/src/constants/internal/DefaultSettings.tsx).

:::

## Sections

Below is a list of available sections along with a brief description for each of them:

| Name                       | Type                            | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ariaLabel                  | `object`                         | Configuration for chatbot accessibility.                                                                                               |
| audio                      | `object`                         | Configuration for chatbot audio.                                                                                               |
| botBubble                  | `object`                         | Configuration for bot chat bubbles.                                                                                            |
| chatButton                 | `object`                         | Configuration for the chatbot button.                                                                                          |
| chatWindow                 | `object`                         | Configuration for the chatbot window.                                                                                          |
| chatHistory                | `object`                         | Configuration for chatbot chat history.                                                                                        |
| chatInput                  | `object`                         | Configuration for chatbot input.                                                                                               |
| device                     | `object`                         | Configuration for chatbot behavior on different devices.                                                                                              |
| emoji                      | `object`                         | Configuration for chatbot emojis.                                                                                              |
| event                      | `object`                         | Configuration for chatbot events.                                                                                              |
| fileAttachment             | `object`                         | Configuration for chatbot file attachments.                                                                                    |
| footer                     | `object`                         | Configuration for the chatbot footer.                                                                                          |
| general                      | `object`                         | Configuration for the general aspects of the chatbot.                                                                                           |
| header                     | `object`                         | Configuration for the chatbot header.                                                                                          |
| notification               | `object`                         | Configuration for chatbot notifications.                                                                                       |
| sensitiveInput             | `object`                         | Configuration for chatbot sensitive input.                                                                                     |
| toast                      | `object`                         | Configuration for the chatbot toast.                                                                                           |
| tooltip                    | `object`                         | Configuration for the chatbot tooltip.                                                                                         |
| userBubble                 | `object`                         | Configuration for user chat bubbles.                                                                                           |
| voice                      | `object`                         | Configuration for chatbot voice.                                                                                               |

## Section Details

Below is a detailed description of each section and the properties they contain.

---

### ariaLabel

Properties here provide accessible labels for various chatbot interface elements. These labels are used by screen readers to enhance accessibility for users.

| Name                   | Type     | Default               | Description                                                                 |
| ---------------------- | -------- | --------------------- | --------------------------------------------------------------------------- |
| `chatButton`           | `string` | "open chat"           | Accessible label for the button that opens the chat window.                 |
| `audioButton`          | `string` | "toggle audio"        | Accessible label for the button that toggles audio.                         |
| `closeChatButton`      | `string` | "close chat"          | Accessible label for the button that closes the chat window.                |
| `emojiButton`          | `string` | "emoji picker"        | Accessible label for the button that opens the emoji picker.                |
| `fileAttachmentButton` | `string` | "upload file"         | Accessible label for the button that allows users to upload files.          |
| `notificationButton`   | `string` | "toggle notifications"| Accessible label for the button that toggles notifications on or off.       |
| `sendButton`           | `string` | "send message"        | Accessible label for the button that sends input message.                   |
| `voiceButton`          | `string` | "toggle voice"        | Accessible label for the button that toggles voice.                         |
| `inputTextArea`        | `string` | "input text area"     | Accessible label for the text area where users input their messages.        |

### audio

Properties here handle the playing of audio for messages sent by the bot. When toggled on, messages sent by the bot will be read out. Note that audio is not supported for messages sent in [real-time stream](/docs/examples/real_time_stream).

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | `boolean`                         | true                                        | Specifies whether chatbot audio is disabled.                                                                                   |
| defaultToggledOn           | `boolean`                         | false                                       | Specifies whether chatbot audio is toggled on by default.                                                                      |
| language                   | `string`                          | "en-US"                                     | The language for chatbot audio, set by a string representing a [**BCP 47 language tag**](https://www.techonthenet.com/js/language_tags.php).                                                                                                |
| voiceNames                  | `Array<string>`                          | "Google US English Male"                    | An array of voice names for the chatbot audio. Voices are based off what is provided in [**SpeechSynthesis**](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices) - you can provide as many voices as you wish (**the first voice matched will be used**).                                                                                              |
| rate                       | `number`                          | 1                                           | The rate (between 0.1 to 10) at which chatbot audio is played.                                                                                     |
| volume                       | `number`                          | 1                                           | The volume (between 0 to 1) at which chatbot audio is played.                                                                                     |
| icon                 | `SVGElement` \| `string`                          | -                                            | SVG element import or image URL for the audio icon to be displayed in the chatbot interface.                                                     |
| iconDisabled                 | `SVGElement` \| `string`                          | -                                            | SVG element import or image URL for the audio icon to be displayed in the chatbot interface **when it is disabled**.                                                     |

### botBubble

Properties here handle the chat bubble for messages sent by the bot.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| animate                    | `boolean`                         | true                                        | Specifies whether the bot chat bubbles should be animated.                                                        |
| showAvatar                 | `boolean`                         | false                                       | Specifies whether the avatar should be displayed for bot chat bubbles.                                                         |
| avatar                | `string`                          | -                                            | Image import or URL for the avatar to be displayed for bot chat bubbles.                                                             |                                                                              |
| simulateStream             | `boolean`                         | false                                       | Specifies whether to simulate text messages from the bot as a stream.                                                         |
| streamSpeed                | `number`                          | 30                                            | Specifies the interval in milliseconds between streaming each character (ignored if `simulateStream` is false).                                                             |                                                                              |

### chatButton

Properties here handle the chat button that is used to toggle chat window. Note that the chat button does not show if chat window is embedded.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| icon            | `SVGElement` \| `string`                         | -                                            | SVG element import or image URL for the chatbot button.                                                                                          |

### chatWindow

Properties here handle the UI/UX in the chat window. Note that it is recommended to stick to default values for this section as they have been optimized for the ideal experience.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| showScrollbar              | `boolean`                         | false                                       | Specifies whether scrollbar will be shown when chat messages overflow the window.                                                                            |
| showTypingIndicator        | `boolean`                         | true                                       | Specifies whether typing indicator will be shown when a block is being processed.                                                                            |
| autoJumpToBottom           | `boolean`                         | false                                       | Specifies whether new messages will always send the user to the bottom of the chat window (recommended to keep `false` as this can be disruptive).                    |
| showMessagePrompt          | `boolean`                         | true                                        | Specifies whether to show a message prompt when new messages are received while a user is scrolling the window.                                                      |
| messagePromptText          | `string`                          | "New Messages ↓"                            | The text to be displayed on the message prompt shown.                                                                             |
| messagePromptOffset        | `number`                          | 30                                          | The offset (in pixels) that the user must be from the bottom of the chat window to be considered scrolling and thus see the message prompt (recommended to keep at `30` or higher).                                                                  |
| defaultOpen        | `boolean`                          | false                                          | Specifies whether the chat window should be open by default (ignored if chatbot is embedded).                                                                  |

### chatHistory

Properties here handle the viewing of chat history.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | `boolean`                         | false                                       | Specifies whether chatbot chat history is disabled.                                                                            |
| maxEntries                 | `number`                          | 30                                          | The maximum number of chat history entries to display.                                                                         |
| storageKey                 | `string`                          | "rcb-history"                               | The key to use for storing chat history. Can be ignored if you only have a single instance of the chatbot on your website. Otherwise, if multiple chatbots share the same storage key, their chat history will overlap.                                                                                       |
| storageType                | `string`                          | "LOCAL_STORAGE"                               | The type of storage to use for chat history which can either be `LOCAL_STORAGE` or `SESSION_STORAGE`.                                                                                       |
| viewChatHistoryButtonText  | `string`                          | "Load Chat History"                         | The text to be displayed on the view chat history button.                                                                     |
| chatHistoryLineBreakText   | `string`                          | "----- Previous Chat History -----"         | The text to be displayed as a line break in the chat history.                                                                  |
| autoLoad                   | `boolean`                         | false                                       | Specifies whether to automatically load chat history on start (requires `disabled` to be set to `false` as well)                                                                     |

### chatInput

Properties here handle the chat input sent by the user. Note that when chatbot input is disabled, emoji picker and voice will also be disabled.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | `boolean`                         | false                                       | Specifies whether chatbot input is disabled (can be overriden by the `chatDisabled` attribute within a **Block**).                                                                                   |
| allowNewline               | `boolean`                         | false                                       | Specifies whether newline is allowed in chatbot input.                                                                                   |
| enabledPlaceholderText     | `string`                          | "Type your message..."                      | The placeholder text to display in the chat input when it is enabled.                                                          |
| disabledPlaceholderText    | `string`                          | ""                                            | The placeholder text to display in the chat input when it is disabled.                                                         |
| showCharacterCount         | `boolean`                         | false                                           | Specifies whether to show the character count and limit (note that this value is **ignored if** `characterLimit` **is not set to 0 or more**).                                                            |
| characterLimit             | `number`                          | -1                                            | The maximum number of characters allowed in the chat input, defaults to -1 (no limit).                                                         |
| botDelay                   | `number`                          | 1000                                        | The delay in milliseconds before chatbot responses are displayed (**minimum value of 500**).                                                             |
| sendButtonIcon            | `SVGElement` \| `string`                          | -                                            | SVG element import or image URL for the send button to be displayed in the chat input.                                                           |
| blockSpam                  | `boolean`                         | true                                        | Specifies whether user input should be blocked while the bot is processing its next action (highly recommended to keep this `true` as spamming messages can result in unexpected behaviors).                                     |
| sendOptionOutput           | `boolean`                         | true                                        | Specifies whether to send user option as a message to the bot.                                                   |
| sendCheckboxOutput         | `boolean`                         | true                                        | Specifies whether to send user selection(s) as a message to the bot.                                                 |
| buttons             | `Array<string \| JSX.Element>`                         | [Button.VOICE_MESSAGE_BUTTON, Button.SEND_MESSAGE_BUTTON]                                            | An ordered list of buttons to show in the chat input (supports both default buttons and custom components) - for the list of default buttons, import the `Button` constant from the library.                                                    |

### device

Properties here handle the chatbot behavior on different devices (e.g. desktop/mobile).

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| desktopEnabled                   | `boolean`                         | true                                       | Specifies whether the chatbot is enabled for users on desktop.                                                             |
| mobileEnabled                    | `boolean`                         | true                                       | Specifies whether the chatbot is enabled for users on mobile.                                                             |
| applyMobileOptimizations         | `boolean`                         | true                                       | Specifies if optimizations should be applied on mobile (e.g. auto fullscreen for better viewing). This option is irrelevant if `mobileEnabled` is false.                                                             |

### emoji

Properties here handle the emoji picker. Note that this feature will be disabled if chat input is disabled.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | `boolean`                         | false                                       | Specifies whether emoji picker is disabled.                                                                                 |
| icon                       | `SVGElement` \| `string`                          | -                                        | SVG element import or image URL for the emoji icon to be displayed in the chatbot footer.                                                               |
| iconDisabled                       | `SVGElement` \| `string`                          | -                                        | SVG element import or image URL for the emoji icon to be displayed in the chatbot footer **when it is disabled**.                                                               |
| list                       | `Array<string>`                        | ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"] | An array of emojis available for selection in the emoji picker.                                                           |

### event

Properties here handle the events emitted by the chatbot. All events have a default value of `false`. By enabling these events, the chatbot will emit the respective events when specific actions are triggered within the bot's lifecycle.

| Name                      | Type       | Default | Description                                                                 |
| ------------------------- | ---------- | ------- | --------------------------------------------------------------------------- |
| RcbChangePath             | `boolean`  | false   | Specifies whether the `RcbChangePathEvent` will be emitted.                 |
| RcbChunkStreamMessage     | `boolean`  | false   | Specifies whether the `RcbChunkStreamMessageEvent` will be emitted.         |
| RcbDismissToast           | `boolean`  | false   | Specifies whether the `RcbDismissToastEvent` will be emitted.               |
| RcbLoadChatHistory        | `boolean`  | false   | Specifies whether the `RcbLoadChatHistoryEvent` will be emitted.            |
| RcbPostInjectMessage      | `boolean`  | false   | Specifies whether the `RcbPostInjectMessageEvent` will be emitted.          |
| RcbPreInjectMessage       | `boolean`  | false   | Specifies whether the `RcbPreInjectMessageEvent` will be emitted.           |
| RcbRemoveMessage          | `boolean`  | false   | Specifies whether the `RcbRemoveMessageEvent` will be emitted.              |
| RcbShowToast              | `boolean`  | false   | Specifies whether the `RcbShowToastEvent` will be emitted.                  |
| RcbStartStreamMessage     | `boolean`  | false   | Specifies whether the `RcbStartStreamMessageEvent` will be emitted.         |
| RcbStopStreamMessage      | `boolean`  | false   | Specifies whether the `RcbStopStreamMessageEvent` will be emitted.          |
| RcbToggleAudio            | `boolean`  | false   | Specifies whether the `RcbToggleAudioEvent` will be emitted.                |
| RcbToggleChatWindow       | `boolean`  | false   | Specifies whether the `RcbToggleChatWindowEvent` will be emitted.           |
| RcbToggleNotifications    | `boolean`  | false   | Specifies whether the `RcbToggleNotificationsEvent` will be emitted.        |
| RcbToggleVoice            | `boolean`  | false   | Specifies whether the `RcbToggleVoiceEvent` will be emitted.                |
| RcbUserSubmitText         | `boolean`  | false   | Specifies whether the `RcbUserSubmitTextEvent` will be emitted.             |
| RcbUserUploadFile         | `boolean`  | false   | Specifies whether the `RcbUserUploadFileEvent` will be emitted.             |
| RcbTextAreaChangeValue    | `boolean`  | false   | Specifies whether the `RcbTextAreaChangeValueEvent` will be emitted.        |

### fileAttachment

Properties here handle the file attachment button.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | `boolean`                         | false                                       | Specifies whether chatbot file attachments are disabled.                                                                       |
| multiple                   | `boolean`                         | true                                        | Specifies whether multiple file attachments are allowed.                                                                        |
| accept                     | `string`                          | *                                      | The accepted file types for file attachments (e.g. `".png, .jpg"` to restrict file types or `*` to accept all file types).                                                                                  |
| sendFileName         | `boolean`                         | true                                        | Specifies whether to send a message with name(s) of file attachments as a message to the bot.                                                |
| showMediaDisplay        | `boolean`                         | true                                            | Specifies whether file attachments that are either image, video or audio will be displayed (previewed).                                             |
| icon        | `SVGElement` \| `string`                          | -                                            | SVG element import or image URL for the file attachment icon to be displayed in the chatbot footer.                                             |
| iconDisabled        | `SVGElement` \| `string`                          | -                                            | SVG element import or image URL for the file attachment icon to be displayed in the chatbot footer **when it is disabled**.                                             |

### footer

Properties here handle the chat footer.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| text                       | `string \| JSX.Element`           | -                                            | The text or JSX element to be displayed in the chatbot footer.                                                                 |
| buttons             | `Array<string \| JSX.Element>`                         | [Button.FILE_ATTACHMENT_BUTTON, Button.EMOJI_PICKER_BUTTON]                                            | An ordered list of buttons to show in the footer (supports both default buttons and custom components) - for the list of default buttons, import the `Button` constant from the library.                                                    |

### general

Properties here handle general configurations for the chatbot.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| primaryColor               | `string`                          | "#42b0c5"                                   | The primary color for the chatbot's interface.                                                                                 |
| secondaryColor             | `string`                          | "#491d8d"                                   | The secondary color for the chatbot's interface.                                                                               |
| fontFamily                 | `string`                          | "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" | The default font family to be used for the chatbot's text.                                                                             |
| showHeader        | `boolean`                          | true                                            | Specifies whether the header should be shown in the chat window.                                                                        |
| showFooter        | `boolean`                          | true                                            | Specifies whether the footer should be shown in the chat window.                                                                        |
| showInputRow        | `boolean`                          | true                                            | Specifies whether the chat input row should be shown in the chat window.                                                                        |
| actionDisabledIcon        | `string`                          | -                                            | The cursor image to display when hovering over an action that is disabled.                                                                        |
| embedded                   | `boolean`                         | false                                       | Specifies whether the chatbot is embedded in the webpage or accessed through a floating button. Note that notifications feature **will not work** for embedded chat windows.                                                             |
| flowStartTrigger          | `string`                         | "ON_LOAD"                                      | The trigger for starting chatbot flow which includes: <ul><li>`ON_LOAD`:</li> Flow begins on chatbot load<li>`ON_CHATBOT_INTERACT`:</li> Flow begins when user interacts with chatbot<li>`ON_PAGE_INTERACT`:</li> Flow begins when user interacts with page</ul> 

### header

Properties here handle the chat header.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| title                      | `string \| JSX.Element`           | -                                            | The title to be displayed in the chatbot header.                                                                               |
| showAvatar                 | `boolean`                         | true                                        | Specifies whether the avatar should be displayed in the chatbot header.                                                        |
| avatar                | `string`                          | -                                            | Image import or URL for the avatar to be displayed in the chatbot header.                                                            |                                               |
| closeChatIcon             | `SVGElement` \| `string`                          | -                                            | SVG element import or image URL for the close chat icon to be displayed in the chatbot header.                                                    |
| buttons             | `Array<string \| JSX.Element>`                         | [Button.NOTIFICATION_BUTTON, Button.AUDIO_BUTTON, Button.CLOSE_CHAT_BUTTON]                                            | An ordered list of buttons to show in the header (supports both default buttons and custom components) - for the list of default buttons, import the `Button` constant from the library.                                                    |

### notification

Properties here handle the message notification sent to the user. When toggled on, a notification sound will be played when a message is sent while the chat window is closed or while the user is alt-tab. For embedded chatbots, notification will be played if chatbot is scrolled out of view.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | `boolean`                         | false                                       | Specifies whether chatbot notifications are disabled.                                                                          |
| defaultToggledOn           | `boolean`                         | true                                        | Specifies whether chatbot notifications are toggled on by default.                                                             |        
| volume                       | `number`                          | 0.2                                           | The volume (between 0 to 1) at which notification sound is played.                                                                                     |                                                   |
| notificationSound          | `string`                          | -                                            | The sound to be played for chatbot notifications.                                                                              |
| icon          | `SVGElement` \| `string`                          | -                                            | SVG element import or image URL for the notification icon to be displayed in the chatbot header.
| iconDisabled          | `SVGElement` \| `string`                          | -                                    | SVG element import or image URL for the notification icon to be displayed in the chatbot header **when it is disabled**.
| showCount                  | `boolean`                         | true                                       | Specifies whether unread message count is shown on the top right corner of the chatbot button (this option is ignored if notification is `disabled`).                                                                          |

### sensitiveInput

Properties here handle sensitive chat input sent by the user.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| maskInTextArea             | `boolean`                         | true                                        | Specifies whether to mask sensitive text with asterisks within the chat input textarea that users type in (if `hideInUserBubble` is set to true, it will override this option).                                                                                       |
| maskInUserBubble           | `boolean`                         | true                                        | Specifies whether to mask sensitive text with asterisks within the user message bubble sent to chat.                                                                                       |
| asterisksCount             | `number`                          | true                                        | Specifies the number of asterisks used to mask the sensitive text in chat bubbles.                                                                                       |
| hideInUserBubble           | `boolean`                         | true                                        | Specifies whether to completely hide user message bubbles containing sensitive text when sent to chat.                                                                                       |

### toast

Properties here handle toasts shown in the chatbot.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| maxCount                   | `number`                          | 3                                          | Specifies the maximum number of toasts that can be shown at once.                                                        |
| forbidOnMax                | `boolean`                         | false                                       | If `true`, new toasts will be prevented from being shown when the max number of toasts has been reached. If `false`, new toasts will be shown but the oldest toasts beyond the max limit will be removed.                                                       |
| dismissOnClick             | `boolean`                         | true                                            | If `true`, clicking on toasts will dismiss them.                                                            |

### tooltip

Properties here handle the tooltip shown beside the chat button.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| mode                       | `string`                          | "CLOSE"                                     | The mode of the tooltip which includes: <ul><li>`ALWAYS`:</li> Tooltip is always shown<li>`CLOSE`:</li> Tooltip is shown when chat window is closed<li>`START`:</li> Tooltip is shown once on page load<li>`NEVER`:</li> Tooltip is never shown</ul>                                                                                                   |
| text                       | `string`                          | "Talk to me! 😊"                            | The text to be displayed in the tooltip.                                                                                       |

### userBubble

Properties here handle the chat bubble for messages sent by the user.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| animate                    | `boolean`                         | true                                        | Specifies whether the user chat bubbles should be animated.                                                        |
| showAvatar                 | `boolean`                         | false                                       | Specifies whether the avatar should be displayed for user chat bubbles.                                                        |
| avatar                | `string`                          | -                                            | Image import or URL for the avatar to be displayed for user chat bubbles.                                                            |
| simulateStream             | `boolean`                         | false                                       | Specifies whether to simulate text messages from the user as a stream.                                                         |
| streamSpeed                | `number`                          | 30                                            | Specifies the interval in milliseconds between streaming each character (ignored if `simulateStream` is false).                                                             |      

### voice

Properties here handle the voice to text feature (**feature is available only on desktop**). Note that this feature will be disabled if chat input is disabled.

| Name                       | Type                            | Default                                     | Description                                                                                                                    |
| -------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| disabled                   | `boolean`                         | false                                       | Specifies whether chatbot voice is disabled.                                                                                   |
| defaultToggledOn           | `boolean`                         | false                                       | Specifies whether chatbot voice is toggled on by default.                                                                      |
| language                   | `string`                          | "en-US"                                     | The expected language from the user, set by a string representing a [**BCP 47 language tag**](https://www.techonthenet.com/js/language_tags.php).                                                                                                |
| timeoutPeriod              | `number`                          | 10000                                       | The timeout period in milliseconds for chatbot voice before it automatically toggles off (set to `0` to disable automatic toggle off).                                                                          |
| autoSendDisabled           | `boolean`                         | false                                       | Specifies whether auto-sending of voice messages into the chat is disabled.                                                                  |
| autoSendPeriod             | `number`                          | 1000                                        | The period in milliseconds after which voice messages are automatically sent.                                                  |
| sendAsAudio                 | `boolean`                         | false                                            | Specifies whether voice input will be sent as an audio file instead (note that `autoSend` features will not work if this is `true`).                                                     |
| icon                 | `SVGElement` \| `string`                          | -                                            | SVG element import or image URL for the voice icon to be displayed in the chatbot interface.                                                     |
| iconDisabled                 | `SVGElement` \| `string`                          | -                                            | SVG element import or image URL for the voice icon to be displayed in the chatbot interface **when it is disabled**.                                                     |