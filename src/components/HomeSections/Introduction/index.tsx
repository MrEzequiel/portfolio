import Image from 'next/image'
import { FC } from 'react'
import Section from '../../../styles/layout/Section'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdTextSnippet } from 'react-icons/md'
import {
  IntroductionImage,
  IntroductionText,
  IntroductionWrapper
} from './styles'
import Text from '../../../styles/layout/Text'
import { useTheme } from 'styled-components'
import Button from '../../../styles/layout/Button'

const Introduction: FC = () => {
  const theme = useTheme()

  return (
    <Section
      isBlack
      patternPositionX="left"
      patternPositionY="bottom"
      style={{
        marginTop: '85px'
      }}
      id="introduction"
    >
      <IntroductionWrapper>
        <IntroductionImage>
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
              src="/me.png"
              alt="foto de ezequiel soares"
              layout="fill"
              priority
              objectFit="contain"
            />
          </div>
        </IntroductionImage>

        <IntroductionText>
          <Text as="h2" italic variant="heading1">
            Desenvolvedor Front End<span>.</span>
          </Text>

          <Text variant="body3" style={{ color: theme.colorsGrey.g4 }}>
            Me chamo Ezequiel Soares, estou atuando na área de Front End,
            especialmente no ecossistema JavaScript, como ReactJS,
            styled-components, TypeScript, NextJS, React Native e muito mais!
          </Text>

          <Button
            startIcon={<MdTextSnippet />}
            variant="contained"
            scale="medium"
            style={{ marginTop: theme.spaces.small_1 }}
          >
            <a href="/curriculo-ezequiel.pdf" download>
              Currículo
            </a>
          </Button>
        </IntroductionText>
      </IntroductionWrapper>
    </Section>
  )
}

export default Introduction
