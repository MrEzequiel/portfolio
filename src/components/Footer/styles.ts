import styled from 'styled-components'
import Container from '../../styles/layout/Container'
import Section from '../../styles/layout/Section'

export const FooterContainer = styled(Section)`
  background-color: #000 !important;
  margin-top: auto;

  overflow: initial !important;

  &::after {
    display: none;
  }
`

export const FooterContent = styled(Container)`
  position: relative;

  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${props => props.theme.spaces.small_3};

  &::before {
    content: '';
    position: absolute;
    top: -120px;
    left: 20px;

    display: block;
    width: 60px;
    height: 60px;
    border-radius: 30px 0px 0px 0px;
    background: ${({ theme }) => theme.gradients.primary};
    box-shadow: ${({ theme }) => theme.shadows.large};

    @media (max-width: 850px) {
      top: -100px;
    }
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spaces.small_2};

    &::before {
      display: none;
    }
  }
`

export const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spaces.small_2};
`

export const FooterLink = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spaces.small_1};

  svg {
    color: ${({ theme }) => theme.colorsPrimary.p800};
  }

  a {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1;

    position: relative;
    transition: color 0.3s ease;

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }

    @media (max-width: 450px) {
      font-size: 1.4rem;
    }

    &::before {
      z-index: -1;
      border-radius: 1px;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: ${({ theme }) => theme.colorsPrimary.p800};
      transition: all 0.3s ease;
    }

    &:hover,
    &:focus,
    &:active,
    &:focus-within {
      color: ${({ theme }) => theme.colorsPrimary.p100};

      &::before {
        right: 0;
        width: 100%;
      }
    }

    &:focus-within,
    &:focus {
      outline: ${({ theme }) => `1px solid ${theme.colorsPrimary.p800}`};
    }
  }
`
