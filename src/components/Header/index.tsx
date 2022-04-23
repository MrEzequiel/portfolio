import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Text from '../../styles/layout/Text'
import HomeHeader from './HomeHeader'
import { HeaderInner, HeaderWrapper } from './styles'

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

        {pathname === '/' && <HomeHeader />}
      </HeaderInner>
    </HeaderWrapper>
  )
}

export default Header
