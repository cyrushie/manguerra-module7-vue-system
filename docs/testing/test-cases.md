# Manual Test Cases — Module 8 Software Testing

**System:** Attendance Monitoring System
**Student:** Manguerra · BSCS 3A
**Date Executed:** August 25, 2026

---

## TC-01: Add a Valid Attendance Record

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-01 |
| **Requirement/Feature** | Create attendance record |
| **Objective** | Verify that a complete valid record is saved and displayed |
| **Preconditions** | Application is running; form is in Add mode |
| **Test Data** | Student Name: Juan Dela Cruz, Student ID: 2024-00123, Class/Section: BSCS 3A, Subject: Software Engineering 1, Date: 2026-08-25, Status: Present, Remarks: On time |
| **Test Steps** | 1. Fill in all required fields with valid data. 2. Click "Add Record". |
| **Expected Result** | Record appears in the table; record count increases; green success message "Attendance record added successfully." is shown; form resets to empty. |
| **Actual Result** | Record was added and displayed in the table. Success message appeared. Form cleared. |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-02: Reject Missing Required Field (Student Name)

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-02 |
| **Requirement/Feature** | Form validation |
| **Objective** | Verify that submission is rejected when Student Name is empty |
| **Preconditions** | Application is running; form is in Add mode |
| **Test Data** | Student Name: (empty), Class/Section: BSCS 3A, Subject: Software Engineering 1, Date: 2026-08-25, Status: Present |
| **Test Steps** | 1. Leave the Student Name field empty. 2. Fill in all other required fields. 3. Click "Add Record". |
| **Expected Result** | Record is NOT saved; error message "Please complete the following required fields: Student Name." appears; no new row in table. |
| **Actual Result** | Error message displayed listing Student Name as missing. No record added. |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-03: Reject Another Invalid Field (Missing Subject Name)

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-03 |
| **Requirement/Feature** | Form validation — boundary/invalid |
| **Objective** | Verify validation works for multiple missing fields simultaneously |
| **Preconditions** | Application is running; form is in Add mode |
| **Test Data** | Student Name: Maria Santos, Class/Section: BSIT 2B, Subject: (empty), Date: (empty), Status: Present |
| **Test Steps** | 1. Enter Student Name and Class/Section only. 2. Leave Subject Name and Attendance Date empty. 3. Click "Add Record". |
| **Expected Result** | Record is NOT saved; error message lists "Subject Name" and "Attendance Date" as missing fields. |
| **Actual Result** | Error message displayed: "Please complete the following required fields: Subject Name, Attendance Date." No record added. |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-04: Display Multiple Records

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-04 |
| **Requirement/Feature** | Record list display |
| **Objective** | Verify that multiple records display correctly in the table |
| **Preconditions** | At least 3 records have been added |
| **Test Data** | (uses previously added records) |
| **Test Steps** | 1. Add 3 records with different students and statuses. 2. Observe the table. 3. Verify all 3 rows appear. |
| **Expected Result** | Table shows all 3 records with correct student names, sections, subjects, dates, statuses, and remarks. Record count shows "3 attendance records stored". |
| **Actual Result** | All 3 records displayed correctly. Header showed "3 attendance records stored". |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-05: Edit and Save an Existing Record

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-05 |
| **Requirement/Feature** | Edit attendance record |
| **Objective** | Verify that editing a record updates the data correctly |
| **Preconditions** | At least one record exists in the table |
| **Test Data** | Change status from "Present" to "Late"; change remarks to "Arrived 15 minutes late" |
| **Test Steps** | 1. Click "Edit" on an existing record. 2. Verify form changes to "Edit Attendance Record" mode. 3. Change Status to "Late". 4. Update remarks. 5. Click "Save Changes". |
| **Expected Result** | Form switches to edit mode with pre-filled values. After saving, updated values appear in the table. Green success message "Attendance record updated successfully." shown. |
| **Actual Result** | Form loaded existing data. After save, table showed updated status and remarks. Success message displayed. |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-06: Cancel Record Deletion

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-06 |
| **Requirement/Feature** | Delete confirmation dialog |
| **Objective** | Verify that canceling deletion keeps the record unchanged |
| **Preconditions** | At least one record exists |
| **Test Data** | (none — action test) |
| **Test Steps** | 1. Click "Delete" on a record. 2. When the browser confirmation dialog appears, click "Cancel". |
| **Expected Result** | Record remains in the table. Record count unchanged. No success or error message. |
| **Actual Result** | Record remained in the table after clicking Cancel. Count stayed the same. |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-07: Confirm Record Deletion

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-07 |
| **Requirement/Feature** | Delete attendance record |
| **Objective** | Verify that confirming deletion removes the record |
| **Preconditions** | At least one record exists |
| **Test Data** | (none — action test) |
| **Test Steps** | 1. Click "Delete" on a record. 2. Click "OK" on the confirmation dialog. |
| **Expected Result** | Record is removed from the table. Record count decreases by 1. Green success message "Attendance record deleted." shown. |
| **Actual Result** | Record removed from table. Count decreased. Success message displayed. |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-08: Search for an Existing Record

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-08 |
| **Requirement/Feature** | Search functionality |
| **Objective** | Verify that entering a matching keyword filters the table |
| **Preconditions** | At least 2 records exist with different student names |
| **Test Data** | Search keyword: "Juan" |
| **Test Steps** | 1. Type "Juan" in the search input. 2. Observe the table. |
| **Expected Result** | Only records containing "Juan" in name, ID, section, subject, status, or remarks are shown. "Showing X of Y records" updates. |
| **Actual Result** | Table filtered to show only Juan's record. Count showed "Showing 1 of 3 records". |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-09: Search for a Missing Record

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-09 |
| **Requirement/Feature** | Search — no results state |
| **Objective** | Verify the empty state message appears when no records match |
| **Preconditions** | At least one record exists |
| **Test Data** | Search keyword: "xyznonexistent" |
| **Test Steps** | 1. Type "xyznonexistent" in the search input. 2. Observe the table area. |
| **Expected Result** | Message "No records match your search." and "Try a different student, section, or subject keyword." appear. No table rows shown. |
| **Actual Result** | No-results message displayed as expected. |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-10: Verify localStorage Persistence After Refresh

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-10 |
| **Requirement/Feature** | localStorage persistence |
| **Objective** | Verify that records survive a page refresh |
| **Preconditions** | At least one record has been added |
| **Test Data** | (none — persistence test) |
| **Test Steps** | 1. Note the current records in the table. 2. Refresh the browser page (F5). 3. Wait for the page to reload. |
| **Expected Result** | All previously added records are still displayed in the table with the same data and count. |
| **Actual Result** | After page refresh, all records were restored from localStorage correctly. |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-11: Responsive Layout

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-11 |
| **Requirement/Feature** | Responsive interface |
| **Objective** | Verify that the layout remains usable on a narrow screen |
| **Preconditions** | Application is running with at least one record |
| **Test Data** | (none — layout test) |
| **Test Steps** | 1. Resize browser window to narrow width (approx 375px). 2. Observe the form, table, header, and footer. |
| **Expected Result** | Content remains readable; form fields stack vertically; table is scrollable; header and footer adjust. |
| **Actual Result** | Layout adjusted correctly. Form fields stacked. Table had horizontal scroll. All content readable. |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |

---

## TC-12: Record Count and Status Summary

| Field | Detail |
| --- | --- |
| **Test Case ID** | TC-12 |
| **Requirement/Feature** | Record count and status summary |
| **Objective** | Verify that the header record count and table status summary update after operations |
| **Preconditions** | Application is running |
| **Test Data** | Add records with different statuses (Present, Absent, Late) |
| **Test Steps** | 1. Add a "Present" record. 2. Add an "Absent" record. 3. Add a "Late" record. 4. Check header count and table status summary. |
| **Expected Result** | Header shows "3 attendance records stored". Table summary shows "Present: 1 | Absent: 1 | Late: 1". |
| **Actual Result** | Counts and status summary matched expected values. |
| **Status** | Pass |
| **Evidence** | `02-manual-test-cases.png` |
