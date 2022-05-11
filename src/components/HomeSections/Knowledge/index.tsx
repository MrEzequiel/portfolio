import Image from 'next/image'
import { FC, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useTheme } from 'styled-components'
import IKnowledge from '../../../interfaces/IKnowledge'
import Section from '../../../styles/layout/Section'
import Text from '../../../styles/layout/Text'
import TitleSection from '../../TitleSection'
import {
  KnowledgeBody,
  KnowledgeContent,
  KnowledgeItem,
  KnowledgeList,
  KnowledgeRelatedTopicsWrapper
} from './styles'

interface KnowledgeProps {
  knowledge: IKnowledge[]
}

const Knowledge: FC<KnowledgeProps> = ({ knowledge }) => {
  const theme = useTheme()
  const [selectedKnowledge, setSelectedKnowledge] = useState<IKnowledge>(
    knowledge[0]
  )

  return (
    <Section id="knowledge" patternPositionY="bottom" patternPositionX="right">
      <TitleSection alignCenter>Conhecimentos</TitleSection>

      <KnowledgeContent>
        <KnowledgeList>
          {knowledge.map(knowledgeItem => (
            <KnowledgeItem
              key={knowledgeItem.id}
              isSelected={selectedKnowledge.id === knowledgeItem.id}
              onClick={() => {
                if (selectedKnowledge.id === knowledgeItem.id) return

                setSelectedKnowledge(knowledgeItem)
              }}
            >
              <div className="icon-container">
                <Image
                  src={knowledgeItem.icon}
                  alt={knowledgeItem.name}
                  layout="fill"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
            </KnowledgeItem>
          ))}
        </KnowledgeList>

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={selectedKnowledge.name}
            classNames="knowledge-animation"
            timeout={400}
          >
            <KnowledgeBody>
              <div className="text-knowledge">
                <Text variant="heading2" as="h3">
                  {selectedKnowledge.name}
                </Text>

                <Text
                  variant="body3"
                  as="p"
                  style={{ marginTop: theme.spaces.extra_small_2 }}
                >
                  {selectedKnowledge.description}
                </Text>

                <KnowledgeRelatedTopicsWrapper>
                  {selectedKnowledge.related_topics.map(relatedTopic => (
                    <span className="chip-topic" key={relatedTopic}>
                      {relatedTopic}
                    </span>
                  ))}
                </KnowledgeRelatedTopicsWrapper>
              </div>
            </KnowledgeBody>
          </CSSTransition>
        </SwitchTransition>
      </KnowledgeContent>
    </Section>
  )
}

export default Knowledge
