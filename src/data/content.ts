import { ProductItem, TechCapability, SimulationScenario } from '../types';

export const END_TO_END_SOLUTIONS: ProductItem[] = [
  {
    id: 'escrow-audit',
    name: 'Escrow Audit Suite',
    type: 'end-to-end',
    tagline: 'Autonomous real estate escrow compliance and fund verification',
    description: 'Runs complete end-to-end audits of property escrow accounts, aligning project milestone payments, developer drawdowns, and bank statements with GCC real estate regulatory frameworks.',
    features: [
      'Automatic reconciliation of trustee bank statements against developer project books',
      'Contractor certificate validation against approved engineering completion milestones',
      'Instant detection of non-permitted disbursement requests or threshold breaches',
      'Generates regulator-ready escrow audit working papers and sign-off summaries'
    ],
    status: 'In Production',
    targetAudience: ['Audit Firms', 'Escrow Trustees', 'Real Estate Authorities'],
    metrics: '92% faster escrow audit turnaround',
    iconName: 'Building2'
  },
  {
    id: 'financial-audit',
    name: 'Statutory Financial Audit',
    type: 'end-to-end',
    tagline: 'Full-cycle automated working paper preparation and substantive testing',
    description: 'Orchestrates the entire substantive testing cycle from initial trial balance ingestion to lead schedule drafting, sample extraction, and variance analysis.',
    features: [
      'Ingests multi-currency general ledgers and maps them to standard chart of accounts',
      'Calculates materiality thresholds and auto-selects statistical sampling units',
      'Performs analytical procedures, prior-year roll-forwards, and horizontal ratio analysis',
      'Compiles structured working papers ready for engagement partner review'
    ],
    status: 'In Production',
    targetAudience: ['Chartered Accountants', 'Independent Audit Firms', 'Corporate Controllers'],
    metrics: '70% reduction in prep hours per file',
    iconName: 'FileSpreadsheet'
  },
  {
    id: 'budget-review',
    name: 'Budget Review & Analysis',
    type: 'end-to-end',
    tagline: 'Multi-entity corporate budget verification and variance diagnostics',
    description: 'Systematically assesses proposed operational and capital expenditure budgets against historical performance, contractual commitments, and strategic forecasting caps.',
    features: [
      'Automated baseline cross-checking against 36 months of historical audited actuals',
      'Departmental expenditure stress-testing under custom revenue scenario models',
      'Flags unbudgeted line items, excessive run-rate increases, and phantom cost allocations',
      'Executive dashboard summarizing key variances and audit justification memos'
    ],
    status: 'In Active Deployment',
    targetAudience: ['CFO Offices', 'FP&A Directors', 'Holding Group Finance'],
    metrics: '10x faster variance root-cause analysis',
    iconName: 'PieChart'
  },
  {
    id: 'interim-audit',
    name: 'Interim Audit Automation',
    type: 'end-to-end',
    tagline: 'Continuous quarterly and half-year audit controls verification',
    description: 'Accelerates mid-year reviews by continuously testing internal controls, tracking balance sheet movements, and flagging high-risk journal entries before year-end.',
    features: [
      'Continuous monitoring of automated vs manual journal entries',
      'Pre-close reconciliation verification across high-volume transaction accounts',
      'Automated roll-forward of fixed asset registers, depreciation, and amortisation schedules',
      'Generates interim review memorandums with documented audit trails'
    ],
    status: 'In Production',
    targetAudience: ['Audit Partners', 'Internal Audit Teams', 'Compliance Officers'],
    metrics: '3-week reduction in year-end audit crunch',
    iconName: 'CalendarCheck'
  },
  {
    id: 'property-budget-prep',
    name: 'Property Management Budget Prep',
    type: 'end-to-end',
    tagline: 'Service charge modeling, reserve fund allocation, and tenant schedules',
    description: 'Tailored specifically for GCC real estate and owners associations (OA) to generate compliant annual service charge budgets and sinking fund projections.',
    features: [
      'Apportions common area maintenance costs based on gross leasable area & title deed splits',
      'Audits facility management supplier contracts and utility historical tariff models',
      'Generates owner-ready billing schedules and regulatory submission packets',
      'Full audit trail ensuring compliance with regional property governance authorities'
    ],
    status: 'In Active Deployment',
    targetAudience: ['Property Managers', 'Owners Association Managers', 'Asset Managers'],
    metrics: '100% compliant service charge filings',
    iconName: 'Home'
  }
];

export const STANDALONE_TOOLS: ProductItem[] = [
  {
    id: 'purchase-order-extraction',
    name: 'Purchase-Order Extraction',
    type: 'standalone',
    tagline: 'High-precision structured data ingestion from complex PO formats',
    description: 'Extracts line items, delivery terms, tax breakdown, and vendor IDs from scanned PDFs, images, and digital orders with zero template configuration.',
    features: [
      'Handles multi-page tabular data, split line items, and multi-currency formats',
      'Auto-normalizes vendor names against your master vendor ledger',
      'Flags ambiguous line descriptions and currency mismatches for review',
      'Direct API or Excel/CSV export directly into ERP systems'
    ],
    status: 'In Production',
    targetAudience: ['Accounts Payable', 'Procurement Teams', 'Audit Juniors'],
    metrics: 'Sub-second document extraction',
    iconName: 'Receipt'
  },
  {
    id: 'vouching-automation',
    name: 'Vouching Automation',
    type: 'standalone',
    tagline: 'Instant 3-way matching across PO, GRN, and vendor invoice',
    description: 'Eliminates repetitive manual sampling and vouching. Binds supporting documentation together and flags quantity, price, and tax variances automatically.',
    features: [
      'Automated 3-way document matching (PO $\\leftrightarrow$ Goods Receipt $\\leftrightarrow$ Invoice)',
      'Identifies unauthorized price revisions and duplicate supplier billing',
      'Creates audit-ready hyperlinked electronic vouching packets',
      'Leaves final sign-off toggle with the reviewing auditor'
    ],
    status: 'In Production',
    targetAudience: ['Statutory Auditors', 'AP Audit Clerks', 'Financial Controllers'],
    metrics: '85% vouching cycle time eliminated',
    iconName: 'CheckCheck'
  },
  {
    id: 'expense-working-automation',
    name: 'Expense Working Automation',
    type: 'standalone',
    tagline: 'Rule-based categorization, accruals testing, and VAT verification',
    description: 'Transforms raw expense ledgers and receipts into structured audit working papers with prepayment calculations and tax compliance checks.',
    features: [
      'Auto-calculates period cut-offs, prepaid expense amortisation, and accrued liabilities',
      'Verifies VAT rates against regional tax authority guidelines (e.g., FTA in UAE)',
      'Identifies abnormal out-of-period expense items and suspicious rounded payments',
      'Standardized Excel working paper export with live formulas'
    ],
    status: 'In Production',
    targetAudience: ['Tax Consultants', 'Corporate Accountants', 'Audit Seniors'],
    metrics: 'Zero formula errors in working papers',
    iconName: 'Calculator'
  },
  {
    id: 'financial-report-review',
    name: 'Financial Report Review',
    type: 'standalone',
    tagline: 'Cross-statement consistency, cast checks, and footnote cross-referencing',
    description: 'Scans complete financial statements to verify mathematical accuracy, internal casting, cross-statement consistency, and disclosure note alignment.',
    features: [
      'Automated horizontal and vertical footing and cross-casting verification',
      'Matches note disclosures to face-of-statement balance figures',
      'Flags terminology discrepancies and prior-year comparative mismatches',
      'Audit risk heat-map pinpointing areas requiring disclosure modification'
    ],
    status: 'In Development',
    targetAudience: ['Audit Engagement Partners', 'Technical Review Committees', 'Reporting Managers'],
    metrics: 'Comprehensive casting in 12 seconds',
    iconName: 'FileCheck2'
  },
  {
    id: 'tender-verification',
    name: 'Tender Verification',
    type: 'standalone',
    tagline: 'Automated multi-contractor bid comparison and qualification matrix',
    description: 'Compares complex commercial proposals and bill-of-quantities (BOQ) submissions across competing contractors to spot unpriced items and front-loading.',
    features: [
      'Normalizes disparate contractor BOQ formats into a single unified benchmark',
      'Flags unpriced line items, arithmetic errors, and abnormal rate outliers',
      'Generates commercial evaluation comparative scoring sheets',
      'Audits compliance certificates and warranty terms against tender requirements'
    ],
    status: 'In Development',
    targetAudience: ['Quantity Surveyors', 'Commercial Managers', 'Tender Committees'],
    metrics: 'Instant side-by-side commercial matrix',
    iconName: 'Scale'
  },
  {
    id: 'reconciliation',
    name: 'Reconciliation Engine',
    type: 'standalone',
    tagline: 'Multi-source bank, intercompany, and vendor ledger reconciliation',
    description: 'High-speed fuzzy matching engine that resolves high-volume discrepancies across bank feeds, merchant processors, and subsidiary balances.',
    features: [
      'Fuzzy matching algorithms accommodating timing delays and bank fee deductions',
      'Multi-currency intercompany balance netting and elimination support',
      'Categorizes unreconciled reconciling items by aging and root cause',
      'Produces audit-trail documentation explaining resolved variance breaks'
    ],
    status: 'In Production',
    targetAudience: ['Treasury Teams', 'Finance Operations', 'General Ledger Accountants'],
    metrics: '98% automated match rate',
    iconName: 'GitCompare'
  }
];

export const TECH_CAPABILITIES: TechCapability[] = [
  {
    title: 'Read Documents',
    subtitle: 'Extract with context',
    description: 'Ingests messy real-world financial documents—invoices, purchase orders, contracts, and bank statements—extracting structured line items, dates, and amounts without brittle manual templates.',
    bullets: ['Scanned & digital PDF OCR', 'Complex nested tables parsing', 'Multi-currency & multilingual'],
    icon: 'FileText',
    badge: 'Intelligent Ingestion'
  },
  {
    title: 'Compare and Match',
    subtitle: 'Cross-document verification',
    description: 'Checks supporting source documentation against accounting ledgers, or evaluates multi-vendor quotations side-by-side with high-precision fuzzy matching.',
    bullets: ['3-way matching (PO, GRN, Invoice)', 'Bank statement to GL ledger', 'Vendor quote comparative matrices'],
    icon: 'GitCompare',
    badge: 'Deterministic Matching'
  },
  {
    title: 'Check Against Rules',
    subtitle: 'Anomaly & fraud detection',
    description: 'Flags missing documentation, arithmetic mismatches, duplicate payments, threshold breaches, and items outside agreed contractual or statutory guidelines.',
    bullets: ['Duplicate invoice detection', 'Out-of-period cut-off tests', 'Regulatory & VAT compliance checks'],
    icon: 'ShieldAlert',
    badge: 'Automated Guardrails'
  },
  {
    title: 'Prepare Drafts',
    subtitle: 'Audit-ready deliverables',
    description: 'Generates standardized audit schedules, electronic working papers, variance reports, and client-ready memos formatted with live formulas and full audit trails.',
    bullets: ['Excel working papers with live formulas', 'Regulatory submission packages', 'Executive summary memos'],
    icon: 'FileOutput',
    badge: 'Human-in-the-Loop Sign-off'
  },
  {
    title: 'Handle Bulk Work',
    subtitle: 'Scalable processing without fatigue',
    description: 'Processes hundreds or thousands of financial documents simultaneously in seconds, eliminating manual bottlenecks during peak audit seasons and month-end closes.',
    bullets: ['Batch ingestion of 500+ files', 'Parallel verification pipelines', 'Real-time job progress tracking'],
    icon: 'Cpu',
    badge: 'High-Volume Scalability'
  }
];

export const SIMULATION_SCENARIOS: SimulationScenario[] = [
  {
    id: 'escrow-audit-sim',
    title: 'Dubai Escrow Disbursement Audit',
    description: 'Verify 42 contractor payment certificates against the approved escrow engineering milestone curve and bank ledger.',
    documentsCount: 42,
    sampleDocument: 'Certificate #PC-2024-088 · Al-Barsha Heights Tower',
    extractedFields: [
      { label: 'Contractor', value: 'Apex Structural Contracting LLC', confidence: '99.8%' },
      { label: 'Milestone Claimed', value: 'Floor 18 Slab Casting (40% Milestone)', confidence: '99.4%' },
      { label: 'Amount Requested', value: 'AED 1,450,000.00', confidence: '100%' },
      { label: 'Escrow Account No.', value: '028-4491-001 (Emirates NBD)', confidence: '99.9%' }
    ],
    rulesApplied: [
      { rule: 'Verify Independent Engineer stamp on completion certificate', passed: true, note: 'Signed by Bureau Veritas on Oct 14' },
      { rule: 'Check escrow account available balance above statutory reserve', passed: true, note: 'Retention balance: AED 8.4M (Exceeds minimum)' },
      { rule: 'Cross-check against registered bill of quantities (BOQ)', passed: false, note: 'FLAG: Concrete testing certificate #CT-882 missing from attachment packet' }
    ],
    resultSummary: '1 Anomaly Flagged · Human Auditor Attention Required',
    requiresSignOff: true
  },
  {
    id: 'vouching-sim',
    title: '3-Way Vouching & Duplicate Check',
    description: 'Test vendor invoice against signed Goods Receipt Note (GRN) and Purchase Order approval limits.',
    documentsCount: 156,
    sampleDocument: 'Supplier Invoice #INV-88912 · Gulf Tech Logistics',
    extractedFields: [
      { label: 'Vendor', value: 'Gulf Tech Logistics FZCO', confidence: '99.9%' },
      { label: 'PO Reference', value: 'PO-2024-9104', confidence: '99.5%' },
      { label: 'Billed Quantity', value: '500 units @ AED 120.00', confidence: '100%' },
      { label: 'Total Billed', value: 'AED 60,000.00 + 5% VAT (AED 63,000)', confidence: '100%' }
    ],
    rulesApplied: [
      { rule: 'PO Price vs Invoice Price match', passed: true, note: 'Matches contract price of AED 120.00/unit' },
      { rule: 'Quantity Received (GRN) vs Quantity Invoiced', passed: false, note: 'FLAG: GRN #GR-402 confirms only 420 units delivered. 80 units pending' },
      { rule: 'Duplicate invoice number check across 24 months', passed: true, note: 'No duplicate entry found in General Ledger' }
    ],
    resultSummary: 'Discrepancy: Invoiced AED 63,000 vs Received Goods AED 52,920 (Variance: AED 10,080)',
    requiresSignOff: true
  },
  {
    id: 'reconciliation-sim',
    title: 'Multi-Currency Bank & GL Reconciliation',
    description: 'Match 1,240 bank feed transactions against General Ledger with foreign exchange spot rate verification.',
    documentsCount: 1240,
    sampleDocument: 'Standard Chartered USD Account Statement (Month-end)',
    extractedFields: [
      { label: 'Opening Balance', value: '$1,420,800.50', confidence: '100%' },
      { label: 'Closing Balance', value: '$1,894,320.10', confidence: '100%' },
      { label: 'Matched Records', value: '1,237 of 1,240 (99.76%)', confidence: '99.7%' },
      { label: 'Unreconciled Difference', value: '$450.00', confidence: '100%' }
    ],
    rulesApplied: [
      { rule: 'Automatic 1-to-1 exact amount and reference match', passed: true, note: '1,190 transactions matched automatically' },
      { rule: 'Fuzzy match within 3 business days tolerance window', passed: true, note: '47 transactions matched with bank value-date lag' },
      { rule: 'Unidentified bank charges or merchant fee deductions', passed: false, note: 'FLAG: 3 unidentified intermediary wire charges totaling $450.00' }
    ],
    resultSummary: 'Automated 99.76% of transactions · 3 bank charges queued for review',
    requiresSignOff: true
  }
];

export const SUBMISSION_NOTE_TEXT = `What We Built and Why:
We designed and built a premium, responsive web application for Endloops that establishes immediate credibility for financial professionals across the GCC and internationally. We prioritized clarity around Endloops' two core offerings—End-to-End Solutions and Standalone Tools—while highlighting their central philosophy: "The software prepares, the professional decides."

Most Important Design Decision:
We engineered an interactive, live "Auditor Sandbox" simulation rather than relying on static marketing copy. In financial software, accountants and auditors demand proof of reliability, transparent audit trails, and human-in-the-loop control. Allowing visitors to simulate an Escrow Audit or 3-Way Vouching cycle and inspect how anomalies are flagged directly addresses their primary hesitation regarding AI automation.

What We Would Improve With More Time:
With additional time, we would build: (1) An interactive custom ROI & hour-savings calculator where firms input their team size and vouching volume; (2) A live drag-and-drop document sandbox allowing users to upload a sample sanitized PDF invoice and watch real-time field extraction; and (3) Full Arabic localization (RTL support) tailored for regional UAE and Saudi Arabian regulatory bodies.

Tools Used:
We utilized React 18, TypeScript, Tailwind CSS, Lucide Icons, and Vite. For design exploration, typography hierarchy, and financial workflow structuring, we leveraged AI assistance to rapidly refine industry-standard audit terminology (e.g., escrow milestones, substantive testing, 3-way matching) and ensure the copy reflected Dubai audit realities.

Hours Spent:
Approximately 4.5 hours across information architecture, component design, responsive styling, interactive sandbox logic, and accessibility auditing.`;

