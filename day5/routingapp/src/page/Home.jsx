import styles from './Home.module.css'
import NavBar from '../components/NavBar'
export default function Home() {
    return (
        <div className={styles.home}>
            <NavBar />
            <h1>Hey i am home</h1>
        </div>
    )
}