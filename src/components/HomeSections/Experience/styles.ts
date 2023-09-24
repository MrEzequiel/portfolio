import styled from 'styled-components'
import Container from '../../../styles/layout/Container'

export const ExperienceContainer = styled(Container)`
  width: 100%;
  margin-top: ${props => props.theme.spaces.small_3};
`

export const ExperienceList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const ExperienceItem = styled.li`
  &:not(:first-child) {
    padding-top: ${props => props.theme.spaces.small_2};
  }

  &:not(:last-child) {
    border-bottom: 2px solid ${props => props.theme.colorsGrey.g12};
    padding-bottom: ${props => props.theme.spaces.small_2};
  }

  .experience-header {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spaces.extra_small_2};
    margin-bottom: ${props => props.theme.spaces.extra_small_2};

    .company-logo {
      flex-shrink: 0;
      position: relative;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;

      @media (max-width: 480px) {
        width: 32px;
        height: 32px;
      }
    }
  }
`

export const FooterExperience = styled.div`
  margin-top: ${props => props.theme.spaces.small_1};
`

export const TechsList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spaces.extra_small_1};

  #experience-techs {
  }
`
