<template>
  <div class="h-full w-full">
    <div class="flex justify-between items-start">
      <div>
        <bread-crumb />

        <h1
          class="font-bold text-[#1F1A14] text-2xl leading-[1.15] tracking-[-0.025em]"
        >
          Everyone in the tree
        </h1>
        <p class="text-[#535862] font-thin mt-1">
          All nine people, sortable and searchable.
        </p>
      </div>

      <top-header-buttons />
    </div>

    <div class="grid grid-cols-3 2xl:grid-cols-4 gap-5 mt-10">
      <div
        class="border cursor-pointer border-[#E2D7BD] rounded h-auto bg-[#FFFCF6] p-4 shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)] flex justify-start items-center gap-x-3"
      >
        <UAvatar
          class="w-14 h-14"
          src="https://github.com/noook.png"
          alt="Neil Richter"
        />

        <div class="text-sm">
          <div>
            <p class="text-[#1F1A14] text-md font-bold">Mandle Flamini</p>
            <p class="text-[#6B5D43] text-xs">Paternal grandfather</p>
          </div>

          <div class="flex justify-start items-center mt-2 gap-x-1">
            <Bird :size="16" class="text-[#6B5D43]" />
            <p class="font-thin text-[#9B8B6A] italic">iBhubesi</p>
          </div>
        </div>
      </div>

      <div
        class="border cursor-pointer border-[#E2D7BD] rounded h-auto bg-[#FFFCF6] p-4 shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)] flex justify-start items-center gap-x-3"
      >
        <UAvatar
          class="w-14 h-14"
          src="https://github.com/noook.png"
          alt="Neil Richter"
        />

        <div class="text-sm">
          <div>
            <p class="text-[#1F1A14] text-md font-bold">Mandle Flamini</p>
            <p class="text-[#6B5D43] text-xs">Paternal grandfather</p>
          </div>

          <div class="flex justify-start items-center mt-2 gap-x-1">
            <Bird :size="16" class="text-[#6B5D43]" />
            <p class="font-thin text-[#9B8B6A] italic">iBhubesi</p>
          </div>
        </div>
      </div>

      <div
        class="border cursor-pointer border-[#E2D7BD] rounded h-auto bg-[#FFFCF6] p-4 shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)] flex justify-start items-center gap-x-3"
      >
        <UAvatar
          class="w-14 h-14"
          src="https://github.com/noook.png"
          alt="Neil Richter"
        />

        <div class="text-sm">
          <div>
            <p class="text-[#1F1A14] text-md font-bold">Mandle Flamini</p>
            <p class="text-[#6B5D43] text-xs">Paternal grandfather</p>
          </div>

          <div class="flex justify-start items-center mt-2 gap-x-1">
            <Bird :size="16" class="text-[#6B5D43]" />
            <p class="font-thin text-[#9B8B6A] italic">iBhubesi</p>
          </div>
        </div>
      </div>

      <div
        class="border cursor-pointer border-[#E2D7BD] rounded h-auto bg-[#FFFCF6] p-4 shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)] flex justify-start items-center gap-x-3"
      >
        <UAvatar
          class="w-14 h-14"
          src="https://github.com/noook.png"
          alt="Neil Richter"
        />

        <div class="text-sm">
          <div>
            <p class="text-[#1F1A14] text-md font-bold">Mandle Flamini</p>
            <p class="text-[#6B5D43] text-xs">Paternal grandfather</p>
          </div>

          <div class="flex justify-start items-center mt-2 gap-x-1">
            <Bird :size="16" class="text-[#6B5D43]" />
            <p class="font-thin text-[#9B8B6A] italic">iBhubesi</p>
          </div>
        </div>
      </div>

      <div
        class="border cursor-pointer border-[#E2D7BD] rounded h-auto bg-[#FFFCF6] p-4 shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)] flex justify-start items-center gap-x-3"
      >
        <UAvatar
          class="w-14 h-14"
          src="https://github.com/noook.png"
          alt="Neil Richter"
        />

        <div class="text-sm">
          <div>
            <p class="text-[#1F1A14] text-md font-bold">Mandle Flamini</p>
            <p class="text-[#6B5D43] text-xs">Paternal grandfather</p>
          </div>

          <div class="flex justify-start items-center mt-2 gap-x-1">
            <Bird :size="16" class="text-[#6B5D43]" />
            <p class="font-thin text-[#9B8B6A] italic">iBhubesi</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bird } from "lucide-vue-next";
import TopHeaderButtons from "~/components/Dashboard/TopHeaderButtons.vue";
import BreadCrumb from "~/components/Dashboard/BreadCrumb.vue";
</script>
