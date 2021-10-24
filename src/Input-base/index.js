import htmlToElement from '../utils/htmlToElement';

import InputHTML from './index.html';

import './index.scss';

const Input = ({ elType, elStyle, elId, elPlaceholder, elRequired, elTabindex, elName, elMessage = '' }) => {
  const inputToElement = htmlToElement(InputHTML);
  inputToElement.setAttribute('type', elType);
  inputToElement.classList.add(elStyle);
  inputToElement.id = elId;
  inputToElement.setAttribute('placeholder', elPlaceholder);
  inputToElement.setAttribute('data-required', elRequired);
  inputToElement.setAttribute('tabindex', elTabindex);
  inputToElement.setAttribute('name', elName);
  inputToElement.setAttribute('data-invalid-message', elMessage);
  return inputToElement;
}

export default Input;