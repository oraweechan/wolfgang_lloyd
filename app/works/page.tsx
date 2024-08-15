"use client";

import React, { useCallback } from 'react';

const Works = () => {
  const handleMouseEnter = useCallback((event) => {
    const videoElement = event.currentTarget;
    videoElement.play();
  }, []);

  const handleMouseLeave = useCallback((event) => {
    const videoElement = event.currentTarget;
    videoElement.pause();
  }, []);

  return (
    <main className="p-10 min-h-screen">
      <div className="text-2xl font-bold mb-5">Works Page</div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="p-5 rounded-lg ">
            <video
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              controls
              muted
              playsInline
              aria-hidden="true"
              className="w-full rounded"
            >
              <source
                src="https://video.wixstatic.com/video/282d6b_7816be45bd094435a114916ea55d9c09/1080p/mp4/file.mp4"
                type="video/mp4"
              />
            </video>
            <div className="mt-3 text-center">
              <h3 className="text-lg font-semibold">Video {index}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Works;
