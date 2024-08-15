import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const VideoTransition = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const element = document.querySelector("#my-player") as HTMLVideoElement;

    gsap.to(element, {
      x: 0,

      scrollTrigger: {
        start: "80% 50%",
        end: () => "+=" + element.offsetWidth * 0.8, 
        scrub: true,
        onEnter: () => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        },
        onLeave: () => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        },
        onEnterBack: () => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        },
        onLeaveBack: () => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        },
      
      },
    });
  }, []);
  return (
    <section className=" w-full md:h-screen">
        <video
          id="my-player"
          className="w-full md:h-full md:object-cover "
          controls
          preload="auto"
          data-setup="{}"
          ref={videoRef}
          muted
        >
          <source
            src="https://video.wixstatic.com/video/282d6b_7816be45bd094435a114916ea55d9c09/1080p/mp4/file.mp4"
            type="video/mp4"
          ></source>
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noopener noreferrer"
            >
              supports HTML5 video
            </a>
          </p>
        </video>
    </section>
  );
};

export default VideoTransition;
