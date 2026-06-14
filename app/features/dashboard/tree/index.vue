<template>
  <div class="h-full w-full">
    <div class="flex justify-between items-start">
      <div>
        <bread-crumb />

        <h1
          class="font-bold text-[#1F1A14] text-2xl leading-[1.15] tracking-[-0.025em]"
        >
          The Dlamini-Khumalo Tree
        </h1>
        <p class="text-[#535862] font-thin mt-1">
          9 members across three generations. Hover a person to add relatives.
        </p>
      </div>

      <top-header-buttons />
    </div>

    <div
      class="mt-5 shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)] rounded"
    >
      <tree-component :show-dates="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopHeaderButtons from "~/components/Dashboard/TopHeaderButtons.vue";
import TreeComponent from "~/components/TreeComponent.vue";
import BreadCrumb from "~/components/Dashboard/BreadCrumb.vue";
</script>
