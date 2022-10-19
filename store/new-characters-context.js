import { createContext, useState } from 'react'

const NewCharactersContext = createContext({
  newCharacters: [],
  reloadNewCharacters: () => {}
})

export const NewCharactersContextProvider = ({
  newCharactersList,
  children,
  setLocalStorage
}) => {
  const [newCharacters, setNewCharacters] = useState(newCharactersList)

  // setNewCharacters seems unnecessary, but it probably refreshes the context
  const reloadNewCharacters = (newCharacter) => {
    const combinedCharacters = [newCharacter, ...newCharacters]
    setLocalStorage(combinedCharacters)
    setNewCharacters(combinedCharacters)
  }

  const context = {
    newCharacters,
    reloadNewCharacters
  }

  return (
    <NewCharactersContext.Provider value={context}>
      {children}
    </NewCharactersContext.Provider>
  )
}

export default NewCharactersContext
