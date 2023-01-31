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

export const DrawPlus = styled.div`
  position: relative;
  height: 12rem;

  @media only screen and (min-width: 48rem) {
    height: 16rem;
  }
`
export const Vertical = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.2rem;
  height: 3rem;
  background: #7f56d9;
  border-radius: 24px;

  @media only screen and (min-width: 48rem) {
    width: 0.5rem;
    height: 5rem;
  }
`
export const Horizontal = styled(Vertical)`
  width: 3rem;
  height: 0.2rem;

  @media only screen and (min-width: 48rem) {
    width: 5rem;
    height: 0.5rem;
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
