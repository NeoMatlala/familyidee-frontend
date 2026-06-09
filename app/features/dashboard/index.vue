<template>
    <div class="h-full w-full">
        <div class="flex justify-between items-start">
            <div>
                <h1 class="font-bold text-[#1F1A14] text-2xl leading-[1.15] tracking-[-0.025em]">Welcome back, Olivia</h1>
                <p class="text-[#535862]/70 font-thin mt-1">Heres what's new across your family tree</p>
            </div>

            <top-header-buttons />
        </div>
        
        <!-- dashboard cards -->
        <div class="mt-7.5 w-full  flex gap-5 justify-between flex-nowrap items-center">
            <div class="border border-[#E2D7BD] rounded h-auto w-1/4 bg-[#FFFCF6] p-4 text-left shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)]">
                <p class="text-[#6B5D43] text-sm font-semibold">In your tree</p>

                <h1 class="text-[#1F1A14] my-2 text-3xl font-bold">12</h1>

                <p class="text-[#9B8B6A] text-xs flex items-center justify-start gap-2">
                    across 3 generations
                </p>
            </div>

            <div class="border border-[#E2D7BD] rounded h-auto w-1/4 bg-[#FFFCF6] p-4 text-left shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)]">
                <p class="text-[#6B5D43] text-sm font-semibold">Memories</p>

                <h1 class="text-[[#1F1A14] my-2 text-3xl font-bold">6</h1>

                <p class="text-[#9B8B6A]  text-xs flex items-center justify-start gap-2">
                    oldest from 1976
                </p>
            </div>

            <div class="border border-[#E2D7BD] rounded h-auto w-1/4 bg-[#FFFCF6] p-4 text-left shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)]">
                <p class="text-[#6B5D43] text-sm font-semibold">Pending Invites</p>

                <h1 class="text-[[#1F1A14] my-2 text-3xl font-bold">2</h1>

                <p class="text-[#9B8B6A] text-xs flex items-center justify-start gap-2">
                    awaiting reply
                </p>
            </div>

            <div class="border border-[#E2D7BD] rounded h-auto w-1/4 bg-[#FFFCF6] p-4 text-left shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)]">
                <p class="text-[#6B5D43] text-sm font-semibold">Tree storage</p>

                <h1 class="text-[[#1F1A14] my-2 text-3xl font-bold">62%</h1>

                <p class="text-[#9B8B6A] text-xs flex items-center justify-start gap-2">
                    3.1GB of 5GB 
                </p>
            </div>
        </div>

        <div class="w-full flex justify-between items-start gap-x-5 my-5 h-[50vh] max-h-[50vh] 2xlh-[35vh] 2xl:max-h-[35vh]">
            <!-- Tree card -->
            <div class="w-2/3 bg-[#FFFCF6] border border-[#E2D7BD] rounded shadow-xs h-full overflow-y-hidden">
                <div class="flex p-4 justify-between items-center">
                    <div>
                        <h1 class="font-bold text-[#5A2308] text-lg tracking-[-0.01em]">The Dlamini-Khumalo tree</h1>
                        <p class="text-[#6B5D43] text-xs">Start 12 Jan 2026 - 9 Members - 3 Generations</p>
                    </div>

                    <UButton to="/tree" class="bg-[#FBF6EE] text-sm flex justify-between items-center gap-x-1.5 rounded-3xl px-4 border hover:bg-white border-[#C8B98F] text-[#1F1A14]" :icon="ChevronsUpDown">
                        Open tree
                    </UButton>
                </div>

                 <tree-component :show-dates="true" />
            </div>

            <div class="w-1/3 bg-[#FFFCF6] border border-[#E2D7BD]  py-5 rounded shadow-xs h-full overflow-auto">
                <div class="px-4">
                    <h1 class="font-bold text-[#5A2308] text-lg tracking-[-0.01em]">Coming up</h1>
                    <p class="text-[#6b5d43] text-xs">Birthdays & Anniversaries in the next 60 days</p>
                </div>
                
                <USeparator class="my-4" color="neutral" />

                <div class="mt-5">
                    <!-- TODO: break up into compononent and pass image, title, event and date -->
                    <div class="flex justify-between items-start gap-x-2 w-full px-4">
                        <div class="flex justify-start items-start gap-x-2">
                            <UAvatar  class="w-10 h-10" src="https://github.com/noook.png" alt="Neil Richter" />
                            <div class="text-sm">
                                <p class="text-[#181D27] font-medium">Teko Tyhe</p>
                                <p class="text-[#6b5d43] font-thin">Birthday • 24 Nov</p>  
                            </div>
                        </div>

                        <UBadge :ui="{base:'bg-orange-700'}">in 8d</UBadge>
                    </div>

                    <USeparator class="my-4" color="neutral" />

                    <div class="flex justify-between items-start gap-x-2 w-full px-4">
                        <div class="flex justify-start items-start gap-x-2">
                            <UAvatar  class="w-10 h-10" src="https://github.com/benjamincanac.png" alt="Neil Richter" />
                            <div class="text-sm">
                                <p class="text-[#181D27] font-medium">Thabo & Nomvula</p>
                                <p class="text-[#535862] font-thin">34th anniversary • 11 Dec</p>  
                            </div>
                        </div>

                        <UBadge :ui="{base:'bg-slate-700'}">in 25d</UBadge>
                    </div>

                    <USeparator class="my-4" color="neutral" />

                    <div class="flex justify-between items-start gap-x-2 w-full px-4">
                        <div class="flex justify-start items-start gap-x-2">
                            <UAvatar  class="w-10 h-10" src="https://github.com/romhml.png" alt="Neil Richter" />
                            <div class="text-sm">
                                <p class="text-[#181D27] font-medium">Sipho Dlamini - Khumalo</p>
                                <p class="text-[#535862] font-thin">Birthday • 3 Jan</p>  
                            </div>
                        </div>

                        <UBadge :ui="{base:'bg-slate-700'}">in 48d</UBadge>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-full flex justify-between items-start gap-x-5 h-[49vh] max-h-[49vh] 2xl:h-[35vh] 2xl:max-h-[35vh]">
            <div class="w-2/3 bg-[#FFFCF6] border border-[#E2D7BD] rounded shadow-xs h-full overflow-auto">
                <div class="flex px-5 py-3 justify-between items-center ">
                    <h1 class="font-bold text-[#5A2308] text-lg tracking-[-0.01em]">Activity</h1>
                    <p class=" text-sm">View all</p>
                </div>

                <USeparator class="mb-4" color="neutral" />

                <div>
                    <!-- <UTimeline 
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

                        <USeparator class="my-4" color="neutral" />
                    </UTimeline> -->

                    <div class="flex px-5 justify-start items-start gap-x-2">
                        <UAvatar class="w-10 h-10" src="https://github.com/noook.png" alt="Neil Richter" />
                        <div class="text-sm">
                            <p class="text-[#181D27] font-medium">Sipho added a memory "December vibes"</p>
                            <p class="text-[#9B8B6A] tex-xs font-thin">2 Hours ago</p>  
                        </div>
                    </div>

                    <USeparator class="my-4" color="neutral" />

                    <div class="flex px-5 justify-start items-start gap-x-2">
                        <UAvatar class="w-10 h-10" src="https://github.com/noook.png" alt="Neil Richter" />
                        <div class="text-sm">
                            <p class="text-[#181D27] font-medium">Sipho added a memory "December vibes"</p>
                            <p class="text-[#9B8B6A] tex-xs font-thin">2 Hours ago</p>  
                        </div>
                    </div>

                    <USeparator class="my-4" color="neutral" />

                    <div class="flex px-5 justify-start items-start gap-x-2">
                        <UAvatar class="w-10 h-10" src="https://github.com/noook.png" alt="Neil Richter" />
                        <div class="text-sm">
                            <p class="text-[#181D27] font-medium">Sipho added a memory "December vibes"</p>
                            <p class="text-[#9B8B6A] tex-xs font-thin">2 Hours ago</p>  
                        </div>
                    </div>

                    <USeparator class="my-4" color="neutral" />
                </div>
            </div>

            <div class="w-1/3  h-full bg-[#FFFCF6] p-5 border border-[#E2D7BD] rounded shadow-xs">
                <p class="font-semibold tracking-[0.16em] font-mono text-xs text-[#B8431A] mb-2">SUGGESTED NEXT</p>
                <h1 class="font-bold text-[#5A2308] leading-6 text-xl tracking-[-0.01em]">Add your great-grandparents on your mother’s side.</h1>
                <p class="text-[#6B5D43] text-sm mt-3">
                    Vusi’s parents are missing. Zanele mentioned them on her profile last week — you can pull names from her note.
                </p>

                <div class="flex justify-start items-center gap-x-2.5 mt-7">
                    <UButton :icon="Plus" class="bg-[#B8431A] text-sm flex justify-center p-2 px-4 rounded-3xl hover:bg-[#cf4209] text-white">
                        Add Person
                    </UButton>

                    <UButton  class="bg-white flex justify-center p-2 text-sm rounded-md hover:bg-white text-[#414651] font-semibold">
                        Maybe Later
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TopHeaderButtons from '~/components/Dashboard/TopHeaderButtons.vue';
import Table from '~/components/Dashboard/Table.vue';
import { Plus, ChevronsUpDown, TrendingDown, Dot, X, CircleAlert, CircleAlertIcon } from 'lucide-vue-next';
import type { TimelineItem } from '@nuxt/ui'
import TreeComponent from '~/components/TreeComponent.vue';


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