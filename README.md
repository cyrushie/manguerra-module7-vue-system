# Attendance Monitoring System

**Student:** Manguerra · **Course & Section:** BSCS 3A
**Subject:** Software Engineering 1 · **Module 7 Activity** — Design and Implementation
**Instructor:** Patrick Jason L. Torres

## System Description

The Attendance Monitoring System is a web-based prototype that helps teachers and
school staff record, view, update, and search student attendance. This project is
the Module 7 frontend implementation of the selected entity from the Module 6
architectural design: the **attendance record**.

Only the attendance record entity is implemented, following the Module 7 scope
rule. The complete backend, API, and MongoDB database described in the Module 6
architecture remain proposed future components.

## Selected Module 6 Entity

- **Proposed system:** Attendance Monitoring System
- **Selected entity:** Attendance Record
- **Fields:** student ID (optional), student name, class/section, subject,
  attendance date, status (Present, Absent, Late, Excused), and remarks (optional)

## Implemented Features

- Create a new attendance record using the entry form
- View all attendance records in a responsive table
- Edit an existing record by loading it back into the form
- Delete a record only after a confirmation dialog
- Search records by student name, student ID, section, subject, status, or remarks
- Form validation that prevents submission when required fields are empty
- Success and error feedback messages
- Record count and a simple status summary (Present, Absent, Late, Excused)
- Data persistence using browser localStorage

## Technologies Used

| Technology | Purpose |
| ---------- | ------- |
| Vue.js 3 + Vite | Frontend application framework and project tooling |
| Tailwind CSS v4 | Responsive interface styling |
| JavaScript | Application and CRUD logic |
| localStorage | Browser-based prototype data persistence |
| Git + GitHub | Version control and repository submission |
| GitHub Actions | Continuous-integration build check |

## Project Structure

```
src/
|-- components/
|   |-- AppHeader.vue
|   |-- RecordForm.vue
|   |-- RecordList.vue
|   `-- AppFooter.vue
|-- App.vue
|-- main.js
`-- style.css
```

## Installation and Run Instructions

```bash
npm install
npm run dev
```

Open the local address shown by Vite (for example `http://localhost:5173/`) in a
browser. To create a production build:

```bash
npm run build
```

## How localStorage Works

The prototype stores attendance records in the browser's localStorage under the
key `module7-records`. When the application loads, it reads the saved JSON array
and restores the records. Every add, update, or delete operation immediately
writes the updated array back to localStorage, so records remain available even
after the page is refreshed or the browser is closed and reopened. This simulates
the data layer of the Module 6 architecture without requiring a real database.

## Connection Between Module 6 and Module 7

| Module 6 Element                    | Module 7 Implementation                    |
| ----------------------------------- | ------------------------------------------ |
| Proposed complete system            | Basis and long-term blueprint              |
| Presentation layer (Vue.js)         | Vue components and Tailwind CSS interface  |
| Attendance record module/entity     | Selected functional prototype              |
| User interactions                   | Forms, buttons, record list, and search    |
| Application logic (Node.js/Express) | JavaScript CRUD and validation functions   |
| Data layer (MongoDB Atlas)          | Simulated using browser localStorage       |

The three-tier architecture from Module 6 remains the blueprint. This prototype
implements the presentation layer and the local, browser-based persistence that
stands in for the data layer while the system is still in the design stage.

## Application Screenshots

The following screenshots are stored in the `screenshots/` folder and are also
collected in the submission PDF report.

- `screenshots/01-running-application.png`
- `screenshots/02-add-record.png`
- `screenshots/03-record-list.png`
- `screenshots/04-edit-record.png`
- `screenshots/05-delete-confirmation.png`
- `screenshots/06-search-function.png`
- `screenshots/07-localstorage.png`
- `screenshots/08-responsive-view.png`
- `screenshots/09-github-repository.png`
- `screenshots/10-commit-history.png`
- `screenshots/11-ci-success.png`

## Module 8 — Software Testing

This section covers the Module 8 activity: manual and automated testing of the
Attendance Monitoring System.

### Testing Commands

```bash
npm run test:run    # Run all Vitest tests once
npm run test        # Run tests in watch mode
npm run build       # Production build
```

### Automated Tests

| Test File | Description | Tests |
| --- | --- | --- |
| `src/utils/filterRecords.test.js` | Tests the search/filter utility function (10 cases) | Equivalence, boundary, case-insensitive |
| `src/components/RecordCount.test.js` | Tests the RecordCount component (3 cases) | Plural/singular forms, zero count |

Total: **13 automated tests** — all passing.

### Manual Test Cases

12 manual test cases cover: Add, Validation, Boundary, Multiple Records, Edit,
Delete (Cancel), Delete (Confirm), Search, No-Results, Persistence, Responsive,
and Record Count. See `docs/testing/test-cases.md` for full details.

### Defect Found and Fixed

**BUG-01:** Search term was not cleared when entering edit mode, causing the
record list to remain filtered during editing. Fixed by clearing `searchTerm`
in the `startEdit` function.

- Defect report: `docs/testing/defect-report.md`
- Retest: Pass
- Regression: All related test cases pass

### Test Documentation

- `docs/testing/test-plan.md` — Complete test plan
- `docs/testing/test-cases.md` — 12 manual test cases with results
- `docs/testing/defect-report.md` — Bug report and fix evidence

### CI Pipeline

GitHub Actions runs `npm ci`, `npm run test:run`, and `npm run build` on every
push and pull request to `main`.

### Testing Screenshots

- `screenshots/01-system-before-testing.png`
- `screenshots/02-manual-test-cases.png`
- `screenshots/03-failed-test-or-defect.png`
- `screenshots/04-defect-report.png`
- `screenshots/05-vitest-installed.png`
- `screenshots/06-automated-test-code.png`
- `screenshots/07-tests-passing.png`
- `screenshots/08-defect-fixed.png`
- `screenshots/09-retest-regression.png`
- `screenshots/10-commit-history.png`
- `screenshots/11-ci-success.png`

## Known Limitations and Future Improvements

- Data is stored only in the browser and is not shared between devices.
- Clearing browser data removes all saved records.
- No authentication; any user can add, edit, or delete records.
- No server-side validation since the backend is not yet implemented.
- Future work includes the Node.js and Express backend, the MongoDB Atlas
  database, user authentication, deployment, Swagger documentation, Docker
  configuration, and continuous integration for the full stack as described in
  the Module 6 architectural design.
