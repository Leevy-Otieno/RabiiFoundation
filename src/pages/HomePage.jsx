import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CTABanner from '../components/CTABanner';
import { Droplet, BookOpen, Heart, ArrowRight } from 'lucide-react';

export default function HomePage({ onOpenDonate, onNavigate }) {
  return (
    <div className="space-y-12">
      {/* Hero Banner Component */}
      <HeroBanner onOpenDonate={onOpenDonate} onExplorePrograms={() => onNavigate('programs')} />

      {/* Impact Stats Banner */}
      <section className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">250,000+</div>
              <div className="text-sm text-emerald-100 mt-1">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">120+</div>
              <div className="text-sm text-emerald-100 mt-1">Water Wells Built</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">45</div>
              <div className="text-sm text-emerald-100 mt-1">Schools Supported</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">100%</div>
              <div className="text-sm text-emerald-100 mt-1">Financial Transparency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillar Cards */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Core Pillars</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Targeted initiatives designed for long-term community self-sufficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                <Droplet size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Clean Water</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Installing solar-powered deep wells and purification systems to eliminate waterborne diseases.
              </p>
            </div>
            <button onClick={onOpenDonate} className="mt-6 text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1 hover:space-x-2 transition-all">
              <span>Sponsor a Well</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Education & Literacy</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Providing learning materials, solar power, and digital infrastructure to rural classrooms.
              </p>
            </div>
            <button onClick={onOpenDonate} className="mt-6 text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1 hover:space-x-2 transition-all">
              <span>Support a Classroom</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Emergency Relief</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Rapid deployment of emergency food supplies, clean water, and medical care in crisis zones.
              </p>
            </div>
            <button onClick={onOpenDonate} className="mt-6 text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1 hover:space-x-2 transition-all">
              <span>Provide Relief</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner onOpenDonate={onOpenDonate} />
    </div>
  );
}