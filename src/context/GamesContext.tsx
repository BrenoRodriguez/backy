import { createContext, ReactNode, useContext, useState } from 'react'
import { Game, SortOrder, SortType } from '../types'
import { filterAndSortGames } from '../utils/api'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from '../hooks/useDebounce'

interface GamesProviderProps {
  children: ReactNode
}

interface FiltersContextProps {
  searchQuery: string
  genreFilter: string[]
  statusFilter: string
  expectationFilter: string
  minFilter: string
  maxFilter: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  setGenreFilter: React.Dispatch<React.SetStateAction<string[]>>
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>
  setExpectationFilter: React.Dispatch<React.SetStateAction<string>>
  setMinFilter: React.Dispatch<React.SetStateAction<string>>
  setMaxFilter: React.Dispatch<React.SetStateAction<string>>
  clearFilters: () => void
}

interface SortContextProps {
  sortType: SortType
  sortOrder: SortOrder
  setSortType: React.Dispatch<React.SetStateAction<SortType>>
  setSortOrder: React.Dispatch<React.SetStateAction<SortOrder>>
  toggleSortOrder: () => void
  changeSortType: (type: SortType) => void
}

const GamesContext = createContext<Game[] | undefined>(undefined)
const FiltersContext = createContext<FiltersContextProps | undefined>(undefined)
const SortContext = createContext<SortContextProps | undefined>(undefined)

function GamesProvider({ children }: GamesProviderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [genreFilter, setGenreFilter] = useState<string[]>([])
  const [statusFilter, setStatusFilter] = useState('')
  const [expectationFilter, setExpectationFilter] = useState('')
  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [sortType, setSortType] = useState<SortType>('default')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')

  const debouncedSearch = useDebounce(searchQuery)
  const debouncedMin = useDebounce(minFilter)
  const debouncedMax = useDebounce(maxFilter)

  function clearFilters() {
    setGenreFilter([])
    setStatusFilter('')
    setExpectationFilter('')
    setMinFilter('')
    setMaxFilter('')
  }

  function toggleSortOrder() {
    setSortOrder((previousOrder) => (previousOrder === 'asc' ? 'desc' : 'asc'))
  }

  function changeSortType(type: SortType) {
    setSortType(type)
    setSortOrder('asc')
  }

  const { data: games = [] } = useQuery({
    queryFn: () =>
      filterAndSortGames({
        search: debouncedSearch,
        filter: {
          genre: genreFilter,
          status: statusFilter,
          expectation: expectationFilter,
          length: {
            min: debouncedMin,
            max: debouncedMax,
          },
        },
        sort: {
          type: sortType,
          order: sortOrder,
        },
      }),
    queryKey: [
      'games',
      debouncedSearch,
      genreFilter,
      statusFilter,
      expectationFilter,
      debouncedMin,
      debouncedMax,
      sortType,
      sortOrder,
    ],
  })

  return (
    <GamesContext.Provider value={games}>
      <FiltersContext.Provider
        value={{
          searchQuery,
          genreFilter,
          expectationFilter,
          statusFilter,
          setSearchQuery,
          setGenreFilter,
          setStatusFilter,
          setExpectationFilter,
          minFilter,
          setMinFilter,
          maxFilter,
          setMaxFilter,
          clearFilters,
        }}
      >
        <SortContext.Provider
          value={{
            sortType,
            setSortType,
            sortOrder,
            setSortOrder,
            toggleSortOrder,
            changeSortType,
          }}
        >
          {children}
        </SortContext.Provider>
      </FiltersContext.Provider>
    </GamesContext.Provider>
  )
}

function useGames() {
  const context = useContext(GamesContext)
  if (context === undefined) {
    throw new Error('useGames must be used within GamesProvider')
  }
  return context
}

function useFilters() {
  const context = useContext(FiltersContext)
  if (context === undefined) {
    throw new Error('useFilters must be used within GamesProvider')
  }
  return context
}

function useSort() {
  const context = useContext(SortContext)
  if (context === undefined) {
    throw new Error('useSort must be used within GamesProvider')
  }
  return context
}

export { GamesProvider, useGames, useFilters, useSort }
