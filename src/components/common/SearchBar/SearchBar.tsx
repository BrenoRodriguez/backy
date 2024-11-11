import { useFilters } from '../../../context/GamesContext'

import SearchIcon from '../../icons/SearchIcon'
import styles from './SearchBar.module.css'
export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useFilters()

  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.search} />
      <input
        className={styles.input}
        type='text'
        placeholder='Search...'
        name='search'
        value={searchQuery}
        onChange={(ev) => setSearchQuery(ev.target.value)}
        autoComplete='off'
      />
      <span className={styles.delete} onClick={() => setSearchQuery('')}>
        &#x2715;
      </span>
    </div>
  )
}
