import React, { useState } from 'react';
import { X, Heart, Shield, CheckCircle2 } from 'lucide-react';

export default function DonateModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const presetAmounts = ['25', '50', '100', '250', '500'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">
              <Heart size={20} className="fill-current" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Make a Difference</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Thank You!</h4>
              <p className="text-slate-600 dark:text-slate-300 max-w-xs mx-auto text-sm leading-relaxed">
                Your generosity empowers communities and transforms lives across regions.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Frequency Selector */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                {['monthly', 'one-time'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFrequency(type)}
                    className={`py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${
                      frequency === type
                        ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {type === 'monthly' ? '❤️ Give Monthly' : 'One-Time'}
                  </button>
                ))}
              </div>

              {/* Preset Amounts */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Select Donation Amount ($)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-3 rounded-xl font-bold text-lg border transition-all ${
                        amount === amt && !customAmount
                          ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                {/* Custom Amount Input */}
                <input
                  type="number"
                  placeholder="Custom Amount ($)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Encryption Banner */}
              <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <Shield size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Encrypted 256-bit SSL transaction. Cancel monthly giving anytime.</span>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/30 transition-all hover:shadow-emerald-600/50 active:scale-[0.98]"
              >
                Complete ${amount || '0'} Donation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}