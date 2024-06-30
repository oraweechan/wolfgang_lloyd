import { archivo_black } from "@/app/fonts";
import { DirectionAwareHover } from "./ui/Card";
const MissionAndWorks = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-4/5	">
        <div className="flex flex-col  py-20 md:py-28">
          <h2 className={`${archivo_black.className} md:text-2xl text-center `}>
            We bring your stories to life through powerful and creative video
            content. Based in Los Angeles, we partner with brands, businesses,
            and individuals worldwide, guiding you through every step—from the
            first idea to the final cut—to craft videos that inspire, inform,
            and captivate.
          </h2>
          <div className="flex justify-center pt-10">
            <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-black relative group transition duration-200">
              <div className="absolute -bottom-2 -right-2 bg-pink h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
              <span className="relative p-8 md:p-10">Contact Us</span>
            </button>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col md:flex-row md:justify-center bg-black rounded-md	p-4">
          <DirectionAwareHover imageUrl="https://i.vimeocdn.com/video/1720893955-4a48e8abb8e3a1073c06bc85c4b8194815412741beef001587da12a58bc89008-d_1920x1080">
            {" "}
            <p>hi</p>{" "}
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl="https://i.ytimg.com/vi/HGx9WCaq1l8/maxresdefault.jpg">
            {" "}
            <p>hi</p>{" "}
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl="https://i.vimeocdn.com/video/1720893955-4a48e8abb8e3a1073c06bc85c4b8194815412741beef001587da12a58bc89008-d_1920x1080">
            {" "}
            <p>hi</p>{" "}
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl="https://i.ytimg.com/vi/HGx9WCaq1l8/maxresdefault.jpg">
            {" "}
            <p>hi</p>{" "}
          </DirectionAwareHover>
        </div>
      </div>
    </div>
  );
};

export default MissionAndWorks;
