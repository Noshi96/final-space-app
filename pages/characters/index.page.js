import {
  getNewCharacters,
  getCharacters,
  getEpisodes,
  getFavorites
} from '../../services/internal-api'
import CharacterList from '../../components/CharacterList/CharacterList'
import { EpisodesContextProvider } from '../../store/episodes-context'
import { NewCharactersContextProvider } from '../../store/new-characters-context'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { FavoritesContextProvider } from '../../store/favorites-context'

export default function Characters ({
  characters,
  episodes,
  newCharacters,
  favorites
}) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Layout>
      <NewCharactersContextProvider
        characters={characters}
        newCharacters={newCharacters}
      >
        <FavoritesContextProvider favorites={favorites}>
          <SearchBar
            setSearchQuery={setSearchQuery}
            labelName='Find character'
          />
          <EpisodesContextProvider episodes={episodes}>
            <CharacterList searchQuery={searchQuery} />
          </EpisodesContextProvider>
        </FavoritesContextProvider>
      </NewCharactersContextProvider>
    </Layout>
  )
}

export async function getServerSideProps () {
  const resDataCharacters = await getCharacters()
  const resDataEpisodes = await getEpisodes()
  const resDataNewCharacters = await getNewCharacters()
  const resDataFavorites = await getFavorites()
  return {
    props: {
      characters: resDataCharacters.data,
      episodes: resDataEpisodes.data,
      newCharacters: resDataNewCharacters.data,
      favorites: resDataFavorites.data
    }
  }
}
