<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <p    
    class="error-message"
    :id="id"
    aria-live="assertive"
  >
    <slot />
  </p>
</template>

