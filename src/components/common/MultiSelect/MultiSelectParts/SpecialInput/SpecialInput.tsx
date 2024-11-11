import { ComponentProps } from 'react'
import { useMultiSelect } from '../../../../../context/MultiSelectContext'
import SuggestionsDropdown from '../../../SuggestionsDropdown/SuggestionsDropdown'
import SelectedOptions from '../SelectedOptions/SelectedOptions'
import styles from './SpecialInput.module.css'

type SpecialInputProps = ComponentProps<'input'>

const SpecialInput = ({ ...inputProps }: SpecialInputProps) => {
  const {
    inputRef,
    updateFilter,
    handleKeyDown,
    handleBlur,
    selectOption,
    filteredOptions,
    selectedIndex,
    width,
  } = useMultiSelect()

  return (
    <>
      <div className={styles.fakeInput} style={{ width: width }}>
        <SelectedOptions />
        <input
          type='text'
          {...inputProps}
          className={styles.input}
          ref={inputRef}
          onChange={(ev) => updateFilter(ev)}
          onKeyDown={(ev) => {
            if (ev.key === 'Enter') ev.preventDefault()
            handleKeyDown(ev)
          }}
          onBlur={() => handleBlur()}
          autoComplete='one-time-code'
        />
      </div>
      <SuggestionsDropdown
        contextProps={{
          condition: filteredOptions.length > 0,
          selectOption,
          optionsArray: filteredOptions,
          selectedIndex,
        }}
        width={width}
      />
    </>
  )
}

export default SpecialInput
