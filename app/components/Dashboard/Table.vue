<template>
  <div class="flex-1  w-full">
    <div class="flex justify-end overflow-x-auto ">
      <!-- <UInput
        class="max-w-sm min-w-[12ch]"
        placeholder="Search"/> -->

      <!-- <UButton color="neutral" label="Randomize" @click="randomize" /> -->

      <!-- <UDropdownMenu
        :items="table?.tableApi?.getAllColumns().filter(column => column.getCanHide()).map(column => ({
          label: upperFirst(column.id),
          type: 'checkbox' as const,
          checked: column.getIsVisible(),
          onUpdateChecked(checked: boolean) {
            table?.tableApi?.getColumn(column.id)?.toggleVisibility(!!checked)
          },
          onSelect(e: Event) {
            e.preventDefault()
          }
        }))"
        :content="{ align: 'end' }"
      >
        <UButton
          label="Columns"
          color="neutral"
          variant="outline"
          trailing-icon="i-lucide-chevron-down"
          class="ml-auto"
          aria-label="Columns select dropdown"
        />
      </UDropdownMenu> -->
    </div>

    <USeparator />

    <UTable
      ref="table"
      :data="data"
      :columns="columns"
      sticky
      class="h-96"
    >
      
      <template #expanded="{ row }">
        <pre>{{ row.original }}</pre>
      </template>
    </UTable>

    <div class="px-4 py-3.5 text-sm text-muted">
      {{ table?.tableApi?.getFilteredSelectedRowModel().rows.length || 0 }} of
      {{ table?.tableApi?.getFilteredRowModel().rows.length || 0 }} row(s) selected.
    </div>
  </div>
</template>

<script setup lang="ts">
// https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/table/TableExample.vue
import { h, resolveComponent } from 'vue'
import { upperFirst } from 'scule'
import type { TableColumn } from '@nuxt/ui'
import { useClipboard } from '@vueuse/core'
import { UAvatarGroup, UAvatar } from '#components'

const UButton = resolveComponent('UButton')
const UCheckbox = resolveComponent('UCheckbox')
const UBadge = resolveComponent('UBadge')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const toast = useToast()
const { copy } = useClipboard()

type Payment = {
  id: string
  member: {
    name: string
    born: string
    avatar: string
  }
  children: {
    src: string
    alt: string
  }[]
}

const data = ref<Payment[]>([
  {
  id: '4600',
  member: {
    avatar: 'https://github.com/romhml.png',
    name:'Mararet Johnson',
    born: 'Born: 1945'
  },
  children: [
    { src: 'https://github.com/romhml.png', alt: 'Alt1' },
    { src: 'https://github.com/noook.png', alt: 'Alt1' },
    { src: 'https://github.com/benjamincanac.png', alt: 'Alt1' },
    { src: 'https://github.com/noook.png', alt: 'Alt1' },
  ]
}, 
{
  id: '4599',
  member: {
    avatar: 'https://github.com/romhml.png',
    name:'Robert Johnson',
    born: 'Born: 1940'
  },
  children: [
      { src: 'https://github.com/romhml.png', alt: 'Alt1' },
      { src: 'https://github.com/noook.png', alt: 'Alt1' },
      { src: 'https://github.com/noook.png', alt: 'Alt1' },
      { src: 'https://github.com/benjamincanac.png', alt: 'Alt1' },
    ]
}, 
{
  id: '4598',
  member: {
    avatar: 'https://github.com/romhml.png',
    name:'David Johnson',
    born: 'Born: 1960'
  },
  children: [
    { src: 'https://github.com/benjamincanac.png', alt: 'Alt1' },
    { src: 'https://github.com/noook.png', alt: 'Alt1' },
    { src: 'https://github.com/noook.png', alt: 'Alt1' },
    { src: 'https://github.com/romhml.png', alt: 'Alt1' },
  ]
}
])

const columns: TableColumn<Payment>[] = [{
  id: 'select',
  header: ({ table }) => h(UCheckbox, {
    'modelValue': table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected(),
    'onUpdate:modelValue': (value: boolean | 'indeterminate') => table.toggleAllPageRowsSelected(!!value),
    'aria-label': 'Select all'
  }),
  cell: ({ row }) => h(UCheckbox, {
    'modelValue': row.getIsSelected(),
    'onUpdate:modelValue': (value: boolean | 'indeterminate') => row.toggleSelected(!!value),
    'aria-label': 'Select row'
  }),
  enableSorting: false,
  enableHiding: false
}, 
{
  accessorKey: 'member',
  header: 'Family Member',
  cell: ({ row }) => {
  const member = row.original.member

  return h('div', { class: 'flex items-center gap-3' }, [
     h(UAvatar, {
        src: member.avatar,
        alt: member.name,
        size: 'xl'
      }),
      h('div', { class: 'flex flex-col' }, [
        h('span',{class: 'text-[#181D27]'}, member.name),
        h('span', { class: 'text-sm text-[#535862]' }, member.born)
      ])
    ])
}
},
{
  accessorKey: 'children',
  header: 'Children',
  //cell: ({ row }) => `${row.getValue('children')}`
   cell: ({ row }) => {
    const children = row.original.children

    const visible = children.slice(0, 3)
    const overflow = children.length - visible.length

    return h(
      UAvatarGroup,
      { size: 'sm' },
      () => [
        ...visible.map((child) =>
          h(UAvatar, {
            src: child.src,
            alt: child.alt
          })
        ),

        overflow > 0
          ? h(
              UAvatar,
              {
                text: `+${overflow}`
              }
            )
          : null
      ]
    )
  }
}]

const table = useTemplateRef('table')

function randomize() {
  data.value = [...data.value].sort(() => Math.random() - 0.5)
}
</script>

