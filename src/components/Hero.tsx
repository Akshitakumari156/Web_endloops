import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Play, AlertCircle, FileSpreadsheet, Lock } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onJumpToSandbox: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onJumpToSandbox }) => {
  const [heroApproved, setHeroApproved] = useState(false);

  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50/80 via-white to-white">
      {/* Subtle background ambient gradients (Teal, Blue, Purple) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-24 right-1/4 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span>Financial Automation for GCC Auditors & Finance Teams</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              The software prepares.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-blue-600">
                The professional decides.
              </span>
            </h1>

            {/* Subheading directly addressing the brief's who/what/why */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Much of a finance team's day is lost to repetitive extraction, cross-checking, and vouching. 
              <strong className="font-semibold text-slate-900"> Endloops</strong> handles the heavy document lifting—flagging 
              discrepancies, cross-matching ledgers, and drafting working papers—while keeping final sign-off firmly in your hands.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onJumpToSandbox}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-slate-800 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 shadow-sm transition-all group"
              >
                <Play className="w-4 h-4 text-teal-600 fill-teal-600" />
                <span>Test Live Auditor Sandbox</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">85%</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Vouching Time Cut</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-600">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Human Sign-Off</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">GCC</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Audit Standard Ready</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Hero Mockup Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Card Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-70"></div>

              {/* Main Card Container */}
              <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                {/* Header bar of the simulated software */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-semibold tracking-wide">Endloops Verification Engine · v2.4</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Lock className="w-3 h-3 text-teal-400" />
                    <span>256-Bit Encrypted</span>
                  </div>
                </div>

                {/* Simulated Document Verification */}
                <div className="p-5 space-y-4">
                  {/* File Ingested Pill */}
                  <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 bg-teal-100/70 text-teal-700 rounded-md">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-slate-900 truncate">Escrow_Disbursement_Batch_Q3.pdf</div>
                        <div className="text-[11px] text-slate-500">328 pages · 42 payment vouchers extracted</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded">
                      MATCHED
                    </span>
                  </div>

                  {/* Automated Matching Checks */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded bg-emerald-50/60 border border-emerald-100 text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Contractor Bank IBAN vs Escrow Ledger</span>
                      </div>
                      <span className="text-emerald-700 font-semibold font-mono text-[11px]">100% Match</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-emerald-50/60 border border-emerald-100 text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>VAT Math & FTA Tax Reg No.</span>
                      </div>
                      <span className="text-emerald-700 font-semibold font-mono text-[11px]">Verified</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-amber-50 border border-amber-200 text-slate-800">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="font-medium">Milestone % vs Consultant Stamp</span>
                      </div>
                      <span className="text-amber-800 font-bold bg-amber-100 px-1.5 py-0.5 rounded text-[10px]">
                        FLAGGED: 1.2% Variance
                      </span>
                    </div>
                  </div>

                  {/* Summary of Automation vs Human Control */}
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                    <div className="flex justify-between text-slate-500 mb-1">
                      <span>Engine Calculation:</span>
                      <span className="font-semibold text-slate-800">AED 1,840,250.00</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Audit Status:</span>
                      <span className="font-bold text-amber-700">Awaiting Professional Sign-Off</span>
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <div>
                    {heroApproved ? (
                      <div className="w-full py-2.5 px-4 bg-emerald-100 text-emerald-800 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2 border border-emerald-300">
                        <ShieldCheck className="w-4 h-4 text-emerald-700" />
                        <span>Audit Lead Schedule Signed & Sealed</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => setHeroApproved(true)}
                        className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow group"
                      >
                        <ShieldCheck className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                        <span>Sign-off & Approve Working Paper (Simulate)</span>
                      </button>
                    )}
                    <p className="text-[10px] text-center text-slate-400 mt-2">
                      Try clicking above · Demonstrates the human-in-the-loop audit protocol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

