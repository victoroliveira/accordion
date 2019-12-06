import '../src/components/accordion/accordion';

export default {
  title: 'Demo',
};

export const accordion = () => `
  <dl is="my-accordion">
    <dt>My Title</dt>
    <dd><p>My content</p></dd>
  </dl>
`;
