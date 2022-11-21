<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <div class="flex bg-gray-100">
      <div class="p-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div class="xl:max-w-lg xl:ml-auto">
              <img class="h-10" src="/assets/img/logo.svg" alt="Workcation">
              <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/assets/img/beach-work.jpg" alt="Woman workcationing on the beach">
              <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                  You can work from anywhere. 
                  <br class="hidden lg:inline"><span class="text-indigo-500">Take advantage of it.</span>
              </h1>
              <p class="mt-2 text-gray-700 sm:mt-4 sm:text-xl">
                  Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice even when you're not on vacation.
              </p>
              <div class="mt-4 sm:mt-6">
                  <a href="#" class="btn btn-indigo shadow-lg sm:text-base">Book your escape</a>
                  <a href="#" class="ml-2 btn btn-gray shadow-lg sm:text-base">Learn more</a>
              </div>
          </div>
        </div>
        <div class="hidden lg:block lg:w-1/2 lg:relative">
            <img class="absolute inset-0 h-full w-full object-cover object-center" src="/assets/img/beach-work.jpg" alt="Woman workcationing on the beach">
        </div>
      </div>
      
      <div>
        <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <h2 class="text-xl text-gray-900">Popular destinations</h2>
          <p class="text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
          <div class="flex flex-wrap -mx-4">
            <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3" v-for="destination in popularDestinations">
              <DestinationCard :destination="destination"/>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import DestinationCard from './components/DestinationCard.vue'

export default {
  name: 'app',
  components: {
    DestinationCard,
  },
  data() {
    return {
      popularDestinations: [
        {
          city: 'Toronto',
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: '/assets/img/toronto.jpg',
          imageAlt: 'Toronto skyline',
        },
        {
          city: 'Malibu',
          averagePrice: 215,
          propertyCount: 43,
          imageUrl: '/assets/img/malibu.jpg',
          imageAlt: 'Cliff in Malibu',
        },
        {
          city: 'Chicago',
          averagePrice: 130,
          propertyCount: 115,
          imageUrl: '/assets/img/chicago.jpg',
          imageAlt: 'Chicago skyline',
        },
        {
          city: 'Seattle',
          averagePrice: 135,
          propertyCount: 63,
          imageUrl: '/assets/img/seattle.jpg',
          imageAlt: 'Seattle skyline',
        },
        {
          city: 'Colorado',
          averagePrice: 85,
          propertyCount: 47,
          imageUrl: '/assets/img/colorado.jpg',
          imageAlt: 'Lake in Colorado',
        },
        {
          city: 'Miami',
          averagePrice: 115,
          propertyCount: 86,
          imageUrl: '/assets/img/miami.jpg',
          imageAlt: 'Beach in Miami',
        },
      ]
    }
  }
}
</script>