import { createContext, ReactNode, useContext } from 'react'
import { Game } from '../types'

interface CardProviderProps {
  children: ReactNode
  game: Game
}

const CardContext = createContext<Game | undefined>(undefined)

const CardProvider = ({ children, game }: CardProviderProps) => {
  return <CardContext.Provider value={game}>{children}</CardContext.Provider>
}

function useCard() {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error('useCard must be used within CardProvider')
  }
  return context
}

export { CardProvider, useCard }
