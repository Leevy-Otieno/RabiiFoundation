import React from 'react';

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Amina Rabii',
      role: 'Founder & President',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      bio: '20+ years in international public health and community development.'
    },
    {
      name: 'Tariq Al-Mansoor',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      bio: 'Former UN logistics expert specializing in rapid humanitarian response.'
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Water Initiatives',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      bio: 'Hydrological engineer passionate about sustainable solar groundwater systems.'
    }
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Overview */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Our Mission & Leadership</h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          Founded in 2018, Rabii Foundation was built on a single premise: sustainable empowerment starts when basic human rights like clean water and education are accessible to all.
        </p>
      </div>

      {/* Leadership Team Grid */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Leadership Team</h2>
          <p className="text-slate-500 text-sm mt-1">Guided by experts in development, engineering, and logistics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-emerald-500">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{member.name}</h3>
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">{member.role}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}