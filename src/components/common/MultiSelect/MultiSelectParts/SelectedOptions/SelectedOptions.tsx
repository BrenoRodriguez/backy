import { useMultiSelect } from '../../../../../context/MultiSelectContext'
import styles from './SelectedOptions.module.css'

const SelectedOptions = () => {
  const { valueToSubmit, removeSelectedOption } = useMultiSelect()
  return (
    <div className={styles.optionContainer}>
      {valueToSubmit.map((option, index) => (
        <div key={option + index} className={styles.option}>
          {option}
          <span
            onClick={() => removeSelectedOption(option)}
            className={styles.removeButton}
          >
            &#x2715;
          </span>
        </div>
      ))}
    </div>
  )
}

export default SelectedOptions
