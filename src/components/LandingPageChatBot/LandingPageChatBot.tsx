import React from 'react';
import { useHistory } from 'react-router-dom';

import ChatBot, { Params } from "react-chatbotify";


// boolean indicating if user is on desktop (otherwise treated as on mobile)
const isDesktop = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

const LandingPageChatBot = () => {
	const history = useHistory();
	const navigatePage = (page, params) => {
		if (page.startsWith("https")) {
			if (isDesktop) {
				window.open(page);
			} else {
				window.location.href = page;
			}
		} else {
			if (!isDesktop) {
				params.toggleChatWindow(false);
			}
			history.push(page);
		}
	};
	const helpOptions = ["Quickstart", "API Docs", "Examples", "Playground"];

	const settings = {
		general: {
			embedded: true
		},
		notification: {
			disabled: true
		},
		chatHistory: {
			disabled: true
		},
		header: {
			showAvatar: true,
		},
		footer: {
			text: (<></>),
		},
		botBubble: {
			showAvatar: true,
			simulateStream: true
		}
	}

	const styles = {
		chatWindowStyle: {
			height: 404,
			width: 300
		},
		headerStyle: {
			padding: 8,
			background: "#5a5a5a",
			height: 44
		},
		chatInputContainerStyle: {
			height: 57,
		},
		chatInputAreaStyle: {
			fontSize: 12
		},
		footerStyle: {
			height: 41
		},
		botBubbleStyle: {
			maxWidth: "75%",
			textAlign: "left",
			fontSize: 12
		},
		userBubbleStyle: {
			textAlign: "left",
			fontSize: 12
		},
		botOptionStyle: {
			fontSize: 12
		},
		botOptionHoveredStyle: {
			fontSize: 12
		}
	}

	const flow = {
		start: {
			message: "Welcome to React ChatBotify 👋!",
			transition: {duration: 1000},
			path: "show_options",
			chatDisabled: true
		},
		show_options: {
			message: "Let's get you started below 😊!",
			options: helpOptions,
			path: "process_options"
		},
		prompt_again: {
			message: isDesktop ? "Do you need any other help?" : "",
			options: helpOptions,
			path: "process_options"
		},
		unknown_input: {
			message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on " +
				"the Github option and open an issue there or visit our discord.",
			options: helpOptions,
			path: "process_options"
		},
		process_options: {
			transition: {duration: 0},
			chatDisabled: true,
			path: async (params: Params) => {
				let link = "";
				switch (params.userInput) {
				case "Quickstart":
					link = "/docs/v2/introduction/quickstart/";
					break;
				case "API Docs":
					link = "/docs/v2/api/settings";
					break;
				case "Examples":
					link = "/docs/v2/examples/basic_form";
					break;
				case "Playground":
					link = "/playground";
					break;
				default:
					return "unknown_input";
				}
				await params.injectMessage("Sit tight! I'll send you right there!");
				setTimeout(() => {
					navigatePage(link, params);
				}, 2000)
				return "repeat"
			},
		},
		repeat: {
			transition: {duration: 3000},
			chatDisabled: true,
			path: "prompt_again",
		},
	}
	return (
		<ChatBot id="landing-page-chat-bot" flow={flow} settings={settings} styles={styles}></ChatBot>
	);
};

export default LandingPageChatBot;