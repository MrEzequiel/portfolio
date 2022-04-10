import styled from 'styled-components'

interface TextProps {
  italic?: boolean
  weight?: number
  variant?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'body1'
    | 'body2'
    | 'body3'
}

const getFontSize = (variant: TextProps['variant']) => {
  switch (variant) {
    case 'heading1':
      return '2.4rem'
    case 'heading2':
      return '3.2rem'
    case 'heading3':
      return '4rem'
    case 'heading4':
      return '4.8rem'
    case 'heading5':
      return '5.6rem'

    case 'body1':
      return '1.2rem'
    case 'body2':
      return '1.4rem'
    case 'body3':
      return '1.6rem'
    default:
      return '1rem'
  }
}

const getLineHeight = (variant: TextProps['variant']) => {
  switch (variant) {
    case 'body1':
      return '1.68rem'
    case 'body2':
      return '1.96rem'
    case 'body3':
      return '2.24rem'

    default:
      return '1.2'
  }
}

const getFontFamily = (variant: TextProps['variant']) => {
  switch (variant) {
    case 'heading1':
    case 'heading2':
    case 'heading3':
    case 'heading4':
    case 'heading5':
      return '"Space Mono", monospace'

    case 'body1':
    case 'body2':
    case 'body3':
      return '"Inter", sans-serif'

    default:
      return '"Inter", sans-serif'
  }
}

const getFontWeight = (variant: TextProps['variant']) => {
  switch (variant) {
    case 'heading1':
    case 'heading2':
    case 'heading3':
    case 'heading4':
    case 'heading5':
      return 700

    case 'body1':
    case 'body2':
    case 'body3':
      return 300

    default:
      return 300
  }
}

const Text = styled.p<TextProps>`
  font-size: ${props => getFontSize(props.variant)};
  line-height: ${props => getLineHeight(props.variant)};

  font-weight: ${props =>
    !!props.weight ? props.weight : getFontWeight(props.variant)};

  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-family: ${props => getFontFamily(props.variant)};
`

Text.defaultProps = {
  variant: 'body1',
  italic: false
}

export default Text
