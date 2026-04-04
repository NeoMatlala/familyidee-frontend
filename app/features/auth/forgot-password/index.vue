<template>
    <div class="w-full p-5">
        <div v-if="setNewPassword" class="w-1/3 mt-10 mx-auto relative">
            <div v-if="isPasswordReset" class="px-10 2xl:px-28 z-50 relative">
                <div class="w-10 mb-10 h-10 flex justify-center items-center bg-white rounded-md border border-[#D5D7DA] mx-auto">
                    <CircleCheck />
                </div>

                <h1 class="text-3xl text-center text-[#181D27] font-semibold mb-2.5">Password reset</h1>
                <p class="text-[#535862] mb-10 text-center">Your password has been successfully reset. Click below to log in magically.</p>

                <NuxtLink to="/auth/login">
                    <UButton class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white p-5 md:py-2.5 px-5 w-full flex justify-center items-center">
                        Continue
                    </UButton>
                </NuxtLink>

                <NuxtLink to="/auth/login" class="mt-5 text-[#535862] text-sm items-center flex justify-center gap-x-2">
                    <ArrowLeft class="opacity-70"/> <span>Back to log in</span>
                </NuxtLink>

                <div class="z-0 absolute opacity-80 -top-24 bg-[url(/images/bg-forgot-pattern.png)] bg-center bg-no-repeat bg-cover w-full h-72"></div>
            </div>
            
            
            <div v-else class="px-10 2xl:px-28 z-50 relative">
                <div class="w-10 mb-10 h-10 flex justify-center items-center bg-white rounded-md border border-[#D5D7DA] mx-auto">
                    <KeyRound />
                </div>

                <h1 class="text-3xl text-center text-[#181D27] font-semibold mb-2.5">Set new password</h1>
                <p class="text-[#535862] mb-10 text-center">Your new password must be different to previously used passwords.</p>

                <div class="space-y-5">
                    <div>
                        <p class="text-xs 2xl:text-base">Password <span class="text-red-400">*</span></p>
                        <UInput placeholder="Enter your password" size="xl" class="w-full mt-1.5"/>
                    </div>

                    <div>
                        <p class="text-xs 2xl:text-base">Confirm Password <span class="text-red-400">*</span></p>
                        <UInput placeholder="Confirm your password" size="xl" class="w-full mt-1.5"/>
                    </div>
                </div>

                <div class="opacity-80 space-y-1 my-5 text-sm">
                    <div class="flex justify-start items-center gap-x-2 text-[#535862]">
                        <CircleCheck :size="18"/> <span>Must be at least 8 characters</span>
                    </div>
                    <div class="flex justify-start items-center gap-x-2 text-[#535862]">
                        <CircleCheck :size="18" /> <span>Must contain one special character</span>
                    </div>
                </div>

                <UButton @click="isPasswordReset = true" class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white p-5 md:py-2.5 px-5 w-full flex justify-center items-center">
                    Set new password
                </UButton>

                <NuxtLink to="/auth/login" class="mt-5 text-[#535862] text-sm items-center flex justify-center gap-x-2">
                    <ArrowLeft class="opacity-70"/> <span>Back to log in</span>
                </NuxtLink>

                <div class="z-0 absolute opacity-80 -top-24 bg-[url(/images/bg-forgot-pattern.png)] bg-center bg-no-repeat bg-cover w-full h-72"></div>
            </div>
        </div>

        <div v-else>
            <div v-if="forgotPasswordSuccess" class="w-1/3 mt-10 mx-auto relative">
                <div class="text-center px-16 2xl:px-28 z-50 relative">
                    <div class="w-10 mb-10 h-10 flex justify-center items-center bg-white rounded-md border border-[#D5D7DA] mx-auto">
                        <Mail />
                    </div>

                    <h1 class="text-3xl text-[#181D27] font-semibold mb-3">Check your email</h1>
                    <p class="text-[#475467] text-sm">
                        A one-time password (OTP) has been sent to your email. Please enter it below to continue resetting your password.
                    </p>

                    <UPinInput 
                        v-model="otpValue"
                        type="number"
                        :length="4"
                        otp 
                        size="xl"
                        class="my-10"
                    />

                    <UButton @click="setNewPassword = true" class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white p-5 md:py-2.5 px-5 w-full flex justify-center items-center">Verify email</UButton>
                
                    
                    <p class="my-7.5 text-sm text-[#535862]">Didn't receive the email? 
                        <NuxtLink class="text-[#E74B0C] hover:underline">Click to resend</NuxtLink>
                    </p>
                    

                    <NuxtLink to="/auth/login" class="text-[#535862] text-sm items-center flex justify-center gap-x-2">
                        <ArrowLeft class="opacity-70"/> <span>Back to log in</span>
                    </NuxtLink>
                </div>

                <div class="z-0 absolute opacity-80 -top-24 bg-[url(/images/bg-forgot-pattern.png)] bg-center bg-no-repeat bg-cover w-full h-72"></div>
            </div>

            <div v-else class="w-1/3 mt-10 mx-auto relative">
                <div class="px-10 2xl:px-28 z-50 relative">
                    <div class="w-10 mb-10 h-10 flex justify-center items-center bg-white rounded-md border border-[#D5D7DA] mx-auto">
                        <KeyRound />
                    </div>

                    <h1 class="text-3xl text-center text-[#181D27] font-semibold mb-2.5">Forgot password?</h1>
                    <p class="text-[#535862] mb-10 text-center">No worries, we’ll send you reset instructions.</p>
                
                    <div class="mb-3">
                        <p class="text-xs 2xl:text-base">Email <span class="text-red-400">*</span></p>
                        <UInput placeholder="Enter your email" size="xl" class="w-full mt-1.5"/>
                    </div>
                
                    <UButton @click="forgotPasswordSuccess = true" class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white p-5 md:py-2.5 px-5 w-full flex justify-center items-center">Reset password</UButton>

                    <NuxtLink to="/auth/login" class="mt-5 text-[#535862] text-sm items-center flex justify-center gap-x-2">
                        <ArrowLeft class="opacity-70"/> <span>Back to log in</span>
                    </NuxtLink>
                </div>

                <div class="z-0 absolute opacity-80 -top-24 bg-[url(/images/bg-forgot-pattern.png)] bg-center bg-no-repeat bg-cover w-full h-72"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ArrowLeft, KeyRound, Mail, CircleCheck } from 'lucide-vue-next';

const setNewPassword = ref<boolean>(false)
const forgotPasswordSuccess = ref<boolean>(false)
const isPasswordReset = ref<boolean>(false)
const otpValue = ref([])
</script>