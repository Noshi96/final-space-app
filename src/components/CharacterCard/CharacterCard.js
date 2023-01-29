import { Card, Name, Image } from './style'
import useModal from 'hooks/useModal'
import CardDetailsModal from 'components/CardDetailsModal/CardDetailsModal'

const CharacterCard = ({ name, imgUrl, id, singleCharacter }) => {
  const { isOpen, toggle } = useModal()

  return (
    <>
      <Card onClick={toggle} tabIndex={0}>
        <Image src={imgUrl} alt={name} />
        <Name>{name}</Name>
      </Card>
      <CardDetailsModal
        isOpen={isOpen}
        closeModal={toggle}
        id={id}
        singleCharacter={singleCharacter}
      />
    </>
  )
}

export default CharacterCard
