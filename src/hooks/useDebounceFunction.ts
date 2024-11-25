import { useRef } from 'react'

type DebouncedFormSubmit = (event: React.FormEvent<HTMLFormElement>) => void
type SubmitHandler = (formData: FormData, toggleVisibility: () => void) => void

export function useDebouncedFormSubmit(
  submitHandler: SubmitHandler,
  toggleVisibility: () => void,
  delay: number = 200
): DebouncedFormSubmit {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      submitHandler(formData, toggleVisibility)
    }, delay)
  }
}
