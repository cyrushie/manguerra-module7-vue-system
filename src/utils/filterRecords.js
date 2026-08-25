export function filterRecords(records, keyword) {
  const term = keyword.toLowerCase().trim()
  return records.filter(record => {
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
    return haystack.includes(term)
  })
}
