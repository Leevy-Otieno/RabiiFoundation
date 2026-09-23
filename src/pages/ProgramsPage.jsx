import React, { useState } from 'react';
import { MapPin, Users } from 'lucide-react';

export default function ProgramsPage({ onOpenDonate }) {
  const [filter, setFilter] = useState('all');

  const programs = [
    {
      id: 1,
      category: 'water',
      title: 'Solar Water Well Infrastructure',
      location: 'Sub-Saharan Africa',
      raised: 45000,
      goal: 60000,
      beneficiaries: '12,000 People',
      image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800',
      description: 'Constructing solar-powered deep aquifer water pumps to deliver safe drinking water to drought-affected villages.'
    },
    {
      id: 2,
      category: 'education',
      title: 'Rural Digital Learning Labs',
      location: 'Southeast Asia',
      raised: 28000,
      goal: 35000,
      beneficiaries: '2,500 Students',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      description: 'Equipping rural classrooms with solar electricity, tablets, and offline educational resources for children.'
    },
    {
      id: 3,
      category: 'relief',
      title: 'Emergency Nutrition Kits',
      location: 'Crisis Zones',
      raised: 82000,
      goal: 100000,
      beneficiaries: '18,000 Families',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
      description: 'Delivering high-calorie food supplies and clean water purification tablets directly to displaced families.'
    },
    {
      id: 4,
      category: 'healthcare',
      title: 'Mobile Health Clinics',
      location: 'Central America',
      raised: 15000,
      goal: 40000,
      beneficiaries: '8,000 Patients',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      description: 'Deploying fully equipped medical vans to treat maternal health, basic illnesses, and provide vaccinations.'
    }
  ];

  const filteredPrograms = filter === 'all' ? programs : programs.filter(p => p.category === filter);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Our Active Programs</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Transparent, community-led initiatives designed to build long-term resilience and health.
        </p>

        {/* Filter Tab Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'water', label: 'Clean Water' },
            { id: 'education', label: 'Education' },
            { id: 'relief', label: 'Emergency' },
            { id: 'healthcare', label: 'Healthcare' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                filter === tab.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPrograms.map((program) => {
          const progressPercent = Math.min(100, Math.round((program.raised / program.goal) * 100));

          return (
            <div
              key={program.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center space-x-1">
                    <MapPin size={12} className="text-emerald-400" />
                    <span>{program.location}</span>
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{program.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{program.description}</p>

                  {/* Progress Bar */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-emerald-600 dark:text-emerald-400">${program.raised.toLocaleString()} raised</span>
                      <span className="text-slate-500 dark:text-slate-400">Goal: ${program.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 mt-4">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                  <Users size={14} className="text-slate-400" />
                  <span>{program.beneficiaries}</span>
                </span>
                <button
                  onClick={onOpenDonate}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl shadow-md transition-all active:scale-95"
                >
                  Support Project
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}