---
sidebar_position: 7
title: Hooks
description: API documentation for chatbot hooks
keywords: [react, chat, chatbot, chatbotify]
---

# Hooks

This page documents all the available custom `hooks` provided by the library.

:::tip Tip
Hooks are only relevant if you intend to interact with the chatbot functionalities (e.g. toggle audio or chat window) from **outside the chatbot and within your own component**. If you have no such use case, you may skip hooks entirely!
:::

## Overview

Below is a list of available hooks along with a brief description for each of them:

| Name                | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| useAudio            | Manages audio functionalities, such as toggling audio on or off.                        |
| useBotId            | Allows retrieving of bot id (mainly for plugin developers).                             |
| useChatHistory      | Handles loading, retrieving and setting of chat history messages.                       |
| useChatWindow       | Manages the state of the chatbot window (open/close).                                   |
| useFirstInteraction | Detects and tracks the user's first interaction with the chatbot.                       |
| useFlow             | Allows retrieving and restarting chatbot flow and tracks if flow has started.           |
| useMessages         | Handles sending, clearing, and retrieving messages in the chatbot.                      |
| useNotifications    | Manages chatbot notifications, such as toggling notifications on or off.                |
| useOnRcbEvent       | Registers a chatbot event with corresponding handler.                                   |
| usePaths            | Manages chatbot conversation paths, such as navigation.                                 |
| useSettings         | Accesses and modifies chatbot settings.                                                 |
| useStyles           | Accesses and modifies chatbot styles.                                                   |
| useTextArea         | Manages the text input area of the chatbot, including setting and clearing values.      |
| useToasts            | Manages toasts shown within the chatbot, such as showing or missing them.              |
| useVoice            | Manages voice functionality, such as toggling voice on or off.                          |

## Hook Details

Below is a detailed description of each hook and the functions they expose.

---

### useAudio

#### Description
The `useAudio` hook allows you to track and manage the chatbot's audio functionality.

#### Return Values
| Name           | Type             | Parameter | Description                                                 |
|----------------|------------------|-----------|-------------------------------------------------------------|
| audioToggledOn | `boolean`        | -         | Indicates if the chatbot audio is currently on or off.      |
| toggleAudio    | `async function` | **active (optional)** - `boolean` indicating desired end state | Toggles the chatbot audio on or off.                        |
| speakAudio     | `async function` | **text (required)** - `string` representing text to speak out | Speaks out the given text using the chatbot audio settings. |


#### Code Example
```jsx
import { useAudio } from "react-chatbotify";

const MyNestedComponent = () => {
  const { toggleAudio } = useAudio();

  return (
    <button onClick={toggleAudio}></button>
  )
};
```

### useBotId

#### Description
The `useBotId` hook allows you to retrieve the bot id (mainly for plugin developers).

#### Return Values
| Name           | Type        | Parameter | Description                                            |
| -------------- | ----------- | --------  | ------------------------------------------------------ |
| getBotId       | `function ` | -         | Retrieves the bot id.                                  |

#### Code Example
```jsx
import { useBotId } from "react-chatbotify";

const MyNestedComponent = () => {
  const { getBotId } = useBotId();

  return (
    <button onClick={getBotId}></button>
  )
};
```

### useChatHistory

#### Description
The `useChatHistory` hook allows you to show, retrieve and set chat history messages.

#### Return Values
| Name                 | Type       | Parameter | Description                                                   |
| -------------------- | ---------- | --------- | ------------------------------------------------------------- |
| showChatHistory      | `function` | -         | Shows the chat history messages on the chatbot.               |
| getHistoryMessages   | `function` | -         | Retrieves the chat history messages.                          |
| setHistoryMessages   | `function` | **messages (required)** - `Message[]` to set history with | Sets the chat history messages (note that this is permanent). |
| hasChatHistoryLoaded | `boolean`  | -         | Boolean indicating if chat history has been loaded.           |

#### Code Example
```jsx
import { useChatHistory } from "react-chatbotify";

const MyNestedComponent = () => {
  const { showChatHistory } = useChatHistory();

  return (
    <button onClick={showChatHistory}></button>
  )
};
```

### useChatWindow

#### Description
The `useChatWindow` hook allows you to track and manage the chatbot's window state.

#### Return Values
| Name                | Type             | Parameter | Description                                              |
|---------------------|------------------|-----------|----------------------------------------------------------|
| isChatWindowOpen    | `boolean`        | -         | Indicates if the chat window is currently open or close. |
| toggleChatWindow    | `async function` | **active (optional)** - `boolean` indicating desired end state | Toggles the chat window open or close.                   |
| toggleIsBotTyping   | `async function` | **active (optional)** - `boolean` indicating desired end state | Toggles the bot typing indicator.                        |
| scrollToBottom      | `function`       | **duration (optional)**: `number` representing duration in milliseconds to scroll, defaults to 0 | Scrolls to the bottom of the chat window.                |
| getIsChatBotVisible | `function`       | -         | Returns `true` if chatbot is visible, `false` otherwise   |


#### Code Example
```jsx
import { useChatWindow } from "react-chatbotify";

const MyNestedComponent = () => {
  const { toggleChatWindow } = useChatWindow();

  return (
    <button onClick={toggleChatWindow}></button>
  )
};
```

### useFirstInteraction

#### Description
The `useFirstInteraction` hook allows you to track if a page has been interacted with.

#### Return Values
| Name                | Type       | Parameter | Description                                              |
| ------------------- | ---------- | --------- | -------------------------------------------------------- |
| hasInteractedPage   | `boolean`  | -         | Indicates if the page has been interacted with.          |

#### Code Example
```jsx
import { useEffect } from "react";
import { useFirstInteraction } from "react-chatbotify";

const MyNestedComponent = () => {
  const { hasInteractedPage } = useFirstInteraction();

  useEffect(() => {
    // do something if has interacted
  }, [hasInteractedPage])

  return (
    <ExampleComponent/>
  )
};
```

### useFlow

#### Description
The `useFlow` hook allows you to get a flow, restart a flow and track if a flow has started.

#### Return Values
| Name                | Type       | Parameter | Description                                              |
| ------------------- | ---------- | --------- | -------------------------------------------------------- |
| hasFlowStarted      | `boolean`  | -         | Indicates if the chatbot flow has started.               |
| getFlow             | `function` | -         | Retrieves the chatbot flow.                              |
| restartFlow         | `async function` | -         | Restarts the chatbot flow.                               |

#### Code Example
```jsx
import { useEffect } from "react";
import { useFirstInteraction } from "react-chatbotify";

const MyNestedComponent = () => {
  const { hasFlowStarted } = useFirstInteraction();

  useEffect(() => {
    // do something if flow has started
  }, [hasFlowStarted])

  return (
    <ExampleComponent/>
  )
};
```

### useMessages

#### Description
The `useMessages` hook allows you to track and manage the chatbot's messages.

#### Return Values
| Name                  | Type             | Parameter                                                   | Description                                                                                                                                          |
|-----------------------|------------------|-------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| injectMessage         | `async function` | Refer [here](/api/params#injectmessage)                | A utility function used to inject a message into the chat, identical to `params.injectMessage`.                                                      |
| simulateStreamMessage | `async function` | Refer [here](/api/params#simulatestreammessage)        | A utility function used to simulate streaming of messages into the chat, identical to `params.simulateStreamMessage`.                                |
| streamMessage         | `async function` | Refer [here](/api/params#streammessage)                | A utility function used to stream messages into the chat, identical to `params.streamMessage`.                                                       |
| endStreamMessage      | `async function` | Refer [here](/api/params#endstreammessage)             | A utility function used to indicate the end of an existing message stream, identical to `params.endMessageStream`.                                   |
| removeMessage         | `async function` | Refer [here](/api/params#removemessage)                | A utility function used to remove a message from the chat, identical to `params.removeMessage`.                                                      |
| messages            | `Array<Message>`     | -        |Array containing all messages currently shown in the chatbot.                  |
| getMessages           | `function` | **sender (optional)** - The sender of the message (default: all). <br/><br/> **numMessages (optional)** - Number of messages to fetch (default: all). <br/><br/> **offset (optional)** - How many messages to skip backward (default: 0).              | Retrieves message(s) based on specified parameters. If numMessages > 1, returns an array of messages. If no message is found, returns null.                                                      |
| replaceMessages       | `function`  | **newMessagesOrUpdater (required)** - Either: (1) `Message[]` to replace chat with, or (2) a callback `(prevMessages: Message[]) => Message[]` returning the new messages. | Directly replaces the current messages with provided messages, or computes them from the previous state. |

#### Code Example
```jsx
import { useEffect } from "react";
import { useMessages } from "react-chatbotify";

const MyNestedComponent = () => {
  const { injectMessage } = useMessages();

  useEffect(() => {
    // inject custom message
    injectMessage("my custom message");
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useNotifications

#### Description
The `useNotifications` hook allows you to track and manage the chatbot's notifications functionality.

#### Return Values
| Name                   | Type             | Parameter | Description                                                    |
|------------------------|------------------|-----------|----------------------------------------------------------------|
| notificationsToggledOn | `boolean`        | -         | Indicates if the chatbot notifications is currently on or off. |
| toggleNotifications    | `async function` | **active (optional)** - `boolean` indicating desired end state  | Toggles the chatbot notifications on or off.                   |
| playNotificationSound  | `function`       | -         | Plays the notification sound.                                  |

#### Code Example
```jsx
import { useNotifications } from "react-chatbotify";

const MyNestedComponent = () => {
  const { toggleNotifications } = useNotifications();

  return (
    <button onClick={toggleNotifications}></button>
  )
};
```

### useOnRcbEvent

#### Description
The `useOnRcbEvent` hook allows you to register a chatbot event with its corresponding handler. It accepts 2 parameters, the first being a `RcbEvent` (provided as an `enum` export by the library) and the second being the corresponding event handler. Note that the hook does not return any value since it simply registers an event. This is **commonly used in plugins** which rely on listening on [**events**](/api/events) and taking actions via [**hooks**](/api/hooks).

#### Code Example
```jsx
import { useEffect } from "react";
import { useOnRcbEvent, RcbEvent, RcbChangePathEvent } from "react-chatbotify";

const MyNestedComponent = () => {
  const handler = (event: RcbChangePathEvent) => {
    // handle change path logic
  }

  // listens on the change path event
  useOnRcbEvent(RcbEvent.CHANGE_PATH, handler);

  return (
    <ExampleComponent/>
  )
};
```

### usePaths

#### Description
The `usePaths` hook allows you to track and manage the chatbot's paths.

#### Return Values
| Name         | Type             | Parameter | Description                                                                                                 |
|--------------|------------------|-----------|-------------------------------------------------------------------------------------------------------------|
| getCurrPath  | `function`       | -         | Retrieves the current path of the user.                                                                     |
| getPrevPath  | `function`       | -         | Retrieves the previous path of the user.                                                                    |
| goToPath     | `function`       | Refer [here](/api/params#gotopath) | Sends the user to a specified path, identical to `params.goToPath`.                        |
| paths        | `Array<string>`  | -         | Array containing all paths the user has taken in order.                                                     |
| replacePaths | `function` | **newPathsOrUpdater (required)** – Either: (1) `string[]` containing paths to replace with, or (2) a callback `(prevPaths: string[]) => string[]` returning the new paths. | Directly replaces the current paths with provided paths, or computes them from the previous state (hardly a reason to do this, think twice). |

#### Code Example
```jsx
import { useEffect } from "react";
import { usePaths } from "react-chatbotify";

const MyNestedComponent = () => {
  const { goToPath } = usePaths();

  useEffect(() => {
    // go to custom path
    goToPath("my-custom-path");
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useSettings

#### Description
The `useSettings` hook allows you to track and manage the chatbot's settings.

#### Return Values
| Name            | Type        | Parameter | Description                                                                  |
|-----------------|-------------|-----------|------------------------------------------------------------------------------|
| settings        | `Settings`  | -         | Represents the current settings of the chatbot.                             |
| replaceSettings | `function` | **newSettingsOrUpdater (required)** – Either: (1) `Settings` to replace with, or (2) a callback `(prevSettings: Settings) => Settings` returning the new settings. | Directly replaces the current settings with provided settings, or computes them from the previous state. |
| updateSettings  | `function`  | **fields (required)** - `Settings` fields to update | Modifies and merges the provided settings with existing settings.           |

#### Code Example
```jsx
import { useEffect } from "react";
import { useSettings } from "react-chatbotify";

const MyNestedComponent = () => {
  const { settings, updateSettings } = useSettings();

  useEffect(() => {
    if (settings.general?.embedded) {
      // disable audio if chatbot is embedded
      updateSettings({audio: {disabled: false}})
    }
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useStyles

#### Description
The `useStyles` hook allows you to track and manage the chatbot's styles.

#### Return Values
| Name          | Type       | Parameter | Description                                                              |
|---------------|------------|-----------|--------------------------------------------------------------------------|
| styles        | `Styles`   | -         | Represents the current styles of the chatbot.                            |
| replaceStyles | `function` | **newStylesOrUpdater (required)** – Either: (1) `Styles` to replace with, or (2) a callback `(prevStyles: Styles) => Styles` returning the new styles. | Directly replaces the current styles with provided styles, or computes them from the previous state. |
| updateStyles  | `function` | **fields (required)** - `Styles` fields to update | Modifies and merges the provided styles with existing styles.            |

#### Code Example
```jsx
import { useEffect } from "react";
import { useStyles } from "react-chatbotify";

const MyNestedComponent = () => {
  const { updateStyles } = useStyles();

  useEffect(() => {
    // update header style
    updateStyles({headerStyle: {background: "red"}})
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useTextArea

#### Description
The `useTextArea` hook allows you to track and manage the chatbot's text area field.

#### Return Values
| Name                        | Type             | Parameter | Description                                                                                      |
|-----------------------------|------------------|-----------|--------------------------------------------------------------------------------------------------|
| textAreaDisabled            | `boolean`        | -         | Indicates if the text area is disabled.                                                          |
| toggleTextAreaDisabled      | `function`       | **active (optional)** - `boolean` indicating desired end state | Toggles the text area disabled state.                                                            |
| textAreaSensitiveMode       | `boolean`        | -         | Indicates if the text area is in sensitive mode.                                                 |
| toggleTextAreaSensitiveMode | `function`       | **active (optional)** - `boolean` indicating desired end state | Toggles the text area sensitive mode.                                                            |
| getTextAreaValue            | `function`       | -         | Retrieves the string value inside the text area.                                                 |
| setTextAreaValue            | `async function` | Refer [here](/api/params#settextareavalue) | Sets the value inside the text area, identical to `params.setTextAreaValue`.         |
| focusTextArea               | `function`       | -         | Focuses on the text area.                                                                        |
| blurTextArea                | `function`       | -         | Blurs (lose focus of) the text area.                                                             |

#### Code Example
```jsx
import { useEffect } from "react";
import { useTextArea } from "react-chatbotify";

const MyNestedComponent = () => {
  const { focusTextArea } = useTextArea();

  useEffect(() => {
    // focus on chatbot input text area
    focusTextArea()
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useToasts

#### Description
The `useToasts` hook allows you to track and manage the chatbot's toasts.

#### Return Values
| Name          | Type             | Parameter                                              | Description                                                                                   |
|---------------|------------------|--------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| showToast     | `async function` | Refer [here](/api/params#showtoast)              | Shows a toast in chat, identical to `params.showToast`.                                       |
| dismissToast  | `async function` | Refer [here](/api/params#dismisstoast)           | Dismisses a toast from chat, identical to `params.dismissToast`.                              |
| toasts        | `Array<Toast>`   | -                                                      | Array containing all toasts currently shown in the chatbot.                                   |
| replaceToasts | `function` | **newToastsOrUpdater (required)** – Either: (1) `Toast[]` to replace with, or (2) a callback `(prevToasts: Toast[]) => Toast[]` returning the new toasts. | Directly replaces the current toasts with provided toasts, or computes them from the previous state. |

#### Code Example
```jsx
import { useEffect } from "react";
import { useToasts } from "react-chatbotify";

const MyNestedComponent = () => {
  const { showToast } = useToasts();

  useEffect(() => {
    // shows a toast for 3 seconds
    showToast("Hello, I'm a toast message!", 3000)
  }, [])

  return (
    <ExampleComponent/>
  )
};
```

### useVoice

#### Description
The `useVoice` hook allows you to track and manage the chatbot's voice functionality.

#### Return Values
| Name           | Type             | Parameter | Description                                            |
|----------------|------------------|-----------|--------------------------------------------------------|
| voiceToggledOn | `boolean`        | -         | Indicates if the chatbot voice is currently on or off. |
| toggleVoice    | `async function` | **active (optional)** - `boolean` indicating desired end state | Toggles the chatbot voice on or off.                   |


#### Code Example
```jsx
import { useVoice } from "react-chatbotify";

const MyNestedComponent = () => {
  const { toggleVoice } = useVoice();

  return (
    <button onClick={toggleVoice}></button>
  )
};
```
