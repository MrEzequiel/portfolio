import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Text from '../../styles/layout/Text'
import HomeHeader from './HomeHeader'
import { HeaderInner, HeaderWrapper } from './styles'
import Link from 'next/link'
import DropdownProject from './DropdownProject'

const Header: FC = () => {
  const { pathname } = useRouter()
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setSticky(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderWrapper isSticky={isSticky}>
      <HeaderInner>
        <Link href="/" passHref>
          <Text as="h1" italic variant="heading1" style={{ cursor: 'pointer' }}>
            Ezequiel Soares
          </Text>
        </Link>

        {pathname === '/' ? <HomeHeader /> : <DropdownProject />}
      </HeaderInner>
    </HeaderWrapper>
  )
}

export default Header
