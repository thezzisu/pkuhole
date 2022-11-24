<template>
  <div>
    <HoleCard v-for="hole in holes" :key="hole.pid" :hole="hole" />
  </div>
</template>

<script setup lang="ts">
import { getHoleList, type IHoleListItem } from '@/api'
import HoleCard from '@/components/HoleCard.vue'
import { useAsyncState } from '@/compose/async'
import { ref } from 'vue'

const page = ref(0)
const holes = ref<IHoleListItem[]>([])

const state = useAsyncState(async () => {
  const resp = await getHoleList(page.value + 1)
  holes.value.push(...resp.data)
  page.value++
}, null)

state.run()
</script>
