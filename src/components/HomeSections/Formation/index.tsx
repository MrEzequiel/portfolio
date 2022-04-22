import { FC } from 'react'
import { useTheme } from 'styled-components'
import IFormation from '../../../interfaces/IFormation'
import Section from '../../../styles/layout/Section'
import Text from '../../../styles/layout/Text'
import TitleSection from '../../TitleSection'
import { FormationContainer, FormationItem, FormationList } from './styles'

interface FormationProps {
  formations: IFormation[]
}

const Formation: FC<FormationProps> = ({ formations }) => {
  const theme = useTheme()

  return (
    <Section
      isBlack
      patternPositionX="left"
      patternPositionY="bottom"
      id="formation"
    >
      <FormationContainer>
        <div className="text">
          <TitleSection>Formação</TitleSection>

          <Text as="p" variant="body3">
            Estou formando em Tecnologia em Sistemas para Internet, além disso,
            venho estudando frequêntemente em cursos para aprender cada vez
            mais.
          </Text>
        </div>

        <FormationList>
          {formations.map(formation => (
            <FormationItem key={formation.id}>
              <div className="card">
                <div className="upper">
                  <Text
                    as="p"
                    variant="heading1"
                    style={{
                      color: theme.colorsGrey.g6,
                      textTransform: 'uppercase',
                      fontSize: theme.spaces.small_1,
                      fontWeight: 400
                    }}
                  >
                    {formation.type}
                  </Text>

                  <Text
                    as="p"
                    variant="body3"
                    style={{
                      fontWeight: 600,
                      marginTop: theme.spaces.extra_small_1,
                      lineHeight: 1.2
                    }}
                  >
                    {formation.title}
                  </Text>
                </div>

                <div className="down">
                  <Text
                    as="p"
                    variant="body3"
                    style={{
                      color: theme.colorsGrey.g6,
                      fontFamily: theme.fonts.heading
                    }}
                  >
                    {formation.location} |{' '}
                    {new Date(formation.date_start).getFullYear() +
                      ' - ' +
                      (formation.date_end
                        ? new Date(formation.date_end).getFullYear()
                        : 'Atual')}
                  </Text>
                </div>
              </div>
            </FormationItem>
          ))}
        </FormationList>
      </FormationContainer>
    </Section>
  )
}

export default Formation
