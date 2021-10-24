import htmlToElement from '../utils/htmlToElement';

import Header from './index.html';

import './index.scss';

const header = htmlToElement(Header);
// const headerButton = Button({
//   onClick: () => alert('Click from header'),
//   title: 'Header button',
//   className: 'header__button'
// })
// header.appendChild(headerButton);

export default header;