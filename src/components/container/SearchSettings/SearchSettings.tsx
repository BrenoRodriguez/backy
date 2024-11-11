import useVisibility from '../../../hooks/useVisibility'
import SearchBar from '../../common/SearchBar/SearchBar'
import FilterSettingsDropdown from '../FilterSettingsDropdown/FilterSettingsDropdown'
import styles from './SearchSettings.module.css'

export default function SearchSettings() {
  const { isVisible, toggleVisibility } = useVisibility()
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.filterWrapper}>
          <button
            className={styles.filter}
            onClick={() => toggleVisibility()}
          >
            Filter
          </button>
          {isVisible && <FilterSettingsDropdown />}
        </div>
        <SearchBar />
        <p className={styles.sort}>Sort</p>
      </section>
    </>
  )
}
