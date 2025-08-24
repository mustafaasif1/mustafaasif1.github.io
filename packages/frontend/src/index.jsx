import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Configure future flags for React Router v7
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wait for i18next to initialize before rendering
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <HelmetProvider>
        <HashRouter future={router.future}>
          <App />
        </HashRouter>
      </HelmetProvider>
    </React.Suspense>
  </React.StrictMode>,
);

reportWebVitals();
