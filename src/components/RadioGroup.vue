<script setup lang="ts">
import { useId } from 'vue'

withDefaults(defineProps<{
  options: { label: string; value: number; }[] 
  name: string
  vertical?: boolean
  error?: string
}>(), {
  vertical: false,
  error: ''
})

const modelValue = defineModel()
const id = useId()
</script>

<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical
    }"
  >
    <AppRadio
      :label="option.label"
      :value="option.value"
      v-model="modelValue"
      :name="name"
    />
  </component>
  <AppErrorMessage
    v-if="error"
    :id="`${id}-error`"
  >
    {{ error }}
  </AppErrorMessage>
</template>

<style scoped>
.horizontal {
  @apply mr-5;
}
</style>
