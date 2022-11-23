<template>
  <div id="app" class="antialiased text-gray-900">
    <div class="bg-gray-200 min-h-screen">
      <Navbar/>
      <FormHelper />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import FormHelper from './components/FormHelper.vue'
</script>

<style src="./assets/tailwind.css"></style>