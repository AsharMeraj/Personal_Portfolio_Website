import React from 'react';
import type { Metadata } from 'next';
import Hero from './_components/Hero';
import Services from './_components/Services';
import Skills from './_components/Skills';
import Education from './_components/Education';
import DownloadCV from './_components/DownloadCv';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const App = () => {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <Education />
        <Skills />
        <DownloadCV />
      </main>
    </div>
  );
};

export default App;