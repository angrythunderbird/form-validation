import htmlToElement from '../utils/htmlToElement';
import inputsAttrComplete from '../utils/inputsAttrComplete';

import Form from './index.html';
import Input from '../Input-base';

import './index.scss';

const form = htmlToElement(Form);

const inputEmail = Input({
  elType: 'email',
  elStyle: 'form__input',
  elId: 'email',
  elPlaceholder: 'Enter email',
  elRequired: 'email',
  elTabindex: "1",
  elName: "user-email",
  elMessage: 'Please provide valid email example@example.com'
});
const inputPass = Input({
  elType: 'password',
  elStyle: 'form__input',
  elId: 'password',
  elPlaceholder: 'Enter password',
  elRequired: 'password',
  elTabindex: "2",
  elName: "user-password",
  elMessage: null
});
form.insertAdjacentElement('beforeend', inputEmail);
form.insertAdjacentElement('beforeend', inputPass);




export default form;