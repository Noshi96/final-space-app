import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 4.5rem;
  background: #7f56d9a1;
  z-index: 11;
  box-shadow: 0px 0px 12px #ffffffaa;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 5%;

  @media only screen and (min-width: 90rem) {
    padding: 0 2.5rem;
  }
`

export const HeaderLogo = styled.a`
  display: flex;
  font-size: 1.25rem;
`

export const Image = styled.img`
  display: inline-block;
  width: 12em;
`
export const MainNav = styled.nav`
  opacity: 1;
`

export const HeaderTitle = styled.a`
  display: flex;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-decoration: none;
  color: inherit;
`
