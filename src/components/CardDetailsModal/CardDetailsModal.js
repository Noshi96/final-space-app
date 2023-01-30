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
  StyledFavorite
} from './style'
import { createPortal } from 'react-dom'
import EpisodesContext from '../../store/episodes-context'
import { useContext, useState } from 'react'
import IconList from '../IconList/IconList'
import FavoritesContext from '../../store/favorites-context'
import {
  addToFavorites,
  deleteFromFavorites
} from '../../services/internal-api'

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
  const newCountOccurrence =
    countOccurrence === 0 ? singleCharacter.occurrence : countOccurrence

  const { favorites, reloadFavorites } = useContext(FavoritesContext)
  const isInFavorites = favorites.some((el) => String(el.id) === String(id))
  const [favorite, setFavorite] = useState(isInFavorites)

  const addToFavoritesHandler = async () => {
    if (!favorite) {
      const favoriteObjToAdd = {
        id,
        fav: true
      }
      setFavorite((prevState) => !prevState)
      await addToFavorites(favoriteObjToAdd)
      reloadFavorites()
    } else {
      setFavorite((prevState) => !prevState)
      await deleteFromFavorites({ id })
      reloadFavorites()
    }
  }

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
              {favorite
                ? (
                  <StyledFavorite name='favorite' />
                  )
                : (
                  <StyledFavorite name='favorite_outlined' />
                  )}
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
              occurrence={newCountOccurrence}
            />
            <AddToFavoriteButton onClick={addToFavoritesHandler}>
              {favorite ? 'Remove from ' : 'Add to '} favorites
            </AddToFavoriteButton>
          </Modal>
        </ModalWrapper>
      </>,
      document.body
    )
    : null
}

export default CardDetailsModal
