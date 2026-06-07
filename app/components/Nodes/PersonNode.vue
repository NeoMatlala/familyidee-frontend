<template>
  <div class="rounded-full flex flex-col items-center justify-start cursor-pointer">
    <UAvatar src="https://github.com/benjamincanac.png" class="w-10 h-10"/>
    <p class="text-[6px] text-[#1F1A14]">
      {{ data.name }} {{ data.surname }}
    </p>
    <p class="text-[5px] text-[#6B5D43]">{{ data.yearOfBirth }} - {{ data.yearOfDeath }}</p>
  </div>
</template>

<script setup lang="ts">
import type { PersonNodeType } from '~/features/dashboard/tree/api/types';

defineProps<{
  data: PersonNodeType
}>()
</script>

