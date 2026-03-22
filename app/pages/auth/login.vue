<template>
    <page />
</template>

<script setup lang="ts">
import pageMeta from '~/features/auth/login/login.meta'
import page from '~/features/auth/login/index.vue'


definePageMeta({...pageMeta})
</script>