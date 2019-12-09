export default class Accordion extends HTMLDListElement {
  constructor() {
    super();

    this.dts = [...this.querySelectorAll('dt')];
    this.dds = [...this.querySelectorAll('dd')];
  }

  /**
   * Function called when component is added into DOM and
   * call styling function and creates onclick event for each title.
   */
  connectedCallback() {
    this._styling();
    this.dts.map(el => el.addEventListener('click', this._toggle.bind(this)));
  }

  /**
   * Add respective classes for titles and contents.
   */
  _styling() {
    this.classList.add('accordion');

    this.dts.map(item => {
      item.classList.add('accordion__title');
    });

    this.dds.map(item => {
      item.classList.add('accordion__content');
    });
  }

  /**
   * Remove selected attribute and accordion__content--open class
   * to each fom element that is different from the selected one.
   * @param {HTMLElement} current
   */
  _collapseAll(current) {
    this.dds.map(el => {
      if (current !== el) {
        el.removeAttribute('selected');
        el.classList.remove('accordion__content--open');
      }
    });
  }

  /**
   * Toggle clicked element, setting nextElementSibling attribute as selected and
   * content as open
   * @param {object} evt
   */
  _toggle(evt) {
    const contentEl = evt.target.nextElementSibling;

    this._collapseAll(contentEl);
    contentEl.classList.add('accordion__content--open');
    contentEl.setAttribute('selected', '');
  }
}

customElements.define('my-accordion', Accordion, { extends: 'dl' });
