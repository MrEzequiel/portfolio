import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  MdArrowBack,
  MdCode,
  MdCoffeeMaker,
  MdImage,
  MdOpenInNew
} from 'react-icons/md'
import TitleSection from '../../components/TitleSection'
import IProject from '../../interfaces/IProject'
import supabase from '../../services/supabase'
import Button from '../../styles/layout/Button'
import Text from '../../styles/layout/Text'
import {
  ProjectContent,
  ProjectEmpty,
  ProjectItem,
  ProjectList,
  ProjectWrapper
} from '../../styles/ProjectPageStyle'

interface IProjectInfo {
  title: string
  image: string
  type: 'challenge' | 'me' | 'practice'
  description: string
}

const getInformationBySlug: { [slug: string]: IProjectInfo } = {
  desafios: {
    title: 'Desafios',
    image: '/challange-icon.svg',
    type: 'challenge',
    description:
      'Projetos desenvolvidos em ideias extraídas de sites específico em desenvolvimento.'
  },
  'meus-projetos': {
    title: 'Meus Projetos',
    image: '/project-icon.svg',
    type: 'me',
    description:
      'Minhas aplicações, onde executei ideias e desenvolvi projetos autorais. Passando por design, desenvolvimento e teste.'
  },
  pratica: {
    title: 'Prática',
    image: '/practice-icon.svg',
    type: 'practice',
    description:
      'Aplicações desenvolvidas por meio de terceiros, onde seu objetivo foi praticar conteúdos estudados em bootcamps, cursos ou aulas.'
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'desafios' } },
      { params: { slug: 'meus-projetos' } },
      { params: { slug: 'pratica' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const slug = ctx.params?.slug as string
  const project = getInformationBySlug[slug]

  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .eq('type', project.type)

  return {
    props: {
      projects,
      projectInfo: project
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}

interface ProjectsProps {
  projects: IProject[]
  projectInfo: IProjectInfo
}

const Projects: NextPage<ProjectsProps> = ({ projects, projectInfo }) => {
  return (
    <>
      <ProjectWrapper>
        <ProjectContent>
          <Link href="/#projects">
            <a>
              <Button startIcon={<MdArrowBack />} variant="text" scale="small">
                voltar
              </Button>
            </a>
          </Link>

          <TitleSection divider>{projectInfo.title}</TitleSection>
          <Text as="p" variant="body3">
            {projectInfo.description}
          </Text>
        </ProjectContent>
      </ProjectWrapper>

      {projects.length > 0 ? (
        <ProjectList as="ul">
          {projects.map(project => (
            <ProjectItem key={project.id}>
              <div className="image-cover">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    quality={90}
                    typeof="gif"
                  />
                ) : (
                  <MdImage size={30} />
                )}
              </div>

              <div className="content">
                <Text as="h5" variant="heading1">
                  {project.title}
                </Text>

                <Text as="p" variant="body2">
                  {project.description}
                </Text>

                <div className="techs">
                  {project.techs.map(tech => (
                    <Text as="span" variant="body2" key={tech}>
                      {tech}
                    </Text>
                  ))}
                </div>

                {(!!project.code_url || !!project.preview_url) && (
                  <div className="links">
                    {!!project.code_url && (
                      <a
                        href={project.code_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          startIcon={<MdCode size={15} />}
                          variant="outlined"
                          scale="small"
                        >
                          code
                        </Button>
                      </a>
                    )}

                    {!!project.preview_url && (
                      <a
                        href={project.preview_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          startIcon={<MdOpenInNew size={15} />}
                          variant="contained"
                          scale="small"
                        >
                          preview
                        </Button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </ProjectItem>
          ))}
        </ProjectList>
      ) : (
        <ProjectEmpty>
          <MdCoffeeMaker size={50} />

          <Text as="p" variant="heading1">
            Não há projetos nessa categoria, estou passando o café para os
            finalizar.
          </Text>
        </ProjectEmpty>
      )}
    </>
  )
}

export default Projects
