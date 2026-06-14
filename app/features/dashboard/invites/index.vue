<template>
  <div class="h-full w-full">
    <div class="flex justify-between items-start">
      <div>
        <bread-crumb />

        <h1
          class="font-bold text-[#1F1A14] text-2xl leading-[1.15] tracking-[-0.025em]"
        >
          Family Invites
        </h1>
        <p class="text-[#535862] font-thin mt-1">
          Invite your relatives to fill in their own branches and add memories
        </p>
      </div>

      <top-header-buttons />
    </div>

    <div
      class="mt-10 border border-[#E2D7BD] rounded bg-[#FFFCF6] p-4 text-left shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)]"
    >
      <div class="flex justify-between items-center gap-x-3">
        <div class="w-4/6">
          <label class="text-xs font-semibold text-[#1F1A14]"
            >Invite by email</label
          >
          <UInput
            placeholder="name@familyid.co.za"
            class="w-full mt-1"
            :ui="{ base: 'bg-[#FBF6EE] border-[#C8B98F]' }"
          />
        </div>

        <div class="w-3/6">
          <label class="text-xs font-semibold text-[#1F1A14]">Role</label>
          <USelect
            v-model="value"
            :items="roleItems"
            class="w-full mt-1"
            :ui="{ base: 'bg-[#FBF6EE] border-[#C8B98F]' }"
          />
        </div>
        <div class="w-1/6">
          <label class="invisible">s</label>
          <UButton
            class="bg-[#B8431A] w-full mt-1 flex justify-center items-center gap-x-2 text-xs rounded-3xl text-white"
            icon="i-lucide-plus"
            >Send invite</UButton
          >
        </div>
      </div>

      <div class="text-[#6B5D43] text-sm bg-[#F5EEDF] px-3 py-3.5 mt-5">
        <b class="text-[#1F1A14]">Storyteller</b> - can add memories &amp; tag
        people, but can’t edit the tree structure. Best for grandparents.
      </div>
    </div>

    <div
      class="mt-10 border border-[#E2D7BD] rounded bg-[#FFFCF6] text-left shadow-[0_1px_0_rgba(120,90,40,0.06),0_2px_6px_rgba(120,90,40,0.08)]"
    >
      <div class="p-4 flex justify-start items-start gap-x-3">
        <h1 class="font-bold text-[#5A2308] text-lg tracking-[-0.01em]">
          Family members
        </h1>

        <UBadge
          :ui="{ base: 'text-[10px] rounded-xl bg-[#F5DCC9] text-[#B8431A]' }"
          >{{ tableData.length }} members</UBadge
        >
      </div>
      <UTable
        :data="tableData"
        :columns="columns"
        class="w-full"
        :ui="{
          thead: 'bg-[#F5EEDF]',
          th: 'text-[#6B5D43] font-semibold text-xs uppercase ',
          td: 'py-3',
          tr: 'border-b border-[#E2D7BD]',
          tbody: 'divide-y-[1px] divide-[#E2D7BD]',
        }"
      >
        <!-- PERSON column -->
        <template #person-cell="{ row }">
          <div class="flex items-center gap-3">
            <UAvatar :src="row.original.person.avatar" size="lg" />
            <div>
              <p class="font-medium text-[#1F1A14]">
                {{ row.original.person.name }}
              </p>
              <small class="text-[#6B5D43]">{{
                row.original.person.email
              }}</small>
            </div>
          </div>
        </template>

        <!-- ROLE column -->
        <template #role-cell="{ row }">
          <p class="text-[#1F1A14]">
            {{ row.original.role }}
          </p>
        </template>

        <!-- TOTEM column -->
        <template #totem-cell="{ row }">
          <div class="flex justify-start item-center gap-x-1">
            <Bird :size="16" class="text-[#6B5D43]" />
            <p class="text-[#6B5D43] text-sm font-thin italic">
              {{ row.original.totem }}
            </p>
          </div>
        </template>

        <!-- STATUS column -->
        <template #status-cell="{ row }">
          <UBadge
            :color="statusColor[row.original.status as Status]"
            variant="soft"
            class="capitalize"
            :ui="{ base: 'rounded-xl border-none' }"
          >
            {{ row.original.status }}
          </UBadge>
        </template>

        <!-- AMOUNT column -->
        <template #activity-cell="{ row }">
          <span class="text-[#6B5D43] text-sm">
            {{ row.original.amount.toLocaleString() }}
          </span>
        </template>

        <!-- ACTIONS column -->
        <template #actions-cell="{ row }">
          <div class="flex items-center gap-2">
            <UButton
              icon="i-lucide-pencil"
              size="xs"
              color="neutral"
              variant="outline"
              @click="handleEdit(row.original)"
              :ui="{ base: 'p-2' }"
            />

            <UButton
              icon="i-lucide-trash-2"
              size="xs"
              color="neutral"
              variant="outline"
              @click="handleDelete(row.original)"
              :ui="{ base: 'p-2' }"
            />
          </div>
        </template>
      </UTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopHeaderButtons from "~/components/Dashboard/TopHeaderButtons.vue";
import { Bird } from "lucide-vue-next";
import BreadCrumb from "~/components/Dashboard/BreadCrumb.vue";
import { ref } from "vue";

const roleItems = ref(["Backlog", "Todo", "In Progress", "Done"]);
const value = ref("Backlog");

const columns = [
  {
    accessorKey: "person",
    header: "Person",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "totem",
    header: "Totem",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "activity",
    header: "Activity",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];

type Status = "active" | "pending" | "inactive";

const statusColor: Record<Status, string> = {
  active: "success",
  pending: "warning",
  inactive: "error",
};

function handleEdit(row: any): void {
  console.log("Edit", row);
}
function handleDelete(row: any): void {
  console.log("Delete", row);
}

const tableData = ref([
  {
    person: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/40?img=1",
      email: "fami@email.com",
    },
    role: "Editor",
    status: "active",
    totem: "iMpala",
    amount: "Joined yesterday",
    id: 1,
  },
  {
    person: {
      name: "James Okafor",
      avatar: "https://i.pravatar.cc/40?img=2",
      email: "fami@email.com",
    },
    role: "Contributor",
    status: "pending",
    totem: "iNgwe",
    amount: "Joined yesterday",
    id: 2,
  },
  {
    person: {
      name: "Mia Russo",
      avatar: "https://i.pravatar.cc/40?img=3",
      email: "fami@email.com",
    },
    role: "StoryTeller",
    status: "inactive",
    totem: "Inyathi",
    amount: "Joined yesterday",
    id: 3,
  },
]);
</script>
