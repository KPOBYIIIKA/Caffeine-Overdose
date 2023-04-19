import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

library.add(faMugHot);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
