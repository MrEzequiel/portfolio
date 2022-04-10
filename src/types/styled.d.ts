import 'styled-components'
import main from '../styles/theme/main'

export type Theme = typeof main

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
