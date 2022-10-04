import { List } from './style'
import CharacterCard from '../CharacterCard/CharacterCard'

const CharacterList = ({ characters }) => {
  return (
    <List>
      {characters.map((singleCharacter) => {
        return (
          <CharacterCard
            key={singleCharacter.id}
            name={singleCharacter.name}
            img_url={singleCharacter.img_url}
          />
        )
      })}
    </List>
  )
}

export default CharacterList
