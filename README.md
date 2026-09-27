# Procurement Control — PR & RFP Monitoring

## Run

Extract the entire ZIP and open `index.html` in a modern desktop browser. Keep
`style.css`, `script.js`, and the `vendor` folder beside it. All required libraries
are included, so the downloaded application can run without an internet connection
or backend. The hosted version uses the same application.

## Workbook findings

Source: `PR AND RFP MONITORING(5).xlsx` supplied in this conversation.

- `DPI PR MONITORING`: 238 worksheet rows, 36 columns. The actual column labels
  start on row 3. No PR number, received date, requester, department or processor
  records are populated. Twenty-four rows contain isolated delivery dates, lead
  times or remarks. Those values are preserved in **Settings → Source exceptions**
  and do not create invented PR transactions.
- `RFP MONITORING`: one identifiable payment request, RFP **267600**, vendor
  **APBC VISUALS**, reference **DMDL-1667**, submitted **August 20, 2026**, amount
  **PHP 3,914.00**. Payment terms and check release date are blank. At a reporting
  date of September 26, 2026, its age is **37 calendar days**, its default aging
  deadline is **September 3, 2026**, and its status is **Overdue**.
- Workbook lookup departments, processors and categories are used in the PR form.
- A separate **Explore demo** dataset includes 42 synthetic PRs and 16 synthetic
  RFPs. These are clearly labeled and never mixed with workbook records.

## Main workflows

1. Choose **Workbook data** or **Explore demo**.
2. Open PR or RFP monitoring and add a record. Select a record number to view,
   edit or delete it. Actual delivery dates mean a delivery occurred; select
   Partial to keep a partially delivered request open.
3. Apply global search, department, supplier, processor, category, request type,
   delivery status or received/submitted date filters. Filters update all views
   and reports. PR-only filters limit RFPs through matching PO/PR references.
4. Import the original workbook or an application export. Preview the recognized
   counts and choose merge or replacement. Merge updates matching PR/RFP numbers;
   replacement requires confirmation. Imports target the selected dataset.
5. Export a filtered Excel/PDF report or print. Settings includes a full Excel
   backup that ignores filters and retains source exceptions and rules.
6. Change SLA thresholds and holidays in Settings. The reporting date controls
   open-item aging; Refresh sets it to today's date in the Philippines.

## Calculation rules

**PR aging and KPI:** Inclusive working days between received date and PO date,
or the reporting date for a request without a PO date. Weekends and configured
holidays are excluded. This follows the workbook's actual formula, which uses
the PO date despite its “PR to Sent PO Aging” header. New item target: 8 working
days. Replenishment target: 3 working days. Open requests within SLA are In
progress, rather than prematurely counted as Passed. Open requests beyond SLA
are Failed. Cancelled requests are excluded. Unknown types and missing dates
are Not evaluated; reversed dates have no valid aging count.

**Delivery:** An explicit committed delivery date overrides the calculated
target. Otherwise use the later of date needed and PO sent date plus numeric
lead time. Date needed is a planning fallback before the PO is sent. Text lead
times such as “3–5 days” need an explicit committed date; the app does not
silently interpret these as a firm commitment. Completed deliveries on or before
target are On-time; later deliveries are Late. Partial requests remain open.
Open requests past their target are Overdue, separate from completed late
deliveries. Completed requests without a target are not scored.

**RFP:** Calendar days from submission to release or reporting date. Explicit
due date overrides submission + payment terms. Zero-day payment terms are valid.
When terms are blank, the 14-day default aging limit applies and the request
becomes overdue at that limit, matching the workbook. When a due date exists,
overdue starts the day after that date. The due-soon window is 3 days by default.
Released requests are excluded from pending amounts.

The reporting date is an aging reference, not a historical reconstruction:
recorded completed/released states remain visible even when an earlier reporting
date is chosen. Future or reversed completion/release dates are flagged.

## Data and import handling

- Blank formula-only template rows and side lookup columns are not transactions.
- Unidentified rows and invalid typed values are retained in source exceptions.
- Computed Excel formula caches are ignored; statuses recalculate in JavaScript.
- Dates support Excel serials, ISO dates and explicit US-style MM/DD/YYYY strings.
  Ambiguous or invalid values require review instead of an inferred date.
- Duplicate numbers in a recognized sheet use the last occurrence and generate
  an exception. Merge identity is the case-insensitive PR or RFP number.
- App exports preserve editable inputs separately from calculated values and can
  be reimported. Read-only and editor role previews do not change monitoring rules
  through import; administrators can import the workbook's rules.
- Displayed workbook strings are HTML-escaped. Exports use literal string cells.

## Persistence and access

Local Storage holds separate actual/demo datasets, rules, recent activity, theme
and role preference under `procure-control-v1`. Data belongs to the browser and
origin; it is not shared across users/devices or between the hosted and downloaded
versions. File-URL storage behavior varies by browser. Export backups regularly.
If storage is unavailable or full, the app reports that changes are not saved.

Role-based UI is ready for future integration: Administrator can edit records and
rules, Procurement editor can edit records, and Read-only viewer cannot use the
editing controls. This is a UI preview, not authentication or security. A future
backend must enforce permissions and replace the browser storage adapter.

## Stack

HTML5, CSS3, Vanilla JavaScript; Bootstrap 5.3.3; Chart.js 4.4.8; DataTables 2.2.2
with jQuery 3.7.1; SheetJS 0.18.5 for Excel; jsPDF 2.5.2 with AutoTable 3.8.4 for PDF.
Vendor distributions are bundled locally with their upstream license notices.

Validation covers source reconciliation, working-day and payment boundaries,
DOM workflows, record persistence, isolated demo data, filtering, role controls,
HTML escaping and Excel round trips. Full visual browser QA was unavailable in
the execution environment; responsive CSS and local asset paths were checked.
