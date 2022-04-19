import styled, { DefaultTheme, useTheme } from 'styled-components'

interface ButtonProps {
  variant: 'contained' | 'outlined' | 'text'
  scale?: 'small' | 'medium' | 'large'
  disabledShadow?: boolean
}

const getBackgroundColor = (
  variant: ButtonProps['variant'],
  theme: DefaultTheme
) => {
  switch (variant) {
    case 'contained':
      return theme.gradients.primary

    case 'outlined':
    case 'text':
    default:
      return 'none'
  }
}

type ReturnGetSize = (
  size: ButtonProps['scale'],
  theme: DefaultTheme
) => {
  padding: string
  font: string
}

const getSize: ReturnGetSize = (size, theme) => {
  const sizes = {
    padding: '',
    font: ''
  }

  switch (size) {
    case 'small':
      sizes.padding = `${theme.spaces.extra_small_1} ${theme.spaces.extra_small_2}`
      sizes.font = '1.6rem "Space Mono", monospace'
      break

    case 'medium':
      sizes.padding = `${theme.spaces.extra_small_2} ${theme.spaces.small_1}`
      sizes.font = '700 1.8rem "Space Mono", monospace'
      break

    case 'large':
    default:
      sizes.padding = `${theme.spaces.small_1} ${theme.spaces.small_2}`
      sizes.font = '700 2.4rem "Space Mono", monospace'
      break
  }

  return sizes
}

const ButtonStyle = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spaces.extra_small_2};
  -webkit-tap-highlight-color: transparent;

  background: ${props => getBackgroundColor(props.variant, props.theme)};
  box-shadow: ${props => props.theme.shadows.small};
  ${props => props.disabledShadow && 'box-shadow: none'};
  padding: ${props => getSize(props.scale, props.theme).padding};
  border-radius: ${props => props.theme.spaces.extra_small_1};
  font: ${props => getSize(props.scale, props.theme).font};

  transition: box-shadow 400ms ease, background 400ms ease, outline 100ms ease;

  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus,
  &:focus-within {
    outline: 2px solid ${props => props.theme.colorsPrimary.p1400};
  }

  &:active {
    outline: none;
    box-shadow: ${props => props.theme.shadows.medium},
      0 0 0 4px ${props => props.theme.colorsPrimary.p400};
  }
`

ButtonStyle.defaultProps = {
  variant: 'contained',
  scale: 'medium',
  disabledShadow: false
}

export default ButtonStyle
