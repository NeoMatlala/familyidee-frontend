<template>
    <div class="flex justify-between items-center h-screen p-5">
        <div class="h-full w-3/5 relative flex items-center justify-center">
            <NuxtLink to="/" class="absolute top-5 left-5 flex justify-start gap-x-2">
                <ArrowLeft /> <span>Back</span>
            </NuxtLink>


            <div class="w-2/3 px-16 2xl:px-36 flex flex-col items-center justify-center">
                <img src="/images/Vector.svg" class="w-10 mb-8"/>

                <h1 class="text-3xl font-semibold mb-5">Welcome back</h1>
                <p class="text-[#535862] mb-7.5">Welcome back! Please enter your details.</p>

                <div class="flex flex-col justify-start items-start gap-5 w-full">
                    <div class="w-full">
                        <label for="email">Email</label>
                        <UInput id="email" placeholder="Enter your email" size="xl" class="w-full"/>
                    </div>

                    <div class="w-full">
                        <label for="password">Password</label>
                        <UInput id="password" type="password" placeholder="Enter your email" size="xl" class="w-full"/>
                    </div>

                    <div class="flex justify-between items-center mt-7.5 w-full">
                        <UCheckbox label="Remember for 30 days" />

                        <NuxtLink>Forgot password</NuxtLink>
                    </div>

                    <UButton class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white p-5 md:p-2 px-5 w-full flex justify-center items-center">Sign in</UButton>
                </div>
                
                <UButton
                    color="neutral"
                    variant="outline"
                    label="Sign up with Google"
                    class="w-full flex justify-center py-2.5 gap-x-2 mt-3"
                >
                    <template #leading>
                        <img src="/images/google-icon.svg" class="w-5 h-5" />
                    </template>    
                </UButton>

                <p class="mt-5 text-[#535862]">Don't have an account? 
                    <NuxtLink to="/auth/signup" class="text-[#E74B0C] hover:underline">Sign up</NuxtLink>
                </p>
            </div>
        </div>

        <div class="rounded-md h-full w-2/5">
            <img src="/images/login.jpg" class="w-full  rounded-xl h-full object-cover" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';



</script>