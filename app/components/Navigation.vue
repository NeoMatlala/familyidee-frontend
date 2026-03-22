<template>
    <UHeader class="mb-14 bg-white">
        <template #title>
          <div class="flex flex-row justify-start gap-2">
            <div class="flex flex-row justify-start gap-2">
              <img src="/images/Vector.svg" class="w-10 "/>
              <h1 class="text-black font-semibold text-4xl flex justify-center items-center mr-3">Family ID</h1>
            </div>
            <UNavigationMenu 
              :items="items"  
              :ui="{
                link: 'text-[#414651] hover:text-black',
                // dropdown container
                  content: 'flex flex-col items-start ',

                  // wrapper for children list
                  childList: 'flex flex-col gap-2',

                  // each item
                  childItem: 'w-full',
              }"
            />
            </div>
        </template>

        <template #right>
            <UButton to="/auth/login" class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651] text-md">Log in</UButton>
            <UButton class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white text-md">Sign Up</UButton>
        </template>
    </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

// TODO: navigate to sections on homepage...
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Products',
    children: [
      { label: 'Product 1', to: '' },
      { label: 'Product 2', to: '' },
      { label: 'Product 3', to: '' }
    ]
    // to: '/docs/components',
    // active: route.path.startsWith('/docs/components')
  },
  {
    label: 'Services',
    children: [
      { label: 'Service 1', to: '' },
      { label: 'Service 2', to: '' }
    ]
    // to: '',
    // target: '_blank'
  },
  {
    label: 'Pricing'
  },
  {
    label: 'Resources',
    children: [
      { label: 'Resource 1', to: '' },
      { label: 'Resource 2', to: '' },
      { label: 'Resource 3', to: '' }
    ]
  },
  {
    label: 'About'
  }
])
</script>