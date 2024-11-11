import { getCurrentWindow } from '@tauri-apps/api/window'
import styles from './TitleBar.module.css'

export default function TitleBar() {
  const appWindow = getCurrentWindow()
  return (
    <div data-tauri-drag-region className={styles.titlebar}>
      <button className={styles.button} onClick={() => appWindow.close()}>
        <span className={styles.close}> &#x2715;</span>
      </button>
      <button
        className={styles.button}
        onClick={() => appWindow.toggleMaximize()}
      >
        <span className={styles.maximize}></span>
      </button>
      <button className={styles.button} onClick={() => appWindow.minimize()}>
        <span className={styles.minimize}>&#x2012;</span>
      </button>
    </div>
  )
}
