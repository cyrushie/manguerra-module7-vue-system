import { describe, it, expect } from 'vitest'
import { filterRecords } from './filterRecords'

describe('filterRecords', () => {
  const records = [
    { id: 1, studentName: 'Juan Dela Cruz', studentId: '2024-00123', classSection: 'BSCS 3A', subjectName: 'Software Engineering 1', status: 'Present', remarks: 'On time' },
    { id: 2, studentName: 'Maria Santos', studentId: '2024-00456', classSection: 'BSIT 2B', subjectName: 'Database Systems', status: 'Absent', remarks: '' },
    { id: 3, studentName: 'Jose Reyes', studentId: '2024-00789', classSection: 'BSCS 3A', subjectName: 'Software Engineering 1', status: 'Late', remarks: 'Arrived 15 minutes late' }
  ]

  it('returns all records when keyword is empty', () => {
    expect(filterRecords(records, '')).toHaveLength(3)
  })

  it('filters records by student name', () => {
    expect(filterRecords(records, 'Juan')).toHaveLength(1)
    expect(filterRecords(records, 'Juan')[0].studentName).toBe('Juan Dela Cruz')
  })

  it('filters records by student ID', () => {
    expect(filterRecords(records, '00456')).toHaveLength(1)
    expect(filterRecords(records, '00456')[0].studentName).toBe('Maria Santos')
  })

  it('filters records by class section', () => {
    expect(filterRecords(records, 'BSIT')).toHaveLength(1)
    expect(filterRecords(records, 'BSIT')[0].classSection).toBe('BSIT 2B')
  })

  it('filters records by status', () => {
    expect(filterRecords(records, 'Late')).toHaveLength(1)
    expect(filterRecords(records, 'Late')[0].studentName).toBe('Jose Reyes')
  })

  it('ignores letter case when filtering', () => {
    expect(filterRecords(records, 'JUAN')).toHaveLength(1)
    expect(filterRecords(records, 'juan')[0].studentName).toBe('Juan Dela Cruz')
  })

  it('returns empty array when no records match', () => {
    expect(filterRecords(records, 'xyznonexistent')).toHaveLength(0)
  })

  it('trims whitespace from keyword', () => {
    expect(filterRecords(records, '  Juan  ')).toHaveLength(1)
  })

  it('matches partial keywords across multiple fields', () => {
    expect(filterRecords(records, 'software')).toHaveLength(2)
  })

  it('filters by remarks content', () => {
    expect(filterRecords(records, 'medical')).toHaveLength(0)
    expect(filterRecords(records, 'Arrived')).toHaveLength(1)
  })
})
