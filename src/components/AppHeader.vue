<script setup>
const props = defineProps({
  totalRecords: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <header class="bg-indigo-700 text-white shadow">
    <div class="mx-auto w-full max-w-6xl px-4 py-6">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 class="text-2xl font-bold tracking-tight">
          Attendance Monitoring System
        </h1>
        <p class="text-sm text-indigo-200">Manguerra · BSCS 3A</p>
      </div>
      <p class="mt-2 max-w-2xl text-sm text-indigo-100">
        Record, view, update, and search student attendance records for your
        classes in one organized place.
      </p>
      <p class="mt-2 text-xs text-indigo-200">
        {{ totalRecords }} attendance record{{ totalRecords === 1 ? '' : 's' }} stored
      </p>
    </div>
  </header>
</template>
