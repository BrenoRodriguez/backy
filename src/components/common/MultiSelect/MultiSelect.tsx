import { ReactNode } from 'react'
import styles from './MultiSelect.module.css'
import { MultiSelectProvider } from '../../../context/MultiSelectContext'
import { Input, SelectedOptions, SpecialInput } from './MultiSelectParts'

type MultiSelectProps = {
  children: ReactNode
  allOptions: string[]
  state: {
    valueToSubmit: string[]
    setValueToSubmit: React.Dispatch<React.SetStateAction<string[]>>
  }
  width?: string
}

const MultiSelect = ({
  children,
  allOptions,
  state,
  width = '60ch',
}: MultiSelectProps) => {
  return (
    <div className={styles.field}>
      <MultiSelectProvider allOptions={allOptions} state={state} width={width}>
        {children}
      </MultiSelectProvider>
    </div>
  )
}

MultiSelect.Input = Input

MultiSelect.SpecialInput = SpecialInput

MultiSelect.SelectedOptions = SelectedOptions

export default MultiSelect
