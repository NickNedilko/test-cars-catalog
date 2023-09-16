import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import ChangeThemeProvider from 'components/ChangeThemeProvider/ChangeThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ChangeThemeProvider> */}
    <App />
    {/* </ChangeThemeProvider> */}
  </React.StrictMode>
);
