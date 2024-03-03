import parse from 'html-react-parser';
import Head from 'next/head';

import { useAppContext } from './contexts/appContext';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const getBasePath = () => {
	if (BASE_URL && BASE_URL.indexOf('/') !== -1) {
		return BASE_URL.substring(BASE_URL.indexOf('/'));
	}
	return "";
};

export const Meta = () => {
	const { publication } = useAppContext();
	const { metaTags, favicon } = publication;
	const defaultFavicons = (
		<>
			<link rel="apple-touch-icon" sizes="180x180" href={`${getBasePath()}/favicon/apple-touch-icon.png`} />
			<link rel="icon" type="image/png" sizes="32x32" href={`${getBasePath()}/favicon/favicon-32x32.png`} />
			<link rel="icon" type="image/png" sizes="16x16" href={`${getBasePath()}/favicon/favicon-16x16.png`} />
			<link rel="mask-icon" href={`${getBasePath()}/favicon/safari-pinned-tab.svg`} color="#000000" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="theme-color" content="#000" />
		</>
	);

	return (
		<Head>
			{favicon ? <link rel="icon" type="image/png" href={favicon} /> : defaultFavicons}
			<meta name="msapplication-config" content={`${getBasePath()}/favicon/browserconfig.xml`} />
			<link rel="alternate" type="application/rss+xml" href={`${getBasePath()}/rss.xml`} />
			{metaTags && parse(metaTags)}
		</Head>
	);
};
