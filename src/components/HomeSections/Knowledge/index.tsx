import Image from 'next/image'
import { FC } from 'react'
import IKnowledge from '../../../interfaces/IKnowledge'
import Section from '../../../styles/layout/Section'
import TitleSection from '../../TitleSection'
import { KnowledgeButton, KnowledgeContainer } from './styles'

interface KnowledgeProps {
  knowledge: IKnowledge[]
}

const Knowledge: FC<KnowledgeProps> = ({ knowledge }) => {
  return (
    <Section id="knowledge" patternPositionY="bottom" patternPositionX="right">
      <TitleSection alignCenter>Conhecimentos</TitleSection>

      <KnowledgeContainer>
        {knowledge.map(({ description, icon, id, name }) => (
          <KnowledgeButton key={id}>
            <div className="icon-container">
              <Image src={icon} alt={name} layout="fill" objectFit="contain" />
            </div>
          </KnowledgeButton>
        ))}
      </KnowledgeContainer>
    </Section>
  )
}

export default Knowledge
