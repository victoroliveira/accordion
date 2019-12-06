import '../src/components/accordion/accordion';

export default {
  title: 'Demo',
};

export const accordion = () => `
  <dl is="my-accordion">
    <dt>My Title</dt>
    <dd><p>My content</p></dd>
    <dt>My Title 2</dt>
    <dd><p>My content 2</p></dd>
  </dl>
`;
