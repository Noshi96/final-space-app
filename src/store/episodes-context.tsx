import { IEpisodeModel } from "models/EpisodeModel";
import { createContext } from "react";
import { numberOfAppearancesInAllEpisodes } from "utils/numberOfAppearancesInAllEpisodes";

interface IEpisodesContextProviderProps {
  children: React.ReactNode;
  episodes: IEpisodeModel[];
}

const EpisodesContext = createContext({
  occurrenceOfAllCharactersInAllEpisodes: {},
});

export const EpisodesContextProvider = ({
  episodes,
  children,
}: IEpisodesContextProviderProps) => {
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
