---
sidebar_position: 6
title: Events
description: content describing chatbot events
keywords: [react, chat, chatbot, chatbotify]
---

# Events

This page documents all available `events` emitted by the chatbot that may be listened on. Note that events are an **opt-in feature** (i.e. it is disabled by default), as they should not be required for a vast majority of users. Events should be enabled for the following reasons:
- You wish to execute certain application logic on specific chatbot events (e.g. log messages from chatbot)
- You are using [**plugins**](/docs/concepts/plugins) that relies on events emitted by the chatbot (you should refer to the plugin documentation for what events are needed)

:::tip Tip
Before adding your own listeners with custom logic for events, it may be helpful to lookup existing [**plugins**](/docs/concepts/plugins) in case there's already a solution out there (e.g. [**input-validator**](https://github.com/react-chatbotify-plugins/input-validator) plugin).
:::

## Overview

Below is a list of available events with a brief description for each one. You can use these events to listen for and respond to key interactions in the chatbot.

| Name                                | Description                                                       |
|-------------------------------------|-------------------------------------------------------------------|
| RcbChangePathEvent                  | Emitted when the chatbot changes its conversation path.           |
| RcbChunkStreamMessageEvent          | Emitted when a chunk of a streamed message is received.           |
| RcbDismissToastEvent                | Emitted when a toast message is dismissed.                        |
| RcbLoadChatHistoryEvent             | Emitted when the chat history is loaded.                          |
| RcbPostInjectMessageEvent           | Emitted after a message is injected into the chat.                |
| RcbPreInjectMessageEvent            | Emitted before a message is injected into the chat.               |
| RcbRemoveMessageEvent               | Emitted when a message is removed from the chat.                  |
| RcbShowToastEvent                   | Emitted when a toast message is displayed.                        |
| RcbStartSimulateStreamMessageEvent  | Emitted when the chatbot starts simulating streaming a message.   |
| RcbStopSimulateStreamMessageEvent   | Emitted when the chatbot finishes simulating streaming a message. |
| RcbStartStreamMessageEvent          | Emitted when the chatbot starts streaming a message.              |
| RcbStopStreamMessageEvent           | Emitted when the chatbot stops streaming a message.               |
| RcbStartSpeakAudioEvent             | Emitted when a message is read out (audio starts to play)         |
| RcbToggleAudioEvent                 | Emitted when the audio is toggled on or off.                      |
| RcbToggleChatWindowEvent            | Emitted when the chat window is toggled open or closed.           |
| RcbToggleNotificationsEvent         | Emitted when notifications are toggled on or off.                 |
| RcbToggleVoiceEvent                 | Emitted when the voice feature is toggled on or off.              |
| RcbUserSubmitTextEvent              | Emitted when a user submits text in the chat.                     |
| RcbUserUploadFileEvent              | Emitted when a user uploads a file.                               |
| RcbTextAreaChangeValueEvent         | Emitted when the text area value is changed.                      |
| RcbPostLoadChatBotEvent             | Emitted after the chatbot is loaded.                              |
| RcbPreLoadChatBotEvent              | Emitted before the chatbot is loaded.                             |

## Event Details

Events emitted by the chatbot provide the following **details** accessible via `event.details`:

| Name      | Type     | Description                                                     |
|-----------|----------|-----------------------------------------------------------------|
| botId     | `string` | Uniquely identifies the chatbot the event is emitted from.      |
| currPath  | `string` | Represents the current path of the user.                        |
| prevPath  | `string` | Represents the previous path of the user.                       |

In addition, chatbot events are also initialized with **an empty promises array**, accessible via `event.promises`. This caters for use cases where event handlers are **async and require promises to be resolved before proceeding** with the chatbot logic. Push promises into `event.promises` to preserve the chatbot flow logic.

Lastly, all events also contain **event-specific data** that are accessible via `event.data`. You may manipulate the data directly which will be reflected in the result of the event (e.g. modifying the content of a `RcbPreMessageInjectEvent` will modify the message sent). For an example on how to use events, you may take a look at the [**custom events**](/docs/examples/custom_events) example.

Below is a detailed description of each event and how to use them.

---

### RcbChangePathEvent

#### Description
Emitted when the chatbot changes its conversation path.

#### Note
- Requires `settings.event.rcbChangePath` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type     | Description                                                     |
|-----------|----------|-----------------------------------------------------------------|
| prevPath  | `string` | Represents the previous path of the user.                       |
| currPath  | `string` | Represents the current path of the user.                        |
| nextPath  | `string` | Represents the next path the user is changing to.               |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbChangePathEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handlePathChange = (event: RcbChangePathEvent) => {
      // handle the path change event
    };

    window.addEventListener("rcb-change-path", handlePathChange);
    return () => {
      window.removeEventListener("rcb-change-path", handlePathChange);
    };
  }, []);

  return (
    <ExampleComponent/>
  )
};
```

### RcbChunkStreamMessageEvent

#### Description
Emitted when a chunk of a streamed message is received.

#### Note
- Requires `settings.event.rcbChunkStreamMessage` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                                                     |
|-----------|-----------|-----------------------------------------------------------------|
| message   | `Message` | The message chunk sent to the current stream message.           |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbChunkStreamMessageEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleChunkStreamMessage = (event: RcbChunkStreamMessageEvent) => {
      // handle the chunk stream message event
    };

    window.addEventListener("rcb-chunk-stream-message", handleChunkStreamMessage);
    return () => {
      window.removeEventListener("rcb-chunk-stream-message", handleChunkStreamMessage);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbDismissToastEvent

#### Description
Emitted when a toast message is dismissed.

#### Note
- Requires `settings.event.rcbDismissToast` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                                                     |
|-----------|-----------|-----------------------------------------------------------------|
| toast     | `Toast`   | The toast being dismissed.                                      |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbDismissToastEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleDismissToast = (event: RcbDismissToastEvent) => {
      // handle the dismiss toast event
    };

    window.addEventListener("rcb-dismiss-toast", handleDismissToast);
    return () => {
      window.removeEventListener("rcb-dismiss-toast", handleDismissToast);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbLoadChatHistoryEvent

#### Description
Emitted when the chat history is loaded.

#### Note
- Requires `settings.event.rcbLoadChatHistory` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
None

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbLoadChatHistoryEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleLoadChatHistory = (event: RcbLoadChatHistoryEvent) => {
      // handle the load chat history event
    };

    window.addEventListener("rcb-load-chat-history", handleLoadChatHistory);
    return () => {
      window.removeEventListener("rcb-load-chat-history", handleLoadChatHistory);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbPostInjectMessageEvent

#### Description
Emitted after a message is injected into the chat.

#### Note
- Requires `settings.event.rcbPostInjectMessage` to be set to true.

#### Data
| Name      | Type      | Description                                                     |
|-----------|-----------|-----------------------------------------------------------------|
| message   | `Message` | The message already sent into the chat (cannot be cancelled).   |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbPostInjectMessageEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handlePostInjectMessage = (event: RcbPostInjectMessageEvent) => {
      // handle the post inject message event
    };

    window.addEventListener("rcb-post-inject-message", handlePostInjectMessage);
    return () => {
      window.removeEventListener("rcb-post-inject-message", handlePostInjectMessage);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbPreInjectMessageEvent

#### Description
Emitted before a message is injected into the chat.

#### Note
- Requires `settings.event.rcbPreInjectMessage` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name             | Type                 | Description                                                     |
|------------------|----------------------|-----------------------------------------------------------------|
| message          | `Message`            | The message being sent into the chat.                           |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbPreInjectMessageEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handlePreInjectMessage = (event: RcbPreInjectMessageEvent) => {
      // handle the pre inject message event
    };

    window.addEventListener("rcb-pre-inject-message", handlePreInjectMessage);
    return () => {
      window.removeEventListener("rcb-pre-inject-message", handlePreInjectMessage);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbRemoveMessageEvent

#### Description
Emitted when a message is removed from the chat.

#### Note
- Requires `settings.event.rcbRemoveMessage` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                                                     |
|-----------|-----------|-----------------------------------------------------------------|
| message   | `Message` | The message being removed from the chat.                        |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbRemoveMessageEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleRemoveMessage = (event: RcbRemoveMessageEvent) => {
      // handle the remove message event
    };

    window.addEventListener("rcb-remove-message", handleRemoveMessage);
    return () => {
      window.removeEventListener("rcb-remove-message", handleRemoveMessage);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbShowToastEvent

#### Description
Emitted when a toast message is displayed.

#### Note
- Requires `settings.event.rcbShowToast` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                                                     |
|-----------|-----------|-----------------------------------------------------------------|
| toast     | `Toast`   | The toast being displayed.                                      |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbShowToastEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleShowToast = (event: RcbShowToastEvent) => {
      // handle the show toast event
    };

    window.addEventListener("rcb-show-toast", handleShowToast);
    return () => {
      window.removeEventListener("rcb-show-toast", handleShowToast);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbStartSimulateStreamMessageEvent

#### Description
Emitted when the chatbot starts simulating streaming a message.

#### Note
- Requires `settings.event.rcbStartSimulateStreamMessage` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name                  | Type                 | Description                                                  |
|-----------------------|----------------------|------------------------------------------------------------- |
| message               | `Message`            | The full message that will be used for simulated streaming.  |
| simulateStreamChunker | `function` \| `null` | A custom function to parse messages for simulated streaming. |

Note: The `simulateStreamChunker` function takes in a string and returns an array of strings. By default, this field is null and strings are split per-character. A custom function can be passed in to control how simulated streaming is carried out. For example, in the implementation of the [**HTML Renderer Plugin**](https://www.npmjs.com/package/@rcb-plugins/html-renderer), a custom function is passed in to skip over html tags when simulating message stream.

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbStartSimulateStreamMessageEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleStartSimulateStreamMessage = (event: RcbStartSimulateStreamMessageEvent) => {
      // handle the start simulate stream message event
    };

    window.addEventListener("rcb-start-simulate-stream-message", handleStartSimulateStreamMessage);
    return () => {
      window.removeEventListener("rcb-start-simulate-stream-message", handleStartSimulateStreamMessage);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbStopSimulateStreamMessageEvent

#### Description
Emitted when the chatbot finishes simulating streaming a message.

#### Note
- Requires `settings.event.rcbStopSimulateStreamMessage` to be set to true.

#### Data
| Name      | Type      | Description                                                     |
|-----------|-----------|-----------------------------------------------------------------|
| message   | `Message` | The full message that was used for simulated streaming.         |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbStopSimulateStreamMessageEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleStopSimulateStreamMessage = (event: RcbStopSimulateStreamMessageEvent) => {
      // handle the stop simulate stream message event
    };

    window.addEventListener("rcb-stop-simulate-stream-message", handleStopSimulateStreamMessage);
    return () => {
      window.removeEventListener("rcb-stop-simulate-stream-message", handleStopSimulateStreamMessage);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbStartStreamMessageEvent

#### Description
Emitted when the chatbot starts streaming a message.

#### Note
- Requires `settings.event.rcbStartStreamMessage` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                                                     |
|-----------|-----------|-----------------------------------------------------------------|
| message   | `Message` | The initial message chunk triggering the start of a stream.     |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbStartStreamMessageEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleStartStreamMessage = (event: RcbStartStreamMessageEvent) => {
      // handle the start stream message event
    };

    window.addEventListener("rcb-start-stream-message", handleStartStreamMessage);
    return () => {
      window.removeEventListener("rcb-start-stream-message", handleStartStreamMessage);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbStopStreamMessageEvent

#### Description
Emitted when the chatbot stops streaming a message.

#### Note
- Requires `settings.event.rcbStopStreamMessage` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                                                     |
|-----------|-----------|-----------------------------------------------------------------|
| message   | `Message` | The final outcome from the content sent when stream ends.       |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbStopStreamMessageEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleStopStreamMessage = (event: RcbStopStreamMessageEvent) => {
      // handle the stop stream message event
    };

    window.addEventListener("rcb-stop-stream-message", handleStopStreamMessage);
    return () => {
      window.removeEventListener("rcb-stop-stream-message", handleStopStreamMessage);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbStartSpeakAudioEvent

#### Description
Emitted when a message is read out (audio starts to play).

#### Note
- Requires `settings.event.rcbStartSpeakAudio` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name       | Type      | Description                                                           |
|------------|-----------|-----------------------------------------------------------------------|
| textToRead | `string`  | The message string that is to be read out.                            |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbStartSpeakAudioEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleStartSpeakAudio = (event: RcbStartSpeakAudioEvent) => {
      // handle the start speak audio event
    };

    window.addEventListener("rcb-start-speak-audio", handleStartSpeakAudio);
    return () => {
      window.removeEventListener("rcb-start-speak-audio", handleStartSpeakAudio);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbToggleAudioEvent

#### Description
Emitted when the audio is toggled on or off.

#### Note
- Requires `settings.event.rcbToggleAudio` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                                                           |
|-----------|-----------|-----------------------------------------------------------------------|
| currState | `boolean` | Value is `true` if audio is currently toggled on, `false` otherwise.  |
| newState  | `boolean` | The new state being toggled to, which is the opposite of `currState`. |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbToggleAudioEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleToggleAudio = (event: RcbToggleAudioEvent) => {
      // handle the toggle audio event
    };

    window.addEventListener("rcb-toggle-audio", handleToggleAudio);
    return () => {
      window.removeEventListener("rcb-toggle-audio", handleToggleAudio);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbToggleChatWindowEvent

#### Description
Emitted when the chat window is toggled open or closed.

#### Note
- Requires `settings.event.rcbToggleChatWindow` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                                                           |
|-----------|-----------|-----------------------------------------------------------------------|
| currState | `boolean` | Value is `true` if chat window is currently open, `false` otherwise.  |
| newState  | `boolean` | The new state being toggled to, which is the opposite of `currState`. |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbToggleChatWindowEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleToggleChatWindow = (event: RcbToggleChatWindowEvent) => {
      // handle the toggle chat window event
    };

    window.addEventListener("rcb-toggle-chat-window", handleToggleChatWindow);
    return () => {
      window.removeEventListener("rcb-toggle-chat-window", handleToggleChatWindow);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbToggleNotificationsEvent

#### Description
Emitted when notifications are toggled on or off.

#### Note
- Requires `settings.event.rcbToggleNotifications` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                                                                  |
|-----------|-----------|------------------------------------------------------------------------------|
| currState | `boolean` | Value is `true` if notifications is currently toggled on, `false` otherwise. |
| newState  | `boolean` | The new state being toggled to, which is the opposite of `currState`.        |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbToggleNotificationsEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleToggleNotifications = (event: RcbToggleNotificationsEvent) => {
      // handle the toggle notifications event
    };

    window.addEventListener("rcb-toggle-notifications", handleToggleNotifications);
    return () => {
      window.removeEventListener("rcb-toggle-notifications", handleToggleNotifications);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbToggleVoiceEvent

#### Description
Emitted when the voice feature is toggled on or off.

#### Note
- Requires `settings.event.rcbToggleVoice` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                                                           |
|-----------|-----------|-----------------------------------------------------------------------|
| currState | `boolean` | Value is `true` if voice is currently toggled on, `false` otherwise.  |
| newState  | `boolean` | The new state being toggled to, which is the opposite of `currState`. |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbToggleVoiceEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleToggleVoice = (event: RcbToggleVoiceEvent) => {
      // handle the toggle voice event
    };

    window.addEventListener("rcb-toggle-voice", handleToggleVoice);
    return () => {
      window.removeEventListener("rcb-toggle-voice", handleToggleVoice);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbUserSubmitTextEvent

#### Description
Emitted when a user submits text in the chat.

#### Note
- Requires `settings.event.rcbUserSubmitText` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type      | Description                    |
|-----------|-----------|--------------------------------|
| inputText | `string`  | The text input that user sent. |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbUserSubmitTextEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleUserSubmitText = (event: RcbUserSubmitTextEvent) => {
      // handle the user submit text event
    };

    window.addEventListener("rcb-user-submit-text", handleUserSubmitText);
    return () => {
      window.removeEventListener("rcb-user-submit-text", handleUserSubmitText);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbUserUploadFileEvent

#### Description
Emitted when a user uploads a file.

#### Note
- Requires `settings.event.rcbUserUploadFile` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type       | Description                             |
|-----------|------------|-----------------------------------------|
| files     | `FileList` | The list of files uploaded by the user. |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbUserUploadFileEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleUserUploadFile = (event: RcbUserUploadFileEvent) => {
      // handle the user upload file event
    };

    window.addEventListener("rcb-user-upload-file", handleUserUploadFile);
    return () => {
      window.removeEventListener("rcb-user-upload-file", handleUserUploadFile);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbTextAreaChangeValueEvent

#### Description
Emitted when a user uploads a file.

#### Note
- Requires `settings.event.rcbTextAreaChangeValue` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type       | Description                                                       |
|-----------|------------|-------------------------------------------------------------------|
| currValue | `string`   | The value in text area being changed to by the user.              |
| prevValue | `string`   | The previous value in text area before being changed by the user. |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbTextAreaChangeValueEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handleTextAreaChangeValue = (event: RcbTextAreaChangeValueEvent) => {
      // handle the text area change value event
    };

    window.addEventListener("rcb-text-area-change-value", handleTextAreaChangeValue);
    return () => {
      window.removeEventListener("rcb-text-area-change-value", handleTextAreaChangeValue);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbPostLoadChatBotEvent

#### Description
Emitted after the chatbot is loaded.

#### Note
- Requires `settings.event.rcbPostLoadChatBot` to be set to true.

#### Data
| Name      | Type                    | Description                                                     |
|-----------|-------------------------|-----------------------------------------------------------------|
| flow      | `Flow`                  | The flow passed to the chatbot.                                 |
| settings  | `Settings`              | The settings passed to the chatbot.                             |
| styles    | `Styles`                | The styles passed to the chatbot.                               |
| themes    | `Theme \| Array<Theme>` | The themes passed to the chatbot.                               |
| plugins   | `Array<Plugins>`        | The plugins passed to the chatbot.                              |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbPostLoadChatBotEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handlePostLoadChatBot = (event: RcbPostLoadChatBotEvent) => {
      // handle the post load chatbot event
    };

    window.addEventListener("rcb-post-load-chatbot", handlePostLoadChatBot);
    return () => {
      window.removeEventListener("rcb-post-load-chatbot", handlePostLoadChatBot);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```

### RcbPreLoadChatBotEvent

#### Description
Emitted before the chatbot is loaded.

#### Note
- Requires `settings.event.rcbPreLoadChatBot` to be set to true.
- Event is **preventable** with `event.preventDefault()`.

#### Data
| Name      | Type                    | Description                                                     |
|-----------|-------------------------|-----------------------------------------------------------------|
| flow      | `Flow`                  | The flow passed to the chatbot.                                 |
| settings  | `Settings`              | The settings passed to the chatbot.                             |
| styles    | `Styles`                | The styles passed to the chatbot.                               |
| themes    | `Theme \| Array<Theme>` | The themes passed to the chatbot.                               |
| plugins   | `Array<Plugins>`        | The plugins passed to the chatbot.                              |

#### Code Example
```jsx
import { useEffect } from "react";
import { RcbPreLoadChatBotEvent } from "react-chatbotify";

const MyComponent = () => {
  useEffect(() => {
    const handlePreLoadChatBot = (event: RcbPreLoadChatBotEvent) => {
      // handle the pre load chatbot event
    };

    window.addEventListener("rcb-pre-load-chatbot", handlePreLoadChatBot);
    return () => {
      window.removeEventListener("rcb-pre-load-chatbot", handlePreLoadChatBot);
    };
  }, []);

  return (
    <ExampleComponent/>
  );
};
```