import {
  getNewCharacters,
  getCharacters,
  getEpisodes
} from '../../services/internal-api'
// import dummy from '../../dummy.json'
// import dummyEpisode from '../../dummy-episode.json'
import CharacterList from '../../components/CharacterList/CharacterList'
import { EpisodesContextProvider } from '../../store/episodes-context'
import { NewCharactersContextProvider } from '../../store/new-characters-context'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'

export default function Characters ({ characters, episodes, newCharacters }) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Layout>
      <NewCharactersContextProvider
        characters={characters}
        newCharacters={newCharacters}
      >
        <SearchBar setSearchQuery={setSearchQuery} labelName='Find character' />
        <EpisodesContextProvider episodes={episodes}>
          <CharacterList searchQuery={searchQuery} />
        </EpisodesContextProvider>
      </NewCharactersContextProvider>
    </Layout>
  )
}

export async function getServerSideProps () {
  const resDataCharacters = await getCharacters()
  const resDataEpisodes = await getEpisodes()
  const resDataNewCharacters = await getNewCharacters()
  return {
    props: {
      characters: resDataCharacters.data,
      episodes: resDataEpisodes.data,
      newCharacters: resDataNewCharacters.data
    }
  }
}
