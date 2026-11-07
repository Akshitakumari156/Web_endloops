import React from 'react';
import { Logo } from './Logo';
import { END_TO_END_SOLUTIONS, STANDALONE_TOOLS } from '../data/content';
import { ProductItem } from '../types';
import { ShieldCheck, MapPin, ArrowUpRight, FileText } from 'lucide-react';

interface FooterProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenDemo: () => void;
  onOpenDesignNote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectProduct, onOpenDemo, onOpenDesignNote }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800">
          
          {/* Col 1: Brand & Alkazim background */}
          <div className="lg:col-span-4 space-y-4">
            <Logo light className="h-8" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Automation software engineered for financial professionals. Born out of Alkazim's accounting and audit practice in Dubai. The software prepares the work, the professional reviews and decides.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>Alkazim Technology Lab · Dubai, United Arab Emirates</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDesignNote}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 border border-slate-700 text-xs font-semibold transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-teal-400" />
                <span>Candidate Assignment Note (200-300 words)</span>
              </button>
            </div>
          </div>

          {/* Col 2: End-to-End Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              End-to-End Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              {END_TO_END_SOLUTIONS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onSelectProduct(item)}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-left flex items-center justify-between w-full group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Standalone Tools */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Standalone Tools
            </h4>
            <ul className="space-y-2 text-xs">
              {STANDALONE_TOOLS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onSelectProduct(item)}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-left flex items-center justify-between w-full group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Trust & Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Engage
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <button
                onClick={onOpenDemo}
                className="w-full py-2 px-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-center transition-colors block"
              >
                Schedule Demo
              </button>
              <a
                href="#sandbox"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Test Interactive Sandbox
              </a>
              <a
                href="#capabilities"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Technology Stack
              </a>
              <a
                href="#about"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                About Alkazim & Dubai Hub
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>GCC Fiduciary Compliant</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Endloops Technologies. Originally incubated at Alkazim, Dubai. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Confidential Assessment Material</span>
            <button
              onClick={onOpenDesignNote}
              className="text-teal-400 hover:underline"
            >
              Rubric Criteria Checklist
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
