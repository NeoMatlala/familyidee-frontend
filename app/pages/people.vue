<template>
    <DashboardPeoplePage />
</template>

<script setup lang="ts">
import {dashboardPeopleMeta} from '~/features/dashboard/people/dashboard-people.meta'
import DashboardPeoplePage from '~/features/dashboard/people/index.vue'


definePageMeta({
  layout: dashboardPeopleMeta.layout
})
</script>