<template>
    <page />
</template>

<script setup lang="ts">
import pageMeta from '~/features/auth/forgot-password/forgot-password.meta'
import page from '~/features/auth/forgot-password/index.vue'


definePageMeta({...pageMeta})
</script>