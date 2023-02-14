import { List } from './style';
import CharacterCard from '../CharacterCard/CharacterCard';
import NewCharacterCard from '../NewCharacterCard/NewCharacterCard';
import { useState, useContext, useEffect } from 'react';
import NewCharactersContext from '../../store/new-characters-context';
import { IExtendedSingleCharacterModel } from 'models/ExtendedSingleCharacterModel';

interface ICharacterListProps {
  searchQuery: string;
}

const CharacterList = ({ searchQuery }: ICharacterListProps) => {
  const newCharactersCtx = useContext(NewCharactersContext);
  const characters = (newCharactersCtx.characters as unknown) as IExtendedSingleCharacterModel[];
  const [filteredCharacters, setFilteredCharacters] = useState<
    IExtendedSingleCharacterModel[]
  >(characters);

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((singleCharacter) =>
        singleCharacter.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <List>
      <NewCharacterCard />
      {filteredCharacters.map((singleCharacter) => {
        return (
          <CharacterCard
            key={singleCharacter.id}
            name={singleCharacter.name}
            imgUrl={singleCharacter.img_url}
            id={+singleCharacter.id}
            singleCharacter={singleCharacter}
          />
        );
      })}
    </List>
  );
};

export default CharacterList;
