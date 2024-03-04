import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ContextProvider } from './contexts/ContextProvider.tsx';
const theme = createTheme({
  palette: {
      primary: {
          main: '#17234a',
      },
      secondary: {
          main: '#2cacd4',
      },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
