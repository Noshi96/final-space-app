import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s;
  width: 12rem;
  background: #ffffffba;

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (min-width: 48rem) {
    width: 16rem;
  }
`
export const Name = styled.div`
  display: inline-block;
  color: #333;
  font-size: 1rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.5rem;
  }
`

export const Image = styled.img`
  width: 100%;
`
