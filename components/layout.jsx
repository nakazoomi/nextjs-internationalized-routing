import Head from 'next/head';
import Link from 'next/link';
import classes from '../styles/layout.module.css';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  let router = useRouter();

  return (
    <div>
      <Head>
        <title>Next.js - Internationalized Routing - i18n Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER  */}
      <header className={classes.header}>
        <nav className={classes.nav}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      <main className={classes.content}>{children}</main>

      <footer className={classes.footer}>
        {/* LANGUAGE SWITCHER */}
        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
