<template>
    <div class="h-full flex flex-col items-between relative bg-[#F4EBD5] border-r border-[#E2D7BD]">
        <div class="thin-scroll flex-1 overflow-y-auto p-5 pb-24 ">
            
            <NuxtLink to="/" class="flex flex-row justify-start gap-2 w-full h-[8vh] 2xl:h-[7vh]">
                <img src="/images/fam-id-logo.png" class="w-3/4 h-full "/>
            </NuxtLink>

            <UInput 
                class="mt-7.5 mb-5 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] " icon="i-lucide-search" size="md" variant="outline" placeholder="Search..." 
                :ui="{
                    base:'bg-[#FBF6EE] text-[#9B8B6A] border-[#E2D7BD] h-10'
                }"
            />

            <div class="space-y-2 text-[#1F1A14] text-[15px]">
                <NuxtLink to="/dashboard/" class="flex font-semibold p-2 rounded-md hover:bg-[#EAE0C6] cursor-pointer w-full justify-start items-center gap-2">
                    <House :size="18" class=""/>
                    <p>Home</p>
                </NuxtLink>

                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-[#EAE0C6] cursor-pointer w-full justify-start items-center gap-2">
                    <Network :size="18" />
                    <p>My Tree</p>
                </NuxtLink>

                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-[#EAE0C6] cursor-pointer w-full justify-start items-center gap-2">
                    <Users2 :size="18" />
                    <p>People</p>
                </NuxtLink>

                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-[#EAE0C6] cursor-pointer w-full justify-start items-center gap-2">
                    <Image :size="18" />
                    <p>Memories</p>
                </NuxtLink>

                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-[#EAE0C6] cursor-pointer w-full justify-start items-center gap-2">
                    <ChartNoAxesColumn :size="18" />
                    <p>Activity</p>
                </NuxtLink>

                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-[#EAE0C6] cursor-pointer w-full justify-start items-center gap-2">
                    <Mail :size="18" />
                    <p>Invites</p>
                </NuxtLink>
            </div>
        </div>

        <div class="p-5 flex flex-col text-[15px]">
            <div class="space-y-0 text-[#1F1A14] mb-5">
                <NuxtLink class="flex font-semibold p-2 rounded-md hover:bg-[#EAE0C6] cursor-pointer w-full justify-start items-center gap-2">
                    <Volleyball :size="18" />
                    <p>Support</p>
                </NuxtLink>

                <NuxtLink to="/settings" class="flex font-semibold p-2 rounded-md hover:bg-[#EAE0C6] cursor-pointer w-full justify-start items-center gap-2">
                    <Settings :size="18" />
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
import { House, Network, Image,ChartNoAxesColumn, Mail, Users2, Settings, Volleyball } from 'lucide-vue-next';
</script>