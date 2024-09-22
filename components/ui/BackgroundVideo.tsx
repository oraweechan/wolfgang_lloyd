const BackgroundVideo = () => {
  return (
    <div className="relative w-11/12 lg:w-2/3 h-[55vh] md:h-[70vh] rounded-md overflow-hidden flex items-center justify-center">
      <video
        className="aspect-[16/9] min-w-full min-h-full absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] object-cover"
        preload="auto"
        autoPlay
        loop
        muted
      >
        <source
          src="https://www.dropbox.com/scl/fi/kh0rb1988kr66qms5kpcn/UPDATED-WEBSITE-REEL-09192024.mp4?rlkey=vc8kwenvfxo4fhk2chwn7umc4&e=1&st=lgh7f9p1&raw=1"
          type="video/mp4"
        ></source>
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a
            href="https://videojs.com/html5-video-support/"
            target="_blank"
            rel="noopener noreferrer"
          >
            supports HTML5 video
          </a>
        </p>
      </video>
    </div>
  );
};

export default BackgroundVideo;
