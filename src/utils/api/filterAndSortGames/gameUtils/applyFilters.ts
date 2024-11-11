import { Game, SearchOptions } from '../../../../types'

export default function applyFilters(
  filteredGames: Game[],
  searchOptions: SearchOptions,
) {
  const { filter } = searchOptions

  if (!filter) {
    return filteredGames
  }

  const { genre, status, expectation, length } = filter

  if (genre && genre.length > 0) {
    filteredGames = filteredGames.filter((game) =>
      genre.every(
        (filterGenre) => game.genre.includes(filterGenre), // Check if the game includes every filter genre
      ),
    )
  }

  if (status) {
    filteredGames = filteredGames.filter((game) => game.status === status)
  }

  if (expectation) {
    filteredGames = filteredGames.filter(
      (game) => game.expectation === expectation,
    )
  }

  if (length) {
    let { min, max } = length
    min = Number(min)
    max = Number(max)
    filteredGames = filteredGames.filter((game) => {
      const gameLength = Number(game.length)
      return (!min || gameLength >= min) && (!max || gameLength <= max)
    })
  }

  return filteredGames
}
