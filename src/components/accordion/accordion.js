customElements.define(
  'my-accordion',
  class Accordion extends HTMLDListElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.classList.add('accordion');
    }
  },
  { extends: 'dl' }
);
