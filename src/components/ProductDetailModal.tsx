import React from 'react';
import { ProductItem } from '../types';
import { X, Check, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenDemo: (productName?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onOpenDemo }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div 
          className={`h-2 w-full ${
            product.type === 'end-to-end' ? 'bg-teal-500' : 'bg-blue-600'
          }`} 
        />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {product.type === 'end-to-end' ? 'End-to-End Solution' : 'Standalone Modular Tool'}
              </span>
              <span 
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  product.status === 'In Production'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : product.status === 'In Active Deployment'
                    ? 'bg-teal-50 text-teal-700 border border-teal-200'
                    : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}
              >
                {product.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              {product.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 sm:px-8 py-4 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Executive Overview
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Core Feature Matrix */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Automated Capabilities
            </h4>
            <div className="space-y-2.5">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience & Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Ideal For
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.targetAudience.map((aud, aIdx) => (
                  <span key={aIdx} className="text-xs font-semibold bg-white text-slate-800 px-2.5 py-1 rounded-md border border-slate-200">
                    {aud}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-teal-50/60 p-4 rounded-xl border border-teal-100">
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block mb-1">
                Verified Efficiency Impact
              </span>
              <div className="text-lg font-extrabold text-teal-900 mt-1">
                {product.metrics}
              </div>
              <span className="text-[11px] text-teal-700">Measured across GCC production audits</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 sm:p-8 pt-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Includes Human-in-the-Loop Sign-Off Protocol</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenDemo(product.name);
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Schedule Live Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
