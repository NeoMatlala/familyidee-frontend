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
        <div class="mt-10 w-full  flex gap-5 justify-between flex-nowrap items-center">
            <div class="border border-[#E9EAEB] rounded-xl h-auto w-1/3 bg-slate-100/30">
                <p class="text-[#181D27] px-3 py-1.5 text-sm font-semibold">Total customers</p>

                <div class="border border-[#E9EAEB] px-5 py-3 rounded-xl h-full w-full bg-white">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-start gap-2.5 items-center">
                            <h1 class="text-[#181D27] text-3xl font-semibold">2,240</h1>

                            <p class="text-[#535862] font-semibold text-xs flex items-center justify-start gap-2">
                                <span class="text-[#079455] flex items-center justify-start gap-1"><TrendingUp :size="15"/> 40%</span> 
                                vs last month
                            </p>
                        </div>

                        <EllipsisVertical class="text-[#A4A7AE]" />
                    </div>

                    <div class="mt-5 h-20">
                        <LineChart :data="chartData" :options="chartOptions"/>
                    </div>
                </div>
            </div>

            <div class="border border-[#E9EAEB] rounded-xl h-auto w-1/3 bg-slate-100/30">
                <p class="text-[#181D27] px-3 py-1.5 text-sm font-semibold">Members</p>

                <div class="border border-[#E9EAEB] px-5 py-3 rounded-xl h-full w-full bg-white">
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

                    <div class="mt-5 h-20">
                        <LineChart :data="chartData2" :options="chartOptions"/>
                    </div>
                </div>
            </div>

            <div class="border border-[#E9EAEB] rounded-xl h-auto w-1/3 bg-slate-100/30">
                <p class="text-[#181D27] px-3 py-1.5 text-sm font-semibold">Active now</p>

                <div class="border border-[#E9EAEB] px-5 py-3 rounded-xl h-full w-full bg-white">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-start gap-2.5 items-center">
                            <h1 class="text-[#181D27] text-3xl font-semibold">316</h1>

                            <p class="text-[#535862] font-semibold text-xs flex items-center justify-start gap-2">
                                <span class="text-[#079455] flex items-center justify-start gap-1"><TrendingUp :size="15"/> 20%</span> 
                                vs last month
                            </p>
                        </div>

                        <EllipsisVertical class="text-[#A4A7AE]" />
                    </div>

                    <div class="mt-5 h-20">
                        <LineChart :data="chartData3" :options="chartOptions"/>
                    </div>
                </div>
            </div>
        </div>

        <!-- table -->
         <Table />
    </div>
</template>

<script setup lang="ts">
import type { ChartOptions } from 'chart.js';
import LineChart from '~/components/Dashboard/LineChart.vue';
import Table from '~/components/Dashboard/Table.vue';
import { TrendingUp, EllipsisVertical, TrendingDown } from 'lucide-vue-next';

definePageMeta({
  layout: 'dashboard'
})

// borderColor: '#F04438',
// backgroundColor: 'rgba(240, 68, 56, 0.1)',

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      //label: 'Revenue',
      data: [490, 495, 500, 505, 515, 515, 510],
      borderColor: '#17B26A',
      backgroundColor: 'rgba(23, 178, 106, 0.1)',
      fill: true,
      tension: 0.1,
    },
  ],
}
const chartData2 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [515, 515, 510,515,505,500,499,495,490],
      borderColor: '#F04438',
      backgroundColor: 'rgba(240, 68, 56, 0.1)',
      fill: true,
      tension: 0.1,
    },
  ],
}
const chartData3 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [490, 495, 500, 505, 515, 515, 510],
      borderColor: '#17B26A',
      backgroundColor: 'rgba(23, 178, 106, 0.1)',
      fill: true,
      tension: 0.1,
    },
  ],
}

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
}
</script>