<template>
    <Page />
</template>

<script setup lang="ts">
import { dashboardTreeMeta } from '~/features/dashboard/tree/dashboard-tree.meta'
import Page from '~/features/dashboard/tree/index.vue'


definePageMeta({
  layout: dashboardTreeMeta.layout
})
</script>