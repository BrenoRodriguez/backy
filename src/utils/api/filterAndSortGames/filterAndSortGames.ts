import { SearchOptions } from '../../../types'
import loadGames from '../loadGames'
import { applyFilters, applySearch, applySort } from './gameUtils'

export default async function filterAndSortGames(searchOptions: SearchOptions) {
  const { games } = await loadGames()
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredGames = games

  filteredGames = applySearch(games, searchOptions)
  filteredGames = applyFilters(filteredGames, searchOptions)
  filteredGames = applySort(filteredGames, searchOptions)
  return filteredGames
}
