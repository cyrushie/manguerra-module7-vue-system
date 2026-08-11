<script setup>
import { computed } from 'vue'

const props = defineProps({
  records: {
    type: Array,
    default: () => []
  },
  totalRecords: {
    type: Number,
    default: 0
  },
  searchTerm: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:searchTerm', 'edit', 'delete'])

const statusSummary = computed(() => {
  const counts = { Present: 0, Absent: 0, Late: 0, Excused: 0 }
  props.records.forEach((record) => {
    if (record.status in counts) counts[record.status] += 1
  })
  return counts
})

function statusBadgeClass(status) {
  const styles = {
    Present: 'bg-green-100 text-green-800',
    Absent: 'bg-red-100 text-red-800',
    Late: 'bg-amber-100 text-amber-800',
    Excused: 'bg-blue-100 text-blue-800'
  }
  return styles[status] || 'bg-gray-100 text-gray-700'
}

function formatDate(value) {
  if (!value) return '—'
  const date = new Date(value + 'T00:00:00')
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

function onSearch(event) {
  emit('update:searchTerm', event.target.value)
}
</script>

<template>
  <section class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 class="text-lg font-semibold text-gray-900">Attendance Records</h2>
      <div class="relative">
        <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
        <input
          :value="searchTerm"
          type="search"
          placeholder="Search by student, section, or subject..."
          class="w-full rounded-md border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:w-72"
          @input="onSearch"
        />
      </div>
    </div>

    <div class="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
      <span>
        Showing {{ records.length }} of {{ totalRecords }} record{{ totalRecords === 1 ? '' : 's' }}
      </span>
      <span class="text-gray-300">|</span>
      <span v-for="(count, status) in statusSummary" :key="status" class="inline-flex items-center gap-1">
        <span
          class="inline-block h-2 w-2 rounded-full"
          :class="{
            'bg-green-500': status === 'Present',
            'bg-red-500': status === 'Absent',
            'bg-amber-500': status === 'Late',
            'bg-blue-500': status === 'Excused'
          }"
        ></span>
        {{ status }}: {{ count }}
      </span>
    </div>

    <div class="mt-4 overflow-x-auto">
      <table class="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr class="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-500">
            <th class="px-3 py-2">Student</th>
            <th class="px-3 py-2">Section</th>
            <th class="px-3 py-2">Subject</th>
            <th class="px-3 py-2">Date</th>
            <th class="px-3 py-2">Status</th>
            <th class="px-3 py-2">Remarks</th>
            <th class="px-3 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="record in records"
            :key="record.id"
            class="border-b border-gray-100 align-top transition hover:bg-gray-50"
          >
            <td class="px-3 py-3">
              <div class="font-medium text-gray-900">{{ record.studentName }}</div>
              <div v-if="record.studentId" class="text-xs text-gray-400">{{ record.studentId }}</div>
            </td>
            <td class="px-3 py-3 text-gray-700">{{ record.classSection }}</td>
            <td class="px-3 py-3 text-gray-700">{{ record.subjectName }}</td>
            <td class="px-3 py-3 whitespace-nowrap text-gray-700">{{ formatDate(record.attendanceDate) }}</td>
            <td class="px-3 py-3">
              <span
                class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
                :class="statusBadgeClass(record.status)"
              >
                {{ record.status }}
              </span>
            </td>
            <td class="px-3 py-3 text-gray-600">{{ record.remarks || '—' }}</td>
            <td class="px-3 py-3">
              <div class="flex justify-end gap-2">
                <button
                  type="button"
                  class="rounded-md border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 transition hover:bg-indigo-100"
                  @click="emit('edit', record.id)"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="rounded-md border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 transition hover:bg-red-100"
                  @click="emit('delete', record.id)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="records.length === 0" class="py-10 text-center">
        <p class="text-sm font-medium text-gray-700">
          {{ totalRecords === 0 ? 'No attendance records yet.' : 'No records match your search.' }}
        </p>
        <p class="mt-1 text-sm text-gray-500">
          {{
            totalRecords === 0
              ? 'Use the form above to add your first attendance record.'
              : 'Try a different student, section, or subject keyword.'
          }}
        </p>
      </div>
    </div>
  </section>
</template>
