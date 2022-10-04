import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`
