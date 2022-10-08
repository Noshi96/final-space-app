import { List } from './style'
import CharacterCard from '../CharacterCard/CharacterCard'

const CharacterList = ({ characters }) => {
  if (!characters || characters.length === 0) return null

  return (
    <List>
      {characters.map((singleCharacter) => {
        return (
          <CharacterCard
            key={singleCharacter.id}
            name={singleCharacter.name}
            imgUrl={singleCharacter.img_url}
            id={singleCharacter.id}
          />
        )
      })}
    </List>
  )
}

export default CharacterList
