import React, { useRef, useEffect, useState } from 'react';

const Start = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    // Ensure the video is playing in a loop
    video.loop = true;
    // Ensure the video plays as soon as possible
    video.play().catch(error => {
      // Handle potential errors, like autoplay being disabled
      console.error('Video playback error:', error);
    });

    // Pause the video after 3 seconds
    const timeout = setTimeout(() => {
      setShowVideo(false);
      // Redirect to another page after 3 seconds
      setTimeout(() => {
        window.location.href = '/homepage'; // Redirect using window.location
      }, 1000);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Video element */}
      {showVideo && (
        <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay>
          <source src="/Theater.mp4" type="video/mp4" />
          {/* Add additional source tags for different video formats if needed */}
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Start;
