import React from 'react';
import { FlaskConical, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-raw-black/80 backdrop-blur-md border-b border-raw-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FlaskConical className="text-raw-blue w-8 h-8" />
          <span className="text-white font-black text-2xl tracking-tighter uppercase">
            Raw <span className="text-raw-blue">Labs</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">Process</a>
          <button className="bg-raw-blue text-white px-5 py-2 hover:bg-blue-600 transition-all rounded-sm">
            Contacts
          </button>
        </div>
        
        <Menu className="text-white md:hidden w-6 h-6" />
      </div>
    </nav>
  );
};

export default Navbar;