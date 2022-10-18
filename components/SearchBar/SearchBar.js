import InputAdornment from '@mui/material/InputAdornment'
import { Form, WhiteBorderTextField, StyledIcon } from './style'

const SearchBar = ({
  setSearchQuery = () => {},
  labelName = 'character name'
}) => {
  return (
    <Form>
      <WhiteBorderTextField
        id='search-bar'
        className='text'
        onInput={(e) => {
          e.preventDefault()
          setSearchQuery(e.target.value)
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
          )
        }}
      />
    </Form>
  )
}

export default SearchBar
