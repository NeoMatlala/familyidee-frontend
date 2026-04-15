<template>
  <div class="fixed top-0 left-0 w-full z-40 pt-5 bg-white">
    <UContainer class="mb-5 bg-white flex justify-between items-center ">
        
      <div class="flex flex-row justify-start gap-2">
        <NuxtLink to="/" v-if="!openMobileMenu" class="flex flex-row justify-start gap-2">
          <img src="/images/Vector.svg" class="w-10 "/>
          <h1 class="text-black font-semibold text-2xl md:text-4xl flex justify-center items-center mr-3">Family ID</h1>
        </NuxtLink>

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
          class="hidden md:inline"
        />
      </div>

      <div class="hidden md:inline">
        <UButton to="/auth/login" class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651] mr-2.5 text-md">Log in</UButton>
        <UButton to="/auth/signup" class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white text-md">Sign Up</UButton>
      </div>
        
      <Menu color="#414651" v-if="!openMobileMenu" class="md:hidden" @click="openMobileMenu= true"/>
    </UContainer>

    <div v-if="openMobileMenu" class="bg-white h-screen w-full md:hidden z-50">
      <div class="flex justify-end pr-5 pt-0 mb-10">
        <X :size="36" class="md:hidden" @click="openMobileMenu= false"/>
      </div>

      <UNavigationMenu 
          :items="items"  
          :ui="{
            link: 'text-[#414651] text-xl mb-5',
            // dropdown container
              content: 'flex flex-col items-start',

              // wrapper for children list
              childList: 'flex w-full flex-col gap-2',

              // each item
              childItem: 'w-full',
          }"
          orientation="vertical"
          class="md:hidden px-5"
        />

        <div class="w-full space-y-5 px-5 mt-36">
          <UButton 
            @click="openMobileMenu= false"
            to="/auth/login" 
            class="bg-white rounded border hover:bg-white border-[#D5D7DA] text-[#414651] mr-2.5 text-md w-full justify-center flex"
          >
              Log in
          </UButton>

          <UButton 
            @click="openMobileMenu= false"
            to="/auth/signup" 
            class="bg-[#E74B0C] rounded justify-center flex hover:bg-[#cf4209] text-white text-md w-full"
          >
            Sign Up
          </UButton>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem} from '@nuxt/ui'
import { Menu, X } from 'lucide-vue-next';

const route = useRoute()
const openMobileMenu = ref<boolean>(false)

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