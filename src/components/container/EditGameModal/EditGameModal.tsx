import { useGameEdit } from '../../../context/EditGameContext'
import Modal from '../../common/Modal/Modal'
import styles from './EditGameModal.module.css'
import TextInput from '../../common/TextInput/TextInput'
import MultiSelect from '../../common/MultiSelect/MultiSelect'
import suggestions from '../../../utils/suggestion-data'
import Autocomplete from '../../common/Autocomplete/Autocomplete'
import TextArea from '../../common/TextArea/TextArea'
import useEditGameSubmit from '../../../hooks/useEditGameSubmit'

const EditGameModal = () => {
  const { isEditModalVisible, toggleEditModalVisibility, gameToEdit } =
    useGameEdit()

  const { cover, setCover, genre, setGenre, handleEditSubmit } =
    useEditGameSubmit(gameToEdit)

  return (
    <Modal
      isVisible={isEditModalVisible}
      toggleVisibility={toggleEditModalVisibility}
      title='Edit Game'
    >
      <form
        className={styles.form}
        autoComplete='off'
        onSubmit={(ev) => handleEditSubmit(ev, toggleEditModalVisibility)}
      >
        <img
          src={cover}
          alt={`${gameToEdit?.name} cover art`}
          className={styles.cover}
        />

        <div className={styles.content}>
          <TextInput name='name' defaultValue={gameToEdit?.name} label='Name' />

          <div className={styles.row}>
            <TextInput
              name='cover'
              defaultValue={gameToEdit?.cover}
              label='Cover'
              onChange={(ev) => setCover(ev.currentTarget.value)}
              width='48ch'
            />
            <TextInput
              name='review'
              defaultValue={gameToEdit?.review}
              label='Review'
              width='7ch'
            />
          </div>

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
              defaultValue={gameToEdit?.status}
              name='status'
              width='28ch'
            />
            <Autocomplete
              allOptions={suggestions.expectation}
              label='Expectation'
              defaultValue={gameToEdit?.expectation}
              name='expectation'
              width='28ch'
            />
          </div>

          <div className={styles.row}>
            <TextInput
              defaultValue={gameToEdit?.series}
              name='series'
              label='Series'
              width='28ch'
            />
            <TextInput
              defaultValue={gameToEdit?.seriesOrder}
              name='seriesOrder'
              label='Series Order'
              width='28ch'
            />
          </div>

          <div className={styles.row}>
            <Autocomplete
              allOptions={suggestions.platform}
              label='Platform'
              defaultValue={gameToEdit?.platform}
              name='platform'
              width='28ch'
            />
            <Autocomplete
              allOptions={suggestions.length}
              label='Length'
              defaultValue={gameToEdit?.length}
              name='length'
              width='28ch'
            />
          </div>
          <TextArea defaultValue={gameToEdit?.notes} />
        </div>
        <button type='submit' className={styles.button}>
          Save Changes
        </button>
      </form>
    </Modal>
  )
}

export default EditGameModal
