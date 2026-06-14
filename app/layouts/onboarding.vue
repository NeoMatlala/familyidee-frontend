<template>
  <div class="flex justify-between items-center h-screen">
    <main class="w-1/2 h-full bg-[#FBF6EE] p-7 flex flex-col justify-between">
      <div class="flex justify-between items-center">
        <app-logo />

        <p class="text-[#6B5D43] text-sm">
          Have an account?
          <NuxtLink
            to="/auth/login"
            class="text-[#B8431A] hover:underline font-semibold"
          >
            Sign in
          </NuxtLink>
        </p>
      </div>

      <slot />

      <div class="flex justify-between items-center text-[#9B8B6A]">
        <p class="pr-2 w-20 text-xs">Step {{ stepCount }} of 4</p>
        <div class="h-1 w-full rounded-full py-2">
          <div class="bg-red-400 h-1 w-1/4 rounded-full"></div>
        </div>
        <p class="pl-2 text-xs w-8">{{ stepAsPercentage }}%</p>
      </div>
    </main>

    <div class="w-1/2 h-full bg-[#F5EEDF]"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import AppLogo from "~/components/AppLogo.vue";

// this needs state to be reactive.
const stepCount = ref<number>(1);

const stepAsPercentage = computed<number>((): number => {
  return (stepCount.value / 4) * 100;
});
</script>
