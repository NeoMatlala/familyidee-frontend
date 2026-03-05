<template>
    <UHeader>
        <template #title>
            <h1 class="text-[#672901]">LOGO</h1>
        </template>

        

        <template #right>
        <!-- <UColorModeButton /> -->
            <UNavigationMenu :items="items" />

            <UButton class="bg-[#E74B0C] hover:bg-[#cf4209] text-white">Get Started</UButton>
        
        </template>
    </UHeader>
    <div class="text-4xl bold text-red-700">Home page</div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

// TODO: navigate to sections on homepage...
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    // to: '/docs/getting-started',
    // active: route.path.startsWith('/docs/getting-started')
  },
  {
    label: 'About Us',
    // to: '/docs/components',
    // active: route.path.startsWith('/docs/components')
  },
  {
    label: 'Contact',
    // to: '',
    // target: '_blank'
  }
])
</script>