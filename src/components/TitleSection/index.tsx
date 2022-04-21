import { FC, PropsWithChildren } from 'react'
import Text, { TextProps } from '../../styles/layout/Text'
import useMediaQuery from '../../hooks/useMediaQuery'

const TitleSection: FC<PropsWithChildren<TextProps>> = ({
  children,
  ...props
}) => {
  const isTablet = useMediaQuery('(max-width: 768px)')
  const isMobile = useMediaQuery('(max-width: 576px)')

  return (
    <Text
      as="h2"
      variant={
        (isMobile && 'heading3') || (isTablet && 'heading4') || 'heading5'
      }
      italic
      divider
      {...props}
    >
      {children}
    </Text>
  )
}

export default TitleSection
