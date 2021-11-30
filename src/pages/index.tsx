import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import buyToken from "../features/buyToken";

const Home: NextPage = () => {
  const buy = async () => {
    await buyToken('4')
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={() => buy()}>
          buy
        </button>
      </main>

    </div>
  )
}

export default Home
