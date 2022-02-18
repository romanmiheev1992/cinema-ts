import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/dist/shared/lib/head';
import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return  <>
            <Head>
              <title>My top - наш лучший топ</title>
              <link rel="icon" href="/favicon.ico" />
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
          </>
  
}

export default MyApp
