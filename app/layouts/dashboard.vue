<template>
  <div class="flex justify-start items-start">
    <div class="w-1/5 fixed top-0 left-0 2xl:w-1/6 h-screen overflow-y-auto">
      <Aside />
    </div>

    <main class="bg-[#FBF6EE] ml-[20%] 2xl:ml-[16.666%] w-4/5 2xl:w-5/6 min-h-screen p-7">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Aside from '~/components/Dashboard/Aside.vue';
</script>