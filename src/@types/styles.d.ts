import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// sempre que eu importar o styled-components, a tipagem que ele puxar é oq eu definir
// Ao importar a biblioteca na linha 1, eu adiciono uma definição de tipos.
// Sem importar, os tipos seriam definidos do zero.
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
