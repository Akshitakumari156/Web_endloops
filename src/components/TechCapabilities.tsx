import React, { useState } from 'react';
import { TECH_CAPABILITIES } from '../data/content';
import { FileText, GitCompare, ShieldAlert, FileOutput, Cpu, CheckCircle2 } from 'lucide-react';

export const TechCapabilities: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'FileText': return <FileText {...props} />;
      case 'GitCompare': return <GitCompare {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'FileOutput': return <FileOutput {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      default: return <FileText {...props} />;
    }
  };

  const activeCapability = TECH_CAPABILITIES[selectedIdx];

  return (
    <section id="capabilities" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Under The Hood
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What our technology can do.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Five core computational pillars engineered specifically for complex financial ledgers and unstructured transaction evidence.
          </p>
        </div>

        {/* Interactive Capabilities Grid / Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Capability Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {TECH_CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  selectedIdx === idx
                    ? 'bg-white border-teal-500 shadow-md ring-2 ring-teal-500/10'
                    : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className={`p-2.5 rounded-xl ${
                        selectedIdx === idx 
                          ? 'bg-teal-500 text-white' 
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {renderIcon(cap.icon)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm">{cap.title}</h3>
                      <p className="text-xs text-slate-500">{cap.subtitle}</p>
                    </div>
                  </div>

                  <span 
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      selectedIdx === idx
                        ? 'bg-teal-50 text-teal-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {cap.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Detailed Deep Dive Pane */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10"></div>

              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                    {renderIcon(activeCapability.icon)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600">Core Capability</span>
                    <h3 className="text-2xl font-extrabold text-slate-900">{activeCapability.title}</h3>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {activeCapability.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                {activeCapability.description}
              </p>

              {/* Feature Points */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 mb-6">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Engineering Highlights
                </h4>
                <div className="space-y-3">
                  {activeCapability.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Impact Callout */}
              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/60 text-teal-900 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold block">Production Benchmark:</span>
                  <span className="text-teal-800">Standardized across 100,000+ audited transaction line items in the GCC.</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
