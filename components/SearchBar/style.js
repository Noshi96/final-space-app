import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Icon from '../Icon/Icon'

export const Form = styled.form`
  display: fixed;
  align-items: center;
  justify-content: center;
  margin: 3rem 0rem;
`

export const Input = styled.input`
  color: #fff;
`

export const StyledIcon = styled(Icon)`
  margin-left: 0.8rem;
  color: #fff;
  display: flex;
  align-self: center;
`

export const WhiteBorderTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #fff;
    }
    border-color: #fff;
    color: #fff;
  }

  & .MuiFormLabel-root {
    color: #fff;
  }

  & .MuiOutlinedInput-root fieldset {
    border-color: #fff;
  }
`
