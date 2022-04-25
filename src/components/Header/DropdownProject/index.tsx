import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, memo, useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import ClientOnlyPortal from '../../ClientOnlyPortal'
import { SelectInput, SelectItem, SelectProject } from './styles'
import { CSSTransition } from 'react-transition-group'

const projects = [
  {
    slug: 'pratica',
    title: 'Prática',
    icon: '/practice-icon.svg'
  },
  {
    slug: 'meus-projetos',
    title: 'Meus Projetos',
    icon: '/project-icon.svg'
  },
  {
    slug: 'desafios',
    title: 'Desafios',
    icon: '/challenge-icon.svg'
  }
]

const DropdownProject: FC = () => {
  const { query, push } = useRouter()
  const projectSlug = query.slug as string

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const [projectSelected, setProjectSelected] = useState(() => {
    const project = projects.find(({ slug }) => slug === projectSlug)

    return project || projects[0]
  })

  useEffect(() => {
    if (query.slug === projectSelected.slug) return

    push(`/projetos/${projectSelected.slug}`)
  }, [projectSelected, query, push])

  const getStyles = () => {
    if (!anchorEl) return {}

    const { top, width, height, right } = anchorEl.getBoundingClientRect()
    return {
      width: width + 'px',
      top: `${top + height + 5}px`,
      left: `${right - width}px`
    }
  }

  return (
    <>
      <SelectInput
        onClick={e => {
          if (anchorEl) {
            setIsOpen(false)
          } else {
            setIsOpen(true)
            setAnchorEl(e.currentTarget)
          }
        }}
      >
        {projectSelected.title}

        <MdKeyboardArrowUp size={30} />
      </SelectInput>

      <ClientOnlyPortal selector="#select">
        <CSSTransition
          in={isOpen}
          timeout={400}
          unmountOnExit
          classNames="animation"
          onExited={() => setAnchorEl(null)}
        >
          <SelectProject style={getStyles()}>
            {projects.map(project => (
              <SelectItem
                key={project.slug}
                selected={project.slug === projectSelected.slug}
                onClick={() => {
                  setProjectSelected(project)
                  setIsOpen(false)
                }}
              >
                {project.title}
                <div className="icon">
                  <Image
                    src={project.icon}
                    alt={project.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SelectItem>
            ))}
          </SelectProject>
        </CSSTransition>
      </ClientOnlyPortal>
    </>
  )
}

export default memo(DropdownProject)
