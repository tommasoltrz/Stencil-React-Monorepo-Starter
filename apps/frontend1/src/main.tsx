import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';
import { defineCustomElements } from 'ui-components/loader';
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
defineCustomElements(window);
