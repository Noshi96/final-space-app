import { getCharacters, getEpisodes } from '../../services/external-api'
// import dummy from '../../dummy.json'
// import dummyEpisode from '../../dummy-episode.json'
import CharacterList from '../../components/CharacterList/CharacterList'
import { EpisodesContextProvider } from '../../store/episodes-context'
import { NewCharactersContextProvider } from '../../store/new-characters-context'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function Characters ({ characters, episodes }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredCharacters, setFilteredCharacters] = useState(characters)

  const [newCharactersList, setNewCharactersList] = useLocalStorage(
    'newCharactersKey',
    ''
  )

  useEffect(() => {
    const combinedList = [...newCharactersList, ...characters]
    setFilteredCharacters(combinedList)
  }, [newCharactersList])

  useEffect(() => {
    const combinedList = [...newCharactersList, ...characters]
    setFilteredCharacters(
      combinedList.filter((singleCharacter) =>
        singleCharacter.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }, [searchQuery])

  return (
    <Layout>
      <SearchBar setSearchQuery={setSearchQuery} labelName='Find character' />
      <EpisodesContextProvider episodes={episodes}>
        <NewCharactersContextProvider
          newCharactersList={newCharactersList}
          setLocalStorage={setNewCharactersList}
        >
          <CharacterList characters={filteredCharacters} />
        </NewCharactersContextProvider>
      </EpisodesContextProvider>
    </Layout>
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
