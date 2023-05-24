<script setup>
import { ref, computed } from 'vue';


let selected = ref(null);

const choices = computed(() => [
  { 'value': 'abc', 'label': 'Abc', 'selected': false, 'disabled': false },
  { 'value': 'def', 'label': 'Def', 'selected': false, 'disabled': false },
  { 'value': 'ghi', 'label': 'Ghi', 'selected': false, 'disabled': false },
  { 'value': 'jkl', 'label': 'Jkl', 'selected': false, 'disabled': false },
  { 'value': 'mno', 'label': 'Mno', 'selected': false, 'disabled': false },
  { 'value': 'pqr', 'label': 'Pqr', 'selected': false, 'disabled': false },
  { 'value': 'stu', 'label': 'Stu', 'selected': false, 'disabled': false },
  { 'value': 'vwx', 'label': 'Vwx', 'selected': false, 'disabled': false },
  { 'value': 'yz', 'label': 'Yz', 'selected': false, 'disabled': false },
  { 'value': 'selected', 'label': 'Selected', 'selected': true, 'disabled': false },
  { 'value': 'disabled', 'label': 'Disabled', 'selected': false, 'disabled': true },

]);


</script>

<template>
  <h1>Choicesjs-Stencil</h1>

  <div class="card">

    <choicesjs-stencil type="text"></choicesjs-stencil>
    <hr />
    <choicesjs-stencil type="single" :choices="[
      { 'value': 'foo', 'label': 'Foo', 'selected': false, 'disabled': false },
      { 'value': 'bar', 'label': 'Bar', 'selected': false, 'disabled': false }
    ]"></choicesjs-stencil>
    <hr />
    <choicesjs-stencil type="multiple" name="name" :choices="choices" />
    <p>Selected: {{ selected }}</p>

  </div>
</template>

<style scoped></style>
