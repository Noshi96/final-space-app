import TextField from '@mui/material/TextField'
import { Form } from './style'

const SearchBar = ({
  setSearchQuery = () => {},
  labelName = 'character name',
}) => (
  <Form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
      }}
      label={`Enter a ${labelName}`}
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
  </Form>
)

export default SearchBar
