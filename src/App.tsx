import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
