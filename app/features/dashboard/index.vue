<template>
    <div class="h-full w-full">
        <div class="flex justify-between items-start">
            <div>
                <h1 class="font-semibold text-[#181D27] text-2xl">Welcome back, Olivia</h1>
                <p class="text-[#535862]/70 font-thin mt-1">Track, manage and forecast your customers and orders.</p>
            </div>

            <div>
                <UButton class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651] mr-2.5" icon="i-lucide-upload">
                    Import
                </UButton>

                <UButton class="bg-[#970205] rounded-md text-white px-4" icon="i-lucide-plus">Add</UButton>
            </div>
        </div>
        
        <!-- dashboard cards -->
        <div class="mt-10 w-full flex gap-5 justify-between items-center">
            <div class="border border-[#E9EAEB] rounded-xl h-48 w-1/3 bg-slate-100/30">
                <p class="text-[#181D27] px-3 py-1.5 text-sm font-semibold">Total customers</p>

                <div class="border border-[#E9EAEB] px-5 py-3 rounded-xl h-full w-full bg-white">
                    <h1 class="text-[#181D27] text-3xl font-semibold">2,240</h1>
                </div>
            </div>

            <div class="border border-[#E9EAEB] rounded-xl h-48 w-1/3 bg-slate-100/30">
                <p  class="text-[#181D27] px-3 py-1.5 text-sm font-semibold">Members</p>

                <div class="border border-[#E9EAEB] px-5 py-3 rounded-xl h-full w-full bg-white">
                    <h1 class="text-[#181D27] text-3xl font-semibold">1,210</h1>
                </div>
            </div>
            
            <div class="border border-[#E9EAEB] rounded-xl h-48 w-1/3 bg-slate-100/30">
                <p  class="text-[#181D27] px-3 py-1.5 text-sm font-semibold">Active now</p>

                <div class="border border-[#E9EAEB] px-5 py-3 rounded-xl h-full w-full bg-white">
                    <h1 class="text-[#181D27] text-3xl font-semibold">316</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>