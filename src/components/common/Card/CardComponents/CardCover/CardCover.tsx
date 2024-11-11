import { useCard } from '../../../../../context/CardContext'
import { useGameEdit } from '../../../../../context/EditGameContext'
import EditIcon from '../../../../icons/EditIcon'
import styles from './CardCover.module.css'

const CardCover = () => {
  const game = useCard()
  const { toggleEditModalVisibility } = useGameEdit()
  const { name, cover } = game
  return (
    <div className={styles.cardCover}>
      <img
        src={cover}
        alt={`${name} cover art`}
        className={styles.cardImage}
      />
      <EditIcon
        className={styles.editButton}
        onClick={() => toggleEditModalVisibility(game)}
      />
    </div>
  )
}

export default CardCover
