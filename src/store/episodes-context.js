import { createContext } from 'react';
import { numberOfAppearancesInAllEpisodes } from 'utils/numberOfAppearancesInAllEpisodes';

const EpisodesContext = createContext({
  occurrenceOfAllCharactersInAllEpisodes: {},
});

export const EpisodesContextProvider = ({ episodes, children }) => {
  const occurrenceOfAllCharactersInAllEpisodes = numberOfAppearancesInAllEpisodes(
    episodes
  );

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
