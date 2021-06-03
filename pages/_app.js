import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../global-style'
import Theme from '../global-style/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
