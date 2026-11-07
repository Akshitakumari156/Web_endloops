import React, { useState } from 'react';
import { SIMULATION_SCENARIOS } from '../data/content';
import { 
  Play, RotateCcw, CheckCircle2, AlertTriangle, ShieldCheck, 
  FileText, Sparkles, Layers, Server
} from 'lucide-react';

export const InteractiveSandbox: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState(SIMULATION_SCENARIOS[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [progressStep, setProgressStep] = useState<number>(3); // default completed view for initial impact
  const [auditorDecision, setAuditorDecision] = useState<'none' | 'approved' | 'queried'>('none');
  const [auditorNote, setAuditorNote] = useState('');
  const [serverAuditHash, setServerAuditHash] = useState<string>('SHA256:7f9a2e...b810');
  const [verifiedByServer, setVerifiedByServer] = useState(false);

  const activeScenario = SIMULATION_SCENARIOS.find(s => s.id === selectedScenarioId) || SIMULATION_SCENARIOS[0];

  const handleRunSimulation = async () => {
    setIsRunning(true);
    setProgressStep(0);
    setAuditorDecision('none');
    setVerifiedByServer(false);

    // Step 1: Ingest
    setTimeout(() => setProgressStep(1), 600);

    // Step 2: Extract & Call Backend API
    setTimeout(async () => {
      setProgressStep(2);
      try {
        const res = await fetch('/api/audit/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            scenarioId: activeScenario.id,
            documentTitle: activeScenario.sampleDocument,
            requestedAmount: activeScenario.extractedFields[2]?.value || 'AED 1,450,000.00'
          })
        });
        if (res.ok) {
          const data = await res.json();
          if (data.verdict?.auditHash) {
            setServerAuditHash(data.verdict.auditHash);
            setVerifiedByServer(true);
          }
        }
      } catch {
        // Fallback to client simulation
        setServerAuditHash(`SHA256:${Math.random().toString(36).substring(2, 10)}...${Math.random().toString(36).substring(2, 6)}`);
      }
    }, 1300);

    // Step 3: Complete & Ready for Sign-Off
    setTimeout(() => {
      setProgressStep(3);
      setIsRunning(false);
    }, 2200);
  };

  const handleReset = () => {
    setProgressStep(3);
    setAuditorDecision('none');
    setAuditorNote('');
  };

  return (
    <section id="sandbox" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Auditor Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See how the engine works before touching your live ledgers.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Test real-world financial automation scenarios below. Watch how Endloops parses documents, checks statutory rules, flags anomalies, and prepares drafts for human review.
          </p>
        </div>

        {/* Sandbox Container */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Controls: Scenario Switcher */}
          <div className="bg-slate-950/80 px-6 py-4 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Audit Scenario:</span>
            </div>

            {/* Scenario Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {SIMULATION_SCENARIOS.map((scenario) => (
                <button
                  key={scenario.id}
                  onClick={() => {
                    setSelectedScenarioId(scenario.id);
                    handleReset();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedScenarioId === scenario.id
                      ? 'bg-teal-500 text-slate-950 font-bold shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {scenario.title}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white disabled:opacity-50 transition-all shadow"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? 'Processing...' : 'Re-Run Verification'}</span>
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pipeline Progress Indicator */}
          <div className="bg-slate-900 px-6 py-4 border-b border-slate-800">
            <div className="grid grid-cols-4 gap-2">
              {[
                { step: 0, label: '1. Ingest & OCR', desc: `${activeScenario.documentsCount} documents loaded` },
                { step: 1, label: '2. Field Parsing', desc: 'Confidence extraction' },
                { step: 2, label: '3. Rule Engine', desc: 'Statutory compliance check' },
                { step: 3, label: '4. Auditor Sign-off', desc: 'Human verification required' },
              ].map((item) => (
                <div 
                  key={item.step} 
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    progressStep >= item.step
                      ? 'bg-slate-800/90 border-teal-500/40 text-white'
                      : 'bg-slate-950/40 border-slate-800/60 text-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-0.5">
                    <span className={progressStep >= item.step ? 'text-teal-400' : 'text-slate-500'}>
                      {item.label}
                    </span>
                    {progressStep > item.step ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    ) : progressStep === item.step && isRunning ? (
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                    ) : null}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sandbox Body: Split View (Extracted Data vs Rules & Auditor Sign-off) */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Extracted Document Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-bold text-slate-200">Inspected Document</span>
                  </div>
                  <span className="text-[10px] font-mono bg-teal-950 text-teal-300 border border-teal-800 px-2 py-0.5 rounded">
                    HIGH ACCURACY
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-300 mb-4 bg-slate-900 p-2.5 rounded-lg border border-slate-800 font-mono">
                  {activeScenario.sampleDocument}
                </div>

                <div className="space-y-2.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Extracted Financial Entities
                  </div>
                  {activeScenario.extractedFields.map((field, idx) => (
                    <div key={idx} className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                      <div>
                        <div className="text-[10px] text-slate-400">{field.label}</div>
                        <div className="font-bold text-slate-200 mt-0.5">{field.value}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-teal-400 bg-teal-950/60 px-1.5 py-0.5 rounded border border-teal-900">
                          {field.confidence}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Applied Rules Engine & Human Sign-off Box */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-slate-200">Automated Audit Rules Engine</span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    {activeScenario.rulesApplied.filter(r => r.passed).length} Passed · {activeScenario.rulesApplied.filter(r => !r.passed).length} Anomaly
                  </span>
                </div>

                {/* Rules List */}
                <div className="space-y-2 mb-6">
                  {activeScenario.rulesApplied.map((rule, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-xl border text-xs ${
                        rule.passed 
                          ? 'bg-slate-900/60 border-slate-800 text-slate-300' 
                          : 'bg-amber-950/30 border-amber-600/50 text-amber-200 shadow-sm'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        {rule.passed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <div className="font-semibold">{rule.rule}</div>
                          {rule.note && (
                            <div className={`text-[11px] mt-1 ${rule.passed ? 'text-slate-400' : 'text-amber-300 font-medium'}`}>
                              {rule.note}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Human Auditor Decision Station */}
                <div className="pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Auditor Sign-off Desk (Human in the Loop)</span>
                    </span>
                    <span className="text-[10px] text-slate-400">Required before ledger commit</span>
                  </div>

                  {auditorDecision === 'none' ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Optional review note (e.g. 'Requested supporting cert from contractor')..."
                        value={auditorNote}
                        onChange={(e) => setAuditorNote(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setAuditorDecision('queried')}
                          className="px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                        >
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Flag & Issue Audit Query</span>
                        </button>

                        <button
                          onClick={() => setAuditorDecision('approved')}
                          className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Approve & Seal Lead Schedule</span>
                        </button>
                      </div>
                    </div>
                  ) : auditorDecision === 'approved' ? (
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/60 text-emerald-200 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2 font-bold text-sm text-emerald-300">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Working Paper Signed Off by Engagement Partner</span>
                        </div>
                        {verifiedByServer && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono bg-teal-900/60 text-teal-300 px-2 py-0.5 rounded border border-teal-700">
                            <Server className="w-3 h-3 text-teal-400" />
                            <span>Verified via API</span>
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-slate-300 text-[11px]">
                        Electronic audit hash generated: <code className="font-mono text-teal-300">{serverAuditHash}</code>. Stamped with ISO-compliant audit trail.
                      </p>
                      <button
                        onClick={() => setAuditorDecision('none')}
                        className="mt-3 text-[11px] font-bold text-teal-400 hover:underline"
                      >
                        Reset Decision
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/60 text-amber-200 text-xs">
                      <div className="flex items-center gap-2 font-bold text-sm text-amber-300">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Audit Query Dispatched to Client / Contractor</span>
                      </div>
                      <p className="mt-1 text-slate-300 text-[11px]">
                        Discrepancy logged into exception register. Ledger disbursement blocked until supporting documents are uploaded.
                      </p>
                      <button
                        onClick={() => setAuditorDecision('none')}
                        className="mt-3 text-[11px] font-bold text-amber-400 hover:underline"
                      >
                        Reset Decision
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

          {/* Sandbox Footer note */}
          <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>
              🔒 Endloops operates in zero-knowledge mode: client documents are processed in GCC regional memory.
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-teal-400">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>Backend Engine: Active (/api/audit/verify)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
