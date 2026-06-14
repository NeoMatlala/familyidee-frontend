<template>
  <div class="h-full w-full">
    <div class="flex justify-between items-start">
      <div>
        <bread-crumb />

        <h1
          class="font-bold text-[#1F1A14] text-2xl leading-[1.15] tracking-[-0.025em]"
        >
          Activity
        </h1>
        <p class="text-[#535862] font-thin mt-1">
          Every change anyone made to the tree, newest first.
        </p>
      </div>

      <top-header-buttons />
    </div>

    <div
      class="w-3/4 py-5 mt-10 bg-[#FFFCF6] border border-[#E2D7BD] rounded h-full shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)]"
    >
      <div class="flex px-5 justify-start items-start gap-x-2">
        <UAvatar
          class="w-10 h-10"
          src="https://github.com/noook.png"
          alt="Neil Richter"
        />
        <div class="text-sm">
          <p class="text-[#181D27] font-medium">
            Sipho added a memory "December vibes"
          </p>
          <p class="text-[#9B8B6A] tex-xs font-thin">2 Hours ago</p>
        </div>
      </div>

      <USeparator class="my-4" color="neutral" />

      <div class="flex px-5 justify-start items-start gap-x-2">
        <UAvatar
          class="w-10 h-10"
          src="https://github.com/noook.png"
          alt="Neil Richter"
        />
        <div class="text-sm">
          <p class="text-[#181D27] font-medium">
            Sipho added a memory "December vibes"
          </p>
          <p class="text-[#9B8B6A] tex-xs font-thin">2 Hours ago</p>
        </div>
      </div>

      <USeparator class="my-4" color="neutral" />

      <div class="flex px-5 justify-start items-start gap-x-2">
        <UAvatar
          class="w-10 h-10"
          src="https://github.com/noook.png"
          alt="Neil Richter"
        />
        <div class="text-sm">
          <p class="text-[#181D27] font-medium">
            Sipho added a memory "December vibes"
          </p>
          <p class="text-[#9B8B6A] tex-xs font-thin">2 Hours ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopHeaderButtons from "~/components/Dashboard/TopHeaderButtons.vue";
import BreadCrumb from "~/components/Dashboard/BreadCrumb.vue";
</script>
