// import React from 'react';

// const BackgroundVideo = () => {
//   return (
//     <iframe
//       src="https://player.vimeo.com/video/1002330233?h=a13c9c6d97&autoplay=1&loop=1&muted=1&background=1"
//       allow="autoplay; fullscreen; picture-in-picture"
//       allowFullScreen
//       title="Background Video"
//       className="w-full h-[40vh] md:h-[60vh] lg:h-[60vh] object-cover pointer-events-none"
//     ></iframe>
//   );
// };

// export default BackgroundVideo;
const BackgroundVideo = () => {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1002330233?h=a13c9c6d97&autoplay=1&loop=1&muted=1&background=1"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Background Video"
          className="w-full h-full absolute inset-0"
          style={{
            width: '100vw',
            height: '56.25vw', // This maintains a 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '100vw',
          }}
         
        ></iframe>
      </div>
    );
  };
  
  export default BackgroundVideo;
  