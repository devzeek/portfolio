;
<template>
  <div class="w-full bg-yellow-200">
    <a id="art"></a>
    <div class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Art</h2>
      <div class="max-w-2xl pb-16 mx-auto lg:mx-0 lg:max-w-none">
        <h2 class="text-3xl font-bold tracking-tight text-pink-400 sm:text-4xl">
          {{ formattedSlug }}
        </h2>
      </div>
      <div
        v-if="pageArt.length > 0"
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="item in pageArt"
          :key="item.id"
          class="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg group"
        >
          <div class="bg-gray-200 aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-96">
            <img
              :src="item.imageSrc"
              :alt="item.imageAlt"
              class="object-cover object-center w-full h-full sm:h-full sm:w-full"
            />
          </div>
          <div class="flex flex-col flex-1 p-4 space-y-2">
            <h3 class="text-sm font-medium text-gray-900">
              <span aria-hidden="true" class="absolute inset-0" />
              {{ item.name }}
            </h3>
            <p class="text-sm text-gray-500">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div v-else class="max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
        <p class="text-lg leading-8 text-gray-600">There are currently no are pieces in this category.</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
const route = useRoute()
const formattedSlug = computed(() => {
  // Replace all hyphens with spaces and split the string into words
  const words = route.params.slug.replaceAll('-', ' ').split(' ')
  // Capitalize the first letter of each word and join them back into a string
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
})
const art = [
  {
    id: 1,
    name: 'Watercolor #1',
    type: 'watercolor',
    description: 'With watercolor as my choosen medium , I created these works in 2023.',
    imageSrc: '../watercolor-1.jpg',
    imageAlt: 'Watercolor art piece.',
  },
  {
    id: 2,
    name: 'Oil Paintings',
    type: 'oil-paintings',
    description: 'With oilcolor as my choosen medium , I created these works in between 2020 and 2023..',
    imageSrc: '../oilpaintmain.jpg',
    imageAlt: 'Oil paintings',
  },
  {
    id: 3,
    name: 'Acrylic Color',
    type: 'acrylic-color',
    description: 'With acrylics as my choosen medium , I created these works in 2023.',
    imageSrc: '../acrylicmain.jpg',
    imageAlt: 'Acrylic Color art piece.',
  },
  {
    id: 4,
    name: 'Charcoal Works',
    type: 'charcoal-works',
    description: 'With charcoal as my choosen medium , I created these works in 2023.',
    imageSrc: '../charcolemain.jpg',
    imageAlt: 'Charcoal Works art piece.',
  },
  {
    id: 5,
    name: 'Digital Works',
    type: 'digital-works',
    description: 'With digital arts as my choosen medium , I created these works in 2023.',
    imageSrc: 'https://placehold.co/400?text=Art+piece',
    imageAlt: 'Digital Works art piece.',
  },
  // {
  //   id: 6,
  //   name: 'Photography Works',
  //   type: 'photography-works',
  //   description: 'Here are some photographs',
  //   imageSrc: 'https://placehold.co/400?text=Art+piece',
  //   imageAlt: 'Photography Works art piece.',
  // },
  {
    id: 7,
    name: 'Watercolor #2',
    type: 'watercolor',
    description: 'With watercolor as my choosen medium , I created these works in 2023.',
    imageSrc: '../watercolor-2.jpg',
    imageAlt: 'Watercolor art piece.',
  },
  {
    id: 8,
    name: 'Watercolor #3',
    type: 'watercolor',
    description: 'With watercolor as my choosen medium , I created these works in 2023.',
    imageSrc: '../watercolor-3.jpg',
    imageAlt: 'Watercolor art piece.',
  },
  {
    id: 9,
    name: 'Watercolor #4',
    type: 'watercolor',
    description: 'With watercolor as my choosen medium , I created these works in 2023.',
    imageSrc: '../watercolor-4.jpg',
    imageAlt: 'Watercolor art piece.',
  },
  {
    id: 10,
    name: 'Watercolor #5',
    type: 'watercolor',
    description: 'With watercolor as my choosen medium , I created these works in 2023.',
    imageSrc: '../watercolor-5.jpg',
    imageAlt: 'Watercolor art piece.',
  },
  {
    id: 11,
    name: 'Watercolor #6',
    type: 'watercolor',
    description: 'With watercolor as my choosen medium , I created these works in 2023.',
    imageSrc: '../watercolor-6.jpg',
    imageAlt: 'Watercolor art piece.',
  },
]

const pageArt = computed(() => art.filter((item) => item.type === route.params.slug))
</script>
