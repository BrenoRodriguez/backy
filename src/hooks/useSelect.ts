import { useState } from 'react'

const useSelect = (
  setValueToSubmit: React.Dispatch<React.SetStateAction<string>>,
) => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleIsOpen() {
    setIsOpen((previousState) => !previousState)
  }

  function selectOption(option: string) {
    setValueToSubmit(option)
    setIsOpen(false)
  }
  return { isOpen, toggleIsOpen, selectOption }
}

export default useSelect
