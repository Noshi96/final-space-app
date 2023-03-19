import styled from 'styled-components';
import { IRightNavProps } from './RightNav';

export const MainNavList = styled.ul<IRightNavProps>`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;

  @media (max-width: 62rem) {
    li {
      margin-top: 4rem;
      padding: 1rem 1rem;
    }
    gap: 1rem;
    flex-flow: column nowrap;
    background: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 19rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export const MainNavLink = styled.a`
  display: flex;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-decoration: none;
  color: #fff;
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.6rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: #fdac56;
  }
`;
