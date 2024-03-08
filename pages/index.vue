;
<template>
  <div class="w-full">
    <div class="py-12 bg-blue-200 lg:pb-14 lg:pt-8 leaf-pattern">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-1 lg:gap-8">
          <div class="max-w-md px-6 mx-auto sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
            <div class="py-12 md:py-14">
              <h1 class="font-bold tracking-tight text-white text-8xl sm:text-6xl lg:mt-6 xl:text-6xl">
                <span class="block text-8xl">Art Portfolio</span>
              </h1>
            </div>
          </div>
          <!-- <div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
            <div class="max-w-md px-6 mx-auto sm:max-w-2xl lg:max-w-none lg:px-0">
             <img
                class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                alt=""
              />
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="pt-12 pb-24 bg-white lg:overflow-hidden lg:pb-20 lg:pt-20">
      <a id="intro"></a>
      <div class="px-6 mx-auto max-w-7xl lg:px-8">
        <div
          class="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
        >
          <div class="max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
            <h1 class="text-2xl font-bold tracking-tight text-pink-400 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span class="block">Introduction</span>
            </h1>
            <p class="mt-3 text-base text-blue-400 sm:mt-5 sm:text-xl lg:text-2xl xl:text-2xl">
              A journey to my canvas
            </p>
            <p class="text-lg leading-8 text-gray-600">
              I am Junoon , a passionate aspiring artist driven by the belief that art is powerful language. My artistic
              journey mostly began in year 2020. Join me in this visual odyssey and see the world through my artistic
              lens.
            </p>
          </div>
          <img
            src="../personalimg.jpg"
            alt="Image of Junoon"
            class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
    </div>
    <div class="bg-yellow-200">
      <a id="art"></a>
      <div class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Art</h2>
        <div class="max-w-2xl pb-16 mx-auto lg:mx-0 lg:max-w-none">
          <h2 class="text-3xl font-bold tracking-tight text-pink-400 sm:text-4xl">My Art</h2>
        </div>
        <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          <div
            v-for="item in art"
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
                <NuxtLink
                  :to="{
                    name: 'art-slug',
                    params: { slug: item.slug },
                  }"
                >
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ item.name }}
                </NuxtLink>
              </h3>
              <p class="text-sm text-gray-500">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const art = [
  {
    id: 1,
    name: 'Watercolor',
    slug: 'watercolor',
    description: 'With watercolor as my choosen medium , I created these works in 2023.',
    imageSrc: 'watercolor.jpg',
    imageAlt: 'Watercolor art piece.',
  },
  {
    id: 2,
    name: 'Oil Paintings',
    slug: 'oil-paintings',
    description: 'With oilcolor as my choosen medium , I created these works in between 2020 and 2023..',
    imageSrc: 'oilpaintmain.jpg',
    imageAlt: 'Oil paintings',
  },
  {
    id: 3,
    name: 'Acrylic Color',
    slug: 'acrylic-color',
    description: 'With acrylics as my choosen medium , I created these works in 2023.',
    imageSrc: 'acrylicmain.jpg',
    imageAlt: 'Acrylic Color art piece.',
  },
  {
    id: 4,
    name: 'Charcoal Works',
    slug: 'charcoal-works',
    description: 'With charcoal as my choosen medium , I created these works in 2023.',
    imageSrc: 'charcolemain.jpg',
    imageAlt: 'Charcoal Works art piece.',
  },
  {
    id: 5,
    name: 'Digital Works',
    slug: 'digital-works',
    description: 'With digital arts as my choosen medium , I created these works in 2023.',
    imageSrc: 'https://placehold.co/400?text=Art+piece',
    imageAlt: 'Digital Works art piece.',
  },
  {
    id: 6,
    name: 'Photography Works',
    slug: 'photography-works',
    description: 'Here are some photographs',
    imageSrc: 'https://placehold.co/400?text=Art+piece',
    imageAlt: 'Photography Works art piece.',
  },
]
</script>
