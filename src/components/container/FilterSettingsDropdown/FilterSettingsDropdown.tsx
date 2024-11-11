import LengthInput from './LengthInput/LengthInput'
import MultiSelect from '../../common/MultiSelect/MultiSelect'
import suggestions from '../../../utils/suggestion-data'
import Select from '../../common/Select/Select'
import styles from './FilterSettingsDropdown.module.css'
import { useFilters } from '../../../context/GamesContext'
import { useEffect } from 'react'

export default function FilterSettingsDropdown() {
  useEffect(() => {
    !suggestions.status.includes('') && suggestions.status.unshift('')
    !suggestions.expectation.includes('') && suggestions.expectation.unshift('')
  }, [])

  const {
    setGenreFilter,
    genreFilter,
    setStatusFilter,
    setExpectationFilter,
    statusFilter,
    expectationFilter,
    clearFilters,
  } = useFilters()

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          Filter Settings
          <button className={styles.clearButton} onClick={() => clearFilters()}>
            Clear Filters
          </button>
        </h3>

        <div className={styles.settings}>
          <MultiSelect
            allOptions={suggestions.genre}
            width='490px'
            state={{
              valueToSubmit: genreFilter,
              setValueToSubmit: setGenreFilter,
            }}
          >
            <label className={styles.genreLabel}>Genre</label>
            <MultiSelect.SpecialInput name='genre' />
          </MultiSelect>

          <Select
            optionsArray={suggestions.status}
            label='Status'
            width='490px'
            state={{
              valueToSubmit: statusFilter,
              setValueToSubmit: setStatusFilter,
            }}
          />

          <div className={styles.row}>
            <Select
              optionsArray={suggestions.expectation}
              label='Expectation'
              width='299px'
              state={{
                valueToSubmit: expectationFilter,
                setValueToSubmit: setExpectationFilter,
              }}
            />
            <LengthInput />
          </div>
        </div>
      </div>
    </section>
  )
}
