import React from 'react';
import { Heart, ArrowRight, ShieldCheck, Droplet } from 'lucide-react';

export default function HeroBanner({ onOpenDonate, onExplorePrograms }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Animated Glowing Background Blurs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500/10 dark:bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span>Direct Impact Non-Profit</span>
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              Restoring Hope, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
                Transforming Lives.
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Rabii Foundation delivers clean water, quality education, and rapid emergency relief to vulnerable communities worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenDonate}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all active:scale-95 flex items-center justify-center space-x-2"
              >
                <Heart size={20} className="fill-current" />
                <span>Support Our Mission</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl border border-slate-200 dark:border-slate-800 transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Programs</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Hero Visual Banner with Animated Badge */}
          <div className="relative">
            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 relative">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200" 
                alt="Children learning in a community program"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Impact Card */}
            <div className="absolute -bottom-6 -left-6 sm:left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center space-x-4 animate-float">
              <div className="p-3 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-xl">
                <Droplet size={24} />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Latest Milestone</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">120+ Solar Wells Built</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}