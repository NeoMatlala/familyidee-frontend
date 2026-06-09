<template>
    <div class="flex justify-end items-center gap-x-2">
        <UButton  class="bg-transparent p-2 text-sm rounded-3xl px-7 hover:bg-white text-[#1F1A14] flex justify-between items-center gap-x-1.5">
            Share
        </UButton>

        <UButton class="bg-[#FBF6EE] text-sm flex justify-between items-center gap-x-1.5 rounded-3xl px-4 border hover:bg-white border-[#C8B98F] text-[#1F1A14]" icon="i-lucide-upload">
            Import GEDCOM
        </UButton>

        <UButton @click="isOpen = true" class="bg-[#B8431A] flex justify-between items-center gap-x-1.5 text-sm rounded-3xl text-white px-4" icon="i-lucide-plus">
            Add Person
        </UButton>
    </div>

    <add-person-dialog v-model:open="isOpen" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AddPersonDialog from '../Dialogs/AddPersonDialog.vue';


const isOpen = ref<boolean>(false)

</script>