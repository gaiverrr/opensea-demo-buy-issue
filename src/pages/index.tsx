import type {NextPage} from 'next'
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
                <a href="https://testnets.opensea.io/assets/0xa480902611e4aa4b32347a853aa771da78b495f7/4"
                   target={'_blank'} rel="noreferrer">item for purchase</a>
            </main>

        </div>
    )
}

export default Home
