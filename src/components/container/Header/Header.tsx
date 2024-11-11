import { ReactNode } from 'react'
import styles from './Header.module.css'

interface HeaderProps {
  children: ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Back</h1>
      <div className={styles.leftContainer}>{children}</div>
    </header>
  )
}
