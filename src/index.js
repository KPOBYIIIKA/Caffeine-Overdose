import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMugHot, faGear, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faMugHot, faGear, faUser);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
