import { ReactNode } from 'react'
import styles from './Modal.module.css'
import { Game } from '../../../types'

interface ModalProps {
  isVisible: boolean
  toggleVisibility: (game?: Game) => void | (() => void)
  title: string
  children: ReactNode
}

const Modal = ({
  isVisible,
  toggleVisibility,
  title,
  children,
}: ModalProps) => {
  return (
    isVisible && (
      <section aria-modal='true' role='dialog' className={styles.overlay}>
        <section className={styles.content}>
          <h3 className={styles.title}>
            {title}
            <button
              onClick={() => toggleVisibility()}
              className={styles.closeButton}
            >
              &#x2715;
            </button>
          </h3>
          {children}
        </section>
      </section>
    )
  )
}

export default Modal
