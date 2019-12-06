describe('Accordion component', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
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
    // Verify displayed greeting
    const el = document.body.querySelector('dl[is="my-accordion"]');
    expect(el).toBeDefined();
  });
});
