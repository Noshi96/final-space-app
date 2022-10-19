import { createContext } from 'react'
import { getNewCharacters } from '../services/internal-api'

const NewCharactersContext = createContext({
  reloadNewCharacters: () => {},
  characters: [],
})

export const NewCharactersContextProvider = ({
  characters,
  children,
  setAllCharacters,
}) => {
  const reloadNewCharacters = async () => {
    try {
      const { data } = await getNewCharacters()
      setAllCharacters([...data.reverse(), ...characters])
    } catch (err) {
      console.error(err)
    }
  }

  const context = {
    reloadNewCharacters,
  }

  return (
    <NewCharactersContext.Provider value={context}>
      {children}
    </NewCharactersContext.Provider>
  )
}

export default NewCharactersContext
