<template>
  <div>
    <Navigation />

    <!-- =========== HERO SECTION =========== -->
    <UContainer class="flex mt-24 md:mt-36 flex-col md:flex-row justify-between items-center h-auto md:h-[85vh] 2xl:h-[65vh] gap-7.5 md:gap-5 mb-24">
      <!-- lhs -->
      <div class="h-full w-full md:w-1/2">
        <h1 class="mb-10 text-[#181D27] font-semibold text-5xl md:text-6xl w-full md:w-3/4 leading-14 md:leading-18">Preserve Your Family Legacy, Together</h1>

        <p class="text-[18px] md:text-[20px] md:leading-8 text-[#535862]"> 
          A digital home for African genealogy, memory, and culture. Trace your roots, celebrate indigenous identities, and preserve the voices of our elders—not just as history, but as living legacies. <br><span class="font-semibold italic"> Because identity is not just about me. It's about we.</span>
        </p>

        <div class="flex flex-col md:flex-row justify-start items-center gap-3 mt-7 mb-2.5 md:mb-0">
          <UInput placeholder="Enter your email" size="xl" class="w-full md:w-64 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"/>
          <NuxtLink 
            to="/auth/login" 
            class="bg-[#E74B0C] rounded-md hover:bg-[#cf4209] text-white p-5 md:p-2 px-5 w-full md:w-52 flex justify-center items-center">
              Create your family tree
            </NuxtLink>
        </div>
        <small class="text-[#535862]">We care about your data in our <br class="hidden md:inline"><span class="underline">privacy policy</span>.</small>

        <HeroReviews class="mt-7"/>
      </div>

      
      <!-- rhs -->
      <div class="h-full w-full md:w-1/2 ">
        <img src="/images/HeroImage.png" class="w-full h-full object-cover"/>
      </div>
    </UContainer>

    <!-- =========== HOW IT WORKS SECTION =========== -->
    <div class="py-16 bg-[url(/images/how-it-works-bg.png)] bg-center bg-no-repeat bg-cover">
      <UContainer class=" text-white">
        <p>Support</p>
        <h1 class="text-4xl font-semibold mt-5 mb-4 2xl:mt-4">How It Works</h1>
        <p class="text-[18px]">Four simple steps to reclaim your legacy and reconnect with your roots</p>

        <div class="flex flex-col md:flex-row justify-between items-center gap-5 2xl:gap-16 mt-16">
          <div class="h-full w-full md:w-1/2 space-y-5">
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

          <div class="h-2/3 w-full md:w-1/2 ">
            <img src="/images/how-it-works-img.png" class="w-full h-full object-cover"/>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- =========== features SECTION =========== -->
    <div class="my-14 2xl:my-16">
      <div class="text-center mb-20 px-5 md:px-0">
        <p class="text-[#095C37]">Features</p>
        <h1 class="my-5 2xl:my-6 text-4xl font-semibold text-[#181D27]">Coding the Past into the Future</h1>
        <p class="text-[18px] md:text-xl text-[#4A5565]">We're not just honouring the past—we're preserving it as a living legacy</p>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center overflow-x-hidden mb-16 gap-y-10 md:gap-y-0">
        <div class="md:pl-16 2xl:pl-96  2xl:mr-10 px-5 md:px-0">
          <div class="w-12 mb-10 md:mb-5 h-12 flex justify-center items-center rounded-full bg-[#FDEAD7]">
            <MessageCircle color="#EF6820" />
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold mb-5 md:mb-7.5 text-[#20170B]">The Lost Wisdom</h1>

          <div class="space-y-3 text-[#364153]">
            <div class="flex justify-start items-start md:items-center gap-2.5">
              <CircleX color="#D92D20" />
              <p class="text-lg">Identity shifts and confusion through generations</p>
            </div>

            <div class="flex justify-start items-start md:items-center gap-2.5">
              <CircleX color="#D92D20" />
              <p class="text-lg">Lost totems, clan names, and praise poetry</p>
            </div>

            <div class="flex justify-start items-start md:items-center gap-2.5">
              <CircleX color="#D92D20" />
              <p class="text-lg">Silences and unanswered questions about our lineage</p>
            </div>

            <div class="flex justify-start items-start md:items-center gap-2.5">
              <CircleX color="#D92D20" />
              <p class="text-lg">Elders passing without their stories being preserved</p>
            </div>

            <div class="flex justify-start items-start md:items-center gap-2.5">
              <CircleX color="#D92D20" />
              <p class="text-lg">Disconnection from our roots as cities grew and families drifted</p>
            </div>
          </div>
        </div>
        
        <div class="bg-[#F5F5F5] p-7 w-full md:w-1/2 md:h-[75vh] 2xl:h-[65vh] md:-mr-7">
          <img src="/images/features-1.png" class="w-full h-full object-cover"/>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center overflow-x-hidden gap-5">
        <div class="bg-[#F5F5F5] p-7 pr-0 pb-0 w-full md:w-1/2 md:h-[75vh] 2xl:h-[65vh] md:-ml-7">
          <img src="/images/features-2.png" class="w-full h-full object-cover"/>
        </div>

        <div class="md:pr-24 2xl:pr-24 !px-5 md:pl-24 pl-0 md:px-0">
          <div class="w-12 mb-10 md:mb-5 h-12 flex justify-center items-center rounded-full bg-[#FDEAD7]">
            <Zap color="#EF6820" />
          </div>

          <h1 class="text-3xl md:text-4xl font-semibold mb-3 text-[#181D27]">Legacy Reclaimed</h1>
          <p class="w-full mb-7.5 text-[#535862] 2xl:w-2/3">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>

          <div class="space-y-3 text-[#364153]">
            <div class="flex justify-start items-start md:items-center gap-2.5">
              <CircleCheckIcon color="#D92D20" />
              <p class="text-lg">Digital preservation of African genealogy and memory</p>
            </div>

            <div class="flex justify-start items-start md:items-center gap-2.5">
              <CircleCheckIcon color="#D92D20" />
              <p class="text-lg">Trace your roots and reconnect with your lineage</p>
            </div>

            <div class="flex justify-start items-start md:items-center gap-2.5">
              <CircleCheckIcon color="#D92D20" />
              <p class="text-lg">Celebrate indigenous identities and cultural heritage</p>
            </div>

            <div class="flex justify-start items-start md:items-center gap-2.5">
              <CircleCheckIcon color="#D92D20" />
              <p class="text-lg">Preserve the voices of elders as living legacies</p>
            </div>

            <div class="flex justify-start items-start md:items-center gap-2.5">
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
        <p class="text-[#095C37]">Features</p>
        <h1 class="my-3 2xl:my-6 text-4xl text-[#181D27] font-semibold">This is Family IDee</h1>
        <p class="text-[18px] md:text-xl text-[#535862]">Where African heritage meets the digital future</p>
      </div>

      <div class="w-full md:h-[80vh] 2xl:h-[70vh] mt-14 mb-5">
        <img src="/images/features-3.png" class="w-full h-full object-cover"/>
      </div>

      <p class="text-[#095C37] font-semibold">Our story</p>
      <h1 class="my-3 mb-7.5 mb:mb-0 text-[#181D27] text-3xl font-semibold">We’re just getting started</h1>

      <p class="text-[18px] md:text-xl font-normal text-[#535862] md:w-2/3 leading-8">We come from names with meaning—names that held stories, pride, and belonging. For generations, our identity was passed down through totems, clan names, praise poetry, and storytelling.</p>

      <div class="flex flex-col md:flex-row justify-between items-start gap-5 mt-14">
        <div class="w-full md:w-1/2">
          <p class="text-[18px] md:text-lg text-[#535862] mb-10">
            But as time moved, cities grew, and families drifted, much of that wisdom was lost. Family IDee is a digital home for African genealogy, memory, and culture—built to help us reconnect with who we are, where we come from, and how we belong.
          </p>

          <h1 class="mb-5 text-3xl font-semibold text-[#181D27]">Why we’re better</h1>
          <p class="text-[18px] md:text-lg text-[#535862] mb-7.5">
            Using technology, we help families trace their roots, celebrate indigenous identities, and preserve the voices of our elders—not just as history, but as living legacies. <br><br>
            <span class="italic"> We're not just honouring the past, we're coding it into the future. Because identity is not just about me. It's about we. And together, we remember—with pride, purpose, and power.</span>
          </p>
        </div>

        <div class="w-full md:w-1/2 md:h-[75vh] 2xl:h-[60vh]">
          <img src="/images/features-4.png" class="w-full h-full object-cover"/>
        </div>
      </div>
    </UContainer>


    <!-- =========== MISSION SECTION =========== -->
    <div class="mt-16 py-16 2xl:py-32 bg-[url(/images/how-it-works-bg.png)] bg-center bg-no-repeat bg-cover text-white">
      <div class="flex flex-col justify-center items-center">
        <h1 class="my-5 text-4xl font-semibold">Our Mission</h1>
        <p class="text-xl font-normal text-center leading-8 w-full px-4 md:px-0 md:w-2/3 2xl:w-1/2">To build a digital home where every African can trace their roots, reconnect with lineages, and preserve stories before they disappear. Knowing where you come from shouldn't be a mystery. It should be your power.</p>
      </div>

      <div class="mt-10 flex flex-col md:flex-row justify-center gap-3 px-5 md:px-0 items-center">
          <UButton to="/auth/login" class="bg-white order-2 flex justify-center p-3 w-full md:w-48 rounded-md border hover:bg-white border-[#D5D7DA] text-[#414651]">
            Learn more
          </UButton>
          <UButton class="bg-[#E74B0C] w-full md:w-48 flex justify-center p-3 rounded-md hover:bg-[#cf4209] text-white">
            Get started
          </UButton>
      </div>
    </div>

    <div class="flex mt-5 md:mt-0 flex-col md:flex-row gap-5 md:gap-0 justify-center items-center">
      <div class="text-left w-full md:w-1/2 px-5 md:px-12">
        <p class="text-lg text-[#181D27] 2xl:text-xl 2xl:pr-36 leading-8">
          "By age 23, I had carried four surnames—each one adding confusion, not clarity. Like many Africans, I was caught in a cycle of identity shifts, silences, and unanswered questions. So I built Family IDee: a digital home for Africans to trace their roots, reconnect lineages, and preserve stories before they disappear. Because knowing where you come from shouldn't be a mystery. It should be your power."
        </p>
        <p class="mt-5 2xl:pt-8 text-[#181D27] text-lg 2xl:text-xl font-semibold">Thakgalang Nkatu Mogashane</p>
        <p class="font-light text-[#535862]">Founder, Family IDee</p>
      </div>

      <div class="w-full md:w-1/2 md:h-screen 2xl:h-[90vh] relative">
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

    <!-- =========== TODO: to own component PRICING SECTION =========== -->
    <Pricing />



     <!-- =========== Footer SECTION =========== -->
      <Footer />
  </div>
</template>

<script setup lang="ts">
import HeroReviews from '~/components/LandingPage/HeroReviews.vue';
import Pricing from '~/components/LandingPage/Pricing.vue';
import Footer from '~/components/Footer.vue';
import { CircleCheck, MessageCircle, CircleX, CircleCheckIcon, Zap } from 'lucide-vue-next';



</script>