<template>
    <div class="h-full w-full">
        <div class="flex justify-between items-start">
            <div>
                <h1 class="font-semibold text-[#1F1A14] text-2xl">The Dlamini-Khumalo Tree</h1>
                <p class="text-[#535862]/70 font-thin mt-1">
                    9 members across three generations. Hover a person to add relatives.
                </p>
            </div>

            <top-header-buttons />
        </div>

        <div class="mt-5">
            <tree-component
                :show-dates="true"
            />
        </div>

    </div>
</template>

<script setup lang="ts">
import TopHeaderButtons from '~/components/Dashboard/TopHeaderButtons.vue';
import TreeComponent from '~/components/TreeComponent.vue';
</script>