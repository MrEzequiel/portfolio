import Image from 'next/image'
import { FC } from 'react'
import { useTheme } from 'styled-components'
import useMediaQuery from '../../../hooks/useMediaQuery'
import Section from '../../../styles/layout/Section'
import Text from '../../../styles/layout/Text'
import { AboutMeContainer, TextContainer } from './styles'

const AboutMe: FC = () => {
  const theme = useTheme()
  const isTablet = useMediaQuery('(max-width: 768px)')
  const isMobile = useMediaQuery('(max-width: 576px)')

  return (
    <Section id="about-me" patternPositionX="right" patternPositionY="top">
      <AboutMeContainer>
        <div>
          <Text
            as="h2"
            variant={
              (isMobile && 'heading3') || (isTablet && 'heading4') || 'heading5'
            }
            italic
            divider
          >
            Sobre Mim
          </Text>

          <TextContainer>
            <Text as="p" variant={isMobile ? 'body2' : 'body3'}>
              Olá, sou o Ezequiel e estou ingressando no mundo da programação e
              do design. Estou sempre querendo aprender e sem medo de perguntar
              e errar.
            </Text>

            <Text as="p" variant={isMobile ? 'body2' : 'body3'}>
              No momento estou produzindo conteúdo e me aperfeiçoando meus
              conhecimento no Front End e Design.
            </Text>

            <Text as="p" variant={isMobile ? 'body2' : 'body3'}>
              Me motivo em sempre aprender algo novo e também criar aplicações
              incríveis 100% minhas. Comecei a estudar programação em Junho de
              2021 e me apaixonei em trazer soluções e contruir protótipos.
            </Text>
          </TextContainer>
        </div>

        <div className="ilustration-container">
          <Image
            src="/ilustration-about.svg"
            layout="fill"
            alt="ilustração sobre mim"
          />
        </div>
      </AboutMeContainer>
    </Section>
  )
}

export default AboutMe
