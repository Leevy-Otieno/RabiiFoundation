import React from 'react';
import { ShieldCheck, Download, CheckCircle2 } from 'lucide-react';

export default function ImpactPage() {
  const financialBreakdown = [
    { category: 'Direct Program Funding', percentage: 88, color: 'bg-emerald-500', text: 'text-emerald-500' },
    { category: 'Field Logistics & Operations', percentage: 8, color: 'bg-amber-500', text: 'text-amber-500' },
    { category: 'Administration & Governance', percentage: 4, color: 'bg-slate-400', text: 'text-slate-400' }
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase">
          Financial Integrity
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Accountability & Impact</h1>
        <p className="text-slate-600 dark:text-slate-300">
          We ensure every dollar contributed delivers maximum measurable change on the ground.
        </p>
      </div>

      {/* Financial Allocation Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Where Your Donation Goes</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Rabii Foundation operates under strict independent financial audits. We maintain an industry-leading program ratio of 88% direct funding delivery.
          </p>

          <div className="space-y-4 pt-2">
            {financialBreakdown.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-800 dark:text-slate-200">{item.category}</span>
                  <span className={item.text}>{item.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Badges */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center space-x-2">
            <ShieldCheck className="text-emerald-500" />
            <span>Guaranteed Standards</span>
          </h3>

          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start space-x-2">
              <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Independent annual third-party financial audits</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Real-time GPS tracking for water infrastructure</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>Direct field partner oversight with zero middleman markups</span>
            </li>
          </ul>

          <button className="w-full py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-medium text-sm flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity">
            <Download size={16} />
            <span>Download 2025 Annual Audit (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
}