<template>
    <div class="h-full w-full">
        <div class="flex justify-between items-start">
            <div>
                <h1 class="font-semibold text-[#181D27] text-2xl">Welcome back, Olivia</h1>
                <p class="text-[#535862]/70 font-thin mt-1">heres what's new across your family tree</p>
            </div>

            <div>
                <UButton class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651] mr-2.5" icon="i-lucide-upload">
                    Import
                </UButton>

                <UButton class="bg-[#970205] rounded-md text-white px-4" icon="i-lucide-plus">Add</UButton>
            </div>
        </div>
        
        <!-- dashboard cards -->
        <div class="mt-7.5 w-full  flex gap-5 justify-between flex-nowrap items-center">
            <div class="border border-[#E9EAEB] rounded-xl h-auto w-1/3 bg-slate-100/20">
                <p class="text-[#181D27] px-3 py-2 text-sm font-semibold">In your tree</p>

                <div class="border border-[#E9EAEB] px-5 py-5 rounded-xl h-full w-full bg-white">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-start gap-2.5 items-center">
                            <h1 class="text-[#181D27] text-3xl font-semibold">12</h1>

                            <p class="text-[#535862] font-semibold text-xs flex items-center justify-start gap-2">
                                <span class="text-[#079455] flex items-center justify-start gap-1"><TrendingUp :size="15"/> 40%</span> 
                                vs last month
                            </p>
                        </div>

                        <EllipsisVertical class="text-[#A4A7AE]" />
                    </div>
                </div>
            </div>

            <div class="border border-[#E9EAEB] rounded-xl h-auto w-1/3 bg-slate-100/20">
                <p class="text-[#181D27] px-3 py-2 text-sm font-semibold">Pending invites</p>

                <div class="border border-[#E9EAEB] px-5 py-5 rounded-xl h-full w-full bg-white">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-start gap-2.5 items-center">
                            <h1 class="text-[#181D27] text-3xl font-semibold">1,210</h1>

                            <p class="text-[#535862] font-semibold text-xs flex items-center justify-start gap-2">
                                <span class="text-[#079455] flex items-center justify-start gap-1"><TrendingDown :size="15"/> 10%</span> 
                                vs last month
                            </p>
                        </div>

                        <EllipsisVertical class="text-[#A4A7AE]" />
                    </div>
                </div>
            </div>

            <div class="border border-[#E9EAEB] rounded-xl h-auto w-1/3 bg-slate-100/20">
                <p class="text-[#181D27] px-3 py-2 text-sm font-semibold">Tree Storage</p>

                <div class="border border-[#E9EAEB] px-5 py-5 rounded-xl h-full w-full bg-white">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-start gap-2.5 items-center">
                            <h1 class="text-[#181D27] text-3xl font-semibold">31%</h1>

                            <p class="text-[#535862] font-semibold text-xs flex items-center justify-start gap-2">
                                <span class="text-[#079455] flex items-center justify-start gap-1"><TrendingUp :size="15"/> 20%</span> 
                                vs last month
                            </p>
                        </div>

                        <EllipsisVertical class="text-[#A4A7AE]" />
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full flex justify-between items-start gap-x-5 my-5 h-[50vh] max-h-[50vh] 2xlh-[35vh] 2xl:max-h-[35vh]">
            <!-- table -->
            <div class="w-2/3 bg-white border border-[#E9EAEB] p-5 rounded-xl shadow-xs h-full overflow-y-hidden">
                <Table  />
            </div>

            <div class="w-1/3 bg-white border border-[#E9EAEB]  p-5 rounded-xl shadow-xs h-full overflow-auto">
                <h1 class="font-semibold text-[#181D27] text-lg">Coming up</h1>
                <p class="text-[#535862]/70 text-sm font-thin ">Birthdays & Anniversaries in the next 60 days</p>
            
                <div class="mt-5">
                    <!-- TODO: break up into compononent and pass image, title, event and date -->
                    <div class="flex justify-start items-start gap-x-2 w-full ">
                        <UAvatar  class="w-10 h-10" src="https://github.com/noook.png" alt="Neil Richter" />
                        <div class="text-sm">
                            <p class="text-[#181D27] font-medium">Teko Tyhe</p>
                            <p class="text-[#535862] font-thin">Birthday • 24 Nov</p>  
                        </div>
                    </div>

                    <USeparator class="my-4" color="neutral" />

                    <div class="flex justify-start items-start gap-x-2 w-full ">
                        <UAvatar  class="w-10 h-10" src="https://github.com/benjamincanac.png" alt="Neil Richter" />
                        <div class="text-sm">
                            <p class="text-[#181D27] font-medium">Thabo & Nomvula</p>
                            <p class="text-[#535862] font-thin">34th anniversary • 11 Dec</p>  
                        </div>
                    </div>

                    <USeparator class="my-4" color="neutral" />

                    <div class="flex justify-start items-start gap-x-2 w-full ">
                        <UAvatar  class="w-10 h-10" src="https://github.com/romhml.png" alt="Neil Richter" />
                        <div class="text-sm">
                            <p class="text-[#181D27] font-medium">Sipho Dlamini - Khumalo</p>
                            <p class="text-[#535862] font-thin">Birthday • 3 Jan</p>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-full flex justify-between items-start gap-x-5 h-[49vh] max-h-[49vh] 2xl:h-[35vh] 2xl:max-h-[35vh]">
            <div class="w-2/3 bg-white border border-[#E9EAEB] p-5 rounded-xl shadow-xs h-full overflow-auto">
                <h1 class="font-semibold text-[#181D27] text-lg">Activity</h1>
                <p class="text-[#535862]/70 text-sm font-thin ">Birthdays & Anniversaries in the next 60 days</p>
            
                <UTimeline 
                    :items="items" 
                    class="mt-5 w-full"
                    size="xs"
                    :ui="{
                        date: 'float-end ms-1',
                        description: 'text-[#535862]'
                    }"
                >
                    <template #title="{ item }">
                        <span class="text-[#414651]"> {{ item.title }}</span>
                        <span class="font-light text-[#535862] text-xs">&nbsp;&nbsp;{{ item.action }}</span>
                    </template>

                    <template #date="{ item }">
                        <Dot color="#17B26A" :size="30"/>
                    </template>
                </UTimeline>
            </div>

            <div class="w-1/3 relative bg-white pl-10 pr-4  pt-7 border border-[#E9EAEB] rounded-xl shadow-xs h-full overflow-auto flex justify-start items-start gap-5">
                <X :size="20" class="absolute top-3 right-3" />

                <CircleAlertIcon class="absolute top-7.5 left-3" :size="20" color="#EF6820"/>

                <div class="">
                    <h1 class="font-semibold text-[#414651] text-md">Add your great-grandparents on your mother’s side.</h1>
                    <p class="text-[#535862] text-sm font-thin mt-3">Vusi’s parents are missing. Zanele mentioned them on her profile last week — you can pull names from her note.</p>

                    <div class="flex justify-start items-center gap-x-2.5 my-10">
                        <UButton class="bg-[#E74B0C] text-sm flex justify-center p-2 rounded-md hover:bg-[#cf4209] text-white">
                            Add Person
                        </UButton>

                        <UButton  class="bg-white flex justify-center p-2 text-sm rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651]">
                           Maybe Later
                        </UButton>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import type { ChartOptions } from 'chart.js';
// import LineChart from '~/components/Dashboard/LineChart.vue';
import Table from '~/components/Dashboard/Table.vue';
import { TrendingUp, EllipsisVertical, TrendingDown, Dot, X, CircleAlert, CircleAlertIcon } from 'lucide-vue-next';
import type { TimelineItem } from '@nuxt/ui'

definePageMeta({
  layout: 'dashboard'
})


const items = ref<TimelineItem[]>([
  {
    action: 'Just now',
    title: 'Phoneix Baker',
    description: 'Added a file to Marketing site redesign',
    avatar: {
      src: 'https://github.com/J-Michalek.png',
      loading: 'lazy' as const
    }
  },
  {
    action: '2 mins ago',
    title: 'Lana Steiner',
    description: 'Invited Alisa Hester to the team',
    avatar: {
      src: 'https://github.com/noook.png',
      loading: 'lazy' as const
    }
  },
  {
    action: '2 mins ago',
    title: 'Demi Wikinson',
    description: 'Invited Alisa Hester to the team',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      loading: 'lazy' as const
    }
  }
])



// borderColor: '#F04438',
// backgroundColor: 'rgba(240, 68, 56, 0.1)',

// const chartData = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//   datasets: [
//     {
//       //label: 'Revenue',
//       data: [490, 495, 500, 505, 515, 515, 510],
//       borderColor: '#17B26A',
//       backgroundColor: 'rgba(23, 178, 106, 0.1)',
//       fill: true,
//       tension: 0.1,
//     },
//   ],
// }
// const chartData2 = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//   datasets: [
//     {
//       data: [515, 515, 510,515,505,500,499,495,490],
//       borderColor: '#F04438',
//       backgroundColor: 'rgba(240, 68, 56, 0.1)',
//       fill: true,
//       tension: 0.1,
//     },
//   ],
// }
// const chartData3 = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//   datasets: [
//     {
//       data: [490, 495, 500, 505, 515, 515, 510],
//       borderColor: '#17B26A',
//       backgroundColor: 'rgba(23, 178, 106, 0.1)',
//       fill: true,
//       tension: 0.1,
//     },
//   ],
// }

// const chartOptions: ChartOptions<'line'> = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     legend: { display: false },
//     tooltip: { enabled: false },
//   },
//   scales: {
//     x: {
//       display: false,
//     },
//     y: {
//       display: false,
//     },
//   },
// }
</script>