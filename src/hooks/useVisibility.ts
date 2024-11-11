import { useState } from 'react'

export default function useVisibility() {
  const [isVisible, setIsVisible] = useState(false)

  function toggleVisibility() {
    setIsVisible((previousState) => !previousState)
  }

  return { isVisible, toggleVisibility }
}
