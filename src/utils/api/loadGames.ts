import { documentDir } from '@tauri-apps/api/path'
import { mkdir, readTextFile, writeFile } from '@tauri-apps/plugin-fs'
import convertStringToUint8Array from './convertStringToUint8Array'
import { Game } from '../../types'

export default async function loadGames(): Promise<{
  games: Game[]
  filePath: string
}> {
  const documentsPath = await documentDir()
  const folderPath = `${documentsPath}/BackyData`
  const filePath = `${folderPath}/games.json`

  async function ensureFolder() {
    try {
      await mkdir(folderPath, { recursive: true })
    } catch (error) {
      console.error(
        `Failed to ensure BackyData folder exists in Documents folder: ${error}`,
      )
    }
  }

  async function ensureJSONFile() {
    try {
      await readTextFile(filePath)
    } catch (error) {
      const blankData = convertStringToUint8Array(JSON.stringify([], null, 2))
      await writeFile(filePath, blankData)
      console.log('games.json not found. Created a new empty JSON file')
    }
  }

  async function fetchGames() {
    await ensureFolder()
    await ensureJSONFile()

    try {
      const data = await readTextFile(filePath)
      return JSON.parse(data)
    } catch (error) {
      console.error(`Failed to fetch games: ${error}`)
      return []
    }
  }

  try {
    const games = await fetchGames()
    return { games, filePath }
  } catch (error) {
    console.error(`Failed to fetch games: ${error}`)
    return { games: [], filePath }
  }
}
