import { HeaderContainer, HeaderWrapper, HeaderLogo, Image } from './style'
import Link from 'next/link'
import Navbar from '../Nav/NavBar/NavBar'

export default function Header () {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link href='/' passHref>
          <HeaderLogo>
            <Image
              src='https://images.fanart.tv/fanart/final-space-5e6df59bd745e.png'
              alt='final-space-text'
            />
          </HeaderLogo>
        </Link>
        <Navbar />
      </HeaderWrapper>
    </HeaderContainer>
  )
}
