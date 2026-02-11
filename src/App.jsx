import React from 'react';

// Navbar is in the Components folder
import Navbar from './Components/Navbar'; 

// All these are now inside the sections folder
import Hero from './Components/sections/Hero';
import Services from './Components/sections/Services';
import Portfolio from './Components/sections/Portfolio';
import Process from './Components/sections/Process';
import Contact from './Components/sections/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <footer className="py-10 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-sm">© 2026 RAW LABS</p>
      </footer>
    </div>
  );
}

export default App;