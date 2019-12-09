import '../src/components/accordion/accordion';
import { topHeadlinesUrl } from '../newsApi.js';

// Fetch news and show as last accrdion item
// TODO: Remove this code from stories
const fetchNews = async () => {
  const res = await fetch(topHeadlinesUrl);
  const json = await res.json();

  const accordion = document.querySelector('dl[is="my-accordion"]');
  const elTitle = accordion.querySelector('dt:last-of-type');
  const elContent = accordion.querySelector('dd:last-of-type');

  json.articles.map(article => {
    elTitle.innerHTML = article.title;
    elContent.innerHTML = `<p>${article.content}</p>`;
  });
};

window.addEventListener('load', () => {
  fetchNews();
});

export default {
  title: 'Demo',
};

export const accordion = () => `
  <dl is="my-accordion">
    <dt>My Title</dt>
    <dd><p>My content</p></dd>
    <dt>My Title 2</dt>
    <dd><p>My content 2</p></dd>
    <dt>My Title 3</dt>
    <dd><p>My content 3</p></dd>
  </dl>
`;
