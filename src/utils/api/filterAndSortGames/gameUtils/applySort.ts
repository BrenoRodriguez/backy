import { Game, SearchOptions } from '../../../../types'

export default function applySort(
  filteredGames: Game[],
  searchOptions: SearchOptions,
) {
  const { sort } = searchOptions
  const { type, order } = sort

  switch (type) {
    case 'default':
      break
    case 'name':
      filteredGames.sort((firstGame, secondGame) => {
        const comparison = firstGame.name.localeCompare(secondGame.name)
        return order === 'asc' ? comparison : -comparison
      })
      break
    case 'expectation':
      filteredGames.sort((firstGame, secondGame) => {
        const comparison = firstGame.expectation.localeCompare(
          secondGame.expectation,
        )

        return order === 'asc' ? comparison : -comparison
      })
      break
    case 'length':
      filteredGames.sort((firstGame, secondGame) => {
        const firstLength = Number(firstGame.length) || 0
        const secondLength = Number(secondGame.length) || 0
        const comparison = firstLength - secondLength

        return order === 'asc' ? comparison : -comparison
      })
      break
  }

  return filteredGames
}
