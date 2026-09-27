/* Procurement Control — browser-only, no backend. All dates use UTC day arithmetic.
 * SLA matches Excel NETWORKDAYS(received, PO date), inclusive of both weekdays.
 * See Settings / Analytics for explicit rules and missing-data handling. */
"use strict";
const SOURCE_DATA = {
  pr: [],
  rfp: [
    {
      id: "source-rfp-4",
      submitted: "2026-08-20",
      vendor: "APBC VISUALS",
      reference: "DMDL-1667",
      si: "N/A",
      approved: "",
      number: "267600",
      amount: 3914,
      terms: "",
      due: "",
      released: "",
      remarks: "",
    },
  ],
  issues: [
    {
      sheet: "DPI PR MONITORING",
      row: 4,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { T4: "2026-06-26" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 48,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { R48: "3-5 days", T48: "2026-09-04" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 57,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y57: "waiting for quotation" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 80,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y80: "w/ quotation -layout subject for approval-09/01/26" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 86,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y86: "waiting for quotation" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 87,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: {
        Y87: " Ofc chair id for PO#, then yun Printer is for Approval-09/01/26",
      },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 110,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: {
        S110: "2026-08-26",
        T110: "2026-08-28",
        Y110: "event of Aug 30-31, 2026",
      },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 111,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: {
        S111: "2026-08-26",
        T111: "2026-08-28",
        Y111: "event of Aug 30-31, 2026",
      },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 112,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { S112: "2026-08-27", T112: "2026-08-26" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 118,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { R118: "7 days", T118: "2026-09-04" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 120,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y120: "DONE  (UCCH-Final)8/29/26" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 125,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: {
        Y125: "waiting for quotation , with addition of 1 pc/ w/quotation rcvd-0903/226",
      },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 130,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: {
        Y130: "waiting for the quotation-8/26/26 (ABC -Tanay) / w/ quotation",
      },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 133,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y133: "for signature of BV-09/01/26" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 134,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y134: "waiting for the quotation-8/26/26" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 135,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y135: "thru pCF waiting for pick up the items" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 136,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y136: "waiting for the quotation" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 137,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y137: "waiting for the Quotation" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 140,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y140: "waiting  for the quotation" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 142,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y142: "waiting for quotation" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 143,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y143: "DONE PO" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 146,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { R146: "3-5 Days" },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 202,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: {
        Y202: "WAITING FOR THE QUOTATION AS OF 9/25/2026 - EAGLE WINGS",
      },
    },
    {
      sheet: "DPI PR MONITORING",
      row: 203,
      reason:
        "Missing PR number; isolated values excluded from transaction totals",
      values: { Y203: "CANCELLED" },
    },
  ],
};
const LOOKUPS = {
  departments: [
    "EXECUTIVE",
    "BOD",
    "EXECOM",
    "FINANCE",
    "SUPPLY CHAIN",
    "DPI-MARKETING",
    "DMDL-MARKETING",
    "ADMINISTRATION",
    "IT DEPT",
    "REGULATORY",
    "HUMAN RESOURCE",
    "PATIENT ACCESS",
    "MOLECULAR",
    "CLINICAL",
    "CUSTOMER SERVICE",
    "DPI SALES",
    "DMDL SALES",
    "PCTC MINDORO",
  ],
  processors: [
    "Anthony Cadelina",
    "Joseph Yburan",
    "Joseph Domingo",
    "Haron Lavarias",
    "Kim Joshua Paragas",
    "Oscar Ladrera II",
    "Maria Nenita Llamas",
    "Neal Funte",
    "Melvin Belisario",
  ],
  categories: [
    "Assets",
    "Reagents",
    "Medicines",
    "Office Supplies",
    "Promaterials",
    "Appliances",
    "IT Accessories",
    "Pantry Supplier",
    "Office Equipment",
    "Lab Consumables",
    "Cleaning Materials",
    "License",
    "Vaccines",
  ],
};
const DEFAULT_SETTINGS = {
  newItem: 8,
  replenishment: 3,
  dueSoon: 3,
  defaultLimit: 14,
  holidays: [],
};
const STORE_KEY = "procure-control-v1",
  DAY = 86400000;
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const esc = (v) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const clone = (o) => JSON.parse(JSON.stringify(o));
const today = () =>
  new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Manila" });
const iso = (d) => d.toISOString().slice(0, 10);
const validDate = (s) =>
  /^\d{4}-\d{2}-\d{2}$/.test(String(s)) &&
  !Number.isNaN(Date.parse(s)) &&
  iso(new Date(s)) === s;
const addDays = (s, n) =>
  validDate(s) ? iso(new Date(Date.parse(s) + Number(n) * DAY)) : "";
const diffDays = (a, b) =>
  validDate(a) && validDate(b)
    ? Math.round((Date.parse(b) - Date.parse(a)) / DAY)
    : null;
function workingDays(a, b, holidays = []) {
  if (!validDate(a) || !validDate(b) || b < a) return null;
  const days = diffDays(a, b) + 1;
  let result = Math.floor(days / 7) * 5;
  for (let i = 0; i < days % 7; i++) {
    const d = new Date(
      Date.parse(a) + (Math.floor(days / 7) * 7 + i) * DAY,
    ).getUTCDay();
    if (d !== 0 && d !== 6) result++;
  }
  for (const h of new Set(holidays)) {
    if (
      h >= a &&
      h <= b &&
      validDate(h) &&
      ![0, 6].includes(new Date(h).getUTCDay())
    )
      result--;
  }
  return result;
}
const money = (v, compact = false) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: compact ? 0 : 2,
    ...(compact && Math.abs(v) >= 100000 ? { notation: "compact" } : {}),
  }).format(v || 0);
const num = (v) => new Intl.NumberFormat("en-PH").format(v || 0);
const dateLabel = (s) =>
  validDate(s)
    ? new Intl.DateTimeFormat("en-PH", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(s))
    : "—";
const uid = () =>
  globalThis.crypto?.randomUUID?.() ||
  "r-" + Date.now() + "-" + Math.random().toString(36).slice(2);
let persistError = false;
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const x = JSON.parse(raw);
      if (
        x.version === 1 &&
        Array.isArray(x.actual?.pr) &&
        Array.isArray(x.actual?.rfp) &&
        Array.isArray(x.demo?.pr) &&
        Array.isArray(x.demo?.rfp)
      ) {
        for (const k of ["actual", "demo"]) {
          x[k].settings = { ...DEFAULT_SETTINGS, ...x[k].settings };
          x[k].activity ??= [];
          x[k].issues ??= [];
        }
        return x;
      }
    }
  } catch (e) {
    persistError = true;
  }
  return {
    version: 1,
    mode: "actual",
    role: "admin",
    theme: "light",
    actual: {
      ...clone(SOURCE_DATA),
      settings: clone(DEFAULT_SETTINGS),
      activity: [
        {
          time: new Date().toISOString(),
          text: "Original workbook loaded · 1 RFP, no identifiable PRs",
        },
      ],
    },
    demo: makeDemo(),
  };
}
function makeDemo() {
  const base = today(),
    pr = [],
    rfp = [];
  for (let i = 0; i < 42; i++) {
    const received = addDays(base, -168 + i * 4),
      type = i % 3 ? "Replenishment" : "New Item",
      po = i < 34 ? addDays(received, [2, 4, 7, 9][i % 4]) : "",
      needed = addDays(received, 12),
      sent = po ? addDays(po, 1) : "",
      committed = sent ? [needed, addDays(sent, 3)].sort().at(-1) : needed;
    pr.push({
      id: "demo-pr-" + i,
      number: "DEMO-PR-" + String(i + 1).padStart(4, "0"),
      received,
      department: LOOKUPS.departments[[3, 4, 5, 7, 8, 10][i % 6]],
      requestedBy: ["A. Santos", "M. Reyes", "J. Cruz", "R. Garcia"][i % 4],
      processedBy: LOOKUPS.processors[i % 5],
      requestType: type,
      category: LOOKUPS.categories[[0, 3, 4, 6, 8][i % 5]],
      supplier: [
        "Sample • Apex Industrial",
        "Sample • Metro Office",
        "Sample • Buildwell Supply",
        "Sample • Pacific Systems",
        "Sample • Allied Materials",
      ][i % 5],
      poNumber: po ? "DEMO-PO-" + String(i + 1).padStart(4, "0") : "",
      poDate: po,
      poSent: sent,
      dateNeeded: needed,
      leadTime: 3,
      committed: "",
      delivery: i < 29 ? addDays(committed, i % 4 === 0 ? 3 : -1) : "",
      manualStatus: i === 39 ? "Partial" : i === 40 ? "Cancelled" : "",
      purchasePrice: 3500 + (i % 11) * 4250,
      costSavings: (i % 4) * 230,
      rachelApproved: "",
      ronaApproved: "",
      mikeApproved: "",
      remarks: "Illustrative demo record — not from the workbook.",
    });
  }
  for (let i = 0; i < 16; i++) {
    const p = pr[i * 2],
      submitted = addDays(base, -45 + i * 3);
    rfp.push({
      id: "demo-rfp-" + i,
      number: "DEMO-RFP-" + (1000 + i),
      submitted,
      vendor: p.supplier,
      reference: p.poNumber,
      si: "DEMO-SI-" + (600 + i),
      amount: p.purchasePrice,
      terms: i % 4 === 0 ? "" : 15,
      due: "",
      released: i < 7 ? addDays(submitted, 8) : "",
      approved: "",
      remarks: "Illustrative demo payment.",
    });
  }
  return {
    pr,
    rfp,
    settings: clone(DEFAULT_SETTINGS),
    issues: [],
    activity: [
      {
        time: new Date().toISOString(),
        text: "Separate demonstration dataset created",
      },
    ],
  };
}
let state = loadState(),
  page = "home",
  tables = {},
  charts = {},
  editing = null,
  pendingImport = null,
  calendarMonth = today().slice(0, 7),
  storageTimer;
const data = () => state[state.mode],
  settings = () => data().settings;
let filters = {
  department: "",
  supplier: "",
  processedBy: "",
  category: "",
  requestType: "",
  deliveryStatus: "",
  from: "",
  to: "",
  search: "",
};
function save(text) {
  if (text) data().activity.unshift({ time: new Date().toISOString(), text });
  data().activity = data().activity.slice(0, 80);
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
    $("#saveStatus").textContent = "Saved locally";
    persistError = false;
  } catch (e) {
    persistError = true;
    $("#saveStatus").textContent = "Not saved";
    toast(
      "Browser storage is unavailable or full. Export a backup now.",
      "error",
    );
  }
}
function toast(message, type = "success") {
  const el = document.createElement("div");
  el.className = "toast";
  el.setAttribute("role", type === "error" ? "alert" : "status");
  el.innerHTML = `<div class="d-flex"><div class="toast-body">${esc(message)}</div><button class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>`;
  $("#toastArea").append(el);
  new bootstrap.Toast(el, { delay: type === "error" ? 9000 : 4500 }).show();
  el.addEventListener("hidden.bs.toast", () => el.remove());
}
const paths = {
  grid: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z",
  file: "M14 2H5v20h14V7z M14 2v6h5 M8 12h8 M8 16h6",
  wallet: "M3 6h17v15H3z M3 6V3h14v3 M15 11h6v6h-6z M17 14h1",
  chart: "M3 3v18h18 M7 16v-5 M12 16V6 M17 16V9",
  calendar: "M3 5h18v16H3z M7 2v6 M17 2v6 M3 10h18",
  settings:
    "M9 3h6l1 4 4 2v6l-4 2-1 4H9l-1-4-4-2V9l4-2z M15 12a3 3 0 1 1-6 0 3 3 0 1 1 6 0",
  shield: "M12 2l8 3v6c0 6-8 11-8 11S4 17 4 11V5z M8 12l3 3 5-6",
  menu: "M4 6h16 M4 12h16 M4 18h16",
  search: "M16 16l5 5 M18 10a8 8 0 1 1-16 0 8 8 0 1 1 16 0",
  moon: "M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11",
  refresh:
    "M20 7v5h-5 M4 17v-5h5 M5 7a8 8 0 0 1 14-1l1 6 M4 12l1 6a8 8 0 0 0 14-1",
  upload: "M12 16V3 M7 8l5-5 5 5 M4 16v5h16v-5",
  download: "M12 3v13 M7 11l5 5 5-5 M4 16v5h16v-5",
  filter: "M3 4h18l-7 8v8l-4-2v-6z",
  truck:
    "M2 6h12v12H2z M14 10h4l4 4v4h-8 M8 18a2 2 0 1 1-4 0 2 2 0 1 1 4 0 M20 18a2 2 0 1 1-4 0 2 2 0 1 1 4 0",
  check: "M5 12l4 4L19 6",
  clock: "M12 8v5l3 2 M21 12a9 9 0 1 1-18 0 9 9 0 1 1 18 0",
  alert: "M12 3l10 18H2z M12 9v5 M12 17v1",
  x: "M6 6l12 12 M18 6L6 18",
};
function icons(root = document) {
  root
    .querySelectorAll("i[data-icon]")
    .forEach(
      (el) =>
        (el.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="${paths[el.dataset.icon] || paths.file}"/></svg>`),
    );
}
function prCalc(r, asof = $("#asOf")?.value || today(), cfg = settings()) {
  const issue = [];
  const cancelled = r.manualStatus === "Cancelled",
    partial = r.manualStatus === "Partial";
  const received = validDate(r.received) ? r.received : "",
    po = validDate(r.poDate) ? r.poDate : "",
    delivery = validDate(r.delivery) ? r.delivery : "";
  if (received && po && po < received)
    issue.push("PO date precedes received date");
  if (received && delivery && delivery < received)
    issue.push("Delivery precedes received date");
  if (delivery && delivery > asof)
    issue.push("Delivery date is after reporting date");
  let target = validDate(r.committed) ? r.committed : "";
  if (!target && validDate(r.poSent)) {
    let lt = String(r.leadTime ?? "").trim();
    let lead = /^\d+(\.\d+)?$/.test(lt) ? Number(lt) : null;
    if (lead === null && lt)
      issue.push("Lead time text requires an explicit committed date");
    if (lead !== null || !lt)
      target = [
        validDate(r.dateNeeded) ? r.dateNeeded : "",
        addDays(r.poSent, lead || 0),
      ]
        .sort()
        .at(-1);
  }
  // A needed date remains a planning target when a PO has not yet been sent.
  if (!target && validDate(r.dateNeeded)) target = r.dateNeeded;
  const age = received ? workingDays(received, po || asof, cfg.holidays) : null;
  const sla =
    r.requestType === "New Item"
      ? cfg.newItem
      : r.requestType === "Replenishment"
        ? cfg.replenishment
        : null;
  const kpi = cancelled
    ? "Excluded"
    : age === null || sla === null
      ? "Not evaluated"
      : po
        ? age <= sla
          ? "Passed"
          : "Failed"
        : age > sla
          ? "Failed"
          : "In progress";
  const complete = !!delivery && !partial && !cancelled;
  const performance =
    complete && target
      ? delivery <= target
        ? "On-time"
        : "Late"
      : complete
        ? "Not evaluated"
        : "Pending";
  const overdue = !cancelled && !complete && target && target < asof;
  const status = cancelled
    ? "Cancelled"
    : partial
      ? "Partial"
      : complete
        ? "Completed"
        : overdue
          ? "Overdue"
          : "Pending";
  return {
    ...r,
    age,
    sla,
    kpi,
    target,
    complete,
    performance,
    status,
    overdue,
    issue,
  };
}
function rfpCalc(r, asof = $("#asOf")?.value || today(), cfg = settings()) {
  const issue = [],
    submitted = validDate(r.submitted) ? r.submitted : "",
    released = validDate(r.released) ? r.released : "";
  const explicit = validDate(r.due) ? r.due : "",
    hasTerms =
      r.terms !== "" &&
      r.terms !== null &&
      r.terms !== undefined &&
      Number.isFinite(Number(r.terms)) &&
      Number(r.terms) >= 0;
  const due =
    explicit ||
    (submitted && hasTerms ? addDays(submitted, Number(r.terms)) : "");
  const target = due || (submitted ? addDays(submitted, cfg.defaultLimit) : "");
  const age = submitted ? diffDays(submitted, released || asof) : null;
  if (age !== null && age < 0) issue.push("End date precedes submission");
  if (released && released > asof)
    issue.push("Release is after reporting date");
  // Workbook: explicit due date is overdue strictly after date; blank-terms fallback at aging >= limit.
  const overdue = !!target && (due ? asof > target : asof >= target),
    soon = target && asof >= addDays(target, -cfg.dueSoon);
  const status = released
    ? "Check released"
    : !submitted && !due
      ? "Needs review"
      : overdue
        ? "Overdue"
        : soon
          ? "Due soon"
          : "On process";
  return {
    ...r,
    due,
    target,
    age: age !== null && age < 0 ? null : age,
    status,
    issue,
    dueBasis: due ? "Payment due date" : "Default aging limit",
  };
}
function filterRows() {
  const pAll = data().pr.map((r) => prCalc(r)),
    rAll = data().rfp.map((r) => rfpCalc(r));
  const attr = ["department", "processedBy", "category", "requestType"];
  const dateOK = (s) =>
    !(
      (filters.from && (!s || s < filters.from)) ||
      (filters.to && (!s || s > filters.to))
    );
  const searchOK = (r) =>
    !filters.search ||
    Object.values(r).some((v) =>
      String(v ?? "")
        .toLowerCase()
        .includes(filters.search),
    );
  const selectedPR = pAll.filter(
    (r) =>
      attr.every((k) => !filters[k] || r[k] === filters[k]) &&
      (!filters.deliveryStatus || r.status === filters.deliveryStatus),
  );
  const refs = new Set(
    selectedPR.flatMap((r) =>
      [r.number, r.poNumber].filter(Boolean).map((x) => x.trim().toLowerCase()),
    ),
  );
  const hasAttributes = attr.some((k) => filters[k]) || filters.deliveryStatus;
  return {
    pr: selectedPR.filter(
      (r) =>
        (!filters.supplier || r.supplier === filters.supplier) &&
        dateOK(r.received) &&
        searchOK(r),
    ),
    rfp: rAll.filter(
      (r) =>
        (!filters.supplier || r.vendor === filters.supplier) &&
        (!hasAttributes ||
          refs.has(String(r.reference).trim().toLowerCase())) &&
        dateOK(r.submitted) &&
        searchOK(r),
    ),
  };
}
function summary(p, r) {
  return {
    total: p.length,
    pending: p.filter((x) => !x.complete && x.status !== "Cancelled").length,
    completed: p.filter((x) => x.complete).length,
    late: p.filter((x) => x.performance === "Late").length,
    onTime: p.filter((x) => x.performance === "On-time").length,
    passed: p.filter((x) => x.kpi === "Passed").length,
    failed: p.filter((x) => x.kpi === "Failed").length,
    rfps: r.length,
    dueSoon: r.filter((x) => x.status === "Due soon").length,
    overdue: r.filter((x) => x.status === "Overdue").length,
    amount: r
      .filter((x) => x.status !== "Check released")
      .reduce((s, x) => s + Number(x.amount || 0), 0),
    openPO: p.filter(
      (x) => x.poNumber && !x.complete && x.status !== "Cancelled",
    ).length,
  };
}
function badge(v) {
  return `<span class="pill ${["Passed", "On-time", "Completed", "Check released"].includes(v) ? "good" : ["Failed", "Late", "Overdue"].includes(v) ? "bad" : ["Pending", "Partial", "Due soon", "In progress"].includes(v) ? "warn" : "neutral"}">${esc(v)}</span>`;
}
function kpiHTML(label, value, icon, sub, kind = "", i = 0) {
  return `<article class="kpi-card ${kind}" style="animation-delay:${i * 25}ms"><div class="kpi-top"><span>${label}</span><i data-icon="${icon}"></i></div><strong class="kpi-value">${value}</strong><div class="kpi-bottom">${sub}</div></article>`;
}
function renderKpis(p, r) {
  const s = summary(p, r),
    items = [
      ["Total PRs", num(s.total), "file", "Purchase requests"],
      [
        "Pending PRs",
        num(s.pending),
        "clock",
        "Includes partial & overdue",
        "warning",
      ],
      ["Completed PRs", num(s.completed), "check", "Fully delivered"],
      [
        "Late deliveries",
        num(s.late),
        "truck",
        "Completed after target",
        "danger",
      ],
      ["On-time deliveries", num(s.onTime), "truck", "Completed by target"],
      ["KPI passed", num(s.passed), "shield", "PO processing within SLA"],
      [
        "KPI failed",
        num(s.failed),
        "alert",
        "PO processing beyond SLA",
        "danger",
      ],
      ["Total RFPs", num(s.rfps), "wallet", "Payment requests"],
      [
        "Due soon payments",
        num(s.dueSoon),
        "calendar",
        `Within ${settings().dueSoon} days`,
        "warning",
      ],
      [
        "Overdue payments",
        num(s.overdue),
        "alert",
        "Requires release follow-up",
        "danger",
      ],
      ["Open purchase orders", num(s.openPO), "file", "Awaiting full delivery"],
      [
        "Total pending amount",
        money(s.amount, true),
        "wallet",
        "Unreleased payment requests",
        "amount",
      ],
    ];
  $("#kpiGrid").innerHTML = items
    .map((a, i) => kpiHTML(a[0], a[1], a[2], a[3], a[4] || "", i))
    .join("");
  $("#rfpKpis").innerHTML = [
    ["Total RFPs", num(s.rfps), "wallet", "Payment requests"],
    ["Due soon", num(s.dueSoon), "clock", "Approaching due date", "warning"],
    ["Overdue", num(s.overdue), "alert", "Awaiting release", "danger"],
    [
      "Pending amount",
      money(s.amount, true),
      "wallet",
      "Total unpaid",
      "amount",
    ],
  ]
    .map((a) => kpiHTML(...a))
    .join("");
  $("#recordScope").textContent = `${p.length} PRs · ${r.length} RFPs in view`;
  icons();
}
function group(arr, key, value = () => 1) {
  const m = {};
  for (const r of arr) {
    const k = r[key] || "Unassigned";
    m[k] = (m[k] || 0) + value(r);
  }
  return m;
}
const colors = [
  "#287e6a",
  "#82b8a2",
  "#dfb45e",
  "#6387b6",
  "#d8756a",
  "#8b9b9b",
];
const emptyChart = {
  id: "emptyState",
  afterDraw(chart) {
    if (chart.canvas.id === "gaugeChart") return;
    if (!chart.data.datasets.some((d) => d.data.some((v) => Number(v) > 0))) {
      const { ctx, chartArea } = chart;
      if (!chartArea) return;
      ctx.save();
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue(
        "--muted",
      );
      ctx.textAlign = "center";
      ctx.font = "13px Segoe UI";
      ctx.fillText(
        "No matching records",
        (chartArea.left + chartArea.right) / 2,
        (chartArea.top + chartArea.bottom) / 2,
      );
      ctx.restore();
    }
  },
};
function plot(id, type, labels, values, opts = {}) {
  charts[id]?.destroy();
  $("#" + id).setAttribute("role", "img");
  $("#" + id).setAttribute(
    "aria-label",
    labels
      .map(
        (label, i) =>
          label +
          ": " +
          (Array.isArray(values[0])
            ? values.map((v) => v[i]).join(" / ")
            : values[i]),
      )
      .join("; ") || "No matching data",
  );
  const dark = state.theme === "dark";
  Chart.defaults.color = dark ? "#a0b5ae" : "#7b8985";
  Chart.defaults.font.family = "Segoe UI, Arial, sans-serif";
  Chart.defaults.font.size = 11;
  const radial = ["doughnut", "pie"].includes(type);
  let datasets = Array.isArray(values[0])
    ? values.map((v, i) => ({
        label: i ? "POs prepared" : "PRs received",
        data: v,
        borderColor: colors[i ? 3 : 0],
        backgroundColor: i ? "#6387b610" : "#287e6a16",
        tension: 0.38,
        fill: !i,
        pointRadius: 3,
        pointHoverRadius: 5,
        borderWidth: 2,
      }))
    : [
        {
          label: opts.label || "Records",
          data: values,
          backgroundColor: radial ? colors : opts.color || colors[0],
          borderColor: radial ? (dark ? "#1b2a2e" : "#fff") : colors[0],
          borderWidth: radial ? 4 : 0,
          borderRadius: radial ? 0 : 5,
          maxBarThickness: 28,
        },
      ];
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 400 },
    plugins: {
      legend: {
        display: radial || Array.isArray(values[0]),
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 16,
          boxWidth: 6,
          font: { size: 10 },
        },
      },
      tooltip: {
        callbacks: opts.money
          ? { label: (c) => money(c.parsed.x ?? c.parsed.y ?? c.parsed) }
          : {},
      },
    },
    ...(radial
      ? { cutout: "72%" }
      : {
          scales: {
            x: {
              grid: { display: false },
              border: { display: false },
              ticks: { maxRotation: 0 },
            },
            y: {
              beginAtZero: true,
              border: { display: false },
              grid: { color: dark ? "#314044" : "#eff2f0" },
              ticks: { precision: 0 },
            },
          },
        }),
    ...opts,
  };
  delete options.money;
  delete options.label;
  delete options.color;
  charts[id] = new Chart($("#" + id), {
    type,
    data: { labels, datasets },
    options,
    plugins: [emptyChart],
  });
}
function months() {
  const a = $("#asOf").value;
  const [y, m] = a.split("-").map(Number);
  return Array.from({ length: 6 }, (_, i) =>
    iso(new Date(Date.UTC(y, m - 6 + i, 1))).slice(0, 7),
  );
}
function monthName(m) {
  return new Date(m + "-01").toLocaleDateString("en-PH", {
    month: "short",
    year: "2-digit",
    timeZone: "UTC",
  });
}
function renderCharts(p, r) {
  const s = summary(p, r),
    ms = months();
  if (page === "home") {
    plot("trendChart", "line", ms.map(monthName), [
      ms.map((m) => p.filter((x) => x.received?.startsWith(m)).length),
      ms.map((m) => p.filter((x) => x.poDate?.startsWith(m)).length),
    ]);
    const ps = group(p, "status");
    plot("prStatusChart", "doughnut", Object.keys(ps), Object.values(ps));
    plot(
      "kpiChart",
      "bar",
      ["Passed", "Failed", "In progress", "Not evaluated"],
      ["Passed", "Failed", "In progress", "Not evaluated"].map(
        (k) => p.filter((x) => x.kpi === k).length,
      ),
      { indexAxis: "y", color: ["#287e6a", "#d8756a", "#dfb45e", "#93a5a0"] },
    );
    const denom = s.onTime + s.late,
      rate = denom ? Math.round((s.onTime / denom) * 100) : null;
    plot("gaugeChart", "doughnut", ["On time", "Late"], [s.onTime, s.late], {
      rotation: -90,
      circumference: 180,
      cutout: "84%",
      plugins: { legend: { display: false }, tooltip: { enabled: !!denom } },
      layout: { padding: 0 },
    });
    $("#gaugeValue").textContent = rate === null ? "—" : rate + "%";
    $("#gaugeFooter").innerHTML =
      `<div><strong>${s.onTime}</strong>On time</div><div><strong>${s.late}</strong>Late</div><div><strong>${p.filter((x) => x.complete && !x.target).length}</strong>No target</div>`;
    const paidStatuses = ["Overdue", "Due soon", "On process", "Needs review"];
    plot(
      "paymentChart",
      "bar",
      paidStatuses,
      paidStatuses.map((st) =>
        r
          .filter((x) => x.status === st)
          .reduce((a, x) => a + Number(x.amount || 0), 0),
      ),
      {
        indexAxis: "y",
        money: true,
        label: "PHP",
        color: ["#d8756a", "#dfb45e", "#287e6a", "#93a5a0"],
      },
    );
  }
  if (page === "analytics") {
    const dg = group(p, "department");
    plot("departmentChart", "bar", Object.keys(dg), Object.values(dg), {
      indexAxis: "y",
    });
    plot(
      "deliveryChart",
      "doughnut",
      ["On time", "Late", "Missing target"],
      [s.onTime, s.late, p.filter((x) => x.complete && !x.target).length],
    );
    const rs = group(r, "status");
    plot("rfpChart", "doughnut", Object.keys(rs), Object.values(rs));
  }
}
const empty = (title, detail = "") =>
  `<div class="empty-state"><i data-icon="file"></i><strong>${esc(title)}</strong><span>${esc(detail)}</span></div>`;
function renderWidgets(p, r) {
  const s = summary(p, r),
    evals = s.passed + s.failed;
  $("#slaWidget").innerHTML =
    `<div class="sla-summary"><strong>${evals ? Math.round((s.passed / evals) * 100) + "%" : "—"}</strong><span>of evaluated PRs passed</span></div><div class="sla-limits"><span class="pill neutral">New item · ${settings().newItem}d</span><span class="pill neutral">Replenishment · ${settings().replenishment}d</span></div>`;
  const actions = [
    ...r
      .filter((x) => ["Overdue", "Due soon", "Needs review"].includes(x.status))
      .map((x) => ({
        ...x,
        kind: "rfp",
        title: `RFP ${x.number}`,
        sub: x.vendor,
        tag: x.status,
        sort: x.status === "Overdue" ? 0 : 2,
      })),
    ...p
      .filter((x) => x.overdue || x.kpi === "Failed" || x.issue.length)
      .map((x) => ({
        ...x,
        kind: "pr",
        title: x.number,
        sub: x.department,
        tag: x.overdue
          ? "Overdue"
          : x.issue.length
            ? "Needs review"
            : "SLA failed",
        sort: x.overdue ? 1 : 3,
      })),
  ].sort((a, b) => a.sort - b.sort);
  $("#actionCount").textContent = actions.length;
  $("#pendingActions").innerHTML = actions.length
    ? actions
        .slice(0, 5)
        .map(
          (x) =>
            `<div class="item-row"><div class="grow"><button data-edit="${x.kind}" data-id="${esc(x.id)}"><strong>${esc(x.title)}</strong><small>${esc(x.sub || "Unassigned")}</small></button></div>${badge(x.tag)}</div>`,
        )
        .join("")
    : empty("Nothing needs attention", "No urgent items in the current view.");
  const depts = [...new Set(p.map((x) => x.department || "Unassigned"))]
    .map((d) => {
      const a = p.filter(
        (x) => (x.department || "Unassigned") === d && x.status !== "Cancelled",
      );
      return {
        name: d,
        total: a.length,
        done: a.filter((x) => x.complete).length,
      };
    })
    .sort(
      (a, b) =>
        b.done / (b.total || 1) - a.done / (a.total || 1) || b.total - a.total,
    );
  $("#departmentRanking").innerHTML = depts.length
    ? depts
        .slice(0, 5)
        .map(
          (d, i) =>
            `<div class="item-row"><span class="rank">${i + 1}</span><div class="grow"><strong>${esc(d.name)}</strong><div class="meter"><span style="width:${d.total ? (d.done / d.total) * 100 : 0}%"></span></div></div><div class="item-metric">${d.total ? Math.round((d.done / d.total) * 100) : 0}%<small>${d.done}/${d.total} complete</small></div></div>`,
        )
        .join("")
    : empty("No department activity", "Add a PR or explore the demo.");
  const suppliers = Object.entries(
    group(
      p.filter((x) => x.supplier),
      "supplier",
      (x) => Number(x.purchasePrice || 0),
    ),
  ).sort((a, b) => b[1] - a[1]);
  $("#topSuppliers").innerHTML = suppliers.length
    ? suppliers
        .slice(0, 5)
        .map(
          ([n, v], i) =>
            `<div class="item-row"><span class="rank">${i + 1}</span><div class="grow"><strong>${esc(n)}</strong><small>${p.filter((x) => x.supplier === n).length} purchase requests</small></div><span class="item-metric">${esc(money(v, true))}</span></div>`,
        )
        .join("")
    : empty(
        "No supplier purchases",
        "Supplier rankings use PR purchase values.",
      );
  $("#activityTimeline").innerHTML =
    data()
      .activity.slice(0, 5)
      .map(
        (x) =>
          `<div class="timeline-row">${esc(x.text)}<small>${esc(new Date(x.time).toLocaleString("en-PH", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }))}</small></div>`,
      )
      .join("") || empty("No recorded changes");
  const active = p.filter((x) => x.status !== "Cancelled"),
    stages = [
      ["Requests received", active.length],
      ["PO prepared", active.filter((x) => x.poDate).length],
      ["PO sent", active.filter((x) => x.poDate && x.poSent).length],
      [
        "Delivery completed",
        active.filter((x) => x.poDate && x.poSent && x.complete).length,
      ],
    ];
  $("#funnel").innerHTML = active.length
    ? stages
        .map(
          ([n, v], i) =>
            `<div class="funnel-step" style="width:${100 - i * 14}%;opacity:${1 - i * 0.13}"><span>${n}</span><strong>${v}</strong></div>`,
        )
        .join("")
    : empty("No procurement milestones");
  const ms = months();
  const max = Math.max(
    1,
    ...depts.flatMap((d) =>
      ms.map(
        (m) =>
          p.filter(
            (x) =>
              (x.department || "Unassigned") === d.name &&
              x.received?.startsWith(m),
          ).length,
      ),
    ),
  );
  $("#heatmap").innerHTML = depts.length
    ? `<table class="heat-table"><thead><tr><th>Department</th>${ms.map((m) => `<th>${monthName(m)}</th>`).join("")}</tr></thead><tbody>${depts
        .map(
          (d) =>
            `<tr><th>${esc(d.name)}</th>${ms
              .map((m) => {
                const n = p.filter(
                  (x) =>
                    (x.department || "Unassigned") === d.name &&
                    x.received?.startsWith(m),
                ).length;
                return `<td style="background:rgba(40,126,106,${n ? 0.13 + (0.78 * n) / max : 0.04});color:${n / max > 0.5 ? "white" : "var(--muted)"}" title="${esc(d.name)} · ${monthName(m)}: ${n} PRs">${n || "—"}</td>`;
              })
              .join("")}</tr>`,
        )
        .join("")}</tbody></table>`
    : empty("No requests in this period");
  $("#rulesGuide").innerHTML =
    `<div class="rule-grid"><div><strong>PR processing age & KPI</strong><p>Inclusive working days from received date to PO date, or the reporting date while no PO exists. Saturday, Sunday and configured holidays are excluded. New items: ${settings().newItem} days; replenishment: ${settings().replenishment} days. Open PRs within SLA remain “In progress”.</p></div><div><strong>Delivery performance</strong><p>Explicit committed date takes priority. Otherwise the target is the later of date needed and PO sent date plus numeric lead time. If no PO was sent, date needed is the planning target. Completed deliveries on or before target pass. Partial deliveries remain open. Missing targets are not evaluated.</p></div><div><strong>RFP age & reminders</strong><p>Calendar days from submission to check release, or reporting date. Due date is explicit or submission + payment terms. With no terms, the ${settings().defaultLimit}-day aging limit applies; overdue begins at that limit. With a due date, overdue begins the following day. Reminders begin ${settings().dueSoon} days before the target.</p></div><div><strong>Dates and exclusions</strong><p>The reporting date controls open-item aging; recorded completed/released states remain visible. Cancelled PRs are excluded from SLA, delivery and funnel measures. No workday count is reported for reversed dates. Working-day counts follow Excel’s inclusive NETWORKDAYS convention.</p></div><div><strong>Funnel and rankings</strong><p>The funnel counts cumulative milestones: each stage requires all preceding stages. Department ranking is completed divided by non-cancelled PRs. Supplier rank sums PR purchase values; payment outlook sums unreleased RFP amounts.</p></div><div><strong>Source quality</strong><p>Unidentified or invalid source rows are saved as exceptions, not treated as complete transactions. Text lead times need an explicit committed date. ${data().issues.length} source exceptions are available in Settings.</p></div></div>`;
  icons();
}
const prFields = [
  ["number", "PR number", "text", true],
  ["received", "Received date", "date", true],
  ["department", "Requesting department", "department", true],
  ["requestedBy", "Requested by", "text"],
  ["processedBy", "Processed by", "processor"],
  ["requestType", "Request type", "requestType", true],
  ["category", "Category", "category"],
  ["supplier", "Supplier", "text"],
  ["poNumber", "PO number", "text"],
  ["poDate", "PO date", "date"],
  ["purchasePrice", "Purchase price (PHP)", "number"],
  ["costSavings", "Cost savings (PHP)", "number"],
  ["rachelApproved", "Rachel approval date", "date"],
  ["ronaApproved", "Rona approval date", "date"],
  ["mikeApproved", "Mike approval date", "date"],
  ["poSent", "Date PO sent", "date"],
  ["dateNeeded", "Date needed", "date"],
  ["leadTime", "Lead time (calendar days)", "number"],
  ["committed", "Committed delivery date (override)", "date"],
  ["delivery", "Actual delivery date", "date"],
  ["manualStatus", "Workflow status", "workflow"],
  ["remarks", "Remarks", "textarea"],
];
const rfpFields = [
  ["number", "RFP number", "text", true],
  ["submitted", "Date submitted", "date", true],
  ["vendor", "Vendor name", "text", true],
  ["reference", "PO / PR number", "text"],
  ["si", "SI number", "text"],
  ["amount", "Amount (PHP)", "number", true],
  ["terms", "Payment terms (calendar days)", "number"],
  ["due", "Due date (optional override)", "date"],
  ["approved", "Rachel approval date", "date"],
  ["released", "Date check released", "date"],
  ["remarks", "Remarks", "textarea"],
];
function renderTables(p, r) {
  const date = (v, t) => (t === "display" ? dateLabel(v) : v || ""),
    text = (v, t) => (t === "display" ? esc(v || "—") : v || ""),
    pill = (v, t) => (t === "display" ? badge(v) : v);
  const idCol = (kind) => ({
    title: kind === "pr" ? "PR number" : "RFP number",
    data: "number",
    render: (v, t, row) =>
      t === "display"
        ? `<button class="table-link" data-edit="${kind}" data-id="${esc(row.id)}">${esc(v)}</button>${row.issue?.length ? ` <span title="${esc(row.issue.join("; "))}">⚠</span>` : ""}`
        : v,
  });
  const col = (title, key, fn = text) => ({
    title,
    data: key,
    defaultContent: "",
    render: fn,
  });
  const ps = [
    idCol("pr"),
    col("Received date", "received", date),
    col("Requesting department", "department"),
    col("Requested by", "requestedBy"),
    col("Processed by", "processedBy"),
    col("Request type", "requestType"),
    col("Category", "category"),
    col("Supplier", "supplier"),
    col("PO number", "poNumber"),
    col("PO date", "poDate", date),
    col("Date needed", "dateNeeded", date),
    col("Target delivery", "target", date),
    col("Delivery date", "delivery", date),
    col("Delivery status", "status", pill),
    col("On-time delivery", "performance", pill),
    col("Aging days", "age", (v) => (v === null ? "—" : v)),
    col("KPI status", "kpi", pill),
    col("Remarks", "remarks", (v, t) =>
      t === "display"
        ? `<div class="table-remark" title="${esc(v)}">${esc(v || "—")}</div>`
        : v,
    ),
  ];
  const rs = [
    col("Date submitted", "submitted", date),
    col("Vendor name", "vendor"),
    col("PO / PR number", "reference"),
    col("SI number", "si"),
    idCol("rfp"),
    col("Amount", "amount", (v, t) => (t === "display" ? money(v) : Number(v))),
    col("Payment terms", "terms", (v, t) =>
      v === "" || v == null ? "—" : t === "display" ? v + " days" : Number(v),
    ),
    col("Due date / limit", "target", date),
    col("Date released", "released", date),
    col("Aging", "age", (v) => (v === null ? "—" : v)),
    col("Status", "status", pill),
    col("Remarks", "remarks"),
  ];
  const kind = page === "pr" ? "pr" : page === "rfp" ? "rfp" : null;
  if (kind) {
    if (tables[kind]) {
      tables[kind]
        .clear()
        .rows.add(kind === "pr" ? p : r)
        .draw(false);
      tables[kind].columns.adjust();
    } else {
      tables[kind] = new DataTable("#" + kind + "Table", {
        data: kind === "pr" ? p : r,
        columns: kind === "pr" ? ps : rs,
        searching: false,
        pageLength: 10,
        lengthMenu: [10, 25, 50, 100],
        order: kind === "pr" ? [[1, "desc"]] : [[0, "desc"]],
        scrollX: true,
        language: {
          emptyTable:
            "No matching records. Add a record, import Excel, or explore the demo.",
        },
      });
    }
  }
  $("#prTableInfo").textContent =
    `${p.length} matching records · select a PR number to view or edit`;
}
function renderCalendar(p, r) {
  const [y, m] = calendarMonth.split("-").map(Number);
  $("#calendarTitle").textContent = new Date(
    Date.UTC(y, m - 1, 1),
  ).toLocaleDateString("en-PH", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const first = new Date(Date.UTC(y, m - 1, 1)),
    start = addDays(iso(first), -first.getUTCDay());
  const events = [
    ...p
      .filter((x) => x.target && x.status !== "Cancelled")
      .map((x) => ({ day: x.target, kind: "pr", id: x.id, label: x.number })),
    ...r
      .filter((x) => x.target)
      .map((x) => ({
        day: x.target,
        kind: "rfp",
        id: x.id,
        label: "RFP " + x.number,
      })),
  ];
  $("#calendarGrid").innerHTML =
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      .map((d) => `<div class="calendar-weekday">${d}</div>`)
      .join("") +
    Array.from({ length: 42 }, (_, i) => {
      const d = addDays(start, i);
      return `<div class="calendar-day ${!d.startsWith(calendarMonth) ? "outside" : ""} ${d === today() ? "today" : ""}"><span>${Number(d.slice(-2))}</span>${events
        .filter((x) => x.day === d)
        .map(
          (e) =>
            `<button class="calendar-event ${e.kind === "rfp" ? "payment" : ""}" data-edit="${e.kind}" data-id="${esc(e.id)}" title="${esc(e.label)}">${esc(e.label)}</button>`,
        )
        .join("")}</div>`;
    }).join("");
  const thisMonth = events
    .filter((e) => e.day.startsWith(calendarMonth))
    .sort((a, b) => a.day.localeCompare(b.day));
  $("#calendarAgenda").innerHTML = thisMonth.length
    ? `<h3>${thisMonth.length} scheduled items</h3>` +
      thisMonth
        .map(
          (e) =>
            `<div class="item-row"><span>${dateLabel(e.day)}</span><button data-edit="${e.kind}" data-id="${esc(e.id)}">${esc(e.label)}</button>${badge(e.kind === "rfp" ? "Payment deadline" : "PR delivery")}</div>`,
        )
        .join("")
    : empty("No scheduled items this month");
}
function filterOptions() {
  const defs = [
    ["department", "Department", data().pr.map((r) => r.department)],
    [
      "supplier",
      "Supplier",
      [...data().pr.map((r) => r.supplier), ...data().rfp.map((r) => r.vendor)],
    ],
    ["processedBy", "Processed by", data().pr.map((r) => r.processedBy)],
    ["category", "Category", data().pr.map((r) => r.category)],
    ["requestType", "Request type", ["New Item", "Replenishment"]],
    [
      "deliveryStatus",
      "Delivery status",
      ["Pending", "Partial", "Completed", "Overdue", "Cancelled"],
    ],
  ];
  $("#filterSelects").innerHTML = defs
    .map(
      ([key, label, values]) =>
        `<label>${label}<select class="form-select" data-filter="${key}"><option value="">All ${label.toLowerCase()}</option>${[
          ...new Set(values.filter(Boolean)),
        ]
          .sort()
          .map(
            (v) =>
              `<option ${filters[key] === v ? "selected" : ""} value="${esc(v)}">${esc(v)}</option>`,
          )
          .join("")}</select></label>`,
    )
    .join("");
}
function renderSettings() {
  for (const [k, v] of Object.entries(settings())) {
    const el = $(`#settingsForm [name="${k}"]`);
    if (el) el.value = k === "holidays" ? v.join("\n") : v;
  }
  $("#roleSelect").value = state.role;
  const issues = data().issues.length;
  $("#qualityInfo").innerHTML =
    `<p><strong>${data().pr.length}</strong> identifiable PRs · <strong>${data().rfp.length}</strong> RFPs<br><strong>${issues}</strong> source exceptions retained for review.</p><p>${state.mode === "actual" ? "The original attachment has blank PR identification fields, with isolated dates and remarks. These rows are retained as exceptions, not counted as PRs. The original RFP has blank payment terms; its default aging deadline is September 3, 2026." : "This dataset is synthetic and kept separate from actual workbook records."}</p>`;
}
function applyRole() {
  const editable = state.role !== "viewer";
  $$(".write-control").forEach((x) => (x.hidden = !editable));
  $("#roleLabel").textContent = {
    admin: "Administrator",
    editor: "Procurement editor",
    viewer: "Read-only viewer",
  }[state.role];
  $$("#settingsForm input,#settingsForm textarea,#settingsForm button").forEach(
    (el) => (el.disabled = state.role !== "admin"),
  );
}
function render() {
  const { pr, rfp } = filterRows();
  $("#dataBanner").classList.toggle("demo", state.mode === "demo");
  $("#dataBanner").innerHTML =
    state.mode === "demo"
      ? '<span><strong>DEMO WORKSPACE</strong> · Illustrative records only. Your workbook data stays separate.</span><button data-mode="actual">Return to workbook data →</button>'
      : `<span><strong>WORKBOOK DATA</strong> · ${data().pr.length} PRs / ${data().rfp.length} RFPs. ${data().issues.length} source rows need review.</span><button data-page="settings">View data quality →</button>`;
  $("#actualMode").classList.toggle("selected", state.mode === "actual");
  $("#demoMode").classList.toggle("selected", state.mode === "demo");
  $("#prCount").textContent = data().pr.length;
  $("#rfpCount").textContent = data().rfp.length;
  $("#footerDate").textContent =
    "Reporting date: " + dateLabel($("#asOf").value);
  $("#filterCount").textContent =
    Object.values(filters).filter(Boolean).length || "";
  renderKpis(pr, rfp);
  renderWidgets(pr, rfp);
  renderTables(pr, rfp);
  renderCalendar(pr, rfp);
  renderSettings();
  applyRole();
  requestAnimationFrame(() => renderCharts(pr, rfp));
}
function navigate(next) {
  if (
    !["home", "pr", "rfp", "analytics", "calendar", "settings"].includes(next)
  )
    next = "home";
  page = next;
  const titles = {
    home: [
      "Operations overview",
      "A clear view of requests, deliveries and payments.",
    ],
    pr: [
      "PR monitoring",
      "Track purchase requests from receipt to full delivery.",
    ],
    rfp: ["RFP monitoring", "Manage payment deadlines and release follow-ups."],
    analytics: [
      "Procurement analytics",
      "Understand performance across teams, suppliers and milestones.",
    ],
    calendar: [
      "Procurement calendar",
      "Plan around upcoming delivery and payment commitments.",
    ],
    settings: [
      "Workspace settings",
      "Manage monitoring rules, data quality and preferences.",
    ],
  };
  $("#pageTitle").textContent = titles[next][0];
  $("#pageSubtitle").textContent = titles[next][1];
  $("#breadcrumb").textContent = {
    home: "Overview",
    pr: "PR monitoring",
    rfp: "RFP monitoring",
    analytics: "Analytics",
    calendar: "Calendar",
    settings: "Settings",
  }[next];
  $$(".page-view").forEach((el) => (el.hidden = el.id !== "page-" + next));
  $$("nav button").forEach((el) =>
    el.classList.toggle("active", el.dataset.page === next),
  );
  document.body.classList.remove("mobile-sidebar");
  history.replaceState(null, "", "#" + next);
  render();
}
function switchMode(mode) {
  state.mode = mode;
  clearFilters(false);
  filterOptions();
  save();
  render();
  toast(
    mode === "demo"
      ? "Demo workspace selected. Changes here do not affect workbook data."
      : "Workbook data selected.",
  );
}
function clearFilters(redraw = true) {
  Object.keys(filters).forEach((k) => (filters[k] = ""));
  $("#dateFrom").value = "";
  $("#dateTo").value = "";
  $("#globalSearch").value = "";
  filterOptions();
  if (redraw) render();
}
function openRecord(kind, id) {
  const row = data()[kind].find((x) => x.id === id) || {};
  editing = { kind, id: id || null };
  const fields = kind === "pr" ? prFields : rfpFields;
  const opts = {
    department: LOOKUPS.departments,
    processor: LOOKUPS.processors,
    category: LOOKUPS.categories,
    requestType: ["New Item", "Replenishment"],
    workflow: ["", "Partial", "Cancelled"],
  };
  const readonly = state.role === "viewer";
  $("#recordModalTitle").textContent =
    (readonly ? "View " : id ? "Edit " : "Add ") +
    (kind === "pr" ? "purchase request" : "payment request");
  $("#recordFields").innerHTML = fields
    .map(([key, label, type, required]) => {
      let v = row[key] ?? "";
      if (!id && ["received", "submitted"].includes(key)) v = today();
      const attrs = `name="${key}" ${required ? "required" : ""} ${readonly ? "disabled" : ""}`;
      let control;
      if (opts[type]) {
        const values = [...new Set([...opts[type], ...(v ? [v] : [])])];
        control = `<select class="form-select" ${attrs}>${type !== "workflow" ? '<option value="">Select…</option>' : ""}${values.map((x) => `<option value="${esc(x)}" ${x === v ? "selected" : ""}>${esc(x || "Automatic (based on dates)")}</option>`).join("")}</select>`;
      } else
        control =
          type === "textarea"
            ? `<textarea class="form-control" ${attrs} rows="2">${esc(v)}</textarea>`
            : `<input class="form-control" ${attrs} type="${type}" value="${esc(v)}" ${type === "number" ? 'min="0" max="999999999999" step="' + (["amount", "purchasePrice", "costSavings"].includes(key) ? "0.01" : "1") + '"' : ""}>`;
      return `<label>${label}${required ? " *" : ""}${control}</label>`;
    })
    .join("");
  $("#recordError").textContent = "";
  $("#deleteRecord").hidden = !id || readonly;
  $('#recordForm button[type="submit"]').hidden = readonly;
  new bootstrap.Modal($("#recordModal")).show();
}
function validateRecord(kind, r) {
  const errs = [];
  const fields = kind === "pr" ? prFields : rfpFields;
  for (const [k, label, t, req] of fields) {
    if (req && !String(r[k] ?? "").trim()) errs.push(label + " is required.");
    if (t === "date" && r[k] && !validDate(r[k]))
      errs.push(label + " is not a valid date.");
    if (
      t === "number" &&
      r[k] !== "" &&
      r[k] != null &&
      (!Number.isFinite(Number(r[k])) || Number(r[k]) < 0)
    )
      errs.push(label + " must be a non-negative number.");
  }
  if (kind === "pr") {
    for (const [end, label] of [
      ["poDate", "PO date"],
      ["delivery", "Delivery date"],
    ])
      if (r.received && r[end] && r[end] < r.received)
        errs.push(label + " cannot precede received date.");
    if (r.poDate && r.poSent && r.poSent < r.poDate)
      errs.push("PO sent date cannot precede PO date.");
  } else if (r.submitted && r.released && r.released < r.submitted)
    errs.push("Release date cannot precede submission.");
  return errs;
}
function saveRecord(ev) {
  ev.preventDefault();
  if (state.role === "viewer") return;
  const { kind, id } = editing;
  const form = Object.fromEntries(new FormData(ev.target));
  for (const [k, , type] of kind === "pr" ? prFields : rfpFields) {
    if (type === "number" && form[k] !== "") form[k] = Number(form[k]);
    else if (typeof form[k] === "string") form[k] = form[k].trim();
  }
  const errors = validateRecord(kind, form);
  if (
    data()[kind].some(
      (r) =>
        r.id !== id &&
        r.number.trim().toLowerCase() === form.number.trim().toLowerCase(),
    )
  )
    errors.push("This record number already exists. Use a unique number.");
  if (errors.length) {
    $("#recordError").textContent = errors.join(" ");
    return;
  }
  const original = data()[kind].find((r) => r.id === id) || {};
  const next = { ...original, ...form, id: id || uid() };
  if (id) data()[kind] = data()[kind].map((r) => (r.id === id ? next : r));
  else data()[kind].push(next);
  save(`${id ? "Updated" : "Added"} ${kind.toUpperCase()} ${next.number}`);
  bootstrap.Modal.getInstance($("#recordModal")).hide();
  filterOptions();
  render();
  toast("Record saved. All calculations updated.");
}
function deleteRecord() {
  if (state.role === "viewer" || !editing?.id) return;
  const { kind, id } = editing;
  const r = data()[kind].find((x) => x.id === id);
  if (!confirm(`Delete ${r.number}? Export a backup first if needed.`)) return;
  data()[kind] = data()[kind].filter((x) => x.id !== id);
  save("Deleted " + kind.toUpperCase() + " " + r.number);
  bootstrap.Modal.getInstance($("#recordModal")).hide();
  filterOptions();
  render();
  toast("Record deleted.");
}
const PR_EXPORT = [
  ["PR Number", "number"],
  ["Received Date", "received"],
  ["Requesting Department", "department"],
  ["Requested By", "requestedBy"],
  ["Processed By", "processedBy"],
  ["Request Type", "requestType"],
  ["Category", "category"],
  ["Supplier", "supplier"],
  ["PO Number", "poNumber"],
  ["PO Date", "poDate"],
  ["Purchase Price", "purchasePrice"],
  ["Cost Savings", "costSavings"],
  ["Rachel Approval Date", "rachelApproved"],
  ["Rona Approval Date", "ronaApproved"],
  ["Mike Approval Date", "mikeApproved"],
  ["PO Sent Date", "poSent"],
  ["Date Needed", "dateNeeded"],
  ["Lead Time", "leadTime"],
  ["Committed Delivery Date", "committed"],
  ["Calculated Target", "target"],
  ["Delivery Date", "delivery"],
  ["Workflow Status", "manualStatus"],
  ["Delivery Status", "status"],
  ["On-Time Delivery", "performance"],
  ["Aging Days", "age"],
  ["KPI Status", "kpi"],
  ["Remarks", "remarks"],
];
const RFP_EXPORT = [
  ["Date Submitted", "submitted"],
  ["Vendor Name", "vendor"],
  ["PO/PR Number", "reference"],
  ["SI Number", "si"],
  ["RFP Number", "number"],
  ["Amount", "amount"],
  ["Payment Terms", "terms"],
  ["Due Date Override", "dueOverride"],
  ["Calculated Due Date", "due"],
  ["Aging Deadline", "target"],
  ["Rachel Approval Date", "approved"],
  ["Date Released", "released"],
  ["Aging", "age"],
  ["Status", "status"],
  ["Remarks", "remarks"],
];
const safeCell = (v) =>
  typeof v === "string" && /^[=+@\t\r]/.test(v) ? "'" + v : (v ?? "");
function exportRows(rows, fields) {
  return rows.map((r) =>
    Object.fromEntries(fields.map(([label, k]) => [label, safeCell(r[k])])),
  );
}
function addSheet(book, name, rows, fields) {
  const sheet = XLSX.utils.json_to_sheet(rows.length ? rows : [], {
    header: fields?.map((x) => x[0]),
  });
  sheet["!cols"] = (fields || Object.keys(rows[0] || {}).map((k) => [k])).map(
    (x) => ({ wch: Math.max(17, Math.min(32, x[0].length + 3)) }),
  );
  if (sheet["!ref"]) sheet["!autofilter"] = { ref: sheet["!ref"] };
  XLSX.utils.book_append_sheet(book, sheet, name);
}
function exportExcel(all = false) {
  const { pr, rfp } = all
    ? {
        pr: data().pr.map((r) => prCalc(r)),
        rfp: data().rfp.map((r) => rfpCalc(r)),
      }
    : filterRows();
  const b = XLSX.utils.book_new();
  addSheet(b, "PR Monitoring", exportRows(pr, PR_EXPORT), PR_EXPORT);
  addSheet(
    b,
    "RFP Monitoring",
    exportRows(
      rfp.map((r) => ({
        ...r,
        dueOverride: data().rfp.find((x) => x.id === r.id)?.due || "",
      })),
      RFP_EXPORT,
    ),
    RFP_EXPORT,
  );
  addSheet(
    b,
    "Rules",
    Object.entries(settings()).map(([Rule, Value]) => ({
      Rule,
      Value: Array.isArray(Value) ? Value.join(",") : Value,
    })),
  );
  addSheet(b, "Report Info", [
    {
      Dataset: state.mode === "demo" ? "SYNTHETIC DEMO" : "Workbook data",
      AsOf: $("#asOf").value,
      Exported: new Date().toISOString(),
      Scope: all ? "Full dataset" : JSON.stringify(filters),
    },
  ]);
  addSheet(
    b,
    "Source Exceptions",
    data().issues.map((x) => ({
      Sheet: x.sheet,
      Row: x.row,
      Reason: x.reason,
      Values: safeCell(JSON.stringify(x.values)),
    })),
  );
  XLSX.writeFile(
    b,
    `Procurement-${state.mode}-${$("#asOf").value}${all ? "-backup" : ""}.xlsx`,
  );
  toast("Excel report exported.");
}
function reportData() {
  const { pr, rfp } = filterRows();
  return { pr, rfp, s: summary(pr, rfp) };
}
function exportPDF() {
  const { pr, rfp, s } = reportData();
  const doc = new jspdf.jsPDF({ orientation: "landscape", format: "a3" });
  doc.setFontSize(20);
  doc.text("PROCURE | Procurement monitoring report", 14, 18);
  doc.setFontSize(10);
  doc.text(
    `${state.mode.toUpperCase()} DATA | As of ${$("#asOf").value} | ${pr.length} PRs | ${rfp.length} RFPs | Pending PHP ${s.amount.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
    14,
    26,
  );
  doc.text(
    "Active filters: " +
      (Object.entries(filters)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join(" | ") || "None"),
    14,
    33,
    { maxWidth: 390 },
  );
  let y = 45;
  const draw = (title, rows, fields) => {
    doc.setFontSize(13);
    doc.text(title, 14, y);
    doc.autoTable({
      head: [fields.map((x) => x[0])],
      body: rows.length
        ? rows.map((r) => fields.map(([, k]) => String(r[k] ?? "")))
        : [["No matching records", ...fields.slice(1).map(() => "")]],
      startY: y + 5,
      styles: { fontSize: 6.5, cellPadding: 2, overflow: "linebreak" },
      headStyles: { fillColor: [23, 104, 91] },
      margin: { left: 14, right: 14 },
    });
    y = doc.lastAutoTable.finalY + 15;
  };
  draw(
    "Purchase requests",
    pr,
    PR_EXPORT.filter(([, k]) =>
      [
        "number",
        "received",
        "department",
        "requestedBy",
        "processedBy",
        "requestType",
        "category",
        "supplier",
        "poNumber",
        "poDate",
        "dateNeeded",
        "delivery",
        "status",
        "age",
        "kpi",
        "remarks",
      ].includes(k),
    ),
  );
  if (y > 230) {
    doc.addPage();
    y = 20;
  }
  draw(
    "Payment requests",
    rfp,
    RFP_EXPORT.filter(([, k]) => !["approved", "dueOverride"].includes(k)),
  );
  doc.save(`Procurement-${state.mode}-${$("#asOf").value}.pdf`);
  toast("PDF report exported.");
}
function printReport() {
  const { pr, rfp, s } = reportData();
  const table = (title, rows, fields) =>
    `<h2>${title}</h2><table><thead><tr>${fields.map((x) => `<th>${esc(x[0])}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${fields.map(([, k]) => `<td>${esc(r[k])}</td>`).join("")}</tr>`).join("") || `<tr><td colspan="${fields.length}">No matching records</td></tr>`}</tbody></table>`;
  $("#printArea").innerHTML =
    `<h1>PROCURE | Procurement monitoring</h1><p>${state.mode.toUpperCase()} DATA · As of ${esc($("#asOf").value)} · ${pr.length} PRs · ${rfp.length} RFPs · Pending ${esc(money(s.amount))}</p><p>Filters: ${esc(
      Object.entries(filters)
        .filter(([, v]) => v)
        .map(([k, v]) => k + ": " + v)
        .join(" / ") || "None",
    )}</p>${table("Purchase requests", pr, PR_EXPORT)}${table("Payment requests", rfp, RFP_EXPORT)}`;
  window.print();
}
function norm(s) {
  return String(s ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}
function excelDate(v) {
  if (v === null || v === undefined || v === "") return "";
  if (v instanceof Date) return iso(v);
  if (typeof v === "number") {
    const d = XLSX.SSF.parse_date_code(v);
    return d
      ? `${d.y}-${String(d.m).padStart(2, "0")}-${String(d.d).padStart(2, "0")}`
      : String(v);
  }
  const s = String(v).trim();
  if (validDate(s)) return s;
  if (/^\d{4}-\d{2}-\d{2}[T ]/.test(s) && validDate(s.slice(0, 10)))
    return s.slice(0, 10);
  const match = s.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (match) {
    const d = `${match[3]}-${match[1].padStart(2, "0")}-${match[2].padStart(2, "0")}`;
    if (validDate(d)) return d;
  }
  return s;
}
const prAliases = {
  number: ["PR Number", "Purchase Request No."],
  received: ["Received Date"],
  requestedBy: ["Requested By"],
  department: ["Requesting Department", "Department"],
  processedBy: ["Processed By"],
  requestType: ["Request Type"],
  category: ["Category", "Category and Notes"],
  supplier: ["Supplier", "Supplier Name"],
  poNumber: ["PO Number", "Purchase Order No."],
  poDate: ["PO Date", "Purchase Order Date"],
  poSent: ["PO Sent Date", "Date P.O Sent"],
  dateNeeded: ["Date Needed"],
  leadTime: ["Lead Time", "Lead Time Requirement"],
  committed: ["Committed Delivery Date"],
  delivery: ["Delivery Date"],
  manualStatus: ["Workflow Status"],
  purchasePrice: ["Purchase Price", "Total Purchase Price in Peso"],
  costSavings: ["Cost Savings"],
  rachelApproved: ["Rachel Approval Date", "Ms. Rachel Date Approved"],
  ronaApproved: ["Rona Approval Date", "Ms. Rona Date Approved"],
  mikeApproved: ["Mike Approval Date", "Sir Mike Date Approved"],
  remarks: ["Remarks"],
};
const rfpAliases = {
  number: ["RFP Number", "RFP No."],
  submitted: ["Date Submitted"],
  vendor: ["Vendor Name"],
  reference: ["PO/PR Number", "PO No. / PR No."],
  si: ["SI Number", "SI No."],
  amount: ["Amount", "Amount (PHP)"],
  terms: ["Payment Terms", "Payment Terms (Days)"],
  due: ["Due Date Override", "Due Date"],
  released: ["Date Released", "Date Check Released"],
  approved: ["Rachel Approval Date", "Ms. Rachel Date Approved"],
  remarks: ["Remarks"],
};
function parseWorkbook(book) {
  const out = {
    pr: [],
    rfp: [],
    issues: [],
    settings: null,
    sheets: [],
    warnings: [],
  };
  for (const name of book.SheetNames) {
    const ws = book.Sheets[name];
    if (norm(name) === "rules") {
      const rows = XLSX.utils.sheet_to_json(ws);
      const cfg = { ...DEFAULT_SETTINGS };
      for (const r of rows) {
        if (
          ["newItem", "replenishment", "dueSoon", "defaultLimit"].includes(
            r.Rule,
          ) &&
          Number.isFinite(Number(r.Value)) &&
          Number(r.Value) >= 0
        )
          cfg[r.Rule] = Number(r.Value);
        if (r.Rule === "holidays")
          cfg.holidays = String(r.Value || "")
            .split(",")
            .filter(validDate);
      }
      out.settings = cfg;
      continue;
    }
    if (norm(name) === "sourceexceptions") {
      for (const r of XLSX.utils.sheet_to_json(ws))
        out.issues.push({
          sheet: r.Sheet || name,
          row: r.Row || "",
          reason: r.Reason || "Source exception",
          values: r.Values || "",
        });
      continue;
    }
    const rows = XLSX.utils.sheet_to_json(ws, {
      header: 1,
      defval: "",
      raw: true,
    });
    let header = -1,
      kind;
    for (let i = 0; i < Math.min(30, rows.length); i++) {
      const keys = rows[i].map(norm);
      if (keys.includes("purchaserequestno") || keys.includes("prnumber")) {
        header = i;
        kind = "pr";
        break;
      }
      if (keys.includes("rfpno") || keys.includes("rfpnumber")) {
        header = i;
        kind = "rfp";
        break;
      }
    }
    if (header < 0) continue;
    out.sheets.push(name);
    const map = Object.fromEntries(
      Object.entries(kind === "pr" ? prAliases : rfpAliases).map(
        ([k, aliases]) => [
          k,
          rows[header].findIndex((v) => aliases.map(norm).includes(norm(v))),
        ],
      ),
    );
    if (
      kind === "pr" &&
      map.remarks < 0 &&
      norm(rows[header][0]) === "purchaserequestno"
    )
      map.remarks = 24;
    const fields = kind === "pr" ? prFields : rfpFields;
    const seen = new Set();
    for (let ri = header + 1; ri < rows.length; ri++) {
      const raw = rows[ri],
        r = { id: uid() };
      let nonempty = false;
      for (const [k, idx] of Object.entries(map)) {
        let val = idx >= 0 ? (raw[idx] ?? "") : "";
        const cell =
          idx >= 0 ? ws[XLSX.utils.encode_cell({ r: ri, c: idx })] : null;
        if (cell?.f) val = "";
        if (val !== "") nonempty = true;
        const type = fields.find((x) => x[0] === k)?.[2];
        r[k] =
          type === "date"
            ? excelDate(val)
            : type === "number"
              ? val === ""
                ? ""
                : typeof val === "number"
                  ? val
                  : /^[\d,]+(?:\.\d+)?$/.test(String(val).trim())
                    ? Number(String(val).replace(/,/g, ""))
                    : val
              : String(val).trim();
      }
      if (!nonempty) continue;
      if (!r.number) {
        out.issues.push({
          sheet: name,
          row: ri + 1,
          reason:
            "Missing " +
            kind.toUpperCase() +
            " number; excluded from transaction totals",
          values: Object.fromEntries(
            Object.entries(r).filter(([k, v]) => k !== "id" && v !== ""),
          ),
        });
        continue;
      }
      if (kind === "pr") {
        if (/^new\s*item$/i.test(r.requestType)) r.requestType = "New Item";
        if (/^replenishment$/i.test(r.requestType))
          r.requestType = "Replenishment";
        if (
          !r.manualStatus &&
          map.remarks >= 0 &&
          /^cancelled$/i.test(r.remarks)
        )
          r.manualStatus = "Cancelled";
      }
      // Incomplete identified rows stay in the register; invalid typed values are retained as exceptions for correction.
      const bad = fields
        .filter(
          ([k, , t]) =>
            (t === "date" && r[k] && !validDate(r[k])) ||
            (t === "number" &&
              r[k] !== "" &&
              (!Number.isFinite(Number(r[k])) || Number(r[k]) < 0)),
        )
        .map(([k]) => k);
      if (bad.length) {
        out.issues.push({
          sheet: name,
          row: ri + 1,
          reason: "Invalid fields retained for review: " + bad.join(", "),
          values: clone(r),
        });
        for (const k of bad) r[k] = "";
      }
      const key = r.number.toLowerCase();
      if (seen.has(key)) {
        out.issues.push({
          sheet: name,
          row: ri + 1,
          reason: "Duplicate record number; last occurrence retained",
          values: r,
        });
        out[kind] = out[kind].filter((x) => x.number.toLowerCase() !== key);
      }
      seen.add(key);
      out[kind].push(r);
    }
    if (kind === "pr" && ws.AI4 && ws.AJ4 && ws.AJ5) {
      out.settings = {
        ...(out.settings || DEFAULT_SETTINGS),
        newItem: Number(ws.AJ4.v) || 8,
        replenishment: Number(ws.AJ5.v) || 3,
      };
    }
    if (kind === "rfp" && ws.D2?.v !== undefined && ws.P10?.v !== undefined) {
      out.settings = {
        ...(out.settings || DEFAULT_SETTINGS),
        dueSoon: Number(ws.D2.v) || 0,
        defaultLimit: Number(ws.P10.v) || 14,
      };
    }
  }
  if (!out.sheets.length)
    throw new Error(
      "No recognized PR or RFP header was found. Use the original workbook or an app export.",
    );
  return out;
}
async function importFile(ev) {
  pendingImport = null;
  $("#confirmImport").disabled = true;
  const file = ev.target.files[0];
  if (!file) return;
  if (file.size > 20 * 1024 * 1024) {
    $("#importSummary").textContent =
      "Please use a workbook smaller than 20 MB.";
    return;
  }
  $("#importSummary").textContent = "Reading workbook…";
  try {
    const book = XLSX.read(await file.arrayBuffer(), {
      type: "array",
      cellDates: false,
    });
    pendingImport = parseWorkbook(book);
    const p = pendingImport;
    $("#importSummary").innerHTML =
      `<div class="data-banner"><span><strong>${p.pr.length} PRs · ${p.rfp.length} RFPs</strong><br>${p.issues.length} exceptions will be retained for review.<br>Recognized: ${esc(p.sheets.join(", "))}</span></div><p class="helper-text">Target: ${state.mode === "demo" ? "DEMO workspace" : "Workbook data"}. ${p.settings ? "Workbook monitoring rules will also be imported." : ""}</p>`;
    $("#confirmImport").disabled = false;
  } catch (e) {
    $("#importSummary").textContent = "Import failed: " + e.message;
    toast("The workbook could not be read. No records were changed.", "error");
  }
}
function commitImport() {
  if (!pendingImport || state.role === "viewer") return;
  const replace = $("#importMethod").value === "replace";
  if (
    replace &&
    !confirm(`Replace all ${state.mode} PR and RFP records with this import?`)
  )
    return;
  const p = pendingImport;
  for (const kind of ["pr", "rfp"]) {
    if (replace) data()[kind] = p[kind];
    else {
      const records = new Map(
        data()[kind].map((r) => [r.number.trim().toLowerCase(), r]),
      );
      for (const r of p[kind]) {
        const key = r.number.trim().toLowerCase();
        records.set(key, {
          ...records.get(key),
          ...r,
          id: records.get(key)?.id || r.id,
        });
      }
      data()[kind] = [...records.values()];
    }
  }
  data().issues = replace ? p.issues : [...data().issues, ...p.issues];
  if (p.settings && state.role === "admin") data().settings = p.settings;
  save(
    `Imported ${p.pr.length} PRs and ${p.rfp.length} RFPs (${replace ? "replace" : "merge"})`,
  );
  pendingImport = null;
  bootstrap.Modal.getInstance($("#importModal")).hide();
  clearFilters(false);
  filterOptions();
  render();
  toast("Import complete. Source exceptions are available in Settings.");
}
function bind() {
  document.addEventListener("click", (ev) => {
    const nav = ev.target.closest("[data-page]");
    if (nav) navigate(nav.dataset.page);
    const rec = ev.target.closest("[data-edit]");
    if (rec) openRecord(rec.dataset.edit, rec.dataset.id);
    const mode = ev.target.closest("[data-mode]");
    if (mode) switchMode(mode.dataset.mode);
  });
  $("#actualMode").onclick = () => switchMode("actual");
  $("#demoMode").onclick = () => switchMode("demo");
  $("#sidebarToggle").onclick = () => {
    const mobile = innerWidth <= 900;
    document.body.classList.toggle(
      mobile ? "mobile-sidebar" : "sidebar-collapsed",
    );
    $("#sidebarToggle").setAttribute(
      "aria-expanded",
      String(
        mobile
          ? document.body.classList.contains("mobile-sidebar")
          : !document.body.classList.contains("sidebar-collapsed"),
      ),
    );
    setTimeout(() => Object.values(charts).forEach((c) => c.resize()), 230);
  };
  $("#themeToggle").onclick = () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    document.body.classList.toggle("dark", state.theme === "dark");
    save();
    render();
  };
  $("#globalSearch").oninput = (ev) => {
    clearTimeout(storageTimer);
    storageTimer = setTimeout(() => {
      filters.search = ev.target.value.toLowerCase().trim();
      render();
    }, 200);
  };
  $("#filtersToggle").onclick = () => {
    $("#filters").hidden = !$("#filters").hidden;
    $("#filtersToggle").setAttribute(
      "aria-expanded",
      String(!$("#filters").hidden),
    );
  };
  $("#filterSelects").onchange = (ev) => {
    if (ev.target.dataset.filter) {
      filters[ev.target.dataset.filter] = ev.target.value;
      render();
    }
  };
  for (const [id, key] of [
    ["dateFrom", "from"],
    ["dateTo", "to"],
  ])
    $("#" + id).onchange = (ev) => {
      filters[key] = ev.target.value;
      if (filters.from && filters.to && filters.from > filters.to) {
        toast("Start date must be on or before the end date.", "error");
        filters[key] = "";
        ev.target.value = "";
      }
      render();
    };
  $("#clearFilters").onclick = () => clearFilters();
  $("#asOf").onchange = () => {
    if (!validDate($("#asOf").value)) $("#asOf").value = today();
    render();
  };
  $("#refreshButton").onclick = () => {
    $("#asOf").value = today();
    $("#loading").hidden = false;
    setTimeout(() => {
      render();
      $("#loading").hidden = true;
      toast("Dashboard refreshed using today’s date.");
    }, 250);
  };
  $("#addPR").onclick = () => openRecord("pr");
  $("#addRFP").onclick = () => openRecord("rfp");
  $("#recordForm").onsubmit = saveRecord;
  $("#deleteRecord").onclick = deleteRecord;
  $("#exportExcel").onclick = () => exportExcel();
  $("#backupAll").onclick = () => exportExcel(true);
  $("#exportPDF").onclick = exportPDF;
  $("#printReport").onclick = printReport;
  $("#importButton").onclick = () => {
    pendingImport = null;
    $("#importFile").value = "";
    $("#importSummary").textContent = "";
    $("#confirmImport").disabled = true;
    new bootstrap.Modal($("#importModal")).show();
  };
  $("#importFile").onchange = importFile;
  $("#confirmImport").onclick = commitImport;
  $("#downloadIssues").onclick = () => {
    const b = XLSX.utils.book_new();
    addSheet(
      b,
      "Source Exceptions",
      data().issues.map((x) => ({
        Sheet: x.sheet,
        Row: x.row,
        Reason: x.reason,
        Values: safeCell(JSON.stringify(x.values)),
      })),
    );
    XLSX.writeFile(b, "Procurement-source-exceptions.xlsx");
  };
  $("#roleSelect").onchange = (ev) => {
    state.role = ev.target.value;
    save();
    applyRole();
    toast("UI role preview updated.");
  };
  $("#settingsForm").onsubmit = (ev) => {
    ev.preventDefault();
    if (state.role !== "admin") return;
    const raw = Object.fromEntries(new FormData(ev.target));
    const holidays = raw.holidays
      .split(/[\n,]/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (holidays.some((s) => !validDate(s))) {
      toast("Use valid YYYY-MM-DD holiday dates.", "error");
      return;
    }
    data().settings = {
      newItem: Number(raw.newItem),
      replenishment: Number(raw.replenishment),
      dueSoon: Number(raw.dueSoon),
      defaultLimit: Number(raw.defaultLimit),
      holidays: [...new Set(holidays)],
    };
    save("Monitoring rules updated");
    render();
    toast("Rules saved; all statuses recalculated.");
  };
  for (const [id, delta] of [
    ["previousMonth", -1],
    ["nextMonth", 1],
  ])
    $("#" + id).onclick = () => {
      const [y, m] = calendarMonth.split("-").map(Number);
      calendarMonth = iso(new Date(Date.UTC(y, m - 1 + delta, 1))).slice(0, 7);
      const rows = filterRows();
      renderCalendar(rows.pr, rows.rfp);
    };
  $("#currentMonth").onclick = () => {
    calendarMonth = today().slice(0, 7);
    const rows = filterRows();
    renderCalendar(rows.pr, rows.rfp);
  };
  window.addEventListener("storage", (ev) => {
    if (ev.key === STORE_KEY)
      toast(
        "This workspace changed in another tab. Reload to use its latest version.",
        "error",
      );
  });
}
function init() {
  try {
    if (!window.bootstrap || !window.Chart || !window.DataTable || !window.XLSX)
      throw new Error(
        "A required local library is missing. Keep the vendor folder beside index.html.",
      );
    $("#asOf").value = today();
    document.body.classList.toggle("dark", state.theme === "dark");
    icons();
    filterOptions();
    bind();
    navigate(location.hash.slice(1) || "home");
    $("#loading").hidden = true;
    if (persistError)
      toast(
        "Saved state could not be read. Original workbook data is loaded; export a backup before editing.",
        "error",
      );
    else save();
  } catch (e) {
    $("#loading").innerHTML =
      `<div><strong>Unable to start the workspace</strong><p>${esc(e.message)}</p></div>`;
    console.error(e);
  }
}
// Public calculation API for future integration and deterministic validation.
globalThis.ProcureCore = {
  workingDays,
  prCalc,
  rfpCalc,
  parseWorkbook,
  validateRecord,
  summary,
  excelDate,
};
if (typeof document !== "undefined") init();
