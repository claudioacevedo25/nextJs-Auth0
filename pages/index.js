import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Contenido Publico</p>
        <Link href="/access/public">
          <a>Ir a los accesos del sitio</a>
        </Link>
      </section>
    </Layout>
  )
}
