<template>
    <div class="h-full flex flex-col items-between relative bg-[#FEF6EE]">
        <div class="thin-scroll flex-1 overflow-y-auto p-5 pb-24">
            
            <NuxtLink to="/" class="flex flex-row justify-start gap-2 w-full h-[8vh] 2xl:h-[7vh]">
                <img src="/images/fam-id-logo.png" class="w-3/4 h-full "/>
            </NuxtLink>

            <UInput class="mt-7.5 mb-5 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" icon="i-lucide-search" size="md" variant="outline" placeholder="Search..." />

            <div class="space-y-1 text-[#414651]">
                <NuxtLink to="/dashboard/" class="flex font-semibold p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <House :size="18" class="text-[#A4A7AE]"/>
                    <p >Home</p>
                </NuxtLink>

                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <ChartColumn :size="18" class="text-[#A4A7AE]"/>
                    <p>Family</p>
                </NuxtLink>

                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <Server :size="18" class="text-[#A4A7AE]"/>
                    <p>Gallery</p>
                </NuxtLink>

                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <FileCheck :size="18" class="text-[#A4A7AE]"/>
                    <p>Invitations</p>
                </NuxtLink>

                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <PieChart :size="18" class="text-[#A4A7AE]"/>
                    <p>Messages</p>
                </NuxtLink>

                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <Users2 :size="18" class="text-[#A4A7AE]"/>
                    <p>Consultations</p>
                </NuxtLink>
            </div>
        </div>

        <div class="py-5 px-2 flex flex-col">
            <div class="space-y-0 text-[#414651] mb-5">
                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <Volleyball :size="18" class="text-[#A4A7AE]"/>
                    <p>Support</p>
                </NuxtLink>

                <NuxtLink to="/settings" class="flex font-semibold p-2 rounded-md hover:bg-slate-100 cursor-pointer w-full justify-start items-center gap-2">
                    <Settings :size="18" class="text-[#A4A7AE]"/>
                    <p>Settings</p>
                </NuxtLink>
            </div>

            <div class="flex justify-start px-2 py-1 items-center gap-2.5 border rounded-md bg-white border-[#E9EAEB]">
                <div class="w-8 h-8">
                    <UAvatar src="https://github.com/benjamincanac.png" class="w-full h-full"/>
                </div>

                <div>
                    <p class="text-[#181D27] text-sm font-semibold">Olivia Rhye</p>
                    <p class="font-thin text-[#535862] text-sm">olivia@zinia.co.za</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { House, ChartColumn, Server,FileCheck, PieChart, Users2, Settings, Volleyball } from 'lucide-vue-next';
</script>