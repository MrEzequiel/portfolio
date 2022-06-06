import Image from 'next/image'
import { FC, useMemo } from 'react'
import IExperience from '../../../interfaces/IExperience'
import Section from '../../../styles/layout/Section'
import Text from '../../../styles/layout/Text'
import TitleSection from '../../TitleSection'
import { ExperienceContainer, ExperienceItem, ExperienceList } from './styles'
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  format
} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useTheme } from 'styled-components'
import useMediaQuery from '../../../hooks/useMediaQuery'
import SkeletonPlaceholder from '../../../utils/SkeletonPlaceholder'

interface ExperienceProps {
  experiences: IExperience[]
}

const Experience: FC<ExperienceProps> = ({ experiences }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 450px)')

  const formateDate = (date: string) => {
    return format(new Date(date), 'LLL yyyy', { locale: ptBR })
  }

  const getExperienceDuration = (start: string, end?: string) => {
    const startDate = new Date(start)
    const endDate = end ? new Date(end) : new Date()

    if (endDate.getFullYear() - startDate.getFullYear() > 0) {
      const years = differenceInYears(endDate, startDate)
      return `${years} ano${years > 1 ? 's' : ''}`
    }

    if (endDate.getMonth() - startDate.getMonth() > 0) {
      const months = differenceInMonths(endDate, startDate)
      return `${months} ${months > 1 ? 'meses' : 'mês'}`
    }

    const days = differenceInDays(endDate, startDate)
    return `${days} dia${days > 1 ? 's' : ''}`
  }

  return (
    <Section
      disablePattern
      style={{
        backgroundImage: "url('/pattern-experience.svg')",
        paddingRight: 0,
        paddingLeft: 0
      }}
      id="experience"
      disableSmooth
    >
      <TitleSection alignCenter>Experiência</TitleSection>

      <ExperienceContainer>
        <ExperienceList>
          {experiences.map(experience => (
            <ExperienceItem key={experience.id} id="experience-item">
              <div className="experience-header">
                <div className="company-logo">
                  <Image
                    src={experience.logo_company}
                    alt={experience.company}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={SkeletonPlaceholder()}
                    quality={100}
                  />
                </div>
                <Text as="h4" variant="heading1" style={{ fontWeight: 400 }}>
                  {experience.title}
                </Text>
              </div>

              <div className="experience-info">
                <Text as="p" variant="body3">
                  {experience.company}
                </Text>

                <Text
                  as="p"
                  variant="body3"
                  style={{ color: theme.colorsGrey.g2 }}
                >
                  {formateDate(experience.date_start)} -{' '}
                  {experience.date_end
                    ? formateDate(experience.date_end)
                    : 'Até o momento'}{' '}
                  <Text
                    as={!isMobile ? 'span' : 'p'}
                    variant="body3"
                    style={{ color: theme.colorsGrey.g6 }}
                  >
                    {!isMobile && '🞄 '}
                    {getExperienceDuration(
                      experience.date_start,
                      experience.date_end
                    )}
                  </Text>
                </Text>
              </div>

              <div className="experience-techs">
                {experience.techs.map(tech => (
                  <Text as="span" variant="body3" key={tech}>
                    {tech}
                  </Text>
                ))}
              </div>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </ExperienceContainer>
    </Section>
  )
}

export default Experience
