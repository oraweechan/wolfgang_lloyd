const BackgroundVideo = () => {
  return (
    <div className="relative w-11/12 lg:w-2/3 h-[64vh] md:h-[70vh] rounded-md overflow-hidden flex items-center justify-center">
      <iframe
        src="https://player.vimeo.com/video/1002330233?h=a13c9c6d97&autoplay=1&loop=1&muted=1&background=1"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background Video"
        className="aspect-[16/9] min-w-full min-h-full absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
