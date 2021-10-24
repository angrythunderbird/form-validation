import htmlToElement from "./htmlToElement";

export default function (htmlElement, { elType, elStyle, elId, elPlaceholder, elRequired, elTabindex, elName, elMessage = '' }) {
  const inpt = htmlToElement
  htmlElement.setAttribute('type', elType);
  htmlElement.classList.add(elStyle);
  htmlElement.id = elId;
  htmlElement.setAttribute('placeholder', elPlaceholder);
  htmlElement.setAttribute('data-required', elRequired);
  htmlElement.setAttribute('tabindex', elTabindex);
  htmlElement.setAttribute('name', elName);
  htmlElement.setAttribute('data-invalid-message', elMessage);
  return htmlElement;
}