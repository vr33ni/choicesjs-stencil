// packages/vue-library/lib/plugin.ts

import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@vr33ni/choicesjs-stencil/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};