'use client';

import { useState, useEffect } from 'react';
import VideoIntro from './components/VideoIntro';
import { AnimationProvider, useAnimation } from './context/AnimationContext';

function ClientLayoutContent({ children }) {
  const [showIntro, setShowIntro] = useState(true);
  const { runAnimation } = useAnimation();

  useEffect(() => {
    const introShown = sessionStorage.getItem('introShown');
    if (introShown) {
      setShowIntro(false);
      // Wait for Header to mount
      setTimeout(() => runAnimation(), 300);
    }
  }, [runAnimation]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introShown', 'true');
    // Give time for the homepage to become visible and Header to render
    setTimeout(() => runAnimation(), 300);
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

export default function ClientLayout({ children }) {
  return (
    <AnimationProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </AnimationProvider>
  );
}