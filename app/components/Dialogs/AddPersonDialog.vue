<template>
    <UModal v-model:open="open">
        <template #content>
            <div class="min-h-[30vh] 2xl:min-h-[20vh] ">
                
                    <!-- header -->
                    <div class="flex justify-between items-start mb-2 px-5 pt-3 pb-2">
                        <div>
                            <h1 class="font-semibold text-[#181D27]">Add Person</h1>
                            <p class="text-xs">New person</p>
                        </div>

                        <UButton
                        color="neutral"
                        variant="ghost"
                        icon="i-lucide-x"
                        class="text-[#A4A7AE] hover:bg-transparent cursor-pointer -mt-1 -mr-1"
                        @click="open = false"
                        />
                    </div>

                <USeparator />
                

                <div class="flex justify-between items-center gap-x-5 mt-7.5 w-full p-5">
                    <div class="text-xs">
                        <p>You can edit any detail later.</p>
                    </div>

                    <div class="flex justify-end items-center gap-x-3">
                        <UButton class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651] cursor-pointer">Cancel</UButton>

                        <UButton  class="bg-[#D92D20] hover:bg-[#D92D20]/90 rounded-md text-white cursor-pointer">Add to tree</UButton>
                    </div>
                </div>
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
import { USeparator } from '#components';

const open = defineModel<boolean>('open', { 
    default: false
})

</script>