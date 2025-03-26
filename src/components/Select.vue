<script setup lang="ts">
import { useId } from 'vue'
import type { Option } from '../types/Option'

withDefaults(defineProps<{
  label?: string  
  options: Option[]
  error?: string
}>(), {
  label: '',
  error: ''
})

const selectValue = defineModel()
const id = useId()
</script>

<template>
<!--div class="block"-->
  <label v-if="label">{{ label }}</label>
  <select
    :id="id"  
    class="field"
    v-model="selectValue" 
    v-bind="$attrs"    
    :aria-describedby="error ? `${id}-error` : undefined"
    :aria-invalid="error ? true : undefined"
  >
    <option value="" class="text-gray-200">Seleccione...</option>
    <option
      v-for="option in options"
      :value="option.id"
      :key="option.id"
      :selected="option.id === selectValue"
    >{{ option.name }}</option>
  </select>
  <AppErrorMessage
    v-if="error"
    :id="`${id}-error`"
  >
    {{ error }}
  </AppErrorMessage>
<!--/div-->
</template>
