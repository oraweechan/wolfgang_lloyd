import { archivo_black } from "@/app/fonts";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        playsInline
      >
        <source
          src="https://video.wixstatic.com/video/282d6b_7816be45bd094435a114916ea55d9c09/1080p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative z-10 flex flex-col items-center space-y-4  w-full p-4">
        <TextGenerateEffect
          className={`${archivo_black.className} text-4xl md:text-6xl lg:text-8xl text-white bg-teal p-4 rounded-md`}
          words="Wolfgang Lloyd"
        />
        <TextGenerateEffect
          className="text-[20px] md:text-2xl lg:text-4xl text-white bg-black p-2 md:p-4 rounded-md"
          words="Media Production Company"
        />

      </div>
    </div>
  );
};

export default Hero;
