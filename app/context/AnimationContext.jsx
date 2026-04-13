'use client';

import { createContext, useContext, useRef, useState } from 'react';

const AnimationContext = createContext();

export function AnimationProvider({ children }) {
  const triggerRef = useRef(null);
  const [headerAnimationDone, setHeaderAnimationDone] = useState(false);

  const registerAnimation = (callback) => {
    triggerRef.current = callback;
  };

  const runAnimation = () => {
    if (triggerRef.current) {
      triggerRef.current();
    }
  };

  const setHeaderComplete = () => {
    setHeaderAnimationDone(true);
  };

  return (
    <AnimationContext.Provider value={{ 
      registerAnimation, 
      runAnimation, 
      headerAnimationDone, 
      setHeaderComplete 
    }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  return useContext(AnimationContext);
}