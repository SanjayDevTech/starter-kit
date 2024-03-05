import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 - Page not found</title>
                <meta name="robots" content="noindex" />
                <style dangerouslySetInnerHTML={{
                    __html: styles
                }} />
            </Head>
            <div className="--not-found-container">
                <img src="/assets/astronaut.svg" alt="404" className="--not-found-image" />
                <h1 className="--not-found-title">404 Page not found</h1>
                <h2 className="--not-found-description">
                    The page you are looking for doesn't exist
                </h2>
                <Link href="/" className="--not-found-home-btn">
                    Go to Home
                </Link>
            </div>
        </>
    );
}

const styles = `
:root {
    --font-size-sm: 1rem;
	--font-size-md: 1.375rem;
	--font-size-lg: 2rem;
}
html {
	font-size: 16px;
}
@media screen and (max-width: 1024px) {
	html {
		font-size: 12px;
	}
}
html, body, #__next {
    height: 100%;
    width: 100%;
}
/* 404 page styles start */
.--not-found-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: black;
    padding: 24px;
    color: white;
}

.--not-found-image {
    width: 100%;
    height: 50%;
}

.--not-found-home-btn {
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 6px;
    background-color: white;
    color: black;
    font-size: var(--font-size-sm);
    cursor: pointer;
    text-decoration: none;
    user-select: none;
}

.--not-found-title {
    font-size: var(--font-size-lg);
    margin-bottom: 20px;
    text-align: center;
}

.--not-found-description {
    font-size: var(--font-size-md);
    margin-bottom: 20px;
    text-align: center;
}

/* 404 page styles end */
`
