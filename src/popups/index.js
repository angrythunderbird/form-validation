import htmlToElement from '../utils/htmlToElement';
import Popup from './index.html';
import './index.scss';

const message = htmlToElement(Popup);

/**
 * Function inputErrorTemplate
 * @param {String} msg 
 */
function inputErrorTemplate(msg) {
  message.textContent = msg;
  return message;
}

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el 
 */
export function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || 'Invalid input';
  const template = inputErrorTemplate(msg);
  if (el.classList.contains('input-valid')) {
    el.classList.remove('input-valid');
  }
  el.classList.add('input-invalid');
  parent.insertAdjacentElement('beforeend', template);
}

/**
 * Function removeInputError. Add input error
 * @param {HTMLInputElement} el
 */
export function removeInputError(el) {
  const parent = el.parentElement;
  const err = document.querySelector('.form__input-msg');
  if (!err) return;
  if (el.classList.contains('input-invalid')) {
    el.classList.remove('input-invalid');
  }
  el.classList.add('input-valid');
  err.parentNode.removeChild(err);
}