<template>
  <div>
    <Navigation />

    <!-- =========== HERO SECTION =========== -->
    <UContainer class="flex justify-between items-center h-[75vh] 2xl:h-[65vh] gap-5 mb-24">
      <!-- lhs -->
      <div class="h-full w-1/2">
        <h1 class="mb-10 text-[#181D27] font-semibold text-6xl w-2/3">Preserve Your Family Legacy, Together</h1>

        <p class="text-[20px] text-[#535862]"> 
          A digital home for African genealogy, memory, and culture. Trace your roots, celebrate indigenous identities, and preserve the voices of our elders—not just as history, but as living legacies. <br><span class="font-semibold italic"> Because identity is not just about me. It's about we.</span>
        </p>

        <div class="flex justify-start items-center gap-x-3 mt-7">
          <UInput placeholder="Enter your email" size="xl" class="w-64"/>
          <UButton class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white text-[16px]">Create your family tree</UButton>
        </div>
        <small>We care about your data in our <br><span class="underline">privacy policy</span>.</small>

        <HeroReviews class="mt-7"/>
      </div>

      
      <!-- rhs -->
      <div class="h-full w-1/2 ">
        <img src="/images/HeroImage.png" class="w-full h-full object-cover"/>
      </div>
    </UContainer>

    <!-- =========== HOW IT WORKS SECTION =========== -->
    <div class="py-16 bg-[url(/images/how-it-works-bg.png)] bg-center bg-no-repeat bg-cover">
      <UContainer class=" text-white">
        <p>Support</p>
        <h1 class="text-4xl font-semibold mt-5 mb-4 2xl:mt-4">How It Works</h1>
        <p class="text-[18px]">Four simple steps to reclaim your legacy and reconnect with your roots</p>

        <div class="flex justify-between items-center gap-5 2xl:gap-16 mt-16">
          <div class="h-full w-1/2 space-y-5">
            <div class="bg-white/30 backdrop-blur-md  rounded-xl shadow-lg p-5 text-white">
              <div class="w-10 mb-5 h-10 flex justify-center items-center rounded-md bg-[#E74B0C]">
                <CircleCheck />
              </div>

              <h1 class="mb-1.5 text-xl font-semibold">Create an account</h1>

              <p>Join our community and start your journey of discovery. Your legacy begins with a single step.</p>
            </div>

            <div class="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-5 text-white">
              <div class="w-10 mb-5 h-10 flex justify-center items-center rounded-md bg-[#E74B0C]">
                <CircleCheck />
              </div>

              <h1 class="mb-1.5 text-xl font-semibold">Build Your Tree</h1>

              <p>Watch your family tree come to life on screen. Add relatives, upload photos, and trace connections visually.</p>
            </div>

            <div class="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-5 text-white">
              <div class="w-10 mb-5 h-10 flex justify-center items-center rounded-md bg-[#E74B0C]">
                <CircleCheck />
              </div>

              <h1 class="mb-1.5 text-xl font-semibold">Collaborate</h1>

              <p>Invite family members to contribute. Together, you piece together the full story of your lineage.</p>
            </div>

            <div class="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-5 text-white">
              <div class="w-10 mb-5 h-10 flex justify-center items-center rounded-md bg-[#E74B0C]">
                <CircleCheck />
              </div>

              <h1 class="mb-1.5 text-xl font-semibold">Preserve Forever</h1>

              <p>Your stories, secured in the cloud. A living legacy that outlasts paper and memory—passed down with pride.</p>
            </div>
          </div>

          <div class="h-2/3 w-1/2 ">
            <img src="/images/how-it-works-img.png" class="w-full h-full object-cover"/>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- =========== features SECTION =========== -->
    <div class="my-14 2xl:my-16">
      <div class="text-center mb-20">
        <p>Features</p>
        <h1 class="my-5 2xl:my-6 text-4xl font-semibold">Coding the Past into the Future</h1>
        <p class="text-xl">We're not just honouring the past—we're preserving it as a living legacy</p>
      </div>

      <div class="flex justify-between items-center overflow-x-hidden mb-16">
        <div class="pl-24 2xl:pl-36">
          <div class="w-12 mb-5 h-12 flex justify-center items-center rounded-full bg-[#FDEAD7]">
            <MessageCircle color="#EF6820" />
          </div>

          <h1 class="text-4xl font-semibold mb-7.5">The Lost Wisdom</h1>

          <div class="space-y-3">
            <div class="flex justify-start items-center gap-2.5">
              <CircleX color="#D92D20" />
              <p class="text-lg">Identity shifts and confusion through generations</p>
            </div>

            <div class="flex justify-start items-center gap-2.5">
              <CircleX color="#D92D20" />
              <p class="text-lg">Lost totems, clan names, and praise poetry</p>
            </div>

            <div class="flex justify-start items-center gap-2.5">
              <CircleX color="#D92D20" />
              <p class="text-lg">Silences and unanswered questions about our lineage</p>
            </div>

            <div class="flex justify-start items-center gap-2.5">
              <CircleX color="#D92D20" />
              <p class="text-lg">Elders passing without their stories being preserved</p>
            </div>

            <div class="flex justify-start items-center gap-2.5">
              <CircleX color="#D92D20" />
              <p class="text-lg">Disconnection from our roots as cities grew and families drifted</p>
            </div>
          </div>
        </div>
        
        <div class="bg-[#F5F5F5] p-7 w-1/2 h-[75vh] 2xl:h-[65vh] -mr-7">
          <img src="/images/features-1.png" class="w-full h-full object-cover"/>
        </div>
      </div>

      <div class="flex justify-between items-center overflow-x-hidden">
        <div class="bg-[#F5F5F5] p-7 pr-0 pb-0 w-1/2 h-[75vh] 2xl:h-[65vh] -ml-7">
          <img src="/images/features-2.png" class="w-full h-full object-cover"/>
        </div>

        <div class="pr-24 2xl:pr-24">
          <div class="w-12 mb-5 h-12 flex justify-center items-center rounded-full bg-[#FDEAD7]">
            <Zap color="#EF6820" />
          </div>

          <h1 class="text-4xl font-semibold mb-3">Legacy Reclaimed</h1>
          <p class="mb-7.5 2xl:w-2/3">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>

          <div class="space-y-3">
            <div class="flex justify-start items-center gap-2.5">
              <CircleCheckIcon color="#D92D20" />
              <p class="text-lg">Digital preservation of African genealogy and memory</p>
            </div>

            <div class="flex justify-start items-center gap-2.5">
              <CircleCheckIcon color="#D92D20" />
              <p class="text-lg">Trace your roots and reconnect with your lineage</p>
            </div>

            <div class="flex justify-start items-center gap-2.5">
              <CircleCheckIcon color="#D92D20" />
              <p class="text-lg">Celebrate indigenous identities and cultural heritage</p>
            </div>

            <div class="flex justify-start items-center gap-2.5">
              <CircleCheckIcon color="#D92D20" />
              <p class="text-lg">Preserve the voices of elders as living legacies</p>
            </div>

            <div class="flex justify-start items-center gap-2.5">
              <CircleCheckIcon color="#D92D20" />
              <p class="text-lg">Technology that carries our stories further and longer</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- =========== features2 SECTION =========== -->
    <UContainer class="my-14 2xl:my-16">
      <div class="text-center mb-20">
        <p>Features</p>
        <h1 class="my-3 2xl:my-6 text-4xl font-semibold">This is Family IDee</h1>
        <p class="text-xl">Where African heritage meets the digital future</p>
      </div>

      <div class="w-full h-[80vh] 2xl:h-[70vh] mt-14 mb-5">
        <img src="/images/features-3.png" class="w-full h-full object-cover"/>
      </div>

      <p class="text-[#095C37] font-semibold">Our story</p>
      <h1 class="my-3 text-[#181D27] text-3xl font-semibold">We’re just getting started</h1>

      <p class="text-xl font-normal text-[#535862] w-2/3">We come from names with meaning—names that held stories, pride, and belonging. For generations, our identity was passed down through totems, clan names, praise poetry, and storytelling.</p>

      <div class="flex justify-between items-start gap-5 mt-14">
        <div class="w-1/2">
          <p class="text-lg text-[#535862] mb-10">
            But as time moved, cities grew, and families drifted, much of that wisdom was lost. Family IDee is a digital home for African genealogy, memory, and culture—built to help us reconnect with who we are, where we come from, and how we belong.
          </p>

          <h1 class="mb-5 text-3xl font-semibold text-[#181D27]">Why we’re better</h1>
          <p class="text-lg text-[#535862] mb-7.5">
            Using technology, we help families trace their roots, celebrate indigenous identities, and preserve the voices of our elders—not just as history, but as living legacies. <br><br>
            <span class="italic"> We're not just honouring the past, we're coding it into the future. Because identity is not just about me. It's about we. And together, we remember—with pride, purpose, and power.</span>
          </p>
        </div>

        <div class="w-1/2 h-[75vh] 2xl:h-[60vh]">
          <img src="/images/features-4.png" class="w-full h-full object-cover"/>
        </div>
      </div>
    </UContainer>


    <!-- =========== MISSION SECTION =========== -->
    <div class="mt-16 py-16 2xl:py-32 bg-[url(/images/how-it-works-bg.png)] bg-center bg-no-repeat bg-cover text-white">
      <div class="flex flex-col justify-center items-center">
        <h1 class="my-5 text-4xl font-semibold">Our Mission</h1>
        <p class="text-xl font-normal text-center w-2/3 2xl:w-1/2">To build a digital home where every African can trace their roots, reconnect with lineages, and preserve stories before they disappear. Knowing where you come from shouldn't be a mystery. It should be your power.</p>
      </div>

      <div class="mt-10 flex justify-center gap-3 items-center">
          <UButton to="/auth/login" class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651]">Learn more</UButton>
          <UButton class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white">Get started</UButton>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <div class="text-left w-1/2 px-12">
        <p class="text-lg 2xl:text-xl 2xl:pr-36 leading-8">
          "By age 23, I had carried four surnames—each one adding confusion, not clarity. Like many Africans, I was caught in a cycle of identity shifts, silences, and unanswered questions. So I built Family IDee: a digital home for Africans to trace their roots, reconnect lineages, and preserve stories before they disappear. Because knowing where you come from shouldn't be a mystery. It should be your power."
        </p>
        <p class="mt-5 2xl:pt-8 text-lg 2xl:text-xl font-semibold">Thakgalang Nkatu Mogashane</p>
        <p class="font-light">Founder, Family IDee</p>
      </div>

      <div class="w-1/2 h-screen 2xl:h-[90vh] relative">
        <img src="/images/mission-1.jpg" class="w-full h-full object-cover"/>

        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>

        <!-- <div class="absolute inset-0 flex items-center justify-center">
          <div class="bg-white/30 backdrop-blur-md absolute bottom-5 rounded-xl shadow-lg p-5 text-white w-3/4">
              

            <h1 class="mb-1.5 text-xl font-semibold">Create an account</h1>

            <p>Join our community and start your journey of discovery. Your legacy begins with a single step.</p>
          </div>
        </div> -->
      </div>
    </div>


    <!-- =========== REVIEWS SECTION =========== -->
    <!-- <div class="mt-16 py-16 bg-[url(/images/reviews-bg.png)] bg-center bg-no-repeat bg-cover text-white">
      <h1 class="mt-5 mb-10 text-4xl font-semibold">Our Reviews</h1>
      
      <div class="rid grid-cols-2 gap-5 justify-center items-center">
        
        
      </div>
    </div> -->

    <!-- =========== PRICING SECTION =========== -->
    <div class="bg-[#FAFAFA] pt-16 pb-36">
      <UContainer>
        <div class="text-center">
          <p class="font-semibold">Pricing</p>
          <h1 class="mt-3 2xl:mt-6 text-[#181D27] mb-5 text-4xl font-semibold">Simple, transparent pricing</h1>
          <p class="text-xl text-[#535862]">We believe Untitled should be accessible to all companies, no matter the size.</p>
        </div>

        <div class="mt-10 flex justify-center gap-3 items-center">
              <UButton class="bg-white rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651]">Chat to sales</UButton>
              <UButton class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white">Get started</UButton>
          </div>
      </UContainer>
    </div>

     <UContainer class="flex justify-between items-center gap-5 mb-16 -mt-16">
      <div class="w-1/3 px-5 2xl:px-7.5 py-7.5 bg-white h-full rounded-xl shadow-sm border border-black/5">
        <div class="flex flex-col items-center justify-center">
          <div class="mx-auto rounded-full text-[#B93815] px-3 bg-[#E74B0C]/10 text-sm border border-[#E74B0C]">Basic Usage</div>
          <h1 class="mt-5 mb-3 text-5xl font-semibold">R10/mth</h1>
          <p class="text-lg mb-5 text-[#535862]">Our most popular plan</p>

           <UButton size="xl" class="w-full flex items-center justify-center bg-[#E74B0C] hover:bg-[#cf4209] text-white rounded-md mb-2.5">
              Get started
            </UButton>
          <UButton size="xl" class="bg-white rounded-md flex items-center justify-center border hover:bg-white border-[#D5D7DA] mb-1 w-full text-[#414651]">Chat to sales</UButton>
         
          <USeparator class="my-5 2xl:my-7.5"/>
        </div>

        <div class="space-y-4 text-[#535862]">
          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p class="">Access to all basic features</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p class="">Basic reporting and analytics</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p class="">Up to 10 individual users</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p class="">20 GB individual data</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p class="">Basic chat and email support</p>
          </div>
        </div>
      </div>

      <div class="w-1/3 px-5 2xl:px-7.5 py-7.5 bg-white h-full rounded-xl shadow-sm border border-black/5">
        <div class="flex flex-col items-center justify-center">
          <div class="mx-auto rounded-full text-[#B93815] px-3 bg-[#E74B0C]/10 text-sm border border-[#E74B0C]">Business Plan</div>
          <h1 class="mt-5 mb-3 text-5xl font-semibold">R20/mth</h1>
          <p class="text-lg mb-5 text-[#535862]">Growing teams up to 20 users.</p>

           <UButton size="xl" class="w-full flex items-center justify-center bg-[#E74B0C] hover:bg-[#cf4209] text-white rounded-md mb-2.5">
              Get started
            </UButton>
          <UButton size="xl" class="bg-white rounded-md flex items-center justify-center border hover:bg-white border-[#D5D7DA] mb-1 w-full text-[#414651]">Chat to sales</UButton>
         
          <USeparator class="my-5 2xl:my-7.5"/>
        </div>

        <div class="space-y-4 text-[#535862]">
          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p>200+ integrations</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p>Advanced reporting and analytics</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p>Up to 20 individual users</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p>40 GB individual data</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p>Priority chat and email support</p>
          </div>
        </div>
      </div>

      <div class="w-1/3 px-5 2xl:px-7.5 py-7.5 bg-white h-full rounded-xl shadow-sm border border-black/5">
        <div class="flex flex-col items-center justify-center">
          <div class="mx-auto rounded-full text-[#B93815] px-3 bg-[#E74B0C]/10 text-sm border border-[#E74B0C]">Enterprise Plan</div>
          <h1 class="mt-5 mb-3 text-5xl font-semibold">R40/mth</h1>
          <p class="text-lg mb-5 text-[#535862]">Advanced features + unlimited users.</p>

           <UButton size="xl" class="w-full flex items-center justify-center bg-[#E74B0C] hover:bg-[#cf4209] text-white rounded-md mb-2.5">
              Get started
            </UButton>
          <UButton size="xl" class="bg-white rounded-md flex items-center justify-center border hover:bg-white border-[#D5D7DA] mb-1 w-full text-[#414651]">Chat to sales</UButton>
         
          <USeparator class="my-5 2xl:my-7.5"/>
        </div>

        <div class="space-y-4 text-[#535862]">
          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p>Advanced custom fields</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p>Audit log and data history</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p>Unlimited individual users</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p>Unlimited individual data</p>
          </div>

          <div class="flex justify-start items-center gap-2.5">
            <CircleCheckIcon color="#079455" />
            <p>Personalized + priority service</p>
          </div>
        </div>
      </div>
     </UContainer>



     <!-- =========== Footer SECTION =========== -->
      <Footer />
  </div>
</template>

<script setup lang="ts">
import HeroReviews from '~/components/LandingPage/HeroReviews.vue';
import Footer from '~/components/Footer.vue';
import { CircleCheck, MessageCircle, CircleX, CircleCheckIcon, Zap } from 'lucide-vue-next';



</script>