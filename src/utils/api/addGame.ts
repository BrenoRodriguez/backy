import { Game } from '../../types'
import convertStringToUint8Array from './convertStringToUint8Array'
import loadGames from './loadGames'
import { writeFile } from '@tauri-apps/plugin-fs'

export default async function addGame(newGame: Game) {
  try {
    const { games, filePath } = await loadGames()
    games.push(newGame)

    const uint8ArrayConvertedData = convertStringToUint8Array(
      JSON.stringify(games, null, 2),
    )

    await writeFile(filePath, uint8ArrayConvertedData)

    console.log('Game added successfully')
  } catch (error) {
    console.error(`Failed to add game ${error}`)
  }
}
