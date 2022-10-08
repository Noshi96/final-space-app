import {
  ModalOverlay,
  ModalWrapper,
  Modal,
  ModalHeader,
  ModalCloseButton,
  Image,
  StyledIcon,
  Name,
  Origin,
  AddToFavoriteButton,
  Status,
  Species,
} from './style'
import { createPortal } from 'react-dom'
import CharactersContext from '../../store/characters-context'
import { useContext } from 'react'

const CardDetailsModal = ({ isOpen, closeModal, id }) => {
  const { characters } = useContext(CharactersContext)
  const { name, img_url, origin, gender, status, species } = characters.find(
    (ch) => ch.id === id
  )

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
            <Modal onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <AddToFavoriteButton>Add to Favorite</AddToFavoriteButton>
                <ModalCloseButton
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  <StyledIcon name="close" />
                </ModalCloseButton>
              </ModalHeader>
              <Image src={img_url} alt={name} />
              <Name>
                {name}
                {gender !== 'Male' && gender !== 'Female' ? (
                  ''
                ) : (
                  <StyledIcon female={gender} name={gender.toLowerCase()} />
                )}
              </Name>
              <Origin>
                <StyledIcon name="public" />
                {origin !== 'Unknown' ? `Born on ${origin}` : 'Unknown'}
              </Origin>
              <Status>
                {status === 'Alive' ? (
                  <StyledIcon status={status} name="favorite" />
                ) : status === 'Deceased' ? (
                  <StyledIcon status={status} name="heart_broken" />
                ) : (
                  <StyledIcon name="question_mark" />
                )}
                Is {status.toLowerCase()}
              </Status>
              <Species>
                <StyledIcon name="group" />
                {species}
              </Species>
            </Modal>
          </ModalWrapper>
        </>,
        document.body
      )
    : null
}

export default CardDetailsModal
