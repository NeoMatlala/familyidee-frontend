<template>
    <DashboardPage />
</template>

<script setup lang="ts">
import {dashboardMeta} from '~/features/dashboard/dashboard-page.meta'
import DashboardPage from '~/features/dashboard/index.vue'


definePageMeta({
  layout: dashboardMeta.layout
})
</script>

