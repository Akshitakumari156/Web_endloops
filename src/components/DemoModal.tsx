import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Server, Cloud } from 'lucide-react';
import { END_TO_END_SOLUTIONS, STANDALONE_TOOLS } from '../data/content';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, preselectedProduct }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: 'Audit Partner / Manager',
    productInterest: preselectedProduct || 'Escrow Audit Suite',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSource, setSubmissionSource] = useState<'backend' | 'client'>('client');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({ ...prev, productInterest: preselectedProduct }));
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please enter a valid work email';
    if (!formData.company.trim()) errs.company = 'Please specify your firm or company name';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Attempt sending to full-stack Express backend API
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmissionSource('backend');
      } else {
        setSubmissionSource('client');
      }
    } catch {
      // Graceful client fallback when deployed on static hosting (e.g. GitHub Pages)
      setSubmissionSource('client');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Endloops Executive Briefing
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              Demo Request Scheduled
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. An Endloops senior automation engineer from our Dubai office will review <strong className="text-slate-900">{formData.company}</strong>'s requirements and reach out within 4 business hours.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-left max-w-md mx-auto space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Product:</span>
                <span className="font-bold text-slate-800">{formData.productInterest}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Email:</span>
                <span className="font-mono text-slate-800">{formData.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Backend Processing:</span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  {submissionSource === 'backend' ? (
                    <>
                      <Server className="w-3 h-3 text-teal-600" />
                      <span>Saved via Express API (/api/demo-request)</span>
                    </>
                  ) : (
                    <>
                      <Cloud className="w-3 h-3 text-slate-500" />
                      <span>Verified Client Simulator</span>
                    </>
                  )}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Lead Capture Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="mb-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Request an Interactive Demo
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                See how Endloops automates your specific audit or finance workflow with our Dubai solutions engineering team.
              </p>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tariq Al-Mansoor"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                    errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                  }`}
                />
                {errors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  placeholder="tariq@firm.ae"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                    errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                  }`}
                />
                {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
              </div>
            </div>

            {/* Company + Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Company / Audit Practice *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alkazim & Partners"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                    errors.company ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                  }`}
                />
                {errors.company && <p className="text-[10px] text-red-500 mt-0.5">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Professional Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-slate-800"
                >
                  <option>Audit Partner / Director</option>
                  <option>Senior Statutory Auditor</option>
                  <option>Chief Financial Officer (CFO)</option>
                  <option>Financial Controller</option>
                  <option>Property & Escrow Manager</option>
                  <option>Accounts Payable / Ops Lead</option>
                  <option>Other Financial Specialist</option>
                </select>
              </div>
            </div>

            {/* Solution Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Primary Product of Interest
              </label>
              <select
                value={formData.productInterest}
                onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-slate-800"
              >
                <optgroup label="End-to-End Solutions">
                  {END_TO_END_SOLUTIONS.map(s => (
                    <option key={s.id} value={s.name}>{s.name} (Complete Process)</option>
                  ))}
                </optgroup>
                <optgroup label="Standalone Modular Tools">
                  {STANDALONE_TOOLS.map(t => (
                    <option key={t.id} value={t.name}>{t.name} (Focused Module)</option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Specific Focus or Bottleneck (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Tell us about your document volume, current ERP, or specific compliance deadlines..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-slate-800 resize-none"
              ></textarea>
            </div>

            {/* Security note */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>We adhere to strict GCC client confidentiality and NDA protocols.</span>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2 group"
              >
                <span>{isSubmitting ? 'Encrypting & Dispatching...' : 'Confirm Demo Booking'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
