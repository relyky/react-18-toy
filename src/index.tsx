import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter } from "react-router-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';
// @MUI Layout
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
// CSS: Fonts to support Material Design, ref:https://mui.com/material-ui/react-typography/
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// Site CSS
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CacheProvider value={muiCache}>
        {/* ※gh-pages 不支援 BrowserRouter 故採用 HashRouter。 */}
        <HashRouter>
          <App />
        </HashRouter>
      </CacheProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
