import { useCard } from '../../../../../context/CardContext'
import useGetCardTitle from '../../../../../hooks/useGetCardTitle'
import styles from './CardTitle.module.css'

const CardTitle = () => {
  const { name } = useCard()
  const { isShortened, displayedTitle } = useGetCardTitle(name)
  return (
    <div className={styles.cardTitleContainer}>
      <p className={styles.cardTitle}>{displayedTitle}</p>
      {isShortened && <div className={styles.titleTooltip}>{name}</div>}
    </div>
  )
}

export default CardTitle
