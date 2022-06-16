import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReducerContextProvider } from './21-dars/api/ReucerContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReducerContextProvider>
      <App />
  </ReducerContextProvider>
);
reportWebVitals();
