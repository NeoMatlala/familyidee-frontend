<template>
    <page />
</template>

<script setup lang="ts">
import pageMeta from '~/features/home/home-page.meta'
import page from '~/features/home/index.vue'


definePageMeta({...pageMeta})
</script>