'use client';

import { useState, useEffect } from 'react';
import VideoIntro from './components/VideoIntro';

export default function ClientLayout({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introShown = sessionStorage.getItem('introShown');
    if (introShown) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introShown', 'true');
  };

  return (
    <>
      {showIntro && <VideoIntro onComplete={handleIntroComplete} />}
      <div style={{ visibility: showIntro ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </>
  );
}