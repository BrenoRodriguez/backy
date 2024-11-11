import { Link } from 'react-router-dom'
import TitleBar from '../../components/container/TitleBar/TitleBar'
import Header from '../../components/container/Header/Header'
import styles from './Games.module.css'
import { PaginationProvider } from '../../context/PaginationContext'
import GameList from '../../components/container/GameList/GameList'
import SearchSettings from '../../components/container/SearchSettings/SearchSettings'
import useVisibility from '../../hooks/useVisibility'
import LogGameModal from '../../components/container/LogGameModal/LogGameModal'
import EditGameModal from '../../components/container/EditGameModal/EditGameModal'
import { EditGameProvider } from '../../context/EditGameContext'
import { useRef } from 'react'

export default function Games() {
  const {
    isVisible: isLogGameModalVisible,
    toggleVisibility: toggleLogGameModal,
  } = useVisibility()
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <TitleBar />
      <Header>
        <Link
          to='/'
          className={styles.nav}
        >
          Home
        </Link>
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
