<script setup>
import { ref, reactive } from 'vue';
const currentStep = ref(1);
const form = reactive({ name: '', password: '' });
</script>

<template>
  <div class="step-wrapper">
    <p>Account Info</p>
    <div v-if="currentStep === 1">
      <h3>Basic Information</h3>
      <input v-model="form.name" placeholder="Name" />
      <button @click="currentStep++">Continue</button>
    </div>

    <div v-else-if="currentStep === 2">
      <h3>Security Settings</h3>
      <input v-model="form.password" type="password" />
      <button @click="currentStep--">Back</button>
      <button @click="$emit('next-step', form)">Finish Account Section</button>
    </div>
  </div>
</template>

<style lang="scss">
.step-wrapper{
  width: 100%;
  height: 100%;
  padding: 24px;
}
</style>