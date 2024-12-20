import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { addGame } from '../utils/api'
import { Game } from '../utils/classes'

const useLogGameSubmit = () => {
  const [genre, setGenre] = useState<string[]>([])

  const queryClient = useQueryClient()

  async function handleLogGameSubmit(formData: FormData, toggleVisibility: () => void) {
    const newGame = new Game(
      formData.get('name') as string,
      formData.get('cover') as string,
      genre,
      formData.get('status') as string,
      formData.get('expectation') as string,
      formData.get('length') as string,
      formData.get('platform') as string
    )

    try {
      await addGame(newGame)
      await queryClient.invalidateQueries({ queryKey: ['games'] })

      formData.delete('name')
      setGenre([])
      toggleVisibility()
    } catch (error) {
      console.error('eRROR')
    }
  }

  return { genre, setGenre, handleLogGameSubmit }
}

export default useLogGameSubmit
