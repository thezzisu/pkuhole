<template>
  <div class="w-full flex flex-col items-stretch">
    <template v-if="res.state.value">
      <HoleCard :hole="res.state.value.hole" />
      <CommentCard
        v-for="comment in res.state.value.comments"
        :key="comment.cid"
        :comment="comment"
      />
    </template>
    <div v-else class="p-4 text-xl font-bold">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { getCommentList, getHole } from '@/api'
import CommentCard from '@/components/CommentCard.vue'
import HoleCard from '@/components/HoleCard.vue'
import { useAsyncState } from '@/compose/async'

const props = defineProps<{
  pid: string
}>()

const res = useAsyncState(async () => {
  const resp = await getHole(props.pid)
  const comments = await getCommentList(props.pid)
  return {
    hole: resp.data,
    comments: comments.data
  }
}, null)

res.run()
</script>
