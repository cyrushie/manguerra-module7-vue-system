<script setup>
const props = defineProps({
  total: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <span class="text-xs text-indigo-200">
    {{ total }} attendance record{{ total === 1 ? '' : 's' }} stored
  </span>
</template>
