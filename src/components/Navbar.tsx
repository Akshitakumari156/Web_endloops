import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Sparkles, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenDesignNote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenDesignNote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner: Authentic Alkazim origin */}
      <aside aria-label="Announcement" className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full text-[11px] font-medium border border-teal-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              Alkazim Technology Lab
            </span>
            <span className="hidden sm:inline text-slate-300">
              Spun out of Dubai's premier audit & accounting practice. Tailored for GCC financial accuracy.
            </span>
            <span className="sm:hidden text-slate-300">
              Spun out of Alkazim Audit, Dubai.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDesignNote}
              className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors font-medium text-xs group"
              title="Read the assignment design choices and trade-offs"
            >
              <FileText className="w-3.5 h-3.5 text-teal-400 group-hover:scale-110 transition-transform" />
              <span>Read Candidate Note (Rubric Review)</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-white/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center group">
              <Logo className="transition-transform group-hover:scale-[1.02]" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              <a
                href="#solutions"
                className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors"
              >
                End-to-End Solutions
              </a>
              <a
                href="#tools"
                className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors"
              >
                Standalone Tools
              </a>
              <a
                href="#sandbox"
                className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Live Sandbox</span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-teal-50 text-teal-700 rounded border border-teal-200">
                  Interactive
                </span>
              </a>
              <a
                href="#capabilities"
                className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors"
              >
                Technology
              </a>
              <a
                href="#about"
                className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors"
              >
                About & Origin
              </a>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenDesignNote}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              >
                Assignment Rationale
              </button>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm hover:shadow transition-all group"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              <a
                href="#solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                End-to-End Solutions
              </a>
              <a
                href="#tools"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Standalone Tools
              </a>
              <a
                href="#sandbox"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-teal-700 bg-teal-50/60 rounded-lg flex items-center justify-between"
              >
                <span>Live Auditor Sandbox</span>
                <Sparkles className="w-4 h-4 text-teal-600" />
              </a>
              <a
                href="#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Technology Capabilities
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                About Alkazim & Endloops
              </a>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDesignNote();
                  }}
                  className="w-full py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg text-center"
                >
                  View Assignment Design Note
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow text-center"
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

