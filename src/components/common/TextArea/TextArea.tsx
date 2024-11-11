import { ComponentProps } from 'react'
import styles from './TextArea.module.css'

type TextAreaProps = ComponentProps<'textarea'>

const TextArea = ({ ...textAreaProps }: TextAreaProps) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>Notes</label>
      <textarea
        name='notes'
        {...textAreaProps}
        className={styles.textarea}
        autoComplete='one-time-code'
      />
    </div>
  )
}

export default TextArea
