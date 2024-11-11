import { useCard } from '../../../../../context/CardContext'
import {
  GENRE_DISPLAY_LIMIT,
  STRING_START,
} from '../../../../../utils/constants'
import styles from './CardDetails.module.css'

const CardDetails = () => {
  const { genre, status, expectation, length, platform } = useCard()

  return (
    <div className={styles.cardDetailsContainer}>
      <p>{`${genre.slice(STRING_START, GENRE_DISPLAY_LIMIT).join(', ')}.`}</p>
      <p>{status}</p>
      <p>{expectation}</p>
      <p>{`${length !== undefined ? length : 'Unknown'} Hours`}</p>
      <p>{platform}</p>
    </div>
  )
}

export default CardDetails
