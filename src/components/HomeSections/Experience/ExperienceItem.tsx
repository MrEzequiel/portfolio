import { useTheme } from "styled-components"
import useMediaQuery from "../../../hooks/useMediaQuery"

import Image from "next/image"
import IExperience from "../../../interfaces/IExperience"

import { Chip } from "../../../styles/layout/Chip"
import Text from "../../../styles/layout/Text"
import {
  ExperienceDescripitonText,
  FooterExperience,
  TechsList,
  ExperienceItem as ExperienceItemContainer
} from "./styles"

import { format } from "date-fns"
import { ptBR } from "date-fns/locale"


interface ExperienceItemProps {
  experience: IExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 450px)')

  const getDifferenceInMilliseconds = (dateStart: string, dateEnd?: string) => {
    const startDate = new Date(dateStart)
    const endDate = dateEnd ? new Date(dateEnd) : new Date()
    return endDate.getTime() - startDate.getTime()
  }

  const formateDate = (date: string) => {
    return format(new Date(date), 'LLLL yyyy', { locale: ptBR })
  }

  const getPlurals = (number: number, singular: string, plural: string) => {
    return number > 1 ? plural : singular
  }

  const getExperienceDuration = (dateStart: string, dateEnd?: string) => {
    const totalTime = getDifferenceInMilliseconds(dateStart, dateEnd)

    const MONTH_IN_MILISECONDS = 1000 * 60 * 60 * 24 * 30

    let months = Math.ceil(totalTime / MONTH_IN_MILISECONDS)
    let years = Math.trunc(months / 12);
    years %= 12;
    months -= years * 12;

    const monthsLabel = `${months} ${getPlurals(months, 'mês', 'meses')}`
    const yearsLabel = `${years} ${getPlurals(years, 'ano', 'anos')}`

    if (years > 0 && months > 0) {
      return `${yearsLabel} e ${monthsLabel}`
    }

    if (years > 0) {
      return yearsLabel;
    }

    return monthsLabel
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
    <ExperienceItemContainer key={experience.id}>
      <div className="experience-header">
        <div className="company-logo">
          <Image
            fill
            src={experience.logo_company}
            alt={experience.title}
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

      <ExperienceDescripitonText as="p">
        {experience.description}
      </ExperienceDescripitonText>

      <FooterExperience>
        <TechsList>
          <Text
            as="span"
            variant="body3"
            style={{ fontWeight: 700 }}
          >
            Tecnologias:
          </Text>
          {experience.techs.map(tech => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </TechsList>
      </FooterExperience>
    </ExperienceItemContainer>
  )
}
