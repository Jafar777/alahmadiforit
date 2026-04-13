'use client';

import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function VideoIntro({ onComplete }) {
  const { t } = useLanguage();
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => console.log('Video ready to play');
    const handleError = (e) => {
      console.error('Video load error:', e);
      setError('Failed to load video. Check file path.');
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const startVideo = async () => {
    if (!videoRef.current) {
      console.error('Video ref not available');
      return;
    }

    try {
      videoRef.current.muted = false;
      await videoRef.current.play();
      setShowButton(false);
      console.log('Video playing with sound');
    } catch (err) {
      console.error('Play failed:', err);
      setError(`Playback error: ${err.message}`);
    }
  };

  const handleEnded = () => {
    console.log('Video ended');
    if (onComplete) onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <video
        ref={videoRef}
        src="/intro.mp4"
        preload="auto"
        muted={false}
        playsInline
        onEnded={handleEnded}
        className={`h-full w-full object-contain ${showButton ? 'invisible' : 'visible'}`}
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        onContextMenu={(e) => e.preventDefault()}
      />

      {showButton && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
          <img src="/logo.png" alt="Logo" className="w-48 h-48 mb-8 animate-float drop-shadow-2xl" />
          <button
            onClick={startVideo}
            className="rounded-2xl px-8 py-4 text-2xl font-semibold text-white transition hover:scale-105 hover:cursor-pointer"
            style={{
              fontFamily: 'system-ui, "Segoe UI", Tahoma, sans-serif',
              background: 'linear-gradient(90deg, #660bc2 0%, #d257a7 50%, #d257a7 100%)',
            }}
          >
            {t('hero_btn')}
          </button>
          {error && <p className="mt-4 rounded bg-white px-4 py-2 text-sm text-red-500">{error}</p>}
        </div>
      )}
    </div>
  );
}