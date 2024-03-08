;
<template>
  <div class="bg-yellow-200">
    <a id="art"></a>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Art</h2>
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none pb-16">
        <h2 class="text-3xl font-bold tracking-tight text-pink-400 sm:text-4xl">
          {{ route.params.slug.replaceAll('-', ' ') }}
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Vel dolorem qui facilis soluta sint aspernatur totam cumque.</p>
      </div>
      <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        <div
          v-for="item in art"
          :key="item.id"
          class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
          <div class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
            <img
              :src="item.imageSrc"
              :alt="item.imageAlt"
              class="h-full w-full object-cover object-center sm:h-full sm:w-full"
            />
          </div>
          <div class="flex flex-1 flex-col space-y-2 p-4">
            <h3 class="text-sm font-medium text-gray-900">
              <span aria-hidden="true" class="absolute inset-0" />
              {{ item.name }}
            </h3>
            <p class="text-sm text-gray-500">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
const art = [
  {
    id: 1,
    name: 'Art piece 1',
    href: '#',
    description: 'Art piece 1 descriptions Qui irure qui Lorem cupidatat commodo.',
    imageSrc: 'https://placehold.co/400?text=Art+piece',
    imageAlt: 'Art piece 1 alt text.',
  },
  {
    id: 2,
    name: 'Art piece 2',
    href: '#',
    description: 'Art piece 2 descriptions Qui irure qui Lorem cupidatat commodo.',
    imageSrc: 'https://placehold.co/400?text=Art+piece',
    imageAlt: 'Art piece 2 alt text.',
  },
  {
    id: 3,
    name: 'Art piece 3',
    href: '#',
    description: 'Art piece 2 descriptions Qui irure qui Lorem cupidatat commodo.',
    imageSrc: 'https://placehold.co/400?text=Art+piece',
    imageAlt: 'Art piece 3 alt text.',
  },
  {
    id: 4,
    name: 'Art piece 4',
    href: '#',
    description: 'Art piece 2 descriptions Qui irure qui Lorem cupidatat commodo.',
    imageSrc: 'https://placehold.co/400?text=Art+piece',
    imageAlt: 'Art piece 4 alt text.',
  },
  {
    id: 5,
    name: 'Art piece 5',
    href: '#',
    description: 'Art piece 2 descriptions Qui irure qui Lorem cupidatat commodo.',
    imageSrc: 'https://placehold.co/400?text=Art+piece',
    imageAlt: 'Art piece 5 alt text.',
  },
  {
    id: 6,
    name: 'Art piece 6',
    href: '#',
    description: 'Art piece 6 descriptions Qui irure qui Lorem cupidatat commodo.',
    imageSrc: 'https://placehold.co/400?text=Art+piece',
    imageAlt: 'Art piece 6 alt text.',
  },
]
</script>
