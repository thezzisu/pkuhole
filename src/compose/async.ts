import { ref } from 'vue'
import type { Ref } from 'vue'

export function useAsyncState<T, A extends Array<unknown>>(
  task: (...args: A) => Promise<T>,
  initial: T
) {
  const state = ref<T>(initial) as Ref<T>
  const error = ref<Error>()
  const loading = ref(false)
  const run = async (...args: A) => {
    if (loading.value) return
    loading.value = true
    try {
      state.value = await task(...args)
    } catch (err) {
      if (err instanceof Error) {
        error.value = err
      } else {
        error.value = new Error(`${err}`)
      }
    }
    loading.value = false
  }
  return { state, error, loading, run }
}
