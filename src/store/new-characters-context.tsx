import { IExtendedSingleCharacterModel } from 'models/ExtendedSingleCharacterModel';
import { useState, createContext } from 'react';
import { getNewCharacters } from 'services/internal-api';

interface INewCharactersContextProviderProps {
  children: React.ReactNode;
  characters: IExtendedSingleCharacterModel[];
  newCharacters: IExtendedSingleCharacterModel[];
}

interface INewCharactersContextModel {
  reloadNewCharacters: () => Promise<void>;
  characters: IExtendedSingleCharacterModel[];
}

const NewCharactersContext = createContext({
  reloadNewCharacters: () => {},
  characters: [] as IExtendedSingleCharacterModel[],
} as INewCharactersContextModel);

export const NewCharactersContextProvider = ({
  characters,
  children,
  newCharacters,
}: INewCharactersContextProviderProps) => {
  const [updatedCharacters, setUpdatedCharacters] = useState<
    IExtendedSingleCharacterModel[]
  >([...newCharacters.reverse(), ...characters]);

  const reloadNewCharacters = async () => {
    try {
      const { data } = await getNewCharacters();
      setUpdatedCharacters([...data.reverse(), ...characters]);
    } catch (err) {
      console.error(err);
    }
  };

  const context = {
    reloadNewCharacters,
    characters: updatedCharacters,
  };

  return (
    <NewCharactersContext.Provider value={context}>
      {children}
    </NewCharactersContext.Provider>
  );
};

export default NewCharactersContext;
