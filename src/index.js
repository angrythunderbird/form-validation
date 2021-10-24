import './index.scss';

import header from './Header';
import form from './Form-group';

const rootEl = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  rootEl.append(header);
  rootEl.append(form);
})