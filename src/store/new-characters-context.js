import { useState, createContext } from 'react'

import { getNewCharacters } from 'services/internal-api'

const NewCharactersContext = createContext({
  reloadNewCharacters: () => {},
  characters: []
})

export const NewCharactersContextProvider = ({
  characters,
  children,
  newCharacters
}) => {
  const [updatedCharacters, setUpdatedCharacters] = useState([
    ...newCharacters.reverse(),
    ...characters
  ])

  const reloadNewCharacters = async () => {
    try {
      const { data } = await getNewCharacters()
      setUpdatedCharacters([...data.reverse(), ...characters])
    } catch (err) {
      console.error(err)
    }
  }

  const context = {
    reloadNewCharacters,
    characters: updatedCharacters
  }

  return (
    <NewCharactersContext.Provider value={context}>
      {children}
    </NewCharactersContext.Provider>
  )
}

export default NewCharactersContext
