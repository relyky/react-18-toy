import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './hooks/store'
import App from './App'
import reportWebVitals from './reportWebVitals'
// @MUI Layout
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import createCache from '@emotion/cache'
// CSS: Fonts to support Material Design, ref:https://mui.com/material-ui/react-typography/
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// Site CSS
import './index.css';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const defaultTheme = createTheme()

const container = document.getElementById('root')!;
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
