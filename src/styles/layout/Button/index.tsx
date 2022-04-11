import { FC, HTMLProps } from 'react'
import ButtonStyle from './style'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  style?: React.CSSProperties
  scale?: 'small' | 'medium' | 'large'
  variant?: 'contained' | 'outlined' | 'text'
  disabledShadow?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button: FC<ButtonProps> = (
  { children, startIcon, endIcon, variant, disabledShadow, scale, style },
  props
) => {
  return (
    <ButtonStyle
      {...props}
      variant={variant}
      disabledShadow={disabledShadow}
      scale={scale}
      style={style}
    >
      {startIcon}
      {children}
      {endIcon}
    </ButtonStyle>
  )
}

export default Button
