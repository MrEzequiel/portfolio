import { FC } from 'react'
import { useTheme } from 'styled-components'

import { MdEmail, MdPhone } from 'react-icons/md'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import {
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterLinksList
} from './styles'
import Text from '../../styles/layout/Text'

const Footer: FC = () => {
  const theme = useTheme()

  return (
    <FooterContainer as="footer" id="contact" disableSmooth disablePattern>
      <FooterContent>
        <Text as="p" variant="body2" style={{ color: theme.colorsGrey.g4 }}>
          Quer bater um papo comigo ou me convidar para um projeto? Meus
          contatos:
        </Text>

        <FooterLinksList>
          <FooterLink>
            <MdEmail size={24} />
            <Text
              as="a"
              variant="heading1"
              href="mailto:mr.ezequiel.soares@gmail.com"
            >
              mr.ezequiel.soares@gmail.com
            </Text>
          </FooterLink>

          <FooterLink>
            <AiFillGithub size={24} />
            <Text
              as="a"
              variant="heading1"
              href="https://github.com/MrEzequiel"
              target="_blank"
            >
              MrEzequiel
            </Text>
          </FooterLink>

          <FooterLink>
            <AiFillLinkedin size={24} />
            <Text
              as="a"
              variant="heading1"
              href="https://www.linkedin.com/in/ezequiel-soares-da-silva-b64a64207/"
              target="_blank"
            >
              Ezequiel Soares
            </Text>
          </FooterLink>

          <FooterLink>
            <MdPhone size={24} />
            <Text as="a" variant="heading1" href="tel:+5568996021953">
              +55 68 996021953
            </Text>
          </FooterLink>
        </FooterLinksList>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
