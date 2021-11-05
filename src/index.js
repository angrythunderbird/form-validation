import './index.scss';

import header from './Header';
import form from './Form-group';
import UI from './config/UI.config';

const rootEl = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  rootEl.append(header);
  rootEl.append(form);
})

// Events
form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
})

// Handlers
function onSubmit() {

}
