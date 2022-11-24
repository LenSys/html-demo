<template>
  <div id="app" class="antialiased text-gray-900">
    <div class="bg-gray-200 min-h-screen">
      <Navbar/>
      <FormHelper />
      <ModalDialog v-if="showModal" theme="sale" @closeModal="toggleModal">
        <h3 class="font-bold text-4xl">Sale 50%</h3>
        <p>We offer 50% off the current price for sale!</p>
        <template v-slot:links>
          <a href="#" class="px-4 py-2 bg-green-600 text-white">Buy now</a>
          <a href="#" class="ml-2 px-4 py-2 bg-gray-500 text-white">More info</a>
        </template>
      </ModalDialog>
      <ModalDialog v-if="showModalTwo" @closeModal="toggleModalTwo">
        <h3 class="font-bold text-4xl">Sign up for the newsletter</h3>
        <p>Get updates and promo codes!</p>
        <template v-slot:links>
          <a href="#" class="px-4 py-2 bg-green-600 text-white">Sign up now</a>
        </template>
      </ModalDialog>
      <div class="container text-end">
        <button @click="toggleModal" class="px-8 py-4 bg-indigo-600 text-white">Sale 50% Dialog</button>
        <button @click="toggleModalTwo" class="ml-4 px-8 py-4 bg-indigo-600 text-white">Newsletter Dialog</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import FormHelper from './components/FormHelper.vue'
import ModalDialog from './components/ModalDialog.vue'
</script>

<script>
export default {
  name: "App",
  components: {
    Navbar, 
    FormHelper,
    ModalDialog
  },
  data() {
    return {
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo 
    }
  }
}
</script>

<style src="./assets/tailwind.css"></style>