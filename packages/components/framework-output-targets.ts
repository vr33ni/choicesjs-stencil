import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target';


const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['choicesjs-stencil'],
    event: 'change',
    targetAttr: 'value',
  },
];

const excludeComponents = [
];

export const frameworkTargets = [
  vueOutputTarget({
    componentCorePackage: '@vr33ni/choicesjs-stencil',
    proxiesFile: '../components-vue/lib/components.ts',
    componentModels: vueComponentModels,
    excludeComponents,
  })

];