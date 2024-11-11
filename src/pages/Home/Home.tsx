import { Link } from 'react-router-dom'
import TitleBar from '../../components/container/TitleBar/TitleBar'
import Header from '../../components/container/Header/Header'
import styles from './Home.module.css'
export default function Home() {
  return (
    <>
      <TitleBar />
      <Header>
        <Link to='/games' className={styles.nav}>
          Games
        </Link>
      </Header>
    </>
  )
}
