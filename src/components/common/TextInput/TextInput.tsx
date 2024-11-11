import React, { ComponentProps } from 'react'
import styles from './TextInput.module.css'

type TextInputProps = ComponentProps<'input'> & {
  label?: string
  width?: string
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, width = '60ch', ...inputProps }, ref) => {
    return (
      <div className={styles.field}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          {...inputProps}
          ref={ref} // Directly forward the ref here
          type='text'
          className={styles.input}
          style={{ width }}
          autoComplete='one-time-code'
        />
      </div>
    )
  },
)

export default TextInput
