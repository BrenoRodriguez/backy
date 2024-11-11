import { ComponentProps } from 'react'
import styles from './SuggestionsDropdown.module.css'

type SuggestionsDropdownProps = ComponentProps<'li'> & {
  contextProps: {
    optionsArray: string[]
    selectOption: (option: string) => void
    condition: boolean
    selectedIndex?: number
  }
  width?: string
}

const SuggestionsDropdown = ({
  contextProps,
  width = '60ch',
  ...liProps
}: SuggestionsDropdownProps) => {
  const { condition, optionsArray, selectOption, selectedIndex } = contextProps
  return (
    <>
      {condition && (
        <ul className={styles.dropdown} style={{ width: width }} role='listbox'>
          {optionsArray.map((option, index) => (
            <li
              key={index}
              className={styles.option}
              role='option'
              onClick={() => selectOption(option)}
              {...liProps}
              aria-selected={selectedIndex === index ? true : undefined}
              style={{
                backgroundColor:
                  selectedIndex === index ? '#ff8fa3' : 'transparent',
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default SuggestionsDropdown
