<template>
    <div class="bg-white border rounded-lg overflow-hidden">
        <!-- <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url('${property.imageUrl}')`}"></div> -->
        <img class="h-48 w-full object-cover" :src="property.imageUrl" :alt="property.imageAlt">
        <div class="p-6">
            <div class="flex items-baseline">
                <span class="inline-block bg-teal-100 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">New</span>
                <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                    {{ property.beds }} beds &bull; {{ property.baths }} baths
                </div>
            </div>
            <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ property.title }}</h4>
            <div class="mt-1">
                $ {{ property.formattedPrice }} 
                <span class="text-gray-600 text-sm">/ wk</span>
            </div>
            <div class="mt-2 flex items-center">
                <svg v-for="i in 5" :key="i" :class="i <= property.rating ? 'text-teal-500' : 'text-gray-400'" class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Star" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                    <path d="M10,1.3l2.388,6.722H18.8l-5.232,3.948l1.871,6.928L10,14.744l-5.438,4.154l1.87-6.928L1.199,8.022h6.412  L10,1.3z"/>
                </svg>
                <span class="ml-2 text-gray-600 text-sm"> {{ property.reviewCount }} reviews</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['property'],
}
</script>