<script setup>
import { ref, computed, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import RecordForm from './components/RecordForm.vue'
import RecordList from './components/RecordList.vue'
import AppFooter from './components/AppFooter.vue'

const records = ref([])
const searchTerm = ref('')
const editingId = ref(null)
const feedback = ref({ type: '', message: '' })
let feedbackTimer = null

onMounted(() => {
  const saved = localStorage.getItem('module7-records')
  records.value = saved ? JSON.parse(saved) : []
})

function saveRecords() {
  localStorage.setItem('module7-records', JSON.stringify(records.value))
}

function showFeedback(type, message) {
  clearTimeout(feedbackTimer)
  feedback.value = { type, message }
  feedbackTimer = setTimeout(() => {
    feedback.value = { type: '', message: '' }
  }, 3500)
}

const editingRecord = computed(() => {
  return records.value.find((record) => record.id === editingId.value) || null
})

function handleSave(formData) {
  if (editingId.value !== null) {
    records.value = records.value.map((record) =>
      record.id === editingId.value ? { ...record, ...formData } : record
    )
    showFeedback('success', 'Attendance record updated successfully.')
  } else {
    records.value.push({ id: Date.now(), ...formData })
    showFeedback('success', 'Attendance record added successfully.')
  }
  editingId.value = null
  saveRecords()
}

function startEdit(id) {
  editingId.value = id
  searchTerm.value = ''
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function cancelEdit() {
  editingId.value = null
}

function deleteRecord(id) {
  const confirmed = window.confirm(
    'Are you sure you want to delete this attendance record?'
  )
  if (!confirmed) return

  records.value = records.value.filter((record) => record.id !== id)
  if (editingId.value === id) editingId.value = null
  saveRecords()
  showFeedback('success', 'Attendance record deleted.')
}

const filteredRecords = computed(() => {
  const keyword = searchTerm.value.toLowerCase().trim()
  if (!keyword) return records.value

  return records.value.filter((record) => {
    const haystack = [
      record.studentName,
      record.studentId,
      record.classSection,
      record.subjectName,
      record.status,
      record.remarks
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(keyword)
  })
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-50 text-gray-900">
    <AppHeader :total-records="records.length" />

    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <div
        v-if="feedback.message"
        class="mb-6 rounded-md px-4 py-3 text-sm font-medium"
        :class="
          feedback.type === 'success'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        "
        role="status"
      >
        {{ feedback.message }}
      </div>

      <RecordForm :record="editingRecord" @save="handleSave" @cancel="cancelEdit" />

      <div class="mt-6">
        <RecordList
          :records="filteredRecords"
          :total-records="records.length"
          v-model:search-term="searchTerm"
          @edit="startEdit"
          @delete="deleteRecord"
        />
      </div>
    </main>

    <AppFooter />
  </div>
</template>
