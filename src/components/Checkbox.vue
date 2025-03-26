<script setup lang="ts">
import { useId } from 'vue'

withDefaults(defineProps<{
  label?: string,
  error?: string
}>(), {
  label: '',
  error: ''
})

const checkboxValue = defineModel()
const id = useId()
</script>

<template>
  <input
    :id="id" 
    v-bind="$attrs"
    type="checkbox"
    v-model="checkboxValue"
    class="mr-1"
  />
  <label v-if="label">{{ label }}</label>
  <AppErrorMessage
    v-if="error"
    :id="`${id}-error`"
  >
    {{ error }}
  </AppErrorMessage>
</template>
