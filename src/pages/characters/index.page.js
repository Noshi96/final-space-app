import {
  getNewCharacters,
  getCharacters,
  getEpisodes,
  getFavorites,
} from 'services/internal-api';
import { EpisodesContextProvider } from 'store/episodes-context';
import { NewCharactersContextProvider } from 'store/new-characters-context';
import { FavoritesContextProvider } from 'store/favorites-context';
import CharacterList from 'components/CharacterList/CharacterList';
import SearchBar from 'components/SearchBar/SearchBar';
import Layout from 'components/Layout/Layout';
import { useState } from 'react';

export default function Characters({
  characters,
  episodes,
  newCharacters,
  favorites,
}) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      <NewCharactersContextProvider
        characters={characters}
        newCharacters={newCharacters}
      >
        <FavoritesContextProvider favorites={favorites}>
          <SearchBar
            setSearchQuery={setSearchQuery}
            labelName='Find character'
          />
          <EpisodesContextProvider episodes={episodes}>
            <CharacterList searchQuery={searchQuery} />
          </EpisodesContextProvider>
        </FavoritesContextProvider>
      </NewCharactersContextProvider>
    </Layout>
  );
}

export async function getServerSideProps() {
  const resDataCharacters = await getCharacters();
  const resDataEpisodes = await getEpisodes();
  const resDataNewCharacters = await getNewCharacters();
  const resDataFavorites = await getFavorites();
  return {
    props: {
      characters: resDataCharacters.data,
      episodes: resDataEpisodes.data,
      newCharacters: resDataNewCharacters.data,
      favorites: resDataFavorites.data,
    },
  };
}
