import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const leadsFilePath = path.join(dataDir, 'leads.json');
if (!fs.existsSync(leadsFilePath)) {
  fs.writeFileSync(leadsFilePath, JSON.stringify([], null, 2));
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Endloops Financial Automation API',
    version: '2.4.0',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Demo Request Lead Submission
app.post('/api/demo-request', (req, res) => {
  try {
    const { fullName, email, company, role, productInterest, message } = req.body;

    if (!fullName || !email || !company) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: fullName, email, and company are required.'
      });
    }

    const newLead = {
      id: `LEAD-${Date.now().toString(36).toUpperCase()}`,
      fullName,
      email,
      company,
      role: role || 'Financial Specialist',
      productInterest: productInterest || 'General Evaluation',
      message: message || '',
      createdAt: new Date().toISOString(),
      status: 'Awaiting GCC Specialist Contact'
    };

    let leads = [];
    try {
      const data = fs.readFileSync(leadsFilePath, 'utf8');
      leads = JSON.parse(data);
    } catch {
      leads = [];
    }

    leads.unshift(newLead);
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2));

    console.log(`[Endloops API] New demo lead saved: ${newLead.id} for ${fullName} (${company})`);

    return res.status(201).json({
      success: true,
      message: 'Demo inquiry successfully logged in Endloops CRM pipeline.',
      lead: newLead
    });
  } catch (error) {
    console.error('[Endloops API] Error saving lead:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Retrieve Leads (Internal / Interviewer inspection endpoint)
app.get('/api/leads', (req, res) => {
  try {
    const data = fs.readFileSync(leadsFilePath, 'utf8');
    const leads = JSON.parse(data);
    res.json({ success: true, count: leads.length, leads });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not retrieve leads' });
  }
});

// Server-side Financial Audit Rule Verification Engine
app.post('/api/audit/verify', (req, res) => {
  try {
    const { scenarioId, documentTitle, requestedAmount } = req.body;

    // Generate cryptographic audit hash
    const hash = crypto
      .createHash('sha256')
      .update(`${scenarioId}-${documentTitle}-${Date.now()}`)
      .digest('hex');

    let auditVerdict = {
      scenarioId,
      auditHash: `SHA256:${hash.substring(0, 16)}...${hash.substring(48)}`,
      status: 'VERIFICATION_COMPLETE',
      timestamp: new Date().toISOString(),
      serverVerified: true,
      humanSignOffRequired: true,
      details: 'All automated ledger rules evaluated by Endloops Core v2.4'
    };

    if (scenarioId === 'escrow-audit-sim') {
      auditVerdict.anomalyCount = 1;
      auditVerdict.flagDescription = 'Missing concrete engineering compliance certificate #CT-882 from attachment packet.';
      auditVerdict.riskLevel = 'MODERATE';
    } else if (scenarioId === 'vouching-sim') {
      auditVerdict.anomalyCount = 1;
      auditVerdict.flagDescription = 'GRN confirms only 420 units delivered vs 500 units billed. Billed variance: AED 10,080.00.';
      auditVerdict.riskLevel = 'HIGH';
    } else {
      auditVerdict.anomalyCount = 1;
      auditVerdict.flagDescription = '3 unidentified intermediary bank wire charges totaling $450.00 flagged for review.';
      auditVerdict.riskLevel = 'LOW';
    }

    res.json({ success: true, verdict: auditVerdict });
  } catch (error) {
    console.error('[Endloops API] Verification error:', error);
    res.status(500).json({ success: false, error: 'Audit calculation failed' });
  }
});

// Serve frontend in production
const distDir = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`[Endloops API Server] Running on http://localhost:${PORT}`);
});

