import {
  ComponentProps,
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react'

interface MultiSelectContext {
  updateFilter: (ev: React.ChangeEvent<HTMLInputElement>) => void
  selectOption: (option: string) => void
  handleKeyDown: (
    ev: React.KeyboardEvent<HTMLInputElement>,
    handlePageChange?: (page: number) => () => void | undefined,
  ) => void
  handleBlur: () => void
  removeSelectedOption: (itemToRemove: string) => void
  filteredOptions: string[]
  selectedIndex: number
  valueToSubmit: string[]
  inputRef: React.RefObject<HTMLInputElement>
  width: string
}

type MultiSelectProviderProps = ComponentProps<'input'> & {
  allOptions: string[]
  state: {
    valueToSubmit: string[]
    setValueToSubmit: React.Dispatch<React.SetStateAction<string[]>>
  }
  children: ReactNode
  width?: string
}

const MultiSelectContext = createContext<MultiSelectContext | undefined>(
  undefined,
)

function MultiSelectProvider({
  allOptions,
  state,
  width = '60ch',
  children,
}: MultiSelectProviderProps) {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const { valueToSubmit, setValueToSubmit } = state
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

  function removeSelectedOption(itemToRemove: string) {
    const newValue = valueToSubmit.filter((item) => item !== itemToRemove)
    setValueToSubmit(newValue)
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
        if (selectedIndex >= 0 && filteredOptions.length > 0) {
          ev.currentTarget.value = filteredOptions[selectedIndex]
          ev.currentTarget.focus()
          setFilteredOptions([])
          setSelectedIndex(-1)
        } else {
          const inputValue = ev.currentTarget.value.trim()
          if (inputValue && !valueToSubmit?.includes(inputValue)) {
            const newValue = [...valueToSubmit, inputValue]
            setValueToSubmit(newValue)

            ev.currentTarget.value = ''
            setFilteredOptions([])
            setSelectedIndex(-1)
          }
        }
        break
    }
  }

  function handleBlur() {
    setTimeout(() => setFilteredOptions([]), 200)
  }

  return (
    <MultiSelectContext.Provider
      value={{
        updateFilter,
        selectOption,
        handleKeyDown,
        handleBlur,
        removeSelectedOption,
        filteredOptions,
        selectedIndex,
        valueToSubmit,
        inputRef,
        width,
      }}
    >
      {children}
    </MultiSelectContext.Provider>
  )
}

function useMultiSelect() {
  const context = useContext(MultiSelectContext)
  if (context === undefined) {
    throw new Error('useMultiSelect must be used within MultiSelectProvider')
  }
  return context
}

export { MultiSelectProvider, useMultiSelect }
