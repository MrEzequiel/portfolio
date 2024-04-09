import { FC } from 'react'
import useMediaQuery from '../../../hooks/useMediaQuery'

import Image from 'next/image'
import TitleSection from '../../TitleSection'

import Section from '../../../styles/layout/Section'
import Text from '../../../styles/layout/Text'
import { AboutMeContainer, TextContainer } from './styles'

const AboutMe: FC = () => {
  const isMobile = useMediaQuery('(max-width: 576px)')

  return (
    <Section id="about-me" patternPositionX="right" patternPositionY="top">
      <AboutMeContainer>
        <div>
          <TitleSection>Sobre mim</TitleSection>

          <TextContainer>
            <Text as="p" variant={isMobile ? 'body2' : 'body3'}>
              Opa, tranquilo? 👋🏾 Sou o Ezequiel e sou um programador Front End
              apaixonado pelo desenvolvimento web. Conheci o mundo da
              programação em 2018 e desde então, me encontrei em constante busca
              por aprendizado e evolução em minha carreira.
            </Text>

            <Text as="p" variant={isMobile ? 'body2' : 'body3'}>
              Hoje com mais de{' '}
              <strong>2 anos de experiência profissional</strong>, tive a
              oportunidade de trabalhar em projetos incríveis e desenvolver
              habilidades em tecnologias como{' '}
              <Text
                as="strong"
                variant={isMobile ? 'body2' : 'body3'}
                style={{ fontWeight: 600 }}
              >
                HTML, CSS, JavaScript, React, Typescript, Next, etc
              </Text>
              . Além disso, também estou sempre em busca de manter-me atualizado
              com as últimas tendências e tecnologias da área.
            </Text>
          </TextContainer>
        </div>

        <div className="ilustration-container">
          <Image
            src="/ilustration-about.svg"
            alt="ilustração sobre mim"
            fill
            priority
          />
        </div>
      </AboutMeContainer>
    </Section>
  )
}

export default AboutMe
