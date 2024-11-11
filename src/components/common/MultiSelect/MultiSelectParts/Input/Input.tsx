import { ComponentProps } from 'react'
import { useMultiSelect } from '../../../../../context/MultiSelectContext'
import SuggestionsDropdown from '../../../SuggestionsDropdown/SuggestionsDropdown'
import styles from './Input.module.css'

type InputProps = ComponentProps<'input'>

const Input = ({ ...inputProps }: InputProps) => {
  const {
    inputRef,
    updateFilter,
    handleKeyDown,
    handleBlur,
    selectOption,
    filteredOptions,
    selectedIndex,
  } = useMultiSelect()

  return (
    <>
      <input
        type='text'
        className={styles.input}
        ref={inputRef}
        onChange={(ev) => updateFilter(ev)}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') ev.preventDefault()
          handleKeyDown(ev)
        }}
        onBlur={() => handleBlur()}
        {...inputProps}
        autoComplete='one-time-code'
      />
      <SuggestionsDropdown
        contextProps={{
          condition: filteredOptions.length > 0,
          selectOption,
          optionsArray: filteredOptions,
          selectedIndex,
        }}
      />
    </>
  )
}

export default Input
