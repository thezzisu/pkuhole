<template>
  <div class="border shadow m-4 p-4">
    <div class="flex items-center justify-between pb-4">
      <code>{{ comment.cid }}</code>
      <code>
        Anon {{ props.comment.anonymous }} Name {{ props.comment.name }}
      </code>
    </div>
    <hr />
    <article class="p-2" v-html="props.comment.text"></article>
    <hr />
    <div>
      <code>
        {{ (Date as any)(+props.comment.timestamp).toLocaleString() }}
        {{ props.comment.tag }}
        {{ props.comment.islz ? 'lz' : '' }}
      </code>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IComment } from '@/api'

const props = defineProps<{
  comment: IComment
}>()
</script>
