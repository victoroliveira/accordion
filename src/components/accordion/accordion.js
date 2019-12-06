customElements.define(
  'my-accordion',
  class Accordion extends HTMLDListElement {
    constructor() {
      super();

      this.dts = [...this.querySelectorAll('dt')];
      this.dds = [...this.querySelectorAll('dd')];
    }

    connectedCallback() {
      this._styling();
      this.dts.map(el => el.addEventListener('click', this._toggle.bind(this)));
    }

    _styling() {
      this.classList.add('accordion');

      this.dts.map(item => {
        item.classList.add('accordion__title');
      });

      this.dds.map(item => {
        item.classList.add('accordion__content');
      });
    }

    _toggle(evt) {
      const contentEl = evt.target.nextElementSibling;
      contentEl.classList.add('accordion__content--open');
    }
  },
  { extends: 'dl' }
);
