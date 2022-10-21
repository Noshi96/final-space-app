import { getCharacters, getEpisodes } from '../../services/external-api'
import { getNewCharacters } from '../../services/internal-api'
// import dummy from '../../dummy.json'
// import dummyEpisode from '../../dummy-episode.json'
import CharacterList from '../../components/CharacterList/CharacterList'
import { EpisodesContextProvider } from '../../store/episodes-context'
import CharacterForm from '../../components/CharacterForm/CharacterForm'
import useModal from '../../hooks/useModal'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'

export default function Characters ({ characters, episodes, newCharacters }) {
  const { isOpen, toggle } = useModal()
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredCharacters, setFilteredCharacters] = useState(characters)

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((singleCharacter) =>
        singleCharacter.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }, [searchQuery])

  const checkDb = async () => {
    const { data } = await getNewCharacters()
    console.log(data)
    console.log(newCharacters)
  }

  return (
    <Layout>
      <button onClick={checkDb}>Check DB</button>
      <SearchBar setSearchQuery={setSearchQuery} labelName='Find character' />
      <EpisodesContextProvider episodes={episodes}>
        <button onClick={toggle}>Add Character</button>
        <CharacterList characters={filteredCharacters} />
        <CharacterForm isOpen={isOpen} closeModal={toggle} />
      </EpisodesContextProvider>
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
