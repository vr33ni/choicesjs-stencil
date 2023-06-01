import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { frameworkTargets } from './framework-output-targets';

export const config: Config = {
  globalStyle: 'src/global/global.scss',
  namespace: 'ChoicesJSStencil',
  bundles: [
    {
      components: ['choicesjs-stencil']
    }
  ],
  ...frameworkTargets,

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    //  {
    //   type: 'www',
    //   indexHtml: './index.html'
    // },
    {
      type: 'docs-readme',
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
