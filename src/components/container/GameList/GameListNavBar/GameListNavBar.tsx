import { usePagination } from '../../../../context/PaginationContext'
import styles from './GameListNavBar.module.css'

export default function GameListNavBar() {
  const {
    currentPage,
    PAGE_TOTAL,
    pageNumbers,
    handlePageChange,
    handleNextPage,
    handlePreviousPage,
  } = usePagination()

  return (
    <nav className={styles.navBar}>
      <button
        onClick={handlePageChange(1)}
        disabled={currentPage === 1}
        className={styles.button}
      >
        &#171;
      </button>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={styles.button}
      >
        &#8249;
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={handlePageChange(pageNumber)}
          className={`${styles.button} ${currentPage === pageNumber ? styles.activeButton : ''}`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentPage === PAGE_TOTAL}
        className={styles.button}
      >
        &#8250;
      </button>
      <button
        onClick={handlePageChange(PAGE_TOTAL)}
        disabled={currentPage === PAGE_TOTAL}
        className={styles.button}
      >
        &#187;
      </button>
    </nav>
  )
}
