<template>
  <div class="border shadow m-4 p-4">
    <div class="flex items-center justify-between pb-4">
      <RouterLink :to="`/hole/${hole.pid}`">
        <code>{{ hole.pid }}</code>
      </RouterLink>
      <code>
        Like {{ props.hole.likenum }} Reply {{ props.hole.reply }} Type
        {{ props.hole.type }} Hidden {{ props.hole.hidden }}
      </code>
    </div>
    <hr />
    <article class="p-2" v-html="props.hole.text"></article>
    <hr />
    <div>
      <code>
        {{ (Date as any)(+props.hole.timestamp).toLocaleString() }}
        {{ props.hole.tag }}
        {{ props.hole.extra }}
      </code>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IHole } from '@/api'

const props = defineProps<{
  hole: IHole
}>()
</script>
