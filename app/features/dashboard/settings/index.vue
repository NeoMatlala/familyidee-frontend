<template>
    <div class="h-full w-full">
        <div class="flex justify-between items-start">
            <div class="w-2/3">
                <h1 class="font-semibold text-[#181D27] text-2xl">Account Settings</h1>
                <p class="text-[#535862]/70 font-thin mt-1">
                    Manage your account details, privacy, and preferences.
                </p>
            </div>

            <div class="w-1/3">
                <UInput icon="i-lucide-search" size="md" variant="outline" placeholder="Search..." class="w-full"/>
            </div>
        </div>

        <USeparator class="my-5"/>

        <!-- tabs -->
        <UTabs 
            :items="items" 
            variant="link" 
            :ui="{ 
                trigger: 'px-5 text-sm font-semibold text-[#667085] cursor-pointer data-[state=active]:text-[#095C37]',
                indicator: 'bg-[#D92D20]'
            }" 
            class="gap-7 text-xs font-semibold"
        >
            <template #account="{ item }">
                <h1 class="font-semibold text-[#181D27] text-xl">Profile Information</h1>

                <UForm :state="state" class="flex justify-start gap-4 mt-5">
                    <UFormField label="Email" name="email" class="w-1/3">
                        <UInput icon="i-lucide-mail" size="md" variant="outline" placeholder="Search..." class="w-full"/>
                    </UFormField>
                    <UFormField label="Phone Number" name="username" class="w-1/3">
                        <UInput icon="i-lucide-mail" size="md" variant="outline" placeholder="Search..." class="w-full"/>
                    </UFormField>
                </UForm>

                <USeparator class="my-10"/>

                <div class="bg-[#FEE4E2] rounded-md p-5">
                    <h1 class="font-semibold text-[#D92D20] text-xl">Danger Zone</h1>
                    <p class="text-[#535862] mt-2">
                        Once you delete your account, all of your data will be permanently anonymised. This action cannot be undone.
                    </p>

                    <UButton class="bg-[#E74B0C] cursor-pointer rounded-md hover:bg-[#cf4209] text-white mt-5">Delete Account</UButton>
                </div>
            </template>

            <template #password="{ item }">
                <h1 class="font-semibold text-[#181D27] text-xl">Password</h1>
            </template>
        </UTabs>

        

        
    </div>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
definePageMeta({
  layout: 'dashboard'
})

const items = [
  {
    label: 'Account',
    slot: 'account' as const
  },
  {
    label: 'Notifications',
    slot: 'notifications' as const
  },
  {
    label: 'Password',
    slot: 'password' as const
  },
  {
    label: 'Team',
    slot: 'team' as const
  },
  {
    label: 'Plan',
    slot: 'plan' as const
  },
  {
    label: 'Billing',
    slot: 'billing' as const
  },
  {
    label: 'Email',
    slot: 'email' as const
  },
  {
    label: 'Account',
    slot: 'account' as const
  },
] satisfies TabsItem[]

const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})


</script>