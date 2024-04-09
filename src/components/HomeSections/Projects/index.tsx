import { FC } from 'react'
import Image from 'next/image'

import { useTheme } from 'styled-components'

import { ProjectItem, ProjectItemDivider, ProjectList } from './styles'
import TitleSection from '../../TitleSection'
import Container from '../../../styles/layout/Container'
import Section from '../../../styles/layout/Section'
import Text from '../../../styles/layout/Text'
import Link from 'next/link'
import Button from '../../../styles/layout/Button'
import { MdOutlineArrowForward } from 'react-icons/md'
import useMediaQuery from '../../../hooks/useMediaQuery'

export const typesProjects = [
  {
    title: 'Desafios',
    image: '/challenge-icon.svg',
    slug: 'desafios',
    description:
      'Projetos desenvolvidos em ideias extraídas de sites específico em desenvolvimento.'
  },
  {
    title: 'Meus Projetos',
    image: '/project-icon.svg',
    slug: 'meus-projetos',
    description:
      'Minhas aplicações, onde executei ideias e desenvolvi projetos autorais. Passando por design, desenvolvimento e teste.'
  },
  {
    title: 'Prática',
    image: '/practice-icon.svg',
    slug: 'pratica',
    description:
      'Aplicações desenvolvidas por meio de terceiros, onde seu objetivo foi praticar conteúdos estudados em bootcamps, cursos ou aulas.'
  }
]

const Projects: FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Section isBlack id="projects">
      <Container>
        <TitleSection alignCenter>Projetos</TitleSection>

        <ProjectList>
          {typesProjects.map(project => (
            <Link
              href={`/projetos/${project.slug}`}
              key={project.title}
              passHref
              legacyBehavior
            >
              <ProjectItem>
                <div className="icon-wrapper">
                  <Image
                    fill
                    src={project.image}
                    alt={project.title}
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
            </Link>
          ))}
        </ProjectList>
      </Container>

      <Link href="/projetos/meus-projetos" legacyBehavior>
        <a
          style={{
            display: 'block',
            width: 'max-content',
            margin: `${
              isMobile ? theme.spaces.small_1 : theme.spaces.small_3
            } auto 0`
          }}
        >
          <Button endIcon={<MdOutlineArrowForward />}>
            Página de projetos
          </Button>
        </a>
      </Link>
    </Section>
  )
}

export default Projects
