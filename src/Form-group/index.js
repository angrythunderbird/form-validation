import htmlToElement from '../utils/htmlToElement';
import Form from './index.html';
import Input from '../Input-base';
import Button from '../Button-base';

import './index.scss';


const form = htmlToElement(Form);

const formInner = form.querySelector('.form__inner');

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
const submitBtn = Button({
  onClick: () => console.log('Submit'),
  title: 'Submit',
  className: 'form__button'
})
formInner.insertAdjacentElement('afterbegin', inputEmail);
formInner.insertAdjacentElement('beforeend', inputPass);
formInner.insertAdjacentElement('beforeend', submitBtn);




export default form;