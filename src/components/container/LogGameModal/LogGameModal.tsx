import { useEffect } from 'react'
import { useDebouncedFormSubmit } from '../../../hooks/useDebounceFunction'
import useLogGameSubmit from '../../../hooks/useLogGameSubmit'
import suggestions from '../../../utils/suggestion-data'
import Autocomplete from '../../common/Autocomplete/Autocomplete'
import Modal from '../../common/Modal/Modal'
import MultiSelect from '../../common/MultiSelect/MultiSelect'
import TextInput from '../../common/TextInput/TextInput'
import styles from './LogGameModal.module.css'

interface LogGameModalProps {
  isLogGameModalVisible: boolean
  toggleLogGameModal: () => void
  inputRef: React.RefObject<HTMLInputElement>
}

const LogGameModal = ({
  isLogGameModalVisible,
  toggleLogGameModal,
  inputRef,
}: LogGameModalProps) => {
  const { genre, setGenre, handleLogGameSubmit } = useLogGameSubmit()
  const debouncedSubmit = useDebouncedFormSubmit(handleLogGameSubmit, toggleLogGameModal)
  useEffect(() => {
    if (isLogGameModalVisible) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 200)
    }
  }, [isLogGameModalVisible])

  return (
    <Modal
      isVisible={isLogGameModalVisible}
      toggleVisibility={toggleLogGameModal}
      title='Log Game'
    >
      <form
        className={styles.form}
        autoComplete='off'
        onSubmit={(ev) => {
          debouncedSubmit(ev)
        }}
      >
        <TextInput
          label='Name'
          name='name'
          ref={inputRef}
        />

        <TextInput
          label='Cover'
          placeholder='https://cdn2.steamgriddb.com/thumb/bcd796765db757a1e827c3b701812c20.jpg'
          name='cover'
        />

        <MultiSelect
          allOptions={suggestions.genre}
          state={{ valueToSubmit: genre, setValueToSubmit: setGenre }}
        >
          <div className={styles.genreWrapper}>
            <label className={styles.genreLabel}>Genre</label>
            <MultiSelect.SelectedOptions />
          </div>
          <MultiSelect.Input />
        </MultiSelect>

        <div className={styles.row}>
          <Autocomplete
            allOptions={suggestions.status}
            label='Status'
            name='status'
            width='28ch'
            required
          />
          <Autocomplete
            allOptions={suggestions.expectation}
            label='Expectation'
            name='expectation'
            width='28ch'
            required
          />
        </div>

        <div className={styles.row}>
          <Autocomplete
            allOptions={suggestions.platform}
            label='Platform'
            name='platform'
            width='28ch'
            required
          />
          <Autocomplete
            allOptions={suggestions.length}
            label='Length'
            name='length'
            width='28ch'
            required
          />
        </div>

        <button
          type='submit'
          className={styles.submitButton}
        >
          Create New Log
        </button>
      </form>
    </Modal>
  )
}

export default LogGameModal
