<template>
  <div class="flex flex-col flex-1 w-full min-h-screen">
    <div class="relative flex flex-col flex-1 w-full min-h-screen overflow-hidden">
      <Popover as="header" class="relative">
        <div class="pt-6 pb-6 bg-blue-200 sm:pb-6">
          <nav class="relative flex items-center justify-between px-6 mx-auto max-w-7xl" aria-label="Global">
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full md:w-auto">
                <NuxtLink to="/">
                  <span class="sr-only">Junoon</span>
                  <img
                    class="w-auto h-8 sm:h-10"
                    src="https://placeholder.pics/svg/300x200/78D2FF-FFB3FD/logo"
                    alt=""
                  />
                </NuxtLink>
                <div class="flex items-center -mr-2 md:hidden">
                  <PopoverButton
                    class="relative inline-flex items-center justify-center p-2 text-pink-400 bg-blue-200 rounded-md focus-ring-inset hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="hidden space-x-8 md:ml-10 md:flex">
                <template v-for="item in navigation">
                  <a
                    v-if="item.href === '/' && route.name === 'index'"
                    :key="item.name"
                    href="#intro"
                    class="text-base font-medium text-pink-400 hover:text-pink-500"
                    >Introduction</a
                  >

                  <a
                    v-if="item.href === '/' && route.name === 'index'"
                    :key="item.name"
                    href="#art"
                    class="text-base font-medium text-pink-400 hover:text-pink-500"
                    >My Art</a
                  >

                  <NuxtLink
                    v-else
                    :key="item.href"
                    :to="item.href"
                    class="text-base font-medium text-pink-400 hover:text-pink-500"
                    >{{ item.name }}</NuxtLink
                  >
                </template>
              </div>
            </div>
          </nav>
        </div>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <PopoverPanel
            v-slot="{ close }"
            ocus
            class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top transform md:hidden"
          >
            <div class="overflow-hidden bg-blue-200 rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    class="w-auto h-8 sm:h-10"
                    src="https://placeholder.pics/svg/300x200/78D2FF-FFB3FD/logo"
                    alt=""
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="relative inline-flex items-center justify-center p-2 text-pink-400 bg-blue-200 rounded-md hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-400"
                  >
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="pt-5 pb-6">
                <div class="px-2 space-y-1">
                  <template v-for="item in navigation">
                    <a
                      v-if="item.href === '/' && route.name === 'index'"
                      :key="item.name"
                      href="#intro"
                      class="block px-3 py-2 text-base font-medium text-pink-400 rounded-md hover:bg-blue-100"
                      @click="close"
                      >Introduction</a
                    >

                    <a
                      v-if="item.href === '/' && route.name === 'index'"
                      :key="item.name"
                      href="#art"
                      class="block px-3 py-2 text-base font-medium text-pink-400 rounded-md hover:bg-blue-100"
                      @click="close"
                      >My Art</a
                    >

                    <NuxtLink
                      v-else
                      :key="item.href"
                      :to="item.href"
                      class="block px-3 py-2 text-base font-medium text-pink-400 rounded-md hover:bg-blue-100"
                      @click="close"
                      >{{ item.name }}</NuxtLink
                    >
                  </template>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="flex flex-col items-center flex-1 w-full">
        <slot />
      </main>
    </div>
    <footer class="bg-blue-200">
      <div class="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center space-x-6 md:order-2">
          <a v-for="item in footer" :key="item.name" :href="item.href" class="text-pink-400 hover:text-pink-600">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
        <div class="mt-8 md:order-1 md:mt-0">
          <p class="text-xs leading-5 text-center text-pink-400">&copy; 2024 Junoon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { defineComponent, h } from 'vue'
const route = useRoute()
const footer = [
  {
    name: 'Instagram',
    href: '#',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  },
  {
    name: 'tictok',
    href: '#',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 512 512' }, [
          h('path', {
            d: 'M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z',
          }),
        ]),
    }),
  },
]
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
]

const art = [
  {
    id: 1,
    name: 'The art piece',
    href: '#',
    description: 'Art piece 1 descriptions Qui irure qui Lorem cupidatat commodo.',
    imageSrc: 'watercolor-1.jpg',
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
