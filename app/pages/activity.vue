<template>
    <Page />
</template>

<script setup lang="ts">
import {dashboardActivityMeta} from '~/features/dashboard/activity/dashboard-activity.meta'
import Page from '~/features/dashboard/activity/index.vue'


definePageMeta({
  layout: dashboardActivityMeta.layout
})
</script>