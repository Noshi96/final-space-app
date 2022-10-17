import { getCharacters, getEpisodes } from '../services/external-api'
// import dummy from '../dummy.json'
// import dummyEpisode from '../dummy-episode.json'
import CharacterList from '../components/CharacterList/CharacterList'
import { EpisodesContextProvider } from '../store/episodes-context'
import CharacterForm from '../components/CharacterForm/CharacterForm'
import useModal from '../hooks/useModal'

export default function Home ({ characters, episodes }) {
  const { isOpen, toggle } = useModal()
  return (
    <EpisodesContextProvider episodes={episodes}>
      <button onClick={toggle}>Add Character</button>
      <CharacterList characters={characters} />
      <CharacterForm isOpen={isOpen} closeModal={toggle} />
    </EpisodesContextProvider>
  )
}

export async function getServerSideProps () {
  const resDataCharacters = await getCharacters()
  const resDataEpisodes = await getEpisodes()
  return {
    props: {
      characters: resDataCharacters.data,
      episodes: resDataEpisodes.data
    }
  }
}
