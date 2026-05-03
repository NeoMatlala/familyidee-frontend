<template>
    <DashboardSettingsPage />
</template>

<script setup lang="ts">
import {dashboardSettingsMeta} from '~/features/dashboard/settings/dashboard-settings.meta'
import DashboardSettingsPage from '~/features/dashboard/settings/index.vue'


definePageMeta({
  layout: dashboardSettingsMeta.layout
})
</script>