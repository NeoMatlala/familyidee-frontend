<template>
    <page />
</template>

<script setup lang="ts">
import pageMeta from '~/features/auth/signup/signup.meta'
import page from '~/features/auth/signup/index.vue'


definePageMeta({...pageMeta})
</script>