import styled from 'styled-components'

export const SectionHero = styled.section`
  color: #eee;
  display: flex;
  height: 100vh;
  position: fixed;
`

export const Hero = styled.div`
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 9.6rem;
  align-items: center;
  margin-bottom: 9rem;

  @media only screen and (min-width: 58rem) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  @media only screen and (max-width: 24rem) {
    align-items: flex-end;
  }
`

export const HeroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const HeadingPrimary = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1.2rem;
  span {
    color: #fdac56;
    font-weight: 600;
  }
  @media only screen and (min-width: 48rem) {
    font-size: 4.4rem;
    margin-bottom: 2.2rem;
  }
`
export const HeroDescription = styled.p`
  font-size: 1rem;
  line-height: 1.2;
  margin-bottom: 1.2rem;

  span {
    color: #fdac56;
    font-weight: 600;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 48rem) {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 2.2rem;

    span {
      color: #fdac56;
      font-weight: 600;
      font-size: 2.6rem;
    }
  }
`

export const LearnMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  width: 10rem;
  height: 2.5rem;
  background: #7f56d9;
  border: 1px solid #7f56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 24px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #7f56a9;
    border: 1px solid #7f56a9;
    box-shadow: 0px 5px 2px rgba(16, 24, 40, 0.05);
  }

  &:active {
    background: #7f56d9;
    border: 1px solid #7f56d9;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
`

export const Image = styled.img`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`
