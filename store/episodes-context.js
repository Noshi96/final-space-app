import { createContext } from 'react'
import { efficientOccurrenceCounting } from '../utils/efficientOccurrenceCounting'

const EpisodesContext = createContext({
  occurrenceOfAllCharactersInAllEpisodes: {}
})

export const EpisodesContextProvider = ({ episodes, children }) => {
  const occurrenceOfAllCharactersInAllEpisodes = efficientOccurrenceCounting(
    episodes
  )

  const context = {
    occurrenceOfAllCharactersInAllEpisodes
  }

  return (
    <EpisodesContext.Provider value={context}>
      {children}
    </EpisodesContext.Provider>
  )
}

export default EpisodesContext
