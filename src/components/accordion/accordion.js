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

    // In case to select other item, search for opened items
    _collapseAll(current) {
      this.dds.map(el => {
        if (current !== el) {
          el.removeAttribute('selected');
          el.classList.remove('accordion__content--open');
        }
      });
    }

    _toggle(evt) {
      const contentEl = evt.target.nextElementSibling;

      this._collapseAll(contentEl);
      contentEl.classList.add('accordion__content--open');
      contentEl.setAttribute('selected', '');
    }
  },
  { extends: 'dl' }
);
