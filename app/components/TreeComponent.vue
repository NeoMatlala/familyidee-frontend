<template>
  <div class="h-screen w-full">
    <VueFlow
      v-model:nodes="nodes"
      v-model:edges="edges"
      class="bg-[#F5EEDF] border border-[#E2D7BD]"
      :fit-view-on-init="true"
      :node-types="nodeTypes"
      @node-click="onNodeClick"
      :nodes-draggable="false"
    />

    <person-details-Dialog 
      v-model:open="isOpen"
      :person="selectedPerson"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  VueFlow,
  useVueFlow
} from '@vue-flow/core'
import PersonNode from './Nodes/PersonNode.vue'
import type { PersonNodeType, TreenNodeType } from '~/features/dashboard/tree/api/types.js'
import PersonDetailsDialog from './Dialogs/PersonDetailsDialog.vue'

const selectedPerson = ref<PersonNodeType | null>(null) // TODO: type for this
const isOpen = ref<boolean>(false)

function onNodeClick(event: any): void {
  console.log(event.node.data)

  selectedPerson.value = event.node.data
  isOpen.value = true
}


const nodeTypes = {
  person: PersonNode
}

function onDragStop(event: any): void {
  // persist positions (critical for family trees)
  console.log(event.node.id, event.node.position)
}

// 1. Nodes
const nodes = ref<TreenNodeType[]>([
  {
    id: 'Vusi',
    type: 'person',
    position: { x: 100, y: 100 },
    data: { 
      name: 'Vusi', 
      surname: 'Khumalo' ,
      yearOfBirth: '1960',
      yearOfDeath: '2026',
    }
  },
  {
    id: 'Zanele',
    type: 'person',
    position: { x: 250, y: 100 },
    data: { 
      name: 'Zanele', 
      surname: 'Khumalo' ,
      yearOfBirth: '1960',
      yearOfDeath: null,
    }
  },
  {
    id: 'Nomvula',
    type: 'person',
    position: { x: 200, y: 250 },
    data: { 
      name: 'Novula', 
      surname: 'Khumalo' ,
      yearOfBirth: '1960',
      yearOfDeath: null,
    }
  }
])

// 2. Edges (3 connections minimum requirement) -- aka connectors
const edges = ref([
  {
    id: 'e1',
    source: 'Vusi', // vusi
    target: 'Nomvula'
  },
  {
    id: 'e2',
    source: 'Zanele', // zanele
    target: 'Nomvula'
  }
])

const { fitView } = useVueFlow()

</script>

