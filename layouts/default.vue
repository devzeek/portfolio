<template>
  <div class="relative overflow-hidden">
    <Popover as="header" class="relative">
      <div class="bg-blue-200 pt-6 pb-6 sm:pb-6">
        <nav class="relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
          <div class="flex flex-1 items-center">
            <div class="flex w-full items-center justify-between md:w-auto">
              <NuxtLink to="/">
                <span class="sr-only">Your Name</span>
                <img class="h-8 w-auto sm:h-10" src="https://placeholder.pics/svg/300x200/78D2FF-FFB3FD/logo" alt="" />
              </NuxtLink>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton
                  class="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-blue-200 p-2 text-pink-400 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Open main menu</span>
                  <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-8 md:ml-10 md:flex">
              <template v-for="item in navigation">
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
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden">
          <div class="overflow-hidden rounded-lg bg-blue-200 shadow-md ring-1 ring-black ring-opacity-5">
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img class="h-8 w-auto sm:h-10" src="https://placeholder.pics/svg/300x200/78D2FF-FFB3FD/logo" alt="" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="relative inline-flex items-center justify-center rounded-md bg-blue-200 p-2 text-pink-400 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-400"
                >
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="pb-6 pt-5">
              <div class="space-y-1 px-2">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block rounded-md px-3 py-2 text-base font-medium text-pink-400 hover:bg-blue-100"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <slot />
  </div>
  <footer class="bg-blue-200">
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a v-for="item in footer" :key="item.name" :href="item.href" class="text-pink-400 hover:text-white">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-pink-400">&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
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
    name: 'X',
    href: '#',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z',
          }),
        ]),
    }),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
            'clip-rule': 'evenodd',
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
