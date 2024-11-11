import { createContext, ReactNode, useContext, useState } from 'react'
import { Game } from '../types'
import useVisibility from '../hooks/useVisibility'

interface EditGameProviderProps {
  children: ReactNode
}

interface EditGameContextItems {
  gameToEdit: Game | undefined
  setGameToEdit: React.Dispatch<React.SetStateAction<Game | undefined>>
  isEditModalVisible: boolean
  toggleEditModalVisibility: (game?: Game) => void
}

const EditGameContext = createContext<EditGameContextItems | undefined>(
  undefined,
)

const EditGameProvider = ({ children }: EditGameProviderProps) => {
  const [gameToEdit, setGameToEdit] = useState<Game | undefined>(undefined)
  const { isVisible: isEditModalVisible, toggleVisibility } = useVisibility()

  function toggleEditModalVisibility(game: Game | undefined = undefined) {
    setGameToEdit(game)
    toggleVisibility()
  }

  return (
    <EditGameContext.Provider
      value={{
        gameToEdit,
        setGameToEdit,
        isEditModalVisible,
        toggleEditModalVisibility,
      }}
    >
      {children}
    </EditGameContext.Provider>
  )
}

function useGameEdit() {
  const context = useContext(EditGameContext)

  if (context === undefined) {
    throw new Error('useGameEdit must be used within EditGameProvider')
  }

  return context
}

export { EditGameProvider, useGameEdit }
