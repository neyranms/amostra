import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsGrid3X3GapFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neyran portfolio</title>
        <meta name="Test" content="Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Test
          <a>
          
          <span className={styles.logo}>
            <Image src="" alt="perfil" width={220} height={250} />
          </span>
        </a>
        </h1>

        <p className={styles.description}>Test{''}
          <code className={styles.code}>Test</code>
        </p>

        <div className={styles.grid}>
          <a href="https://56bits.digital/api/1" className={styles.card}>
            <h2>Test_1 &rarr;</h2>
            <p>description</p>
          </a>

          <a href="https://56bits.digital/api/2" className={styles.card}>
            <h2>Test_2 &rarr;</h2>
            <p>description</p>
          </a>

          <a
            href="https://56bits.digital/api/3"
            className={styles.card}
          >
            <h2>Test_3 &rarr;</h2>
            description
          </a>

          <a
            href="https://56bits.digital/api/4"
            className={styles.card}
          >
            <h2>Test_4 &rarr;</h2>
            <p>
              description
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
