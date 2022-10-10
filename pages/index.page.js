import { getCharacters, getEpisodes } from '../services/external-api'
import dummy from '../dummy.json'
import dummyEpisode from '../dummy-episode.json'
import CharacterList from '../components/CharacterList/CharacterList'
import { EpisodesContextProvider } from '../store/episodes-context'

export default function Home({ characters, episodes }) {
  return (
    <EpisodesContextProvider episodes={episodes}>
      <CharacterList characters={characters}></CharacterList>
    </EpisodesContextProvider>
  )
}

export async function getServerSideProps() {
  const resDataCharacters = await getCharacters()
  const resDataEpisodes = await getEpisodes()
  return {
    props: {
      characters: resDataCharacters.data,
      episodes: resDataEpisodes.data,
    },
  }
}
