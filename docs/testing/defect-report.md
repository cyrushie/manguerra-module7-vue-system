# Defect Report — Module 8 Software Testing

**System:** Attendance Monitoring System
**Student:** Manguerra · BSCS 3A
**Date:** August 25, 2026

---

## BUG-01: Search Term Not Cleared When Entering Edit Mode

| Field | Detail |
| --- | --- |
| **Defect ID** | BUG-01 |
| **Summary** | When a user enters a search keyword that filters the record list, then clicks Edit on a visible record, the search term remains active. The user is editing a record but may not realize other records are hidden by the filter, causing confusion about what data exists. |
| **Application Version/Commit** | Module 7 initial implementation (pre-Module 8 testing) |
| **Environment** | Windows 11, Google Chrome latest, Node.js 22 |
| **Preconditions** | At least 3 attendance records exist in the system. |
| **Steps to Reproduce** | 1. Add 3 attendance records with different student names (e.g., Juan, Maria, Jose). 2. Type "Juan" in the search input. 3. Observe the table shows only Juan's record. 4. Click "Edit" on Juan's record. 5. Observe the search input still shows "Juan" and the table is still filtered. 6. After saving the edit, the user may expect to see all records but only sees the filtered result. |
| **Expected Result** | When entering edit mode, the search term should be cleared so the user can see all records while editing. |
| **Actual Result** | The search term remains active after clicking Edit. The table stays filtered, showing only matching records. The user may not notice the filter is active. |
| **Severity** | Low |
| **Priority** | Medium |
| **Evidence** | `03-failed-test-or-defect.png` |
| **Status** | Fixed |
| **Fix Commit** | (will be recorded after fix) |

---

## BUG-01 Fix Summary

The `startEdit` function in `App.vue` was updated to clear the search term when entering edit mode. This ensures the user sees the full record list while editing.

**File changed:** `src/App.vue`
**Change:** Added `searchTerm.value = ''` inside the `startEdit` function.

---

## Retest and Regression

### Retest of BUG-01

| Field | Detail |
| --- | --- |
| **Retest Date** | August 25, 2026 |
| **Steps** | 1. Add 3 records. 2. Search "Juan". 3. Click Edit on Juan's record. 4. Verify search is cleared and all records visible. 5. Save edit. 6. Verify all records still visible. |
| **Expected** | Search clears when entering edit mode; all records visible. |
| **Actual** | Search input cleared; all records displayed. Edit saved successfully. |
| **Status** | Pass |

### Regression Tests

| Test Case | Status | Notes |
| --- | --- | --- |
| TC-01: Add valid record | Pass | Record added successfully after fix |
| TC-04: Display multiple records | Pass | All records display correctly |
| TC-05: Edit and save record | Pass | Edit mode works with cleared search |
| TC-08: Search existing record | Pass | Search still filters correctly |
| TC-10: Verify persistence | Pass | Records persist after refresh |
| TC-12: Record count | Pass | Count updates correctly |
