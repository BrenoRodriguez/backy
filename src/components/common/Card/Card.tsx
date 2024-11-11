import { CardProvider } from '../../../context/CardContext'
import { Game } from '../../../types'
import styles from './Card.module.css'
import { CardCover, CardTitle } from './CardComponents'
import CardDetails from './CardComponents/CardDetails/CardDetails'

interface CardProps {
  game: Game
}

const Card = ({ game }: CardProps) => {
  return (
    <CardProvider game={game}>
      <div className={styles.card}>
        <CardCover />
        <div className={styles.cardContent}>
          <CardTitle />
          <hr className={styles.divider} />
          <CardDetails />
        </div>
      </div>
    </CardProvider>
  )
}

export default Card
