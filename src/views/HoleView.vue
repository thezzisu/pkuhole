<template>
  <div class="w-full flex flex-col items-stretch">
    <HoleCard v-if="res.state.value" :hole="res.state.value.hole" />
    <div v-else class="p-4 text-xl font-bold">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { getHole } from '@/api'
import HoleCard from '@/components/HoleCard.vue'
import { useAsyncState } from '@/compose/async'

const props = defineProps<{
  pid: string
}>()

const res = useAsyncState(async () => {
  const resp = await getHole(props.pid)
  return {
    hole: resp.data
  }
}, null)

res.run()
</script>
