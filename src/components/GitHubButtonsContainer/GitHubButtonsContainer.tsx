import React from 'react';
import styles from "./styles.module.css";
import GitHubButton from 'react-github-btn';

export default function GitHubButtonsContainer(): JSX.Element {
	return (
		<div className={styles.gitHubButtonContainer}>
			<div className={styles.gitHubButton}>
				<GitHubButton
					href="https://github.com/react-chatbotify/react-chatbotify"
					data-color-scheme="no-preference: light; light: light_high_contrast; dark: dark_high_contrast;"
					data-size="large"
					data-show-count="true"
					aria-label="Star react-chatbotify/react-chatbotify on GitHub"
				>
					Star
				</GitHubButton>
			</div>
			<div className={styles.gitHubButton}>
				<GitHubButton
					href="https://github.com/react-chatbotify/react-chatbotify/fork"
					data-color-scheme="no-preference: light; light: light_high_contrast; dark: dark_high_contrast;"
					data-size="large"
					data-show-count="true"
					aria-label="Fork react-chatbotify/react-chatbotify on GitHub"
				>
					Fork
				</GitHubButton>
			</div>
			<div className={styles.gitHubButton}>
				<GitHubButton
					href="https://github.com/tjtanjin"
					data-color-scheme="no-preference: light; light: light_high_contrast; dark: dark_high_contrast;"
					data-size="large"
					data-show-count="true"
					aria-label="Follow @tjtanjin on GitHub"
				>
					Follow @tjtanjin
				</GitHubButton>
			</div>
		</div>
	);
}
