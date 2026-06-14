<template>
  <OnboardingPage />
</template>

<script setup lang="ts">
import { onboardingMeta } from "~/features/onboarding/onboarding.meta";
import OnboardingPage from "~/features/onboarding/index.vue";

definePageMeta({
  layout: onboardingMeta.layout,
});
</script>
