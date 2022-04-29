import styled from 'styled-components'
import Container from '../../../styles/layout/Container'

export const ExperienceContainer = styled(Container)`
  width: 100%;
  margin-top: ${props => props.theme.spaces.small_3};
`

export const ExperienceList = styled.ul`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 5px;
    border-radius: 5px;
    height: 100%;
    margin: 0 auto;
    background: ${props =>
      `linear-gradient(180deg, ${props.theme.colorsGrey.g9} 0%, ${props.theme.colorsGrey.g10} 100%);`};

    @media (max-width: 850px) {
      left: initial;
      margin: initial;
      right: 0;
    }
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spaces.small_2};
  }
`

export const ExperienceItem = styled.li`
  position: relative;
  background: ${props => props.theme.colorsPrimary.p100};
  border-radius: ${props => props.theme.spaces.extra_small_1};
  padding: ${props => props.theme.spaces.small_1};

  width: ${props => `calc(50% - ${props.theme.spaces.small_2})`};

  &::before {
    content: '';
    position: absolute;

    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${props => props.theme.colorsPrimary.p800};
    box-shadow: ${props => props.theme.shadows.small};

    top: 50%;
    right: -40px;
    transform: translateY(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);

    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: ${props => `10px solid ${props.theme.colorsPrimary.p100}`};
  }

  &:nth-child(odd) {
    margin-left: auto;

    &::after {
      left: -10px;
      border-left: none;
      border-right: ${props => `10px solid ${props.theme.colorsPrimary.p100}`};
    }

    &::before {
      left: -40px;
    }
  }

  .experience-header {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spaces.extra_small_2};
    margin-bottom: ${props => props.theme.spaces.extra_small_2};

    .company-logo {
      flex-shrink: 0;
      position: relative;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2px solid ${props => props.theme.colorsPrimary.p700};
      overflow: hidden;
    }
  }

  .experience-techs {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spaces.extra_small_2};
    margin-top: ${props => props.theme.spaces.small_1};
    flex-wrap: wrap;

    span {
      cursor: default;
      padding: ${props =>
        `${props.theme.spaces.extra_small_1} ${props.theme.spaces.extra_small_2}`};
      border-radius: 50px;
      background: ${props => props.theme.gradients.white};
      color: ${props => props.theme.colorsPrimary.p100};
      font-size: 1.2rem;
      font-weight: 400;
      box-shadow: 0px 0px 5px rgba(244, 246, 255, 0.25);

      transition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: 0px 0px 8px rgba(244, 246, 255, 0.25);
      }
    }
  }

  &#experience-item {
    @media (max-width: 850px) {
      width: ${props => `calc(100% - ${props.theme.spaces.small_2})`};
      margin-left: 0 !important;
      margin-right: auto;

      &::after {
        right: -10px;
        left: initial;
        border-left: ${props => `10px solid ${props.theme.colorsPrimary.p100}`};
        border-right: none;
      }

      &::before {
        right: -38px;
        left: initial;
      }
    }
  }

  @media (max-width: 500px) {
    .experience-header h4 {
      font-size: 1.8rem;
    }

    .company-logo {
      width: 20px;
      height: 20px;
    }

    .experience-info p {
      font-size: 1.4rem;
    }
  }
`
