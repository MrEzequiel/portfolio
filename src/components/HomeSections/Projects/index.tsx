import { FC } from 'react'
import Image from 'next/image'

import { useTheme } from 'styled-components'

import { ProjectItem, ProjectItemDivider, ProjectList } from './styles'
import TitleSection from '../../TitleSection'
import Container from '../../../styles/layout/Container'
import Section from '../../../styles/layout/Section'
import Text from '../../../styles/layout/Text'

const typesProjects = [
  {
    title: 'Desafios',
    image: '/challange-icon.svg',
    description:
      'Projetos desenvolvidos em ideias extraídas de sites específico em desenvolvimento.'
  },
  {
    title: 'Meus Projetos',
    image: '/project-icon.svg',
    description:
      'Minhas aplicações, onde executei ideias e desenvolvi projetos autorais. Passando por design, desenvolvimento e teste.'
  },
  {
    title: 'Prática',
    image: '/practice-icon.svg',
    description:
      'Aplicações desenvolvidas por meio de terceiros, onde seu objetivo foi praticar conteúdos estudados em bootcamps, cursos ou aulas.'
  }
]

const Projects: FC = () => {
  const theme = useTheme()

  return (
    <Section isBlack id="projects">
      <Container>
        <TitleSection alignCenter>Projetos</TitleSection>

        <ProjectList>
          {typesProjects.map(project => (
            <ProjectItem key={project.title}>
              <div className="icon-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <Text
                as="h4"
                variant="heading1"
                style={{
                  textTransform: 'uppercase',
                  marginTop: theme.spaces.extra_small_2,
                  textAlign: 'center'
                }}
              >
                {project.title}
              </Text>

              <ProjectItemDivider />

              <Text
                as="p"
                variant="body2"
                style={{
                  color: theme.colorsGrey.g4
                }}
              >
                {project.description}
              </Text>
            </ProjectItem>
          ))}
        </ProjectList>
      </Container>
    </Section>
  )
}

export default Projects
