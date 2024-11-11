import { useFilters } from '../../../../context/GamesContext'
import styles from './LengthInput.module.css'

export default function LengthInput() {
  const { minFilter, maxFilter, setMinFilter, setMaxFilter } = useFilters()
  return (
    <div className={styles.field}>
      <label className={styles.label}>Length</label>
      <div className={styles.wrapper}>
        <input
          type='text'
          placeholder='min'
          value={minFilter}
          onChange={(ev) => setMinFilter(ev.target.value)}
          className={styles.input}
          autoComplete='one-time-code'
        />
        <input
          type='text'
          placeholder='max'
          value={maxFilter}
          onChange={(ev) => setMaxFilter(ev.target.value)}
          className={styles.input}
          autoComplete='one-time-code'
        />
      </div>
    </div>
  )
}
