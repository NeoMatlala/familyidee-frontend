<template>
    <DashboardInvitesPage />
</template>

<script setup lang="ts">
import DashboardInvitesPage from '~/features/dashboard/invites/index.vue'
import { dashboardInvitesMeta } from '~/features/dashboard/invites/dashboard-invites.meta';


definePageMeta({
  layout: dashboardInvitesMeta.layout
})
</script>