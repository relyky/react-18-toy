import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter } from "react-router-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string
const container = document.getElementById('root')!;
const root = createRoot(container);

console.log('baseUrl →', baseUrl)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
