<template>
    <div v-if="accountDeleted" class="h-full w-full">
        <div class="flex justify-between items-start">
            <div class="w-2/3">
                <h1 class="font-semibold text-[#181D27] text-2xl">Account Deletion Scheduled</h1>
                <p class="text-[#535862] mt-1">
                    Your account is scheduled for deletion. You can cancel within the grace period.
                </p>
            </div>

            <div class="w-1/3">
                <UInput icon="i-lucide-search" size="md" variant="outline" placeholder="Search..." class="w-full"/>
            </div>
        </div>

        <div class="bg-[#FEF0C7] rounded-md py-10 mb-7 mt-16 flex flex-col gap-2 items-center">
            <p class="text-[#DC6803] mt-2.5">Time remaining to cancel</p>
            <h1 class="font-semibold text-[#181D27] text-3xl">29 days, 23 hours</h1>
        </div>

        <p class="text-center text-[#535862] mb-2">After this period, all your data will be permanently anonymised.</p>
        <p class="text-center text-[#535862]">A confirmation email has been sent to your registered email address.</p>

        <div class="mt-10 flex justify-center md:justify-start gap-3 items-center">
            <UButton class="bg-[#E74B0C] w-full md:w-48 flex justify-center p-2 rounded-md hover:bg-[#cf4209] text-white">
                    Cancel Deletion
                </UButton>

                <UButton to="/" class="bg-white flex justify-center p-2 w-full md:w-48 rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651]">
                    Return Home
                </UButton>
                
            </div>
    </div>

    <div v-else class="h-full w-full">
        <div class="flex justify-between items-start">
            <div class="w-2/3">
                <h1 class="font-semibold text-[#181D27] text-2xl">Account Settings</h1>
                <p class="text-[#535862] mt-1">
                    Manage your account details, privacy, and preferences.
                </p>
            </div>

            <div class="w-1/3">
                <UInput icon="i-lucide-search" size="md" variant="outline" placeholder="Search..." class="w-full"/>
            </div>
        </div>

        <USeparator class="mt-5 mb-3"/>

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

                    <UModal v-model:open="open">
                        <UButton label="Delete Account" color="neutral" variant="subtle" class="bg-[#E74B0C] cursor-pointer rounded-md hover:bg-[#cf4209] text-white mt-5 border-none"/>

                        <template #content>
                            <div v-if="verifyAccountStep2" class="min-h-[30vh] 2xl:min-h-[20vh] p-5">
                                <div class="flex justify-start items-start gap-x-2">
                                    <div class="w-7.5 md:mb-5 h-7.5 flex justify-center items-center rounded-full bg-[#FEE4E2]">
                                        <Trash2 :size="18" color="#D92D20" />
                                    </div>

                                    <div class="w-full">
                                        <!-- header -->
                                        <div class="flex justify-between items-start mb-2">
                                            <h1 class="font-semibold text-[#181D27]">Final Confirmation</h1>
                                            <UButton
                                            color="neutral"
                                            variant="ghost"
                                            icon="i-lucide-x"
                                            class="text-[#D92D20] hover:bg-transparent cursor-pointer -mt-1 -mr-1"
                                            @click="open = false"
                                            />
                                        </div>

                                        <p class="text-[#535862] text-sm font-thin mt-1">
                                            This is your last chance to cancel. Type DELETE in the field below to confirm permanent account deletion. Step 2 of 2.
                                        </p>
                                    </div>
                                </div>

                                <div class="flex justify-between items-center gap-x-5 mt-7.5 w-full ">
                                    <div class="w-1/3">
                                        <UCheckbox 
                                            label="Dont show again" 
                                            class="text-xs"
                                            :ui="{
                                                base: 'w-4 h-4 cursor-pointer',
                                                indicator: 'bg-[#D92D20] border-[#D92D20]',
                                                label: 'text-sm text-[#414651] cursor-pointer',
                                            }"
                                        />
                                    </div>

                                    <div class="w-2/3 flex justify-end items-center gap-x-3">
                                        <UButton @click="finalDeletionConfirmation()" class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651] cursor-pointer">Cancel</UButton>
                                        <UButton @click="finalDeletionConfirmation()" class="bg-[#D92D20] hover:bg-[#D92D20]/90 rounded-md text-white cursor-pointer">Final Confirmation</UButton>
                                    </div>
                                </div>
                            </div>
                            
                            <div v-else-if="verifyAccountStep1" class="min-h-[30vh] 2xl:min-h-[20vh] p-5">
                                <div class="flex justify-start items-start gap-x-2">
                                    <div class="w-7.5 md:mb-5 h-7.5 flex justify-center items-center rounded-full bg-[#FDEAD7]">
                                        <Save :size="18" color="#EF6820" />
                                    </div>

                                    <div class="w-full">
                                        <!-- header -->
                                        <div class="flex justify-between items-start mb-2">
                                            <h1 class="font-semibold text-[#181D27]">Verify Your Identity</h1>
                                            <UButton
                                            color="neutral"
                                            variant="ghost"
                                            icon="i-lucide-x"
                                            class="text-[#A4A7AE] hover:bg-transparent cursor-pointer -mt-1 -mr-1"
                                            @click="open = false"
                                            />
                                        </div>

                                        <p class="text-[#535862] text-sm font-thin mt-1">
                                            For your security, re-enter your password to continue with account deletion. Step 1 of 2.
                                        </p>
                                    </div>
                                </div>

                                <div class="flex justify-between items-center gap-x-5 mt-7.5 w-full ">
                                    <div class="w-1/3">
                                        <UCheckbox 
                                            label="Dont show again" 
                                            class="text-xs"
                                            :ui="{
                                                base: 'w-4 h-4 cursor-pointer',
                                                indicator: 'bg-[#D92D20] border-[#D92D20]',
                                                label: 'text-sm text-[#414651] cursor-pointer',
                                            }"
                                        />
                                    </div>

                                    <div class="w-2/3 flex justify-end items-center gap-x-3">
                                        <UButton @click="finalDeletionConfirmation()" class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651] cursor-pointer">Cancel</UButton>
                                        <UButton @click="verifyAccountStep2 = true" class="bg-[#E04F16] hover:bg-[#E04F16]/90 rounded-md cursor-pointer text-white">Verify & Continue</UButton>
                                    </div>
                                </div>
                            </div>

                            <div v-else class="min-h-[30vh] 2xl:min-h-[20vh] p-5">
                                <div class="flex justify-start items-start gap-x-2">
                                    <div class="w-7.5 md:mb-5 h-7.5 flex justify-center items-center rounded-full bg-[#FDEAD7]">
                                        <Trash2 :size="18" color="#EF6820" />
                                    </div>

                                    <div class="w-full">
                                        <!-- header -->
                                        <div class="flex justify-between items-start mb-2">
                                            <h1 class="font-semibold text-[#181D27]">Delete Account</h1>
                                            <UButton
                                            color="neutral"
                                            variant="ghost"
                                            icon="i-lucide-x"
                                            class="text-[#A4A7AE] hover:bg-transparent cursor-pointer -mt-1 -mr-1"
                                            @click="open = false"
                                            />
                                        </div>

                                        <p class="text-[#535862] text-sm font-thin mt-1">
                                            This action is permanent. All personal data will be anonymised, family tree contributions unlinked, and shared photos attributed to "Former Member". Active subscriptions will be cancelled.
                                        </p>
                                    </div>
                                </div>
                                

                                <div class="flex justify-between items-center gap-x-5 mt-7.5 w-full ">
                                    <div class="w-1/3">
                                        <UCheckbox 
                                            label="Dont show again" 
                                            class="text-xs"
                                            :ui="{
                                                base: 'w-4 h-4 cursor-pointer',
                                                indicator: 'bg-[#D92D20] border-[#D92D20]',
                                                label: 'text-sm text-[#414651] cursor-pointer',
                                            }"
                                        />
                                    </div>

                                    <div class="w-2/3 flex justify-end items-center gap-x-3">
                                        <UButton @click="finalDeletionConfirmation()" class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651] cursor-pointer">Cancel</UButton>
                                        <UButton @click="verifyAccountStep1 = true" class="bg-[#D92D20] hover:bg-[#D92D20]/90 rounded-md text-white cursor-pointer">Delete Your Account?</UButton>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </UModal>
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
import { Trash2, Save } from 'lucide-vue-next';


definePageMeta({
  layout: 'dashboard'
})



const open = ref<boolean>(false)
const verifyAccountStep1 = ref<boolean>(false)
const verifyAccountStep2 = ref<boolean>(false)
const accountDeleted = ref<boolean>(false)

function finalDeletionConfirmation(): void {
    accountDeleted.value = true

    open.value = false
    verifyAccountStep2.value = false
    verifyAccountStep1.value = false
}

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
] satisfies TabsItem[]

const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})


</script>