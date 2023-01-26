import { createContext } from 'react';
import { occurrenceCounting } from '../../utils/occurrenceCounting';

const EpisodesContext = createContext({
  occurrenceOfAllCharactersInAllEpisodes: {},
});

export const EpisodesContextProvider = ({ episodes, children }) => {
  const occurrenceOfAllCharactersInAllEpisodes = occurrenceCounting(episodes);

  const context = {
    occurrenceOfAllCharactersInAllEpisodes,
  };

  return (
    <EpisodesContext.Provider value={context}>
      {children}
    </EpisodesContext.Provider>
  );
};

export default EpisodesContext;
