import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import Container from '../../styles/layout/Container'
import Text from '../../styles/layout/Text'
import { HeaderInner, HeaderWrapper, NavBarContainer } from './styles'

const Header: FC = () => {
  const { pathname } = useRouter()
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setSticky(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderWrapper isSticky={isSticky}>
      <HeaderInner>
        <Text as="h1" italic variant="heading1">
          Ezequiel Soares
        </Text>

        {pathname === '/' && (
          <nav>
            <NavBarContainer>
              <li>
                <Text href="#about" as="a" variant="body2">
                  Sobre Mim
                </Text>
              </li>
              <li>
                <Text as="a" href="#projects" variant="body2">
                  Projetos
                </Text>
              </li>
              <li>
                <Text as="a" href="#formation" variant="body2">
                  Formação
                </Text>
              </li>
              <li>
                <Text href="#contact" as="a" variant="body2">
                  Contato
                </Text>
              </li>
            </NavBarContainer>
          </nav>
        )}
      </HeaderInner>
    </HeaderWrapper>
  )
}

export default Header
