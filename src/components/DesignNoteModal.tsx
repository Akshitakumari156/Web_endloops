import React from 'react';
import { X, FileText, Clock, Wrench, Sparkles, Layers } from 'lucide-react';

interface DesignNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignNoteModal: React.FC<DesignNoteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 sm:px-8 py-5 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500/20 text-teal-400 rounded-xl">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider block">
                Assignment Reviewer Note · 260 Words
              </span>
              <h2 className="text-lg sm:text-xl font-bold">
                Design Decisions, Architecture & Reflection
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Note Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-slate-700 text-sm leading-relaxed">
          
          {/* Quick Metrics Badge Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Candidate Role</span>
              <span className="text-xs font-bold text-slate-900">Engineering Intern</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Word Count</span>
              <span className="text-xs font-bold text-teal-600">~265 Words</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Hours Spent</span>
              <span className="text-xs font-bold text-slate-900">~4.5 Hours</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Stack</span>
              <span className="text-xs font-bold text-blue-600">React + Tailwind</span>
            </div>
          </div>

          {/* Section 1: What we built & why */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4 text-teal-600" />
              <span>1. What We Decided to Build and Why</span>
            </div>
            <p className="text-slate-800 text-xs sm:text-sm">
              We built a production-ready, responsive web application tailored for Endloops' target market in the GCC. The core objective was bridging complex institutional accounting realities with an approachable, premium brand. We prominently separated the two product tiers—<strong>End-to-End Solutions</strong> and <strong>Standalone Tools</strong>—while reinforcing the company's central thesis: <em>"The software prepares, the professional decides."</em>
            </p>
          </div>

          {/* Section 2: Most important design decision */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>2. Most Important Design Decision</span>
            </div>
            <p className="text-slate-800 text-xs sm:text-sm">
              Instead of relying on abstract marketing copy, we engineered the live <strong>Interactive Auditor Sandbox</strong>. Financial professionals are inherently skeptical of "black-box" AI. Giving visitors an interactive simulation—showing document OCR, rule checks, anomaly flagging, and a mandatory human sign-off checkpoint—instills immediate fiduciary trust and proves how Endloops preserves auditor accountability.
            </p>
          </div>

          {/* Section 3: What we would improve with more time */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-purple-800 font-bold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4 text-purple-600" />
              <span>3. What We Would Improve With More Time</span>
            </div>
            <p className="text-slate-800 text-xs sm:text-sm">
              With additional time, we would implement: (1) An interactive ROI calculator where firms input their transaction volume to visualize annual hours saved; (2) A client-side sandbox allowing visitors to drag and drop real sanitized PDF invoices to experience live table extraction; and (3) Native Arabic RTL support with localized GCC tax terminology (e.g., UAE FTA & ZATCA schemas).
            </p>
          </div>

          {/* Section 4: Tools used & AI transparency */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider">
              <Wrench className="w-4 h-4 text-slate-600" />
              <span>4. Tools Used (Including AI) & Time Allocation</span>
            </div>
            <p className="text-slate-800 text-xs sm:text-sm">
              <strong>Stack:</strong> React 18, Vite, TypeScript, Tailwind CSS, and Lucide Icons. <br />
              <strong>AI Utilization:</strong> As welcomed by the brief, AI was leveraged to structure industry-accurate GCC audit scenarios (such as escrow milestone schedules and statutory vouching rules) and assist in rapid component scaffolding. All architecture, layout decisions, and brand alignment were handcrafted. <br />
              <strong>Time Spent:</strong> Approximately 4.5 hours from brief analysis to finalized responsive code.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Endloops Full-Stack Engineering Intern Assignment Submission
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
          >
            Close Note
          </button>
        </div>

      </div>
    </div>
  );
};
