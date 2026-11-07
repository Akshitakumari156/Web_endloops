import React from 'react';
import { Briefcase, Building, Landmark, CheckCircle2, ArrowRight } from 'lucide-react';

interface AudienceProps {
  onOpenDemo: () => void;
}

export const AudienceTargeting: React.FC<AudienceProps> = ({ onOpenDemo }) => {
  const personas = [
    {
      title: 'Audit & Accounting Firms',
      subtitle: 'Statutory, Escrow & Interim Audits',
      icon: Landmark,
      color: 'teal',
      description: 'Accelerate fieldwork, eliminate manual vouching sampling, and produce standardized working paper packs that partners can review with complete confidence.',
      benefits: [
        'Automated 3-way matching and vouching documentation',
        'Built-in materiality calculations & sampling engines',
        'Full compliance with International Standards on Auditing (ISA)'
      ],
      tag: 'Audit Practice Tier'
    },
    {
      title: 'Corporate Finance & CFOs',
      subtitle: 'Controllers, FP&A & Shared Services',
      icon: Briefcase,
      color: 'blue',
      description: 'Close monthly books in days rather than weeks. Reconcile multi-currency bank accounts, automate purchase order capture, and audit vendor invoices without human fatigue.',
      benefits: [
        'Instant multi-entity bank and GL reconciliation',
        'Automated duplicate and out-of-period expense flags',
        'ERP agnostic (SAP, Oracle, NetSuite, Dynamics)'
      ],
      tag: 'Enterprise Finance'
    },
    {
      title: 'Property Management & OAs',
      subtitle: 'Developers, Escrow & Owners Associations',
      icon: Building,
      color: 'purple',
      description: 'Manage complex service charge allocations, sinking fund schedules, and regulatory escrow milestone verification across extensive real estate portfolios.',
      benefits: [
        'Escrow account drawdowns and milestone certificate audits',
        'Common Area Maintenance (CAM) service charge schedules',
        'Aligned with GCC real estate regulatory frameworks'
      ],
      tag: 'GCC Real Estate'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            Tailored For Financial Leaders
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for teams where accuracy is non-negotiable.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our users rely on tools they can stake their reputation on. Here is how Endloops delivers tangible value across financial sectors.
          </p>
        </div>

        {/* 3 Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/60 rounded-3xl border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white shadow-xs rounded-2xl border border-slate-200/80 text-teal-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                      {persona.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                    {persona.title}
                  </h3>
                  <div className="text-xs font-semibold text-teal-700 mb-4">
                    {persona.subtitle}
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {persona.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {persona.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="font-medium">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold text-xs border border-slate-200 shadow-xs flex items-center justify-center gap-2 group transition-colors"
                >
                  <span>Request Sector Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

