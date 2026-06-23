<template>
  <UModal v-model:open="open" class="bg-[#FFFCF6] rounded">
    <template #content>
      <div class="min-h-[30vh] 2xl:min-h-[20vh]">
        <!-- header -->
        <div class="flex justify-between items-start mb-2 px-5 pt-3 pb-2">
          <div>
            <h1 class="font-bold text-lg font-display text-[#181D27]">
              Add Person
            </h1>
            <p class="text-xs text-[#6B5D43]">New person</p>
          </div>

          <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-x"
            class="text-[#A4A7AE] hover:bg-transparent cursor-pointer -mt-1 -mr-1"
            @click="open = false"
          />
        </div>

        <USeparator
          :ui="{
            border: 'border-[#E2D7BD]',
          }"
        />

        <div class="my-5 grid grid-cols-2 gap-5 px-5">
          <div>
            <p class="text-xs font-semibold text-[#1F1A14] mb-1">First name</p>
            <UInput
              placeholder="e.g Buhle"
              class="w-full"
              :ui="{
                base: 'rounded text-sm text-[#1F1A14] bg-[#FBF6EE] border-[1px] border-[#C8B98F] px-5',
                ring: 'ring-0',
                focus: 'ring-1 ring-[#B8431A]',
              }"
            />
          </div>
          <div>
            <p class="text-xs font-semibold text-[#1F1A14] mb-1">Surname</p>
            <UInput
              placeholder="e.g Dlamini"
              class="w-full"
              :ui="{
                base: 'rounded text-sm text-[#1F1A14] bg-[#FBF6EE] border-[1px] border-[#C8B98F] px-5',
                ring: 'ring-0',
                focus: 'ring-1 ring-[#B8431A]',
              }"
            />
          </div>
          <div>
            <p class="text-xs font-semibold text-[#1F1A14] mb-1">Birth year</p>
            <UInput
              placeholder="1941"
              class="w-full"
              :ui="{
                base: 'rounded text-sm text-[#1F1A14] bg-[#FBF6EE] border-[1px] border-[#C8B98F] px-5',
                ring: 'ring-0',
                focus: 'ring-1 ring-[#B8431A]',
              }"
            />
          </div>
          <div>
            <p class="text-xs font-semibold text-[#1F1A14] mb-1">Place</p>
            <UInput
              placeholder="e.g Eshowe, KZN"
              class="w-full"
              :ui="{
                base: 'rounded text-sm text-[#1F1A14] bg-[#FBF6EE] border-[1px] border-[#C8B98F] px-5',
                ring: 'ring-0',
                focus: 'ring-1 ring-[#B8431A]',
              }"
            />
          </div>
        </div>

        <div class="px-5 mb-5">
          <p class="text-xs font-semibold text-[#1F1A14] mb-1">Relationship</p>
          <UInput
            placeholder="Parent"
            class="w-full"
            :ui="{
              base: 'rounded text-sm text-[#1F1A14] bg-[#FBF6EE] border-[1px] border-[#C8B98F] px-5',
              ring: 'ring-0',
              focus: 'ring-1 ring-[#B8431A]',
            }"
          />
        </div>

        <div class="mb-5 px-5">
          <p class="text-xs font-semibold text-[#1F1A14] mb-1">
            Totem(optional)
          </p>
        </div>

        <div
          class="flex justify-between items-center gap-x-5 w-full p-5 bg-[#F5EEDF]"
        >
          <div class="text-xs">
            <p class="text-[#6B5D43] text-xs">You can edit any detail later.</p>
          </div>

          <div class="flex justify-end items-center gap-x-3">
            <UButton
              class="bg-transperent text-sm px-3 rounded-full hover:bg-white text-[#414651] cursor-pointer"
              >Cancel</UButton
            >

            <UButton
              class="bg-[#D92D20] text-sm hover:bg-[#D92D20]/90 rounded-full px-3 text-white cursor-pointer"
            >
              Add to tree
            </UButton>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { USeparator } from "#components";

const open = defineModel<boolean>("open", {
  default: false,
});
</script>
