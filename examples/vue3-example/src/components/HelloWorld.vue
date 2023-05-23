<script setup>
import { ref, watch, onMounted, toRefs, defineProps } from 'vue';


const props = defineProps({
  msg: String,
  type: String,
  name: String,
  choices: Array,
})

let { msg, type, name, choices } = toRefs(props);

choices = ref([
  { 'value': 'superstar', 'label': 'Superstar', 'selected': false, 'disabled': false },
  { 'value': 'adizero', 'label': 'adizero', 'selected': false, 'disabled': false },
  { 'value': 'stansmith', 'label': 'Stan Smith', 'selected': true, 'disabled': false },
  { 'value': 'gazelle', 'label': 'Gazelle', 'selected': false, 'disabled': false },
  { 'value': 'ultraboost', 'label': 'ultraboost', 'selected': false, 'disabled': false },
  { 'value': 'nmd', 'label': 'NMD', 'selected': false, 'disabled': false },
  { 'value': 'yeezy', 'label': 'YEEZY', 'selected': false, 'disabled': false },
  { 'value': 'campus', 'label': 'Campus', 'selected': false, 'disabled': false },
  { 'value': 'zx500', 'label': 'ZX 500', 'selected': false, 'disabled': true },
  { 'value': 'samba', 'label': 'Samba', 'selected': false, 'disabled': false },
  { 'value': 'predator', 'label': 'Predator', 'selected': false, 'disabled': false },
  { 'value': 'munchen', 'label': 'Munchen', 'selected': false, 'disabled': false },
  { 'value': 'zxflux', 'label': 'ZX Flux', 'selected': false, 'disabled': false },
  { 'value': 'eqt', 'label': 'EQT', 'selected': false, 'disabled': false },
  { 'value': 'solar', 'label': 'Solar', 'selected': false, 'disabled': false },
  { 'value': 'copa', 'label': 'Copa', 'selected': false, 'disabled': true },
  { 'value': 'terrex', 'label': 'Terrex', 'selected': false, 'disabled': false },
  { 'value': 'pureboost', 'label': 'pureboost', 'selected': false, 'disabled': false },
  { 'value': 'dragon', 'label': 'Dragon', 'selected': false, 'disabled': false },
  { 'value': 'yung', 'label': 'YUNG', 'selected': false, 'disabled': false },
  { 'value': 'deerupt', 'label': 'Deerupt', 'selected': false, 'disabled': false },
  { 'value': 'kamanda', 'label': 'kamanda', 'selected': false, 'disabled': false }
]);


const count = ref(0)

const emit = defineEmits(['change']);

</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <choicesjs-stencil :values="['foo', 'bar']"></choicesjs-stencil>
    <choicesjs-stencil type="multiple" :choices="[
      { 'value': 'superstar', 'label': 'Superstar', 'selected': false, 'disabled': false },
      { 'value': 'kamanda', 'label': 'kamanda', 'selected': false, 'disabled': false }
    ]"></choicesjs-stencil>

    <choicesjs-stencil type="single" :name="name" :choices="choices" />
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
