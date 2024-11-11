import { usePagination } from '../../../context/PaginationContext'
import Card from '../../common/Card/Card'
import styles from './GameList.module.css'
import GameListNavBar from './GameListNavBar/GameListNavBar'

export default function GameList() {
  const { currentCards } = usePagination()
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {currentCards.map((game) => (
          <Card game={game} key={game.id} />
        ))}
      </div>
      <GameListNavBar />
    </section>
  )
}
