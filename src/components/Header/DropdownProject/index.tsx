import Image from 'next/image'
import { useRouter } from 'next/router'
import React, {
  CSSProperties,
  FC,
  memo,
  useEffect,
  useRef,
  useState
} from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import ClientOnlyPortal from '../../ClientOnlyPortal'
import { SelectInput, SelectItem, SelectProject } from './styles'
import { CSSTransition } from 'react-transition-group'
import useClickOutside from '../../../hooks/useClickOutside'
import useMediaQuery from '../../../hooks/useMediaQuery'

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
  const menuRef = useRef<HTMLUListElement>(null)
  const [styles, setStyles] = useState<CSSProperties>({})
  const isMobile = useMediaQuery('(max-width: 550px)')

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useClickOutside(() => {
    if (anchorEl) {
      setIsOpen(false)
    }
  }, [menuRef])

  const [projectSelected, setProjectSelected] = useState(() => {
    const project = projects.find(({ slug }) => slug === projectSlug)

    return project || projects[0]
  })

  useEffect(() => {
    if (query.slug === projectSelected.slug) return

    push(`/projetos/${projectSelected.slug}`)
  }, [projectSelected, query, push])

  useEffect(() => {
    if (!anchorEl || !menuRef.current) {
      setStyles({})
      return
    }

    const getStyles = () => {
      if (!menuRef.current) {
        return
      }

      const { top, left, width, height } = anchorEl.getBoundingClientRect()

      const totalWidth =
        width > menuRef.current.offsetWidth
          ? width - width
          : menuRef.current.offsetWidth - width

      setStyles({
        minWidth: width,
        top: `${top + height + 5}px`,
        left: `${left - totalWidth}px`
      })
    }

    getStyles()

    const onResize = () => {
      if (!menuRef.current) return

      getStyles()
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [anchorEl])

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
        {!isMobile && projectSelected.title}

        <MdKeyboardArrowUp
          size={30}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}
        />
      </SelectInput>

      <ClientOnlyPortal selector="#select">
        <CSSTransition
          in={isOpen}
          timeout={400}
          unmountOnExit
          classNames="animation"
          onExited={() => setAnchorEl(null)}
          nodeRef={menuRef}
        >
          <SelectProject style={styles} ref={menuRef}>
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
                  <Image src={project.icon} alt={project.title} fill />
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
