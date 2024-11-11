import { writeFile } from '@tauri-apps/plugin-fs'
import { Game } from '../../types'
import convertStringToUint8Array from './convertStringToUint8Array'
import loadGames from './loadGames'

export default async function editGame(editedGame: Game) {
  try {
    const { games, filePath } = await loadGames()

    const gameIndex = games.findIndex((game) => game.id === editedGame.id)

    if (gameIndex === -1) {
      console.error('Game not found')
      return
    }

    games[gameIndex] = editedGame

    const uint8ArrayConvertedData = convertStringToUint8Array(
      JSON.stringify(games, null, 2),
    )

    await writeFile(filePath, uint8ArrayConvertedData)

    console.log('Game edited successfully')
  } catch (error) {
    console.error(`Failed to edit game: ${error}`)
  }
}
