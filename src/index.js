import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataContextTakrorProvider from './14-dars/Api/DataContextTakror';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContextTakrorProvider>
      <App />
    </DataContextTakrorProvider>
  </React.StrictMode>
);
reportWebVitals();
