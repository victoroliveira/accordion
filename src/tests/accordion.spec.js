import Accordion from '../components/accordion/accordion';

describe('Accordion component', () => {
  let component = new Accordion();

  const dt = document.createElement('dt');
  const dd = document.createElement('dd');

  beforeEach(() => {
    component.dts = [ dt ];
    component.dds = [ dd ];
  });

  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should be defined', () => {
    // Create element
    const element = document.createElement('dl', {
      is: 'my-accordion',
    });
    element.innerHTML = `
      <dt>My Title</dt>
      <dd><p>My content</p></dd>
    `;
    document.body.appendChild(element);

    const el = document.body.querySelector('dl[is="my-accordion"]');
    expect(el).toBeDefined();
  });

  it('should style items', () => {
    expect(dt.classList).not.toContain('accordion__title');
    expect(dd.classList).not.toContain('accordion__content');

    component._styling();

    expect(dt.classList).toContain('accordion__title');
    expect(dd.classList).toContain('accordion__content');
  });

  it('should toggle content', () => {
    // Create element
    const element = document.createElement('dl', {
      is: 'my-accordion',
    });
    element.innerHTML = `
      <dt id="title1">My Title 1</dt>
      <dd id="content1"><p>My content 1</p></dd>
    `;
    document.body.appendChild(element);

    const title = document.getElementById('title1');
    const content = document.getElementById('content1');

    expect(content.classList).not.toContain('accordion__content--open');
    expect(content.getAttribute('selected')).toBeFalsy();

    component._toggle({ target: title });

    expect(content.classList).toContain('accordion__content--open');
    expect(content.getAttributeNames()).toContain('selected');
  });

  it('should initialize component', () => {
    component._styling = jest.fn();

    component.connectedCallback();

    expect(component._styling).toBeCalled();
  });
});
