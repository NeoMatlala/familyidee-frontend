<template>
    <UDrawer v-model:open="open" direction="right" :handle="false">
      <template #content>
        <div class="h-full overflow-y-auto flex flex-col p-0 bg-[#FFFCF6] dark:bg-gray-900 border-l border-l-[#E2D7BD] w-[30vw]">
            <div class="flex justify-between items-center p-5">
                <UBadge 
                    :ui="{base:'bg-[#F5DCC9] rounded-full text-[#8A2E0F] px-2.5 py-1'}"
                > 
                    <span class="mr-2 text-xl">·</span> Maternal grandfather
                </UBadge>
                
                <div class="flex justify-end items-end gap-x-3">
                    <UButton
                        icon="i-lucide-share-2"
                        size="xs"
                        color="neutral"
                        variant="outline"
                        :ui="{base: 'p-2'}"
                    />
                    
                    <UButton
                        icon="i-lucide-pencil"
                        size="xs"
                        color="neutral"
                        variant="outline"
                        :ui="{base: 'p-2'}"
                    />

                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark" @click="open = false" class="pl-4"/>
                </div>
            </div>

            <USeparator />

            <div class="p-5">
                <div class="flex justify-start items-center gap-x-5">
                    <UAvatar src="https://github.com/benjamincanac.png" class="w-24 h-24"/>

                    <div>
                        <h3 class="text-2xl text-[#1F1A14] font-bold">{{person?.name}} {{ person?.surname }}</h3>
                        <span class="text-[#6B5D43] font-thin text-sm">b. {{ person?.yearOfBirth }}</span> · <span class="text-[#6B5D43] font-thin text-sm">Johannessburg, ZA</span>
                    </div>
                </div>

                <div class="bg-[#F5EEDF] my-5 px-4 py-3 flex justify-start items-center gap-x-5 p-5">
                    <Bird :size="28" class="text-[#6B5D43]"/>

                    <div>
                        <p>
                            <span class="font-bold">Antelope</span>
                            <span class="mx-1">·</span>
                            <span>iMpala</span>
                        </p>
                        <p class="text-sm -mt-1 font-thin text-[#6B5D43]">Grace, agility</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="text-[10.5px] text-[#6B5D43] uppercase">Generation</p>
                        <p class="text-xs text-[#1F1A14]">Gen 2</p>
                    </div>
                    <div>
                        <p class="text-[10.5px] text-[#6B5D43] uppercase">Side</p>
                        <p class="text-xs text-[#1F1A14]">Paternal</p>
                    </div>
                    <div>
                        <p class="text-[10.5px] text-[#6B5D43] uppercase">Memories</p>
                        <p class="text-xs text-[#1F1A14]">2 tagged</p>
                    </div>
                    <div>
                        <p class="text-[10.5px] text-[#6B5D43] uppercase">Added</p>
                        <p class="text-xs text-[#1F1A14]">12 Jan 2026</p>
                    </div>
                </div>

                <USeparator class="mt-5"/>

                <div class="flex justify-between items-center my-2">
                    <p class="text-sm font-bold text-[#1F1A14]">Memories</p>

                    <UButton class="bg-transparent p-2 text-sm rounded-3xl px-2 hover:bg-white text-[#B8431A] flex justify-end items-center gap-x-2">
                        View All
                        <MoveRightIcon />
                    </UButton>
                </div>

                <USeparator  class="mb-5"/>

                <div>
                    <div class="flex justify-start items-start gap-x-5">
                        <div class="border rounded border-[#E2D7BD] flex justify-center items-center w-24 h-10 text-xs text-[#9B8B6A] bg-[#F5EEDF]">
                            1985
                        </div>

                        <div>
                            <p class="text-[#1F1A14] text-sm">Nomvula's naming ceremony</p>
                            <p class="text-xs text-[#9B8B6A]">Soweto, 1968. Vusi taught her to read by candlelight that same year.</p>
                        </div>
                    </div>

                    <USeparator  class="my-2.5"/>

                    <div class="flex justify-start items-start gap-x-5">
                        <div class="border rounded border-[#E2D7BD] flex justify-center items-center w-24 h-10 text-xs text-[#9B8B6A] bg-[#F5EEDF]">
                            2011
                        </div>

                        <div>
                            <p class="text-[#1F1A14] text-sm">Mkhulu Vusi’s last letter</p>
                            <p class="text-xs text-[#9B8B6A]">
                                A typed letter to his great-grandchildren. We kept it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </template>
    </UDrawer>
</template>

<script setup lang="ts">
import { USeparator } from '#components';
import type { PersonNodeType } from '~/features/dashboard/tree/api/types';
import { Bird , MoveRightIcon} from 'lucide-vue-next';


const open = defineModel<boolean>('open', { 
    default: false
})

type Props = {
    person: PersonNodeType | null
}

const props = withDefaults(defineProps<Props>(), {
    person: null
})
</script>


