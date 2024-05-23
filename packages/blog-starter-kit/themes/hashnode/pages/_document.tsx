import { Head, Html, Main, NextScript } from 'next/document';
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				<div id="hn-toast" />
        <Script src="https://godly.sanjaydev.tech/latest.js"  />
			</body>
		</Html>
	);
}
