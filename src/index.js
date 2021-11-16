import './index.scss';

import header from './Header';
import { form, inputEmail, inputPass } from './Form-group';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './popups';
import { login } from './services/auth.service';

const rootEl = document.getElementById('root');
const inputs = [inputEmail, inputPass];

document.addEventListener('DOMContentLoaded', () => {
  rootEl.append(header);
  rootEl.append(form);
})

// Events
form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
})

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

// Handlers
async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    } else {
      removeInputError(el);
    }
    return isValidInput;
  })

  if (!isValidForm) {
    alert('wrong login data');
    return;
  }

  // denis.m.pcspace@gmail.com, dmgame12345
  try {
    await login(inputs[0].value, inputs[1].value);
    form.reset();
    // show success notify
  } catch (error) {
    // show success notify
  }
}
