import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/global/global.scss',
  namespace: 'ChoicesJSStencil',
  bundles: [
    {
      components: ['choicesjs-stencil']
    }
  ],
  outputTargets: [
    {
      type: 'dist',

    }, {
      type: 'www',
      indexHtml: './index.html'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
  devServer: {
    openBrowser: false
  }
};
