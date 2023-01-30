import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Icon from '../Icon/Icon';

export const Form = styled.form`
  display: fixed;
  align-items: center;
  justify-content: center;
  margin: 3rem 0rem;
`;

export const Input = styled.input`
  color: #ffffff;
`;

export const StyledIcon = styled(Icon)`
  margin-left: 0.8rem;
  color: #ffffff;
  display: flex;
  align-self: center;
`;

export const WhiteBorderTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #ffffff;
      color: #ffffff;
    }
    border-color: #ffffff;
    color: #ffffff;
  }

  & .MuiFormLabel-root {
    color: #ffffff !important;
  }

  & .MuiOutlinedInput-root fieldset {
    border-color: #ffffff;
  }
`;
