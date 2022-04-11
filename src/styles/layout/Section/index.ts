import styled from 'styled-components'

interface HeaderProps {
  patternPositionX?: 'left' | 'right'
  patternPositionY?: 'top' | 'bottom'
  isBlack?: boolean
  disablePattern?: boolean
}

const Section = styled.section<HeaderProps>`
  position: relative;
  z-index: 1;
  background: ${props =>
    props.isBlack ? props.theme.colorsGrey.g12 : props.theme.colorsGrey.g11};

  padding-top: ${props => props.theme.spaces.medium_1};
  padding-bottom: ${props => props.theme.spaces.medium_1};

  &::before {
    content: ${props => (props.disablePattern ? '""' : 'url("/detail.svg")')};
    position: absolute;
    z-index: -1;
    display: block;

    ${props => (props.patternPositionX === 'left' ? 'left: 0;' : 'right: 0;')}
    ${props => (props.patternPositionY === 'top' ? 'top: 0;' : 'bottom: 0;')}
  }
`

Section.defaultProps = {
  isBlack: false,
  disablePattern: false,
  patternPositionX: 'left',
  patternPositionY: 'top'
}

export default Section
