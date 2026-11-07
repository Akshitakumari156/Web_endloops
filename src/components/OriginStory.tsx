import React from 'react';
import { Shield, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface OriginStoryProps {
  onOpenDemo: () => void;
}

export const OriginStory: React.FC<OriginStoryProps> = ({ onOpenDemo }) => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-brand-navy rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dubai, United Arab Emirates</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Born on the front lines of Dubai audit and accounting.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                <strong className="text-white font-semibold">Alkazim</strong> is an established accounting and audit firm based in Dubai. Over years of conducting complex statutory audits, escrow inspections, and commercial reviews, our internal technology department engineered proprietary software to eliminate repetitive financial work.
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                That technology department is today <strong className="text-white font-semibold">Endloops</strong>. We are a dedicated company building reliable, intelligent automation for accountants, auditors, finance teams, and property management companies across the GCC and internationally.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Bank-Grade GCC Data Residency</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Tested on Live Regulatory Audits</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow"
                >
                  <span>Partner With Endloops</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Trust Card & Vision */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-6 sm:p-8 space-y-6 backdrop-blur-sm">
                <div className="border-b border-slate-700 pb-4">
                  <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider block mb-1">
                    Where We Are Heading
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    The Trusted Automation Partner for the GCC Region
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  "Endloops is a young company with a clear ambition: to become the trusted automation partner for accounting, audit and property finance teams in the GCC region and beyond. We are growing our engineering, design and quality capabilities to shape how modern finance feels and works."
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Real-world tested: Not theoretical tech, but battle-proven audit software.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Full human sign-off protocol preserved at every single touchpoint.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Deep familiarity with regional UAE, Saudi, and GCC compliance standards.</span>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Headquarters: Dubai, UAE</span>
                  <span className="text-emerald-400">● Active Expansion</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

