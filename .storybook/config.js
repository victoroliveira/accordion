import { configure } from '@storybook/html';
import '!style-loader!css-loader!sass-loader!../src/styles/main.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
