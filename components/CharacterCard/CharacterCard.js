import { Card, Name, Image } from './style'
import useModal from '../../hooks/useModal'
import CardDetailsModal from '../CardDetailsModal/CardDetailsModal'

const CharacterCard = ({ name, imgUrl, id }) => {
  const { isOpen, toggle } = useModal()

  return (
    <>
      <Card onClick={toggle}>
        <Image src={imgUrl} alt={name} />
        <Name>{name}</Name>
      </Card>
      <CardDetailsModal isOpen={isOpen} closeModal={toggle} id={id} />
    </>
  )
}

export default CharacterCard
