import InputAdornment from '@mui/material/InputAdornment';
import { Dispatch, SetStateAction } from 'react';
import { Form, WhiteBorderTextField, StyledIcon } from './style';

interface Props {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  labelName: string;
}
const SearchBar = ({ setSearchQuery, labelName = 'character name' }: Props) => {
  return (
    <Form>
      <WhiteBorderTextField
        id='search-bar'
        className='text'
        onInput={(e: React.KeyboardEvent<HTMLInputElement>) => {
          e.preventDefault();
          const input = e.target as HTMLInputElement;
          setSearchQuery(input.value);
        }}
        label={`${labelName}`}
        variant='outlined'
        placeholder='Search...'
        size='small'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <StyledIcon name='search' />
            </InputAdornment>
          ),
        }}
      />
    </Form>
  );
};

export default SearchBar;
