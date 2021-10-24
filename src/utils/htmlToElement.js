export default function (htmlString) {
  const template = document.createElement('template');
  template.innerHTML = htmlString;
  // Template have specific structure like <template>#document-fragment</template>
  return template.content.firstChild;
}