import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const HLS_URL = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: false });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
        setLoaded(true);
      });
      hls.on(Hls.Events.ERROR, () => setLoaded(false));
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_URL;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
        setLoaded(true);
      });
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          loaded ? 'opacity-30' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-navy/80" />
    </div>
  );
}
