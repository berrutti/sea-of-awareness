import "rbx/index.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Lato&display=swap" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
