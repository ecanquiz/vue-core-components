<script setup lang="ts">
import { useId } from 'vue'

withDefaults(defineProps<{
  label?: string
  value: string | number
  error?: string
}>(), {
  label: '',
  error: ''
})

const radioValue = defineModel()
const id = useId()
</script>

<template>
  <input
    :id="id"  
    type="radio"
    :checked="radioValue === value"
    :value="value"
    v-bind="$attrs"
    @change="radioValue = value"
  />
  <label v-if="label" class="ml-1">{{ label }}</label>
  <AppErrorMessage
    v-if="error"
    :id="`${id}-error`"
  >
    {{ error }}
  </AppErrorMessage>
</template>
