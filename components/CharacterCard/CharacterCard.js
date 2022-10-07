import { Card, Name, Image } from './style'

const CharacterCard = ({ name, imgUrl }) => {
  return (
    <Card>
      <Image src={imgUrl} alt={name} />
      <Name>{name}</Name>
    </Card>
  )
}

export default CharacterCard
