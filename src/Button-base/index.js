import htmlToElement from '../utils/htmlToElement';

import ButtonHTML from './index.html';

import './index.scss';

const Button = ({ onClick, title, className, elType }) => {
  const buttonElement = htmlToElement(ButtonHTML);
  buttonElement.textContent = title;
  buttonElement.setAttribute('type', elType);
  buttonElement.classList.add(className);
  buttonElement.addEventListener('click', onClick);
  return buttonElement;
}

export default Button;