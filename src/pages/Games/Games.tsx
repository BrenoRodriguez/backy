import { useRef } from 'react'
import { Link } from 'react-router-dom'
import EditGameModal from '../../components/container/EditGameModal/EditGameModal'
import GameList from '../../components/container/GameList/GameList'
import Header from '../../components/container/Header/Header'
import LogGameModal from '../../components/container/LogGameModal/LogGameModal'
import SearchSettings from '../../components/container/SearchSettings/SearchSettings'
import TitleBar from '../../components/container/TitleBar/TitleBar'
import { EditGameProvider } from '../../context/EditGameContext'
import { PaginationProvider } from '../../context/PaginationContext'
import useVisibility from '../../hooks/useVisibility'
import styles from './Games.module.css'

export default function Games() {
  const { isVisible: isLogGameModalVisible, toggleVisibility: toggleLogGameModal } = useVisibility()
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <TitleBar />
      <Header>
        <nav>
          <Link
            to='/stats'
            className={styles.nav}
          >
            Stats
          </Link>
          <Link
            to='/'
            className={styles.nav}
          >
            Home
          </Link>
        </nav>
        <button
          className={styles.log}
          onClick={() => toggleLogGameModal()}
        >
          Log Game
        </button>
      </Header>
      <EditGameProvider>
        <div>
          <h2 className={styles.title}>Your Games</h2>
          <PaginationProvider>
            <SearchSettings />
            <GameList />
          </PaginationProvider>
        </div>
        <EditGameModal />
      </EditGameProvider>
      <LogGameModal
        isLogGameModalVisible={isLogGameModalVisible}
        toggleLogGameModal={toggleLogGameModal}
        inputRef={inputRef}
      />
    </>
  )
}
