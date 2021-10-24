import './index.scss';

import header from './Header';

const rootEl = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  rootEl.append(header);
})