import styles from './Select.module.css'
import useSelect from '../../../hooks/useSelect'
import SuggestionsDropdown from '../SuggestionsDropdown/SuggestionsDropdown'

interface SelectProps {
  optionsArray: string[]
  state: {
    valueToSubmit: string
    setValueToSubmit: React.Dispatch<React.SetStateAction<string>>
  }
  label?: string
  width?: string
}

const Select = ({
  optionsArray,
  state,
  label,
  width = '60ch',
}: SelectProps) => {
  const { valueToSubmit, setValueToSubmit } = state
  const { isOpen, toggleIsOpen, selectOption } = useSelect(setValueToSubmit)

  return (
    <div className={styles.field}>
      {label && <p className={styles.label}>{label}</p>}
      <div
        className={styles.input}
        style={{ width: width, borderColor: isOpen ? '#ff8fa3' : '#27272a' }}
        onClick={() => toggleIsOpen()}
      >
        {valueToSubmit}
      </div>
      <SuggestionsDropdown
        contextProps={{ optionsArray, selectOption, condition: isOpen }}
        width={width}
      />
    </div>
  )
}

export default Select
