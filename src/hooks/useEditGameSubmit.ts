import { useQueryClient } from '@tanstack/react-query'
import { Game as GameType } from '../types'
import { Game } from '../utils/classes'
import { useState, useEffect } from 'react'
import { editGame } from '../utils/api'

const useEditGameSubmit = (gameToEdit: GameType | undefined) => {
  const [cover, setCover] = useState<string>(gameToEdit?.cover || '')
  const [genre, setGenre] = useState<string[]>(gameToEdit?.genre || [])

  useEffect(() => {
    setCover(gameToEdit?.cover || '')
    setGenre(gameToEdit?.genre || [])
  }, [gameToEdit])

  const queryClient = useQueryClient()

  async function handleEditSubmit(
    ev: React.FormEvent<HTMLFormElement>,
    toggleEditModalVisibility: (game?: GameType) => void,
  ) {
    ev.preventDefault()

    const form = ev.currentTarget
    const formData = new FormData(form)

    const editedGame = new Game(
      formData.get('name') as string,
      formData.get('cover') as string,
      genre,
      formData.get('status') as string,
      formData.get('expectation') as string,
      formData.get('length') as string,
      formData.get('platform') as string,
    )

    editedGame.id = gameToEdit?.id || ''
    editedGame.review = formData.get('review') as string
    editedGame.notes = formData.get('notes') as string
    editedGame.series = formData.get('series') as string
    editedGame.seriesOrder = formData.get('seriesOrder') as string

    try {
      await editGame(editedGame)
      await queryClient.invalidateQueries({ queryKey: ['games'] })

      form.reset()
      setGenre([])
      toggleEditModalVisibility(undefined)
    } catch (error) {
      console.error(`Error saving game: ${error}`)
    }
  }

  return { cover, setCover, genre, setGenre, handleEditSubmit }
}

export default useEditGameSubmit
