import { Game, SearchOptions } from '../../../../types'

export default function applySearch(
  filteredGames: Game[],
  searchOptions: SearchOptions,
) {
  const { search } = searchOptions

  const filterBySearch = (game: Game) => {
    return search ?
        game.name.toLowerCase().includes(search.toLowerCase())
      : true
  }

  return filteredGames.filter(filterBySearch)
}
