"use client";

import Footer from "@/components/Footer";
import WorksVideo from "@/components/ui/WorksVideo";
import React, { useCallback } from "react";

const Works = () => {
  const handleMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLVideoElement>) => {
      const videoElement = event.currentTarget;
      videoElement.play();
    },
    []
  );

  const handleMouseLeave = useCallback(
    (event: React.MouseEvent<HTMLVideoElement>) => {
      const videoElement = event.currentTarget;
      videoElement.pause();
    },
    []
  );

  return (
    <>
      <main className="px-8 min-h-screen flex items-center flex-col">
        <div className="max-w-screen-lg md:px-6">
          <div className="py-5 flex-center">
            <h2 className="text-5xl md:text-7xl marker w-fit uppercase">
              Works
            </h2>
          </div>
          <div>
            <WorksVideo src="https://video.wixstatic.com/video/282d6b_7816be45bd094435a114916ea55d9c09/1080p/mp4/file.mp4" />
            <WorksVideo src="https://video.wixstatic.com/video/282d6b_7816be45bd094435a114916ea55d9c09/1080p/mp4/file.mp4" />
            <WorksVideo src="https://video.wixstatic.com/video/282d6b_7816be45bd094435a114916ea55d9c09/1080p/mp4/file.mp4" />

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Works;
