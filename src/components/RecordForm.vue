<script setup>
import { reactive, ref, watch } from 'vue'

const props = defineProps({
  record: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save', 'cancel'])

const statusOptions = ['Present', 'Absent', 'Late', 'Excused']

const form = reactive(emptyForm())
const errorMessage = ref('')

function emptyForm() {
  return {
    studentId: '',
    studentName: '',
    classSection: '',
    subjectName: '',
    attendanceDate: '',
    status: 'Present',
    remarks: ''
  }
}

watch(
  () => props.record,
  (record) => {
    errorMessage.value = ''
    if (record) {
      Object.assign(form, {
        studentId: record.studentId || '',
        studentName: record.studentName || '',
        classSection: record.classSection || '',
        subjectName: record.subjectName || '',
        attendanceDate: record.attendanceDate || '',
        status: record.status || 'Present',
        remarks: record.remarks || ''
      })
    } else {
      Object.assign(form, emptyForm())
    }
  },
  { immediate: true }
)

function submit() {
  const missing = []
  if (!form.studentName.trim()) missing.push('Student Name')
  if (!form.classSection.trim()) missing.push('Class / Section')
  if (!form.subjectName.trim()) missing.push('Subject Name')
  if (!form.attendanceDate) missing.push('Attendance Date')
  if (!form.status) missing.push('Status')

  if (missing.length > 0) {
    errorMessage.value =
      'Please complete the following required fields: ' + missing.join(', ') + '.'
    return
  }

  errorMessage.value = ''
  emit('save', {
    studentId: form.studentId.trim(),
    studentName: form.studentName.trim(),
    classSection: form.classSection.trim(),
    subjectName: form.subjectName.trim(),
    attendanceDate: form.attendanceDate,
    status: form.status,
    remarks: form.remarks.trim()
  })
}

function cancel() {
  errorMessage.value = ''
  emit('cancel')
}

const inputClass =
  'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
const labelClass = 'block text-sm font-medium text-gray-700'
</script>

<template>
  <section class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="text-lg font-semibold text-gray-900">
      {{ record ? 'Edit Attendance Record' : 'Add New Attendance Record' }}
    </h2>
    <p class="mt-1 text-sm text-gray-500">
      {{
        record
          ? 'Change the details below and save to update the record.'
          : 'Fill in the required fields to record a student\u2019s attendance.'
      }}
    </p>

    <form class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2" @submit.prevent="submit">
      <div>
        <label :class="labelClass" for="studentName">Student Name <span class="text-red-500">*</span></label>
        <input
          id="studentName"
          v-model.trim="form.studentName"
          :class="inputClass"
          type="text"
          placeholder="e.g. Juan Dela Cruz"
        />
      </div>

      <div>
        <label :class="labelClass" for="studentId">Student ID (optional)</label>
        <input
          id="studentId"
          v-model.trim="form.studentId"
          :class="inputClass"
          type="text"
          placeholder="e.g. 2024-00123"
        />
      </div>

      <div>
        <label :class="labelClass" for="classSection">Class / Section <span class="text-red-500">*</span></label>
        <input
          id="classSection"
          v-model.trim="form.classSection"
          :class="inputClass"
          type="text"
          placeholder="e.g. BSCS 3A"
        />
      </div>

      <div>
        <label :class="labelClass" for="subjectName">Subject <span class="text-red-500">*</span></label>
        <input
          id="subjectName"
          v-model.trim="form.subjectName"
          :class="inputClass"
          type="text"
          placeholder="e.g. Software Engineering 1"
        />
      </div>

      <div>
        <label :class="labelClass" for="attendanceDate">Attendance Date <span class="text-red-500">*</span></label>
        <input
          id="attendanceDate"
          v-model="form.attendanceDate"
          :class="inputClass"
          type="date"
        />
      </div>

      <div>
        <label :class="labelClass" for="status">Status <span class="text-red-500">*</span></label>
        <select id="status" v-model="form.status" :class="inputClass">
          <option v-for="option in statusOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>

      <div class="sm:col-span-2">
        <label :class="labelClass" for="remarks">Remarks (optional)</label>
        <textarea
          id="remarks"
          v-model.trim="form.remarks"
          :class="inputClass"
          rows="2"
          placeholder="e.g. Student submitted a medical certificate."
        ></textarea>
      </div>

      <div v-if="errorMessage" class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 sm:col-span-2">
        {{ errorMessage }}
      </div>

      <div class="flex flex-wrap gap-3 sm:col-span-2">
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {{ record ? 'Save Changes' : 'Add Record' }}
        </button>
        <button
          v-if="record"
          type="button"
          class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          @click="cancel"
        >
          Cancel Edit
        </button>
      </div>
    </form>
  </section>
</template>
