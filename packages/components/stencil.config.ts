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

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    ...frameworkTargets,

    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass()
  ],

  extras: {
    cloneNodeFix: true,
    experimentalImportInjection: true,
  },


};
