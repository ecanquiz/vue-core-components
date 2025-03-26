<script setup lang="ts">
import { useId } from 'vue'

withDefaults(defineProps<{
  label?: string
  error?: string
}>(), {
  label: '',
  error: ''
})

const textareaValue = defineModel()
const id = useId()
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <textarea    
    v-bind="$attrs"
    v-model="textareaValue as HTMLInputElement['value']" 
    :placeholder="label"    
    class="field"
    :id="id"
    :aria-describedby="error ? `${id}-error` : undefined"
    :aria-invalid="error ? true : undefined"
  ></textarea>
  <AppErrorMessage
    v-if="error"
    :id="`${id}-error`"
  >
    {{ error }}
  </AppErrorMessage>
</template>
