import { FC, useEffect, useState } from 'react'
import useMediaQuery from '../../../hooks/useMediaQuery'
import Text from '../../../styles/layout/Text'
import { MenuMobile, MenuMobileWrapper, NavBarContainer } from './styles'

const links = [
  {
    href: '#experience',
    label: 'Experiência'
  },
  {
    href: '#formation',
    label: 'Formação'
  },
  {
    href: '#contact',
    label: 'Contato'
  }
]

const HomeHeader: FC = () => {
  const isMobile = useMediaQuery('(max-width: 750px)')
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)

  useEffect(() => {
    // disable body scroll when menu is open
    if (menuMobileIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuMobileIsOpen, isMobile])

  return (
    <nav>
      {isMobile && (
        <MenuMobileWrapper
          menuMobileIsOpen={menuMobileIsOpen}
          onClick={() => setMenuMobileIsOpen(prev => !prev)}
        >
          <MenuMobile />
          <MenuMobile />
          <MenuMobile />
        </MenuMobileWrapper>
      )}

      <NavBarContainer isOpen={menuMobileIsOpen}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Text
              as="a"
              href={href}
              variant="body2"
              onClick={() => setMenuMobileIsOpen(false)}
            >
              {label}
            </Text>
          </li>
        ))}
      </NavBarContainer>
    </nav>
  )
}

export default HomeHeader
