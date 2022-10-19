import { List } from './style'
import CharacterCard from '../CharacterCard/CharacterCard'
import NewCharacterCard from '../NewCharacterCard/NewCharacterCard'

const CharacterList = ({ characters }) => {
  if (!characters || characters.length === 0) return null

  return (
    <List>
      <NewCharacterCard />
      {characters.map((singleCharacter) => {
        return (
          <CharacterCard
            key={singleCharacter.id}
            name={singleCharacter.name}
            imgUrl={singleCharacter.img_url}
            id={singleCharacter.id}
            singleCharacter={singleCharacter}
          />
        )
      })}
    </List>
  )
}

export default CharacterList
