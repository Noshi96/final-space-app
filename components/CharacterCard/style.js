import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #41414103;
  border-radius: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(81, 81, 81, 0.16);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s;
  width: 16rem;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 8px 8px rgba(81, 81, 81, 0.16);
  }
`
export const Name = styled.div`
  display: inline-block;
  color: #414141;
  font-size: 1.5rem;
`

export const Image = styled.img`
  width: 16rem;
`
