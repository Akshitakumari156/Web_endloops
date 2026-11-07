import React from 'react';
import { UserCheck, CheckCircle2 } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            Our Core Operating Thesis
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Automation should empower judgment, not replace it.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Financial figures carry legal, statutory, and fiduciary weight. Pure "black-box" AI that makes unsupervised assumptions creates catastrophic audit exposure. 
            Here is how Endloops fundamentally redesigns the equation:
          </p>
        </div>

        {/* 4-Step Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {/* Step 1 */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 p-6 rounded-2xl relative hover:border-teal-500/40 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-sm mb-4 border border-teal-500/20">
              01
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
              Ingest & Extract
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Upload hundreds of invoices, POs, bank feeds, or contracts. The engine extracts granular numbers, dates, line items, and entities without manual templates.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center text-[11px] text-teal-400 font-mono">
              <span>Software Prepares</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 p-6 rounded-2xl relative hover:border-blue-500/40 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-sm mb-4 border border-blue-500/20">
              02
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              Compare & Match
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Performs 3-way matching across ledgers, checks quotes, and cross-references general ledger accounts with millisecond speed and fuzzy tolerance.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center text-[11px] text-blue-400 font-mono">
              <span>Software Prepares</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 p-6 rounded-2xl relative hover:border-purple-500/40 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-sm mb-4 border border-purple-500/20">
              03
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Flag Rules & Variances
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Surfaces duplicates, calculation mismatches, out-of-period cutoffs, and regulatory breaches directly into an audit-ready lead schedule.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center text-[11px] text-purple-400 font-mono">
              <span>Software Prepares</span>
            </div>
          </div>

          {/* Step 4 (The Human Decision Point) */}
          <div className="bg-gradient-to-b from-teal-900/40 to-slate-800 border-2 border-teal-500/60 p-6 rounded-2xl relative shadow-lg shadow-teal-500/10">
            <div className="w-10 h-10 rounded-xl bg-teal-500 text-slate-900 flex items-center justify-center font-extrabold text-sm mb-4 shadow">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-teal-300 mb-2">
              Review & Sign-Off
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              The professional reviews the verified drafts and flagged exceptions. No transaction or ledger entry is finalized without explicit human sign-off.
            </p>
            <div className="mt-4 pt-3 border-t border-teal-500/40 flex items-center text-[11px] text-teal-300 font-mono font-bold">
              <span>The Professional Decides</span>
            </div>
          </div>

        </div>

        {/* Comparison Callout */}
        <div className="mt-14 bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl flex-shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Reliability and clarity matter as much as appearance.
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Born out of Alkazim’s audit practice in Dubai, every tool was built from the ground up to withstand statutory scrutiny and partner reviews.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-300 font-mono bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-700 flex-shrink-0">
            <span className="text-emerald-400">●</span>
            <span>Zero Unverified Ledger Writes</span>
          </div>
        </div>

      </div>
    </section>
  );
};
