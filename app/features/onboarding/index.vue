<template>
  <div>
    <div v-if="step === 1" class="w-4/5">
      <p class="uppercase font-mono text-xs font-bold text-[#B8431A] mb-1">
        FOR FAMILIES IN ALL THEIR FORMS
      </p>

      <h1 class="text-6xl font-bold tracking-[-0.035em]">
        Carry your people <span class="text-[#B8431A] italic">Forward</span>.
      </h1>

      <p class="mt-5 text-[#6B5D43] leading-[1.55]">
        Family iDee is a private, beautifully kept family tree. Start with
        yourself, invite the storytellers, and let the names, totems and small
        things stay where they belong.
      </p>

      <div class="flex justify-start items-center mt-7">
        <UButton
          class="bg-[#B8431A] text-sm flex justify-center py-3 px-7.5 rounded-3xl hover:bg-[#cf4209] text-white"
          @click="nextStep()"
        >
          Begin your tree
        </UButton>

        <UButton
          class="bg-transparent flex justify-center py-3 px-7.5 text-sm rounded-md hover:bg-transparent hover:cursor-pointer text-[#414651] font-semibold"
        >
          Watch the 90-second tour
        </UButton>
      </div>
    </div>

    <div v-if="step === 2">
      <h1 class="text-4xl font-bold tracking-[-0.035em] w-3/5">
        What should we put on the first leaf?
      </h1>

      <p class="mt-5 text-[#6B5D43] leading-[1.55] w-3/5">
        Use the name your family uses for you. You can add a different formal
        name on your profile later.
      </p>

      <div class="mt-10">
        <p class="text-xs font-semibold text-[#1F1A14] mb-1">Full Name</p>
        <UInput
          placeholder="John Maputla"
          class="w-full"
          :ui="{
            base: 'rounded text-sm text-[#1F1A14] bg-[#FBF6EE] border-[1px] border-[#C8B98F] px-5',
            ring: 'ring-0',
            focus: 'ring-1 ring-[#B8431A]',
          }"
        />
      </div>

      <div class="mt-5 grid grid-cols-2 gap-5">
        <div>
          <p class="text-xs font-semibold text-[#1F1A14] mb-1">Born in</p>
          <UInput
            placeholder="Johannesburg, South Africa"
            class="w-full"
            :ui="{
              base: 'rounded text-sm text-[#1F1A14] bg-[#FBF6EE] border-[1px] border-[#C8B98F] px-5',
              ring: 'ring-0',
              focus: 'ring-1 ring-[#B8431A]',
            }"
          />
        </div>
        <div>
          <p class="text-xs font-semibold text-[#1F1A14] mb-1">Birth year</p>
          <UInput
            placeholder="1965"
            class="w-full"
            :ui="{
              base: 'rounded text-sm text-[#1F1A14] bg-[#FBF6EE] border-[1px] border-[#C8B98F] px-5',
              ring: 'ring-0',
              focus: 'ring-1 ring-[#B8431A]',
            }"
          />
        </div>
      </div>

      <div class="flex justify-between items-center mt-7">
        <UButton
          class="bg-transparent flex justify-center p-3 text-sm rounded-md hover:bg-transparent hover:cursor-pointer text-[#414651] font-semibold"
          @click="prevStep()"
        >
          Back
        </UButton>

        <UButton
          class="bg-[#B8431A] text-sm flex justify-center py-3 px-7.5 rounded-3xl hover:bg-[#cf4209] text-white"
          @click="nextStep()"
        >
          Continue
        </UButton>
      </div>
    </div>

    <div v-if="step === 3" class="my-16">
      <h1 class="text-4xl font-bold tracking-[-0.035em] w-3/5">
        Choose your totem.
      </h1>

      <p class="mt-5 text-[#6B5D43] leading-[1.55] w-3/5">
        Inherited from a clan, or chosen for what you carry. It marks your line
        on the tree and shows up next to your name.
      </p>

      <div class="mt-5 grid grid-cols-4 gap-3">
        <div
          v-for="totem in totems"
          :key="totem.vernac"
          :class="[
            'rounded cursor-pointer flex flex-col items-center justify-center py-4',
            totem.clicked
              ? 'border-2 border-[#B8431A] bg-[#F5DCC9]'
              : 'border border-[#E2D7BD] bg-[#FFFCF6]',
          ]"
        >
          <img :src="`/images/totems/${totem.vernac}.svg`" class="w-10 h-10" />
          <p class="text-[#1F1A14] font-bold mt-2 text-xs">
            {{ totem.englishName }}
          </p>
          <p class="text-[10px] capitalize mt-1 text-[#6B5D43] italic">
            {{ totem.vernac }}
          </p>
        </div>
      </div>

      <div class="px-2.5 py-3.5 rounded bg-[#F5EEDF] my-4 text-xs">
        <span class="font-bold">Elephant · Ndlovu</span> — Memory, dignity.
      </div>

      <div class="flex justify-between items-center mt-7">
        <UButton
          class="bg-transparent flex justify-center p-3 text-sm rounded-md hover:bg-transparent hover:cursor-pointer text-[#414651] font-semibold"
          @click="prevStep()"
        >
          Back
        </UButton>

        <UButton
          class="bg-[#B8431A] text-sm flex justify-center py-3 px-7.5 rounded-3xl hover:bg-[#cf4209] text-white"
          @click="nextStep()"
        >
          Continue
        </UButton>
      </div>
    </div>

    <div v-if="step === 4">
      <h1 class="text-4xl font-bold tracking-[-0.035em]">
        You’re on the tree, Naledi.
      </h1>

      <p class="mt-5 text-[#6B5D43] leading-[1.55] w-3/4">
        Your line is marked with the Tortoise. Next: add your parents — it only
        takes a name and a year.
      </p>

      <div class="flex justify-start items-center mt-7 gap-x-5">
        <UButton
          class="bg-[#B8431A] text-sm flex justify-center py-3 px-7.5 rounded-3xl hover:bg-[#cf4209] text-white"
          @click="nextStep()"
        >
          Open my tree
        </UButton>

        <UButton
          class="bg-transparent flex justify-center py-3 px-7.5 text-sm rounded-3xl hover:bg-transparent hover:cursor-pointer text-[#414651] font-semibold border border-[#C8B98F]"
        >
          Invite a parent
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const step = ref<number>(1);

type Totem = {
  englishName: string;
  vernac: string;
  clicked: boolean;
};

const totems: Totem[] = [
  {
    englishName: "Elephant",
    vernac: "ndlovu",
    clicked: true,
  },
  {
    englishName: "Crocodile",
    vernac: "ngwenya",
    clicked: false,
  },
  {
    englishName: "Lion",
    vernac: "iBhubesi",
    clicked: false,
  },
  {
    englishName: "Eagle",
    vernac: "uKhozi",
    clicked: false,
  },
  {
    englishName: "Leopard",
    vernac: "iNgwe",
    clicked: false,
  },
  {
    englishName: "Buffalo",
    vernac: "iNyathi",
    clicked: false,
  },
  {
    englishName: "Rhino",
    vernac: "uBhejane",
    clicked: false,
  },
  {
    englishName: "Antelope",
    vernac: "iMpala",
    clicked: false,
  },
  {
    englishName: "Tortoise",
    vernac: "uFudu",
    clicked: false,
  },
  {
    englishName: "Hippo",
    vernac: "iMvubu",
    clicked: false,
  },
  {
    englishName: "Zebra",
    vernac: "iDube",
    clicked: false,
  },
  {
    englishName: "Crane",
    vernac: "iNdwe",
    clicked: false,
  },
];

function nextStep(): void {
  if (step.value === 4) {
    router.push("/dashboard");

    return;
  }

  step.value++;
}

function prevStep(): void {
  step.value--;
}
</script>
