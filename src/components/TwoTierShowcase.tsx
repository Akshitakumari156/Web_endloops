import React, { useState } from 'react';
import { END_TO_END_SOLUTIONS, STANDALONE_TOOLS } from '../data/content';
import { ProductItem } from '../types';
import { 
  Building2, FileSpreadsheet, PieChart, CalendarCheck, Home, 
  Receipt, CheckCheck, Calculator, FileCheck2, Scale, GitCompare,
  ArrowRight, Check, Search, Sparkles, Layers, Wrench
} from 'lucide-react';

interface TwoTierShowcaseProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenDemo: () => void;
}

export const TwoTierShowcase: React.FC<TwoTierShowcaseProps> = ({ onSelectProduct, onOpenDemo }) => {
  const [activeTier, setActiveTier] = useState<'all' | 'end-to-end' | 'standalone'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'Building2': return <Building2 {...props} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} />;
      case 'PieChart': return <PieChart {...props} />;
      case 'CalendarCheck': return <CalendarCheck {...props} />;
      case 'Home': return <Home {...props} />;
      case 'Receipt': return <Receipt {...props} />;
      case 'CheckCheck': return <CheckCheck {...props} />;
      case 'Calculator': return <Calculator {...props} />;
      case 'FileCheck2': return <FileCheck2 {...props} />;
      case 'Scale': return <Scale {...props} />;
      case 'GitCompare': return <GitCompare {...props} />;
      default: return <FileSpreadsheet {...props} />;
    }
  };

  const getFilteredProducts = () => {
    let list: ProductItem[] = [];
    if (activeTier === 'all') {
      list = [...END_TO_END_SOLUTIONS, ...STANDALONE_TOOLS];
    } else if (activeTier === 'end-to-end') {
      list = END_TO_END_SOLUTIONS;
    } else {
      list = STANDALONE_TOOLS;
    }

    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase();
    return list.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tagline.toLowerCase().includes(query) ||
      item.features.some(f => f.toLowerCase().includes(query))
    );
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section id="solutions" className="py-24 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/60 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Our Two Product Architectures
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for total process automation or single operational bottlenecks.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you need a complete audit run from ingestion to regulatory pack, or a laser-focused micro-tool for purchase order extraction, Endloops gives you full flexibility.
          </p>
        </div>

        {/* Comparison Explainer Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: End-to-end */}
          <div 
            onClick={() => setActiveTier('end-to-end')}
            className={`p-6 rounded-2xl border cursor-pointer transition-all ${
              activeTier === 'end-to-end'
                ? 'bg-white border-teal-500 shadow-md ring-2 ring-teal-500/20'
                : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">1. End-to-End Solutions</h3>
                  <span className="text-xs font-semibold text-teal-600">Full-Process Financial Engines</span>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                5 Complete Suites
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Complete software that orchestrates an entire financial service or audit cycle from start to finish. Ingests source data, tests controls, runs statistical sampling, drafts working papers, and produces sign-off packs.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium text-slate-600">
              <span className="px-2 py-0.5 bg-slate-100 rounded">Escrow Audit</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">Statutory Audit</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">Budget Review</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">Interim Audit</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">Property Management</span>
            </div>
          </div>

          {/* Card 2: Standalone */}
          <div 
            onClick={() => setActiveTier('standalone')}
            className={`p-6 rounded-2xl border cursor-pointer transition-all ${
              activeTier === 'standalone'
                ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-500/20'
                : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">2. Standalone Tools</h3>
                  <span className="text-xs font-semibold text-blue-600">Focused Modular Utilities</span>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                6 Modular Tools
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Focused, plug-and-play tools that solve one specific operational bottleneck without disrupting existing ERPs or workflows. Can be deployed on their own or integrated via API.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium text-slate-600">
              <span className="px-2 py-0.5 bg-slate-100 rounded">PO Extraction</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">Vouching Automation</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">Expense Working</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">Financial Report Review</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">Reconciliation</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div id="tools" className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* Segmented Tier Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setActiveTier('all')}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTier === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Offerings ({END_TO_END_SOLUTIONS.length + STANDALONE_TOOLS.length})
            </button>
            <button
              onClick={() => setActiveTier('end-to-end')}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTier === 'end-to-end'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              End-to-End Solutions ({END_TO_END_SOLUTIONS.length})
            </button>
            <button
              onClick={() => setActiveTier('standalone')}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTier === 'standalone'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Standalone Tools ({STANDALONE_TOOLS.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, capabilities, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-teal-300 transition-all cursor-pointer group relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 ${
                  product.type === 'end-to-end' ? 'bg-teal-500' : 'bg-blue-500'
                }`}
              />

              <div>
                {/* Header: Icon + Status */}
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className={`p-3 rounded-xl ${
                      product.type === 'end-to-end' 
                        ? 'bg-teal-50 text-teal-700' 
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    {renderIcon(product.iconName)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span 
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
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
                </div>

                {/* Title & Tagline */}
                <div className="mb-3">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 block mb-1">
                    {product.type === 'end-to-end' ? 'Full-Cycle Solution' : 'Standalone Module'}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-1">
                    {product.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Key feature bullets */}
                <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Metrics & Details Trigger */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
                  {product.metrics}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 group-hover:translate-x-0.5 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600 font-medium">No tools match your query "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-bold text-teal-600 hover:underline"
            >
              Clear search filter
            </button>
          </div>
        )}

        {/* Bottom CTA for custom enterprise integrations */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 to-brand-navy-light text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Custom GCC Integrations</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Need a bespoke audit workflow or ERP connector?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We connect Endloops directly into your existing Oracle, SAP, Microsoft Dynamics, or bespoke local ledger software.
            </p>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-slate-900 font-extrabold text-sm rounded-xl transition-all shadow hover:shadow-teal-500/20 flex-shrink-0"
          >
            Talk to an Automation Engineer
          </button>
        </div>

      </div>
    </section>
  );
};

