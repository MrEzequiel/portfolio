import { FC } from 'react'

import TitleSection from '../../TitleSection'
import Section from '../../../styles/layout/Section'
import {
  ExperienceContainer,
  ExperienceList,
} from './styles'

import IExperience from '../../../interfaces/IExperience'
import { ExperienceItem } from './ExperienceItem'

interface ExperienceProps {
  experiences: IExperience[]
}

const Experience: FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Section
      disablePattern
      style={{
        backgroundImage: "url('/pattern-experience.svg')",
        paddingRight: 0,
        paddingLeft: 0
      }}
      id="experience"
    >
      <TitleSection alignCenter>Experiência</TitleSection>

      <ExperienceContainer>
        <ExperienceList>
          {experiences.map(experience => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </ExperienceList>
      </ExperienceContainer>
    </Section>
  )
}

export default Experience
