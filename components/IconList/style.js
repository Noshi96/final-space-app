import styled from 'styled-components'
import Icon from '../Icon/Icon'

export const StyledIcon = styled(Icon)`
  margin-right: 0.8rem;
  color: ${(props) =>
    props.status === 'Alive'
      ? '#D32F2F;'
      : props.status === 'Deceased'
      ? '#2196F3;'
      : '#000;'};
`

export const List = styled.ul`
  grid-row: 4 / 5;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 1.5rem;
  margin-right: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
  text-decoration: none;
`

export const IconListElement = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
`
