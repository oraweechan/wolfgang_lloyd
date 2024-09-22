"use client";

import Footer from "@/components/Footer";
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
      <main className="px-10 min-h-screen flex-center flex-col">
        <div className="max-w-screen-lg md:px-6 my-4 rounded-md">
          <div className="pt-5 pb-4 flex-center">
            <h2 className="text-4xl md:text-7xl marker w-fit uppercase">
              Works
            </h2>
          </div>
          <div>
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
              <h3 className="text-lg font-semibold">Video </h3>
            </div>
          </div>
          <div>
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
              <h3 className="text-lg font-semibold">Video </h3>
            </div>
          </div>
          <div>
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
              <h3 className="text-lg font-semibold">Video </h3>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="md:p-5 rounded-lg">
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
          </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Works;
