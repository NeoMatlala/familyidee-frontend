<template>
  <div class="flex gap-x-2 pt-2 justify-start items-start h-screen w-screen">
    <div class="w-1/5  2xl:w-1/6 h-full">
      <Aside />
    </div>

    <main class="border-l border-t rounded-tl-3xl border-[#E9EAEB] w-4/5 2xl:w-5/6 h-full p-7">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Aside from '~/components/Dashboard/Aside.vue';
</script>