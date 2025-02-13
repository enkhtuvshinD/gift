import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GiftPage from './GiftPage.tsx';

const path = window.location.pathname;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {path.includes('gift') ? <GiftPage /> : <App />}
  </React.StrictMode>,
);
