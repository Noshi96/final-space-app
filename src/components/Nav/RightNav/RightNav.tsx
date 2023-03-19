import { MainNavList, MainNavLink } from './style'
import Link from 'next/link'

export interface IRightNavProps {
  open: boolean
}

const RightNav = ({ open }: IRightNavProps) => {
  return (
    <MainNavList open={open}>
      <li>
        <Link href='/characters' passHref>
          <MainNavLink>Characters</MainNavLink>
        </Link>
      </li>
      <li>
        <Link href='/characters' passHref>
          <MainNavLink>Episodes</MainNavLink>
        </Link>
      </li>
      <li>
        <Link href='/characters' passHref>
          <MainNavLink>Info</MainNavLink>
        </Link>
      </li>
      <li>
        <Link href='/characters' passHref>
          <MainNavLink>Games</MainNavLink>
        </Link>
      </li>
    </MainNavList>
  )
}

export default RightNav
