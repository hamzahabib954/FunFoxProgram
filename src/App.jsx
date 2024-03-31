import {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './router/index.jsx'
import {createTheme, ThemeProvider} from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {fontFamily: 'Short Stack'}
  });

  return (

          <ThemeProvider theme={theme}>
            <Router>
              <AppRoutes/>
            </Router>
          </ThemeProvider>
  )
}

export default App
