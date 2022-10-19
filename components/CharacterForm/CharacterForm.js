import {
  ModalOverlay,
  ModalWrapper,
  Modal,
  ModalHeader,
  ModalCloseButton,
  Image,
  StyledIcon,
  Name,
  AddToFavoriteButton,
  ModalImageTextForm,
  Form,
} from './style'
import { createPortal } from 'react-dom'
import IconList from '../IconList/IconList'
import { useState, useContext } from 'react'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import NewCharactersContext from '../../store/new-characters-context'
import { addNewCharacter } from '../../services/internal-api'

const CharacterForm = ({ isOpen, closeModal }) => {
  const [name, setName] = useState('')
  const [imgUrl, setImgUrl] = useState(null)
  const [origin, setOrigin] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [occurrence, setOccurrence] = useState('')

  const newCharacter = {
    name,
    img_url: imgUrl,
    origin,
    gender,
    status,
    species,
    occurrence,
  }

  const newCharactersCtx = useContext(NewCharactersContext)

  const addCharacterHandler = async (e) => {
    e.preventDefault()
    try {
      await addNewCharacter(newCharacter)
      newCharactersCtx.reloadNewCharacters()
      // newCharactersCtx.setUpdateUi()
      closeModal()
    } catch (err) {
      console.error(err)
    }
  }

  const stopPropagationHandler = (e) => e.stopPropagation()

  const onInputChangeSetString = (event, setFunction) => {
    setFunction(event.target.value)
  }

  return isOpen
    ? createPortal(
        <>
          <ModalOverlay />
          <ModalWrapper
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            onClick={closeModal}
          >
            <ModalImageTextForm>
              <Image
                src={
                  imgUrl ??
                  'https://resources.trifocal.eu.com/wp-content/uploads/2018/06/temp-logo-img.png'
                }
                alt={name}
                onClick={stopPropagationHandler}
              />
              <Modal onClick={stopPropagationHandler}>
                <Name>
                  {name}
                  {gender !== 'Male' && gender !== 'Female' ? (
                    ''
                  ) : (
                    <StyledIcon female={gender} name={gender.toLowerCase()} />
                  )}
                </Name>
                <IconList
                  origin={origin}
                  status={status}
                  species={species}
                  occurrence={occurrence}
                />
              </Modal>
              <Form onClick={stopPropagationHandler}>
                <ModalHeader>
                  <ModalCloseButton
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModal}
                  >
                    <StyledIcon name="close" />
                  </ModalCloseButton>
                </ModalHeader>
                <TextField
                  required
                  id="name"
                  label="Name"
                  variant="standard"
                  onChange={(e) => onInputChangeSetString(e, setName)}
                  inputProps={{ maxLength: 20 }}
                />
                <TextField
                  required
                  id="imgUrl"
                  label="Image URL"
                  variant="standard"
                  onChange={(e) => onInputChangeSetString(e, setImgUrl)}
                />
                <TextField
                  required
                  id="origin"
                  label="Origin"
                  variant="standard"
                  onChange={(e) => onInputChangeSetString(e, setOrigin)}
                  inputProps={{ maxLength: 20 }}
                />
                <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup
                  id="gender"
                  row
                  aria-labelledby="gender-row-radio-buttons-group-label"
                  name="gender"
                  onChange={(e) => onInputChangeSetString(e, setGender)}
                >
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                <FormLabel id="status">Status</FormLabel>
                <RadioGroup
                  id="status"
                  row
                  aria-labelledby="status-row-radio-buttons-group-label"
                  name="status"
                  onChange={(e) => onInputChangeSetString(e, setStatus)}
                >
                  <FormControlLabel
                    value="Alive"
                    control={<Radio />}
                    label="Alive"
                  />
                  <FormControlLabel
                    value="Deceased"
                    control={<Radio />}
                    label="Deceased"
                  />
                  <FormControlLabel
                    value="Unknown"
                    control={<Radio />}
                    label="Unknown"
                  />
                </RadioGroup>
                <TextField
                  required
                  id="species"
                  label="Species"
                  variant="standard"
                  onChange={(e) => onInputChangeSetString(e, setSpecies)}
                  inputProps={{ maxLength: 20 }}
                />
                <TextField
                  required
                  id="occurrence"
                  label="Occurrence"
                  variant="standard"
                  onChange={(e) => onInputChangeSetString(e, setOccurrence)}
                  type="number"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 8)
                  }}
                />
                <AddToFavoriteButton onClick={addCharacterHandler}>
                  Add new Character
                </AddToFavoriteButton>
              </Form>
            </ModalImageTextForm>
          </ModalWrapper>
        </>,
        document.body
      )
    : null
}
export default CharacterForm
