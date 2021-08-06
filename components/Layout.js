// import styles from '../styles/layout.module.css';
// // export default function Layout({ children }) {
// //     return <div>{children}</div>
// //   }
// import React from 'react';

// const Layout = ({ children}) => <div className={styles.container}>{children}</div>;

// export default Layout;

import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useEffect } from 'react';

const name = 'Maxi'
export const siteTitle = 'Test auth0'

export default function Layout({ children, home }) {
  useEffect(()=>{
    
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
      </header>
      <main>{children}</main>
      {!home && (
        <>
        <div className={styles.backToHome}>
            <ArrowBackIcon/>
          <Link href="/">
            <a> Back to home</a>
          </Link>
        </div>
        <div className={styles.backToHome}>
             <ArrowForwardIcon/>
           <Link href="/access/private">
            <a> Go to private</a>
          </Link>
        </div>
        </>
      )}
    </div>
  )
}