import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './app/App.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* -------------------------------------------------------------------------- */

// client script
// process 객체 ❌

// server script
// process 객체 🅾️
let isDevelopment = process.env.NODE_ENV.includes('development');
let isProduction = !isDevelopment;

// React 애플리케이션의 성능을 향상시키는 방법 중 하나가 code spliting
// code spliting의 핵심 기술이 동적 불러오기(dynamic import)
if (isProduction) {
  import('./reportWebVitals').then(({ default: reportWebVitals }) => {
    reportWebVitals(console.log);
  });
}
