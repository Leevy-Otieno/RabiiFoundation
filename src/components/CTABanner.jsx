import React from 'react';
import { Heart } from 'lucide-react';

export default function CTABanner({ onOpenDonate }) {
  return (
    <div className="my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-8 sm:p-12 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Ready to change a life today?
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Your support provides clean water wells, education materials, and emergency food relief directly to families in need.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDonate}
              className="px-8 py-4 bg-white text-emerald-800 font-bold rounded-2xl shadow-lg hover:bg-emerald-50 transition-all active:scale-95 flex items-center space-x-2"
            >
              <Heart size={18} className="fill-current text-emerald-600" />
              <span>Become a Monthly Donor</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}