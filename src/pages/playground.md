---
title: Playground
---

```jsx live noInline title=MyComponent.js
const MyChatBot = () => {
    const settings = {
        general: {embedded: true},
        chatHistory: {storageKey: "playground"},
        botBubble: {simulateStream: true}
    }
    const flow={
        start: {
            message: "Welcome to the playground 🥳! Edit and experiment as you wish!",
            path: "end_loop"
        },
        end_loop: {
            message: (params) => `Received: ${params.userInput}`,
            path: "end_loop"
        }
    }
    return (
        <ChatBot settings={settings} flow={flow}/>
    );
};

render(<MyChatBot/>)
```