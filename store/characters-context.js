import { createContext } from 'react'

const CharactersContext = createContext({
  characters: [],
  check: () => {},
})

export const CharactersContextProvider = ({ characters, children }) => {
  const context = {
    characters: characters,
  }

  return (
    <CharactersContext.Provider value={context}>
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersContext
