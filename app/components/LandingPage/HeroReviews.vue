<template>
    <div class="flex justify-start gap-3 items-center">
        <UAvatarGroup>
            <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
            <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
            <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
            <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
            <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
        </UAvatarGroup>

        <div class="text-[#414651] font-semibold">
            <div class="flex justify-start gap-2 items-center">
               <Star
                v-for="i in 5"
                :key="i"
                class="size-3 text-yellow-400"
                fill="currentColor"
                />
                <p>5.0</p>
            </div>
            <p>from 200+ reviews</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Star } from 'lucide-vue-next';

</script>