import { Card, Name, Image } from './style'

const CharacterCard = ({ name, img_url }) => {
  return (
    <Card>
      <Image src={img_url} alt={name} />
      <Name>{name}</Name>
    </Card>
  )
}

export default CharacterCard
