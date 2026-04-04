<template>
    <div class="flex justify-between items-center h-screen p-5">
        <div v-if="showCreateAccountFields" class="h-full w-3/5 relative flex items-center justify-center">
            <div @click="showCreateAccountFields = false" class="absolute cursor-pointer top-5 left-5 flex justify-start gap-x-2">
                <ArrowLeft /> <span>Back</span>
            </div>


            <div class="w-2/3 px-0 2xl:px-36 flex flex-col items-center justify-center">
                <img src="/images/Vector.svg" class="w-10 mb-8"/>

                <h1 class="text-3xl font-semibold mb-5">Create an account</h1>
                <p class="text-[#535862] mb-7.5">Start your 30-day free trial.</p>

                <div class="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-1 gap-5  w-full">
                    <div>
                        <p class="text-xs 2xl:text-base">Name <span class="text-red-400">*</span></p>
                        <UInput placeholder="Enter your name" size="xl" class="w-full mt-1.5"/>
                    </div>

                    <div>
                        <p class="text-xs 2xl:text-base">Surname <span class="text-red-400">*</span></p>
                        <UInput placeholder="Enter your surname" size="xl" class="w-full mt-1.5"/>
                    </div>

                    <div>
                        <p class="text-xs 2xl:text-base">Email <span class="text-red-400">*</span></p>
                        <UInput placeholder="Enter your email" size="xl" class="w-full mt-1.5"/>
                    </div>

                    <div>
                        <p class="text-xs 2xl:text-base">Phone Number <span class="text-red-400">*</span></p>
                        <UInput placeholder="Enter your phone number" size="xl" class="w-full mt-1.5"/>
                    </div>

                    <div>
                        <p class="text-xs 2xl:text-base">Password <span class="text-red-400">*</span></p>
                        <UInput placeholder="Enter your password" size="xl" class="w-full mt-1.5"/>
                    </div>

                    <div>
                        <p class="text-xs 2xl:text-base">Confirm Password <span class="text-red-400">*</span></p>
                        <UInput placeholder="Confirm your password" size="xl" class="w-full mt-1.5"/>
                    </div>
                </div>

                <div class="flex flex-col justify-start items-center gap-3 w-full">
                    <div class="flex justify-between items-center mt-7.5 w-full">
                        <UCheckbox label="Remember for 30 days" />

                        <NuxtLink>Forgot password</NuxtLink>
                    </div>

                    <UButton class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white p-5 md:py-2.5 px-5 w-full flex justify-center items-center">Get Started</UButton>
                    <UButton
                        color="neutral"
                        variant="outline"
                        label="Sign up with Google"
                        class="w-full flex justify-center py-2.5 gap-x-2"
                    >
                        <template #leading>
                            <img src="/images/google-icon.svg" class="w-5 h-5" />
                        </template>    
                    </UButton>
                </div>

                <p class="mt-5 text-[#535862]">Already have an account? 
                    <NuxtLink to="/auth/login" class="text-[#E74B0C] hover:underline">Sign in</NuxtLink>
                </p>
            </div>
        </div>

        <div v-else class="h-full w-3/5 relative flex items-center justify-center">
            <NuxtLink to="/" class="absolute top-5 left-5 flex justify-start gap-x-2">
                <ArrowLeft /> <span>Back</span>
            </NuxtLink>


            <div class="w-2/3 px-16 2xl:px-36 flex flex-col items-center justify-center">
                <img src="/images/Vector.svg" class="w-10 mb-8"/>

                <h1 class="text-3xl font-semibold mb-5">Create an account</h1>
                <p class="text-[#535862] mb-7.5">Start your 30-day free trial.</p>

                <div class="space-y-2.5 w-full">
                    <UButton
                        color="neutral"
                        variant="outline"
                        label="Sign up with Google"
                        class="w-full flex justify-center py-2.5 gap-x-2"
                    >
                        <template #leading>
                            <img src="/images/google-icon.svg" class="w-5 h-5" />
                        </template>    
                    </UButton>

                    <UButton
                        color="neutral"
                        variant="outline"
                        label="Sign up with Facebook"
                        class="w-full flex justify-center py-2.5 gap-x-2"
                    >
                        <template #leading>
                            <img src="/images/facebook-icon.svg" class="w-5 h-5" />
                        </template>    
                    </UButton>

                    <UButton
                        color="neutral"
                        variant="outline"
                        label="Sign up with Apple"
                        class="w-full flex justify-center py-2.5 gap-x-2"
                    >
                        <template #leading>
                            <img src="/images/apple-icon.svg" class="w-5 h-5" />
                        </template>    
                    </UButton>
                </div>

                <USeparator label="OR" class="my-7.5" />

                <div class="flex flex-col justify-start items-center gap-3 w-full">
                    <UInput placeholder="Enter your email" size="xl" class="w-full"/>
                    <UButton @click="showCreateAccountFields = true" class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white p-5 md:p-2 px-5 w-full flex justify-center items-center">Get Started</UButton>
                </div>

                <p class="mt-5 text-[#535862]">Already have an account? 
                    <NuxtLink to="/auth/login" class="text-[#E74B0C] hover:underline">Log in</NuxtLink>
                </p>
            </div>
        </div>

        

        <div class="rounded-md h-full w-2/5">
            <img src="/images/create.jpg" class="w-full  rounded-xl h-full object-cover" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';

const showCreateAccountFields = ref<boolean>(false)

</script>