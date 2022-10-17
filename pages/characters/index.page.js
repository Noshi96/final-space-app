import { getCharacters, getEpisodes } from '../../services/external-api'
// import dummy from '../../dummy.json'
// import dummyEpisode from '../../dummy-episode.json'
import CharacterList from '../../components/CharacterList/CharacterList'
import { EpisodesContextProvider } from '../../store/episodes-context'
import CharacterForm from '../../components/CharacterForm/CharacterForm'
import useModal from '../../hooks/useModal'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useEffect, useState } from 'react'

export default function Characters({ characters, episodes }) {
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

  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} labelName={'character name'} />
      <EpisodesContextProvider episodes={episodes}>
        <button onClick={toggle}>Add Character</button>
        <CharacterList characters={filteredCharacters} />
        <CharacterForm isOpen={isOpen} closeModal={toggle} />
      </EpisodesContextProvider>
    </>
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