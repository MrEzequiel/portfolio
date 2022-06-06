import Image from 'next/image'
import { FC } from 'react'
import { useTheme } from 'styled-components'
import useMediaQuery from '../../../hooks/useMediaQuery'
import Section from '../../../styles/layout/Section'
import Text from '../../../styles/layout/Text'
import TitleSection from '../../TitleSection'
import { AboutMeContainer, TextContainer } from './styles'

const AboutMe: FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 576px)')

  return (
    <Section id="about-me" patternPositionX="right" patternPositionY="top">
      <AboutMeContainer>
        <div>
          <TitleSection>Sobre mim</TitleSection>

          <TextContainer>
            <Text as="p" variant={isMobile ? 'body2' : 'body3'}>
              Opa, tranquilo? 👋🏾 Sou o Ezequiel e estou ingressando no mundo da
              programação e do design. Estou sempre querendo aprender e sem medo
              de perguntar e errar. No momento estou trabalhando como
              dessenvolvedor Front End Jr. na Usabit e me formando em Tecnologia
              em Sistemas para Internet pelo IFAC.
            </Text>

            <Text as="p" variant={isMobile ? 'body2' : 'body3'}>
              Estou estudando no momento ReactJS e NextJS, todo seu ecossistema
              e também design, mais focado no User Interface (UI). Tenho
              experiência em ReactJS trabalhando com seus framework e
              bibliotecas mais famosas e frequentemente faço projetos para
              treinar o mesmo.
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
            priority
          />
        </div>
      </AboutMeContainer>
    </Section>
  )
}

export default AboutMe
