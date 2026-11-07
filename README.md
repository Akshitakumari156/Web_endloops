# Endloops | Autonomous Financial Automation Website

> Designed and built for the **Full-Stack Engineering Intern (UI/UX and Product Design)** assignment at **Endloops** (incubated at Alkazim, Dubai).

---

## 📋 The 200–300 Word Submission Note

### 1. What We Decided to Build and Why
We built a responsive, enterprise-grade web application for Endloops that speaks directly to the exacting standards of financial professionals—accountants, auditors, and property finance teams across the GCC and internationally. We gave equal weight to clarity and institutional trust, explicitly delineating Endloops' two core offerings: **End-to-End Solutions** (full-cycle autonomous services) and **Standalone Tools** (modular micro-utilities), anchored by the philosophy: *"The software prepares, the professional decides."*

### 2. Most Important Design Decision
Rather than relying on generic marketing copy, we engineered the live **Interactive Auditor Sandbox**. Financial professionals are inherently cautious about automation because error carry legal and statutory liability. Giving visitors an interactive simulation—showing document OCR, rule checks, anomaly flagging, and a mandatory human sign-off checkpoint—instills immediate fiduciary trust and proves how Endloops preserves auditor accountability.

### 3. What We Would Improve With More Time
With additional time, we would implement:
1. **Interactive ROI & Time-Saved Calculator**: Allowing prospective firms to input monthly document volume and hourly billing rates to visualize annual savings.
2. **Client-side PDF Drag-and-Drop Parser**: Enabling visitors to drop sanitized sample invoices to see live OCR table extraction.
3. **Native Arabic Localization (RTL)**: Supporting UAE Federal Tax Authority (FTA) and Saudi ZATCA compliance terminology.

### 4. Tools Used (Including AI)
- **Tech Stack**: React 18, TypeScript, Tailwind CSS, Lucide Icons, Vite.
- **AI Tooling**: Transparently utilized AI to assist in researching industry-accurate GCC audit workflows (such as Dubai RERA escrow milestones and statutory vouching sampling) and accelerating initial component scaffolding. Layout hierarchy, design system, and verification logic were custom-crafted.

### 5. Hours Spent
Approximately **4.5 hours** across information architecture, component design, responsive styling, interactive sandbox logic, and accessibility auditing.

---

## 🚀 Key Features Built

- **Exact Brand Alignment**: Styled strictly around the provided Endloops identity: deep navy text (`#0B132B`), emerald teal logo anchor (`#00A884`), with royal blue and purple accents.
- **Two-Tier Architecture Showcase**:
  - **5 End-to-End Solutions**: Escrow Audit, Statutory Financial Audit, Budget Review, Interim Audit, Property Management Budget Prep.
  - **6 Standalone Modular Tools**: Purchase-Order Extraction, Vouching Automation, Expense Working, Financial Report Review, Tender Verification, Reconciliation Engine.
- **Live Interactive Auditor Sandbox**:
  - 3 realistic simulation scenarios (Escrow audit, 3-way vouching, bank reconciliation).
  - Multi-step pipeline animation (Ingestion $\rightarrow$ Field OCR $\rightarrow$ Rule Engine $\rightarrow$ Anomaly Flagging $\rightarrow$ Human Decision).
  - Working auditor sign-off desk with hash generation.
- **Interactive Modals**:
  - Product detail modals for all 11 offerings.
  - Full demo request modal with field validation and appointment confirmation.
  - Candidate design note modal embedded directly in the UI for reviewers.
- **Responsive & Accessible**: Mobile hamburger drawer, semantic HTML, and high-contrast WCAG-compliant color ratios.

---

## 🛠️ Local Development & Build

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (TypeScript compile + Vite build)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📦 Deployment Instructions

This project is pre-configured for instant zero-configuration deployment to **Vercel** or **Netlify**:

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

