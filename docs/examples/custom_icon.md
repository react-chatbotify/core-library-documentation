---
sidebar_position: 15
title: Custom Icon
description: custom icon chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Custom Icon

The following is an example for using a custom icon for audio button, as well as changing the color of the icon for the notification button. For the audio button, this example provides an **image URL** to modify it. Note that you can also import a **SVG component** directly if you wish. The benefit of importing a SVG component is that you can modify it using css e.g. `fill: "red"`. The notification button demonstrates the modification of the icon color (the library by default **imports all icons as SVG components** to ease customisations).

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
    const flow={
		start: {
			message: "Check out the audio and notification button icons!"
		}
	}
	
	const settings = {
        audio: {
            // can also import and use svg components directly instead of image url
            icon: "https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Audio-512.png",
            iconDisabled: "https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Audio-512.png",
            disabled: false
        },
		general: {
			embedded: true
		},
		chatHistory: {
			storageKey: "example_custom_icon"
		}
	}

    const styles = {
        notificationIconStyle: {
            fill: "pink"
        }
    }
	return (
		<ChatBot settings={settings} styles={styles} flow={flow}/>
	);
};

render(<MyChatBot/>)
```