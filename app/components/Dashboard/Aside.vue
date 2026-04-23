<template>
    <div class="w-full h-full p-5 flex-col items-start">
        <div class="flex flex-row justify-start gap-2">
          <img src="/images/Vector.svg" class="w-10 "/>
          <h1 class="text-black font-semibold text-2xl md:text-3xl flex justify-center items-center mr-3">Family ID</h1>
        </div>

        <UInput class="mt-7.5 mb-10" icon="i-lucide-search" size="md" variant="outline" placeholder="Search..." />

        <div class="space-y-4 text-[#414651] px-2 mb-24">
            <NuxtLink class="flex w-full justify-start items-center gap-2">
                <House :size="18"/>
                <p>Home</p>
            </NuxtLink>

            <NuxtLink class="flex w-full justify-start items-center gap-2">
                <ChartColumn :size="18"/>
                <p>Dashboard</p>
            </NuxtLink>

            <NuxtLink class="flex w-full justify-start items-center gap-2">
                <Server :size="18"/>
                <p>Projects</p>
            </NuxtLink>

            <NuxtLink class="flex w-full justify-start items-center gap-2">
                <FileCheck :size="18"/>
                <p>Tasks</p>
            </NuxtLink>

            <NuxtLink class="flex w-full justify-start items-center gap-2">
                <PieChart :size="18"/>
                <p>Reporting</p>
            </NuxtLink>

            <NuxtLink class="flex w-full justify-start items-center gap-2">
                <Users2 :size="18"/>
                <p>Users</p>
            </NuxtLink>
        </div>

        <div class="space-y-4 px-2 text-[#414651]">
            <NuxtLink class="flex w-full justify-start items-center gap-2">
                <Volleyball :size="18"/>
                <p>Support</p>
            </NuxtLink>

            <NuxtLink class="flex w-full justify-start items-center gap-2">
                <Settings :size="18"/>
                <p>Settings</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { House, ChartColumn, Server,FileCheck, PieChart, Users2, Settings, Volleyball } from 'lucide-vue-next';
</script>