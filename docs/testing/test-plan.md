# Test Plan — Module 8 Software Testing

**System:** Attendance Monitoring System
**Student:** Manguerra · BSCS 3A
**Subject:** Software Engineering 1 · Module 8 Activity
**Instructor:** Patrick Jason L. Torres
**Date:** August 25, 2026

## 1. Test Objectives

- Verify that the Attendance Monitoring System correctly implements all CRUD operations (Create, Read, Update, Delete).
- Validate form input requirements and error handling.
- Confirm search functionality filters records accurately.
- Ensure data persists in localStorage across browser sessions.
- Verify responsive layout remains usable on narrow screens.
- Confirm record count and status summary update correctly.
- Write and execute at least two meaningful automated Vitest tests.
- Document, fix, and retest at least one defect.

## 2. Test Scope

### In Scope

| Area | Description |
| --- | --- |
| Create (Add) | Adding a new attendance record with all required fields |
| Validation | Rejecting submissions with missing required fields |
| Boundary values | Edge cases for field inputs |
| Read (List) | Displaying multiple records in a table |
| Update (Edit) | Editing and saving an existing record |
| Delete (Cancel) | Canceling a deletion and verifying record remains |
| Delete (Confirm) | Confirming deletion and verifying record is removed |
| Search | Finding existing records by keyword; handling no-results state |
| Persistence | Verifying localStorage saves and restores records after refresh |
| Responsive | Checking layout usability on narrow viewports |
| Record count | Verifying count and status summary update after operations |
| Automated tests | Vitest unit tests for utility function and Vue component |

### Out of Scope

- Backend/API testing (not implemented yet)
- Authentication and authorization testing
- Performance and load testing
- Security penetration testing
- Cross-browser compatibility (limited to Chrome/Edge for manual testing)

## 3. Items to Test

| Component / Feature | Type |
| --- | --- |
| RecordForm.vue | Form submission, validation, edit mode, cancel edit |
| RecordList.vue | Table rendering, search filtering, status summary, empty states |
| AppHeader.vue | Record count display |
| App.vue (main logic) | CRUD orchestration, localStorage read/write, feedback messages |
| filterRecords utility | Pure function search/filter logic (automated test) |
| RecordCount component | Component rendering (automated test) |

## 4. Environment

| Item | Detail |
| --- | --- |
| Operating System | Windows 10/11 |
| Browser | Google Chrome (latest) |
| Node.js | v22+ |
| Framework | Vue.js 3 + Vite |
| CSS | Tailwind CSS v4 |
| Testing tool | Vitest + Vue Test Utils + jsdom |
| Data storage | Browser localStorage (key: module7-records) |
| CI | GitHub Actions (Ubuntu latest, Node 22) |

## 5. Responsibilities

| Role | Responsibility |
| --- | --- |
| Student (Manguerra) | Execute all tests, document results, create automated tests, fix defects, update CI |
| Instructor | Review test plan, results, defect reports, and CI output |

## 6. Risks and Mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| localStorage varies by browser | Data may behave differently | Test in Chrome as primary; note browser in results |
| Manual testing is subjective | Inconsistent pass/fail judgment | Define clear expected results before execution |
| Automated tests may not cover UI | Missed visual regressions | Pair automated tests with manual visual checks |
| Defect may be found late | Delays in fixing | Document immediately, fix, and retest |

## 7. Entry Criteria

- Module 7 application is complete and running (`npm run dev` succeeds).
- All source code is committed and tracked in Git.
- Node.js 22+ is installed.

## 8. Exit Criteria

- All 12 manual test cases are executed with recorded results.
- At least 2 meaningful Vitest automated tests pass.
- At least 1 defect is documented, fixed, and retested.
- `npm run test:run` and `npm run build` both succeed.
- GitHub Actions workflow runs tests and build successfully.
- All required screenshots are captured.
- README is updated with testing information.

## 9. Deliverables

| Deliverable | Location |
| --- | --- |
| Test Plan | `docs/testing/test-plan.md` |
| Manual Test Cases | `docs/testing/test-cases.md` |
| Defect Report | `docs/testing/defect-report.md` |
| Automated Test Source | `src/utils/filterRecords.js`, `src/utils/filterRecords.test.js` |
| Component Test Source | `src/components/RecordCount.test.js` (or similar) |
| Screenshots | `screenshots/` folder |
| Updated README | `README.md` |
