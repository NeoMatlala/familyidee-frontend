<template>
    
    <footer class="p-10 text-[#535862]">
        <UContainer>
            <div class="grid grid-cols-2 md:grid-cols-5 justify-between font-semibold w-full items-start gap-12 md:gap-32 mb-16">
                <div class="space-y-2 flex flex-col">
                    <p class="font-normal mb-7 text-[#717680] text-sm">Product</p>

                    <NuxtLink>Overview</NuxtLink>
                    <NuxtLink>Features</NuxtLink>
                    <NuxtLink>Solutions</NuxtLink>
                    <NuxtLink>Tutorials</NuxtLink>
                    <NuxtLink>Pricing</NuxtLink>
                    <NuxtLink>Releases</NuxtLink>
                </div>

                <div class="space-y-2 flex flex-col">
                    <p class="text-sm font-normal text-[#717680] mb-7">Company</p>

                    <NuxtLink>About us</NuxtLink>
                    <NuxtLink>Careers</NuxtLink>
                    <NuxtLink>Press</NuxtLink>
                    <NuxtLink>News</NuxtLink>
                    <NuxtLink>Media kit</NuxtLink>
                    <NuxtLink>Contact</NuxtLink>
                </div>

                <div class="space-y-2 flex flex-col">
                    <p class="font-normal mb-7 text-[#717680] text-sm">Resources</p>

                    <NuxtLink>Blog</NuxtLink>
                    <NuxtLink>Newsletter</NuxtLink>
                    <NuxtLink>Events</NuxtLink>
                    <NuxtLink>Help center</NuxtLink>
                    <NuxtLink>Tutorials</NuxtLink>
                    <NuxtLink>Support</NuxtLink>
                </div>

                <div class="space-y-2 flex flex-col">
                    <p class="font-normal mb-7 text-[#717680] text-sm">Social</p>

                    <NuxtLink>Twitter</NuxtLink>
                    <NuxtLink>Linkedin</NuxtLink>
                    <NuxtLink>Facebook</NuxtLink>
                    <NuxtLink>Github</NuxtLink>
                    <NuxtLink>Dribble</NuxtLink>
                </div>

                <div class="space-y-2 flex flex-col">
                    <p class="font-normal mb-7 text-[#717680] text-sm">Legal</p>

                    <NuxtLink class="hover:underline" to="/terms-and-conditions">Terms</NuxtLink>
                    <NuxtLink>Privacy</NuxtLink>
                    <NuxtLink>Cookies</NuxtLink>
                    <NuxtLink>Licenses</NuxtLink>
                    <NuxtLink>Settings</NuxtLink>
                    <NuxtLink>Contract</NuxtLink>
                </div>
            </div>

            <USeparator class="mb-12" color="neutral" />

            <div class="flex flex-col md:flex-row justify-between gap-y-5 md:gap-y-0 items-start md:items-center">
                <div class="flex flex-row justify-start gap-2 opacity-65 hover:opacity-100">
                    <img src="/images/Vector.svg" class="w-10 "/>
                    <h1 class="text-black font-semibold text-xl md:text-3xl flex justify-center items-center mr-3">Family ID</h1>
                </div>

                <p class="text-sm  md:text-base">
                    © 2077 Familyid. All rights reserved.
                </p>
            </div>
        </UContainer>
    </footer>
    
</template>