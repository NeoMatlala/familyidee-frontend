<template>
    <UContainer class="md:my-36 my-16">
        <div class="text-center mb-16">
            <h1 class="mt-3 2xl:mt-6 text-[#181D27] mb-5 text-4xl font-semibold">Pricing plans</h1>
            <p class="text-[18px] md:text-xl text-[#535862]">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
        </div>

        <!-- <div class="mt-10 flex justify-center gap-3 items-center">
            <UButton class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651]">Chat to sales</UButton>
            <UButton class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white">Get started</UButton>
        </div> -->
      

        <div class="flex flex-col md:flex-row justify-between items-center gap-5 mb-16">
            <div class="w-full md:w-1/3 px-5 2xl:px-7.5 py-7.5 bg-[#FEF6EE] h-full">
                <div class="flex flex-col items-center justify-center">
                    <div class="w-10 mb-5 h-10 flex justify-center items-center bg-[#FDEAD7] rounded-full mx-auto">
                        <Zap color="#E04F16" />
                    </div>
                    <p class="text-[#095C37] text-xl font-semibold">Basic Usage</p>
                    <h1 class="mt-5 mb-3 text-5xl text-[#772917] font-semibold">R10/mth</h1>
                    <p class=" mb-5 text-[#095C37]">Billed annually.</p>
                </div>

                <div class="space-y-4 text-[#095C37] mt-5 mb-10">
                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Access to all basic features</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Basic reporting and analytics</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Up to 10 individual users</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>20 GB individual data</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Basic chat and email support</p>
                    </div>
                </div>

                <UButton size="xl" class="w-full flex items-center justify-center bg-[#E74B0C] hover:bg-[#cf4209] text-white rounded-md mb-2.5">
                        Get started
                </UButton>
            </div>

            <div class="w-full md:w-1/3 px-5 2xl:px-7.5 py-7.5 bg-[#FEF6EE] h-full">
                <div class="flex flex-col items-center justify-center">
                    <div class="w-10 mb-5 h-10 flex justify-center items-center bg-[#FDEAD7] rounded-full mx-auto">
                        <Layers2 color="#E04F16" />
                    </div>
                    
                    <p class="text-[#095C37] text-xl font-semibold">Business Plan</p>
                    <h1 class="mt-5 mb-3 text-5xl text-[#772917] font-semibold">R20/mth</h1>
                    <p class=" mb-5 text-[#095C37]">Billed annually.</p>
                </div>

                <div class="space-y-4 text-[#095C37] mt-5 mb-10">
                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>200+ integrations</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Advanced reporting and analytics</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Up to 20 individual users</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>40 GB individual data</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Priority chat and email support</p>
                    </div>
                </div>

                <UButton size="xl" class="w-full flex items-center justify-center bg-[#E74B0C] hover:bg-[#cf4209] text-white rounded-md mb-2.5">
                    Get started
                </UButton>
            </div>

            <div class="w-full md:w-1/3 px-5 2xl:px-7.5 py-7.5 bg-[#FEF6EE] h-full">
                <div class="flex flex-col items-center justify-center">
                    <div class="w-10 mb-5 h-10 flex justify-center items-center bg-[#FDEAD7] rounded-full mx-auto">
                        <Layers color="#E04F16" />
                    </div>

                    <p class="text-[#095C37] text-xl font-semibold">Enterprise Plan</p>
                    <h1 class="mt-5 mb-3 text-5xl text-[#772917] font-semibold">R40/mth</h1>
                    <p class=" mb-5 text-[#095C37]">Billed annually.</p>
                </div>

                <div class="space-y-4 text-[#095C37] mt-5 mb-10">
                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Advanced custom fields</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Audit log and data history</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Unlimited individual users</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Unlimited individual data</p>
                    </div>

                    <div class="flex justify-start items-center gap-2.5">
                        <CircleCheckIcon color="#E04F16" />
                        <p>Personalized + priority service</p>
                    </div>
                </div>

                <UButton size="xl" class="w-full flex items-center justify-center bg-[#E74B0C] hover:bg-[#cf4209] text-white rounded-md mb-2.5">
                    Get started
                </UButton>
            </div>
        </div>
    </UContainer>
</template>

<script lang="ts" setup>
import { CircleCheckIcon, Zap, Layers2, Layers } from 'lucide-vue-next'
</script>