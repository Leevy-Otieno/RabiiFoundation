import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <span className="text-xl font-bold text-white">Rabii Foundation</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dedicated to sustainable development, education, and humanitarian relief across underserved global communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Core Programs</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Clean Water Wells</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Digital Learning Labs</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Emergency Food Relief</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Mobile Healthcare Vans</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3 text-slate-400">
                <MapPin size={16} className="text-emerald-400 flex-shrink-0" />
                <span>100 Foundation Way, Suite 400</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone size={16} className="text-emerald-400 flex-shrink-0" />
                <span>+1 (800) 555-RABII</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail size={16} className="text-emerald-400 flex-shrink-0" />
                <span>contact@rabiifoundation.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-xs text-slate-400 mb-3">Subscribe to our monthly impact digest.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium py-2.5 rounded-xl transition-colors shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <div>© 2026 Rabii Foundation. All rights reserved.</div>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Financial Reports</span>
          </div>
        </div>
      </div>
    </footer>
  );
}