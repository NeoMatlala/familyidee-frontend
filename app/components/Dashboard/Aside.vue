<template>
    <div class="h-full flex flex-col relative">
        <div class="flex-1 overflow-y-auto p-5 pb-24">
            <NuxtLink to="/" class="flex flex-row justify-start gap-2">
            <img src="/images/Vector.svg" class="w-10 "/>
            <h1 class="text-black font-semibold text-2xl md:text-3xl flex justify-center items-center mr-3">Family ID</h1>
            </NuxtLink>

            <UInput class="mt-7.5 mb-10" icon="i-lucide-search" size="md" variant="outline" placeholder="Search..." />

            <div class="space-y-1 text-[#252B37]">
                <NuxtLink to="/dashboard/" class="flex p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <House :size="18"/>
                    <p >Home</p>
                </NuxtLink>

                <NuxtLink class="flex p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <ChartColumn :size="18"/>
                    <p>Dashboard</p>
                </NuxtLink>

                <NuxtLink class="flex p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <Server :size="18"/>
                    <p>Projects</p>
                </NuxtLink>

                <NuxtLink class="flex p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <FileCheck :size="18"/>
                    <p>Tasks</p>
                </NuxtLink>

                <NuxtLink class="flex p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <PieChart :size="18"/>
                    <p>Reporting</p>
                </NuxtLink>

                <NuxtLink class="flex p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <Users2 :size="18"/>
                    <p>Users</p>
                </NuxtLink>
            </div>

            <div class="space-y-1 text-[#414651] mt-16 mb-5">
                <NuxtLink class="flex p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <Volleyball :size="18"/>
                    <p>Support</p>
                </NuxtLink>

                <NuxtLink to="/settings" class="flex p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <Settings :size="18"/>
                    <p>Settings</p>
                </NuxtLink>
            </div>

            <div class="border rounded-md border-[#E9EAEB] p-2.5">
                <p class="text-[#181D27]  text-sm font-semibold">Verify this device</p>
                <p class="font-thin text-[#535862] text-xs">
                    Open the app and scan the QR code below to verify this device.
                </p>

                <img src="/images/qa-img.png" class="w-full h-24 my-5"/>

                <div class="font-semibold text-sm flex justify-center items-center border border-slate-200 py-1 rounded-md">
                    Verify another way
                </div>
            </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 z-20 py-5 px-2 bg-white over">
            <div class="flex justify-start px-2 items-center gap-2.5 border rounded-md border-[#E9EAEB]">
                <div class="w-8 h-8">
                    <UAvatar src="https://github.com/benjamincanac.png" class="w-full h-full"/>
                </div>

                <div>
                    <p class="text-[#181D27]  text-sm font-semibold">Olivia Rhye</p>
                    <p class="font-thin text-[#535862] text-sm">olivia@zinia.co.za</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { House, ChartColumn, Server,FileCheck, PieChart, Users2, Settings, Volleyball } from 'lucide-vue-next';
</script>