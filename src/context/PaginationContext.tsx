import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CARDS_PER_PAGE, NAV_BUTTON_LIMIT } from '../utils/constants'
import { Game } from '../types'
import { useGames } from './GamesContext'

interface PaginationContextProps {
  currentPage: number
  currentCards: Game[]
  pageNumbers: number[]
  PAGE_TOTAL: number
  handlePageChange: (page: number) => () => void
  handlePreviousPage: () => () => void
  handleNextPage: () => () => void
}

interface PaginationProviderProps {
  children: ReactNode
}

const PaginationContext = createContext<PaginationContextProps | undefined>(
  undefined,
)

function PaginationProvider({ children }: PaginationProviderProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentCards, setCurrentCards] = useState<Game[]>([])
  const [pageNumbers, setPageNumbers] = useState<number[]>([])
  const games = useGames()

  const PAGE_TOTAL = Math.ceil(games.length / CARDS_PER_PAGE)

  useEffect(() => {
    setCurrentPage(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [games])

  useEffect(() => {
    setCurrentCards(getPaginatedCards())
    setPageNumbers(getPageNumbers())
  }, [games, currentPage])

  function getPaginatedCards() {
    const PAGE_START = (currentPage - 1) * CARDS_PER_PAGE
    return games.slice(PAGE_START, PAGE_START + CARDS_PER_PAGE)
  }

  function getPageNumbers() {
    const FIRST_PAGE = Math.max(
      1,
      currentPage - Math.floor(NAV_BUTTON_LIMIT / 2),
    )
    const LAST_PAGE = Math.min(PAGE_TOTAL, FIRST_PAGE + NAV_BUTTON_LIMIT - 1)
    return Array.from(
      { length: LAST_PAGE - FIRST_PAGE + 1 },
      (_, i) => FIRST_PAGE + i,
    )
  }

  function handlePageChange(page: number) {
    return () => {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function handlePreviousPage() {
    return () => {
      if (currentPage > 1) {
        handlePageChange(currentPage - 1)
      }
    }
  }

  function handleNextPage() {
    return () => {
      if (currentPage < PAGE_TOTAL) {
        handlePageChange(currentPage + 1)
      }
    }
  }

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        currentCards,
        pageNumbers,
        PAGE_TOTAL,
        handlePageChange,
        handlePreviousPage,
        handleNextPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}

function usePagination() {
  const context = useContext(PaginationContext)
  if (!context) {
    throw new Error('usePagination must be used within PaginationProvider')
  }

  return context
}

export { PaginationProvider, usePagination }
