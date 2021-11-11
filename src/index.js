import './index.scss';

import header from './Header';
import { form, inputEmail, inputPass } from './Form-group';

// import InputsUI from './config/UI.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './popups';

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

// inputs.forEach(el => el.addEventListener('change', () => {
//   inputs.forEach(input => {
//     (!validate(input)) ? showInputError(input) : removeInputError(input);
//   })
//   removeInputError(el)
// }));

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

// Handlers
function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    } else {
      removeInputError(el);
    }
    return isValidInput;
  })
}
