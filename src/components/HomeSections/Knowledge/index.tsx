import { FC, useRef, useState } from 'react'
import { useTheme } from 'styled-components'
import Image from 'next/image'

import Section from '../../../styles/layout/Section'
import Text from '../../../styles/layout/Text'
import { KnowledgeItem, KnowledgeList } from './styles'

import TitleSection from '../../TitleSection'
import IKnowledge from '../../../interfaces/IKnowledge'
import Container from '../../../styles/layout/Container'
import useMediaQuery from '../../../hooks/useMediaQuery'
import Tilt from 'react-next-tilt'

interface KnowledgeProps {
  knowledge: IKnowledge[]
}

const Knowledge: FC<KnowledgeProps> = ({ knowledge }) => {
  const knowledgeBodyRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 576px)')
  const [selectedKnowledge, setSelectedKnowledge] = useState<IKnowledge>(
    knowledge[0]
  )

  return (
    <Section
      isBlack
      id="knowledge"
      patternPositionY="bottom"
      patternPositionX="right"
    >
      <Container>
        <TitleSection>Conhecimentos</TitleSection>
        <Text
          as="p"
          variant={isMobile ? 'body2' : 'body3'}
          style={{ marginTop: theme.spaces.small_2 }}
        >
          Aqui estão algumas das linguagens, tecnologias e ferramentas que tenho
          amplo domínio e utilizo regularmente em minha rotina.
        </Text>

        <KnowledgeList>
          {knowledge.map(knowledgeItem => (
            <Tilt key={knowledgeItem.id}>
              <KnowledgeItem>
                <div className="icon-container">
                  <Image
                    src={knowledgeItem.icon}
                    alt={knowledgeItem.name}
                    layout="fill"
                    objectFit="contain"
                    draggable={false}
                  />
                </div>
                <Text as="p" variant={isMobile ? 'body2' : 'body3'}>
                  {knowledgeItem.name}
                </Text>
              </KnowledgeItem>
            </Tilt>
          ))}
        </KnowledgeList>
      </Container>
    </Section>
  )
}

export default Knowledge
