import {
  ModalOverlay,
  ModalWrapper,
  Modal,
  ModalHeader,
  ModalCloseButton,
  Image,
  StyledIcon,
  Name,
  AddToFavoriteButton
} from './style'
import { createPortal } from 'react-dom'
import EpisodesContext from '../../store/episodes-context'
import { useContext } from 'react'
import IconList from '../IconList/IconList'

const CardDetailsModal = ({ isOpen, closeModal, id, singleCharacter }) => {
  const {
    name,
    img_url: imgUrl,
    origin,
    gender,
    status,
    species
  } = singleCharacter
  const { occurrenceOfAllCharactersInAllEpisodes } = useContext(EpisodesContext)
  const countOccurrence = occurrenceOfAllCharactersInAllEpisodes[id] ?? 0

  return isOpen
    ? createPortal(
      <>
        <ModalOverlay />
        <ModalWrapper
          aria-modal
          aria-hidden
          tabIndex={-1}
          role='dialog'
          onClick={closeModal}
        >
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalCloseButton
                type='button'
                data-dismiss='modal'
                aria-label='Close'
                onClick={closeModal}
              >
                <StyledIcon name='close' />
              </ModalCloseButton>
            </ModalHeader>

            <Image src={imgUrl} alt={name} />

            <Name>
              {name}
              {gender !== 'Male' && gender !== 'Female'
                ? (
                    ''
                  )
                : (
                  <StyledIcon female={gender} name={gender.toLowerCase()} />
                  )}
            </Name>
            <IconList
              origin={origin}
              status={status}
              species={species}
              occurrence={countOccurrence}
            />
            <AddToFavoriteButton>Add to favorite</AddToFavoriteButton>
          </Modal>
        </ModalWrapper>
      </>,
      document.body
      )
    : null
}

export default CardDetailsModal
