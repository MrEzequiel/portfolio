import { FC } from 'react'
import Image from 'next/image'

import { useTheme } from 'styled-components'
import useMediaQuery from '../../../hooks/useMediaQuery'

import TitleSection from '../../TitleSection'
import Text from '../../../styles/layout/Text'
import Section from '../../../styles/layout/Section'
import { Chip } from '../../../styles/layout/Chip'
import {
  ExperienceContainer,
  ExperienceItem,
  ExperienceList,
  FooterExperience,
  TechsList
} from './styles'

import IExperience from '../../../interfaces/IExperience'
import SkeletonPlaceholder from '../../../utils/SkeletonPlaceholder'
import {
  differenceInDays,
  format,
  differenceInCalendarYears,
  differenceInCalendarMonths
} from 'date-fns'
import { ptBR } from 'date-fns/locale'

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
      const years = differenceInCalendarYears(endDate, startDate)
      startDate.setFullYear(endDate.getFullYear())
      const months = differenceInCalendarMonths(endDate, startDate)
      if (months > 0) {
        return `${years} ${years > 1 ? 'anos' : 'ano'} e ${months} ${
          months > 1 ? 'meses' : 'mês'
        }`
      }
      return `${years} ano${years > 1 ? 's' : ''}`
    }

    if (endDate.getMonth() - startDate.getMonth() > 0) {
      const months = differenceInCalendarMonths(endDate, startDate)
      return `${months} ${months > 1 ? 'meses' : 'mês'}`
    }

    const days = differenceInDays(endDate, startDate)
    return `${days} dia${days > 1 ? 's' : ''}`
  }

  const getDateExperience = (dateStart: string, dateEnd?: string) => {
    const startDate = formateDate(dateStart)
    const endDate = dateEnd ? formateDate(dateEnd) : 'Presente'

    return `${startDate} - ${endDate} (${getExperienceDuration(
      dateStart,
      dateEnd
    )})`
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
    >
      <TitleSection alignCenter>Experiência</TitleSection>

      <ExperienceContainer>
        <ExperienceList>
          {experiences.map(experience => (
            <ExperienceItem key={experience.id}>
              <div className="experience-header">
                <div className="company-logo">
                  <Image
                    src={experience.logo_company}
                    alt={experience.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text">
                  <Text
                    as="h3"
                    variant={isMobile ? 'heading1' : 'heading2'}
                    style={{ color: theme.colorsPrimary.p1400 }}
                  >
                    {experience.title}
                  </Text>
                  <Text as="p" variant="body3">
                    {experience.company} ·{' '}
                    <Text
                      as="span"
                      variant="body3"
                      style={{ color: theme.colorsGrey.g6 }}
                    >
                      {getDateExperience(
                        experience.date_start,
                        experience.date_end
                      )}
                    </Text>
                  </Text>
                </div>
              </div>

              <Text as="p" variant="body3" id="experience-description">
                {experience.description}
              </Text>

              <FooterExperience>
                <TechsList>
                  <Text
                    as="span"
                    variant="body3"
                    style={{ fontWeight: 700 }}
                    id="experience-techs"
                  >
                    Tecnologias:
                  </Text>
                  {experience.techs.map(tech => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </TechsList>
              </FooterExperience>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </ExperienceContainer>
    </Section>
  )
}

export default Experience
