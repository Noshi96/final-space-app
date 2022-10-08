import { getCharacters } from '../services/external-api'
import dummy from '../dummy.json'
import CharacterList from '../components/CharacterList/CharacterList'
import { CharactersContextProvider } from '../store/characters-context'

export default function Home({ characters }) {
  return (
    <CharactersContextProvider characters={characters}>
      <CharacterList characters={characters}></CharacterList>
    </CharactersContextProvider>
  )
}

export async function getServerSideProps() {
  const resData = await getCharacters()

  return {
    props: {
      characters: resData.data,
    },
  }
}
