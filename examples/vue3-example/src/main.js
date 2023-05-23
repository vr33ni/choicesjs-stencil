import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { defineCustomElements } from '@vr33ni/choicesjs-stencil/dist/loader';

createApp(App).mount('#app')
defineCustomElements(window);
