import { useState, useRef } from 'react'

const useAutoComplete = (allOptions: string[]) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  function updateFilter(ev: React.ChangeEvent<HTMLInputElement>) {
    const wordSearched = ev.currentTarget.value

    if (wordSearched === '') {
      setFilteredOptions([])
    } else {
      const newFilter = allOptions
        .filter((option) =>
          option.toLowerCase().includes(wordSearched.toLowerCase()),
        )
        .slice(0, 4)

      setFilteredOptions(newFilter)
      setSelectedIndex(-1) // Resets index while typing
    }
  }

  function selectOption(option: string) {
    if (inputRef?.current) {
      inputRef.current.value = option
      inputRef.current.blur()
    }
    setFilteredOptions([])
  }

  function handleKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
    switch (ev.key) {
      case 'ArrowDown':
        ev.preventDefault()
        setSelectedIndex((previousIndex) =>
          previousIndex < filteredOptions.length - 1 ? previousIndex + 1 : 0,
        )
        break
      case 'ArrowUp':
        ev.preventDefault()
        setSelectedIndex((previousIndex) =>
          previousIndex > 0 ? previousIndex - 1 : filteredOptions.length - 1,
        )
        break
      case 'Enter':
        ev.preventDefault()
        if (selectedIndex >= 0) {
          ev.currentTarget.value = filteredOptions[selectedIndex]
          ev.currentTarget.blur()
          setFilteredOptions([])
          setSelectedIndex(-1)
        }
        break
    }
  }

  function handleBlur() {
    setTimeout(() => setFilteredOptions([]), 200)
  }
  return {
    updateFilter,
    selectOption,
    handleKeyDown,
    handleBlur,
    filteredOptions,
    selectedIndex,
    inputRef,
  }
}

export default useAutoComplete
