<template>
  <UBreadcrumb
    :items="items"
    :ui="{
      link: 'text-xs',
      separatorIcon: 'w-3 h-3',
      active: 'text-default',
    }"
    class="mb-5"
  >
    <template #item-leading="{ item, index }">
      <UIcon
        v-if="item.icon"
        :name="item.icon"
        :class="index === 0 ? 'size-4' : 'size-4'"
      />
    </template>
  </UBreadcrumb>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";
import type { active } from "d3";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const items = ref<BreadcrumbItem[]>([
  {
    label: " ",
    icon: "i-lucide-home",
    to: "/",
  },
  {
    label: "Dashboard",
    //icon: 'i-lucide-box',
    to: "/dashboard",
  },
  {
    label: getPageLabel(route),
    //icon: 'i-lucide-link',
    to: getPageLabel(route),
  },
]);

function getPageLabel(route: ReturnType<typeof useRoute>) {
  // simplest version (you can refine later)
  const segments = route.path.split("/").filter(Boolean);

  const last = segments[segments.length - 1];

  if (!last || last === "dashboard") return "Dashboard";

  return formatLabel(last);
}

function formatLabel(value: string) {
  return value.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
</script>
