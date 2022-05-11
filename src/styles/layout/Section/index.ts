import styled, { css } from 'styled-components'

interface HeaderProps {
  patternPositionX?: 'left' | 'right'
  patternPositionY?: 'top' | 'bottom'
  isBlack?: boolean
  disablePattern?: boolean
  disableSmooth?: boolean
}

const Section = styled.section<HeaderProps>`
  overflow: hidden;
  position: relative;
  z-index: 1;
  background: ${props =>
    props.isBlack ? props.theme.colorsGrey.g12 : props.theme.colorsGrey.g11};

  padding-top: ${props => props.theme.spaces.medium_3};
  padding-bottom: ${props => props.theme.spaces.medium_3};

  @media (max-width: 1050px) {
    padding: ${props => props.theme.spaces.medium_2};
  }

  @media (max-width: 840px) {
    padding-left: ${props => props.theme.spaces.small_2};
    padding-right: ${props => props.theme.spaces.small_2};
  }

  @media (max-width: 600px) {
    padding-top: ${props => props.theme.spaces.medium_1};
    padding-bottom: ${props => props.theme.spaces.medium_1};
  }

  @media (max-width: 480px) {
    padding-left: ${props => props.theme.spaces.small_1};
    padding-right: ${props => props.theme.spaces.small_1};
  }

  &::before {
    content: ${props => (props.disablePattern ? '""' : 'url("/detail.svg")')};
    position: absolute;
    z-index: -1;
    display: block;

    ${props => (props.patternPositionX === 'left' ? 'left: 0;' : 'right: 0;')}
    ${props => (props.patternPositionY === 'top' ? 'top: 0;' : 'bottom: 0;')}
  }

  &::after {
    ${props => !props.disableSmooth && 'content: "";'}
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;

    border-width: ${props =>
      props.isBlack ? '12px 0px 0px 100vw' : '0 0 12px 100vw'};
    border-style: solid;
    border-color: ${props =>
      props.isBlack
        ? 'transparent transparent transparent ' + props.theme.colorsGrey.g11
        : 'transparent transparent ' +
          props.theme.colorsGrey.g12 +
          ' transparent'};
    z-index: 15;
  }
`

Section.defaultProps = {
  isBlack: false,
  disablePattern: false,
  patternPositionX: 'left',
  patternPositionY: 'top',
  disableSmooth: false
}

export default Section
