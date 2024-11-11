import { ComponentProps } from 'react'
import styles from './Autocomplete.module.css'
import useAutoComplete from '../../../hooks/useAutocomplete'
import SuggestionsDropdown from '../SuggestionsDropdown/SuggestionsDropdown'

type AutocompleteProps = ComponentProps<'input'> & {
  allOptions: string[]
  label?: string
  width?: string
}

const Autocomplete = ({
  allOptions,
  label,
  width = '60ch',
  ...inputProps
}: AutocompleteProps) => {
  const {
    updateFilter,
    selectOption,
    handleKeyDown,
    handleBlur,
    filteredOptions,
    selectedIndex,
    inputRef,
  } = useAutoComplete(allOptions)
  return (
    <div className={styles.field}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.helper}>
        <input
          type='text'
          ref={inputRef}
          {...inputProps}
          onChange={(ev) => updateFilter(ev)}
          onKeyDown={(ev) => handleKeyDown(ev)}
          onBlur={() => handleBlur()}
          className={styles.input}
          style={{ width: width }}
          autoComplete='one-time-code'
        />
        <SuggestionsDropdown
          contextProps={{
            condition: filteredOptions.length > 0,
            optionsArray: filteredOptions,
            selectOption,
            selectedIndex,
          }}
          width={width}
        />
      </div>
    </div>
  )
}

export default Autocomplete
