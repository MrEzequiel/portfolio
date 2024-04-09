import { FC } from 'react'
import { useTheme } from 'styled-components'

import * as S from './styles'
import Text from '../../../styles/layout/Text'
import Section from '../../../styles/layout/Section'
import Image from 'next/image'
import Button from '../../../styles/layout/Button'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdArrowDropDown, MdTextSnippet } from 'react-icons/md'

const Introduction: FC = () => {
  const theme = useTheme()

  return (
    <S.IntruductionBackground>
      <Section
        isBlack
        patternPositionX="left"
        patternPositionY="bottom"
        id="introduction"
        style={{
          position: 'relative',
          background: 'transparent',
          padding: `${theme.spaces.medium_1} 0 !important`
        }}
      >
        <S.IntroductionWrapper>
          <S.IntroductionImage>
            <div className="social-links">
              <a
                href="https://github.com/MrEzequiel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ezequiel-soares-da-silva-b64a64207/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="image-wrapper">
              <Image
                fill
                priority
                style={{ objectFit: 'contain' }}
                src="/me.png"
                alt="foto de ezequiel soares"
              />
            </div>
          </S.IntroductionImage>

          <S.IntroductionText>
            <Text as="h2" italic variant="heading1">
              Desenvolvedor Front End<span>.</span>
            </Text>

            <Text variant="body3" style={{ color: theme.colorsGrey.g4 }}>
              Me chamo Ezequiel Soares, estou atuando na área de Front End,
              especializado no ecossistema{' '}
              <S.StrongText as="strong">React</S.StrongText>. Tenho uma paixão
              profunda por criar produtos orientados para o usuário, colaborando
              com equipes focadas em soluções, e utilizando{' '}
              <S.StrongText as="strong">métricas e testes</S.StrongText> para
              garantir a qualidade e eficiência no desenvolvimento.
            </Text>

            <S.LinkCurriculum
              href="https://docs.google.com/document/d/1q7Ey1dXcwwsTXkVnlx_g2ITCANZgRaACKw2sHT4S8zQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                startIcon={<MdTextSnippet />}
                variant="contained"
                scale="medium"
                style={{ marginTop: theme.spaces.small_1 }}
              >
                Currículo
              </Button>
            </S.LinkCurriculum>
          </S.IntroductionText>
        </S.IntroductionWrapper>

        <S.ScrollIndicator>
          <a href="#about-me">
            <MdArrowDropDown size={40} color={theme.colorsPrimary.p200} />
          </a>
        </S.ScrollIndicator>
      </Section>
    </S.IntruductionBackground>
  )
}

export default Introduction
