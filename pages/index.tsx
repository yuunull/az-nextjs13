import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World!!</title>
        <meta name="description" content="Practice Azure Static Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>初めてAzure Static Web Appにホスティングします</div>
        <div>変更確認</div>
      </main>
    </>
  );
}
