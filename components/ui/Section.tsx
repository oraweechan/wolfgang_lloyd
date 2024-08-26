
const IntroSection = () => {
 
  return (
    <section className="flex items-start justify-center py-10 md:py-20  md:pb-16 flex-col w-full md:flex-row ">
      <div className="service-header flex-1 container-padding ">
        <h2 className="text-4xl md:text-9xl marker font-black	">Bringing Stories to Life, One Frame at a Time</h2>
      </div>
      <div className="services-container flex flex-col pl-10">
      <p className="mb-4">
            Based in Los Angeles, I’ve had the privilege of working on a wide
            range of video projects. From commercials and corporate videos to
            weddings and industrial films, my journey as a film director has
            been fueled by a deep passion for storytelling.
          </p>
          <p>
            I offer comprehensive services throughout the video production
            process, from creative direction and script development to casting,
            location scouting, set design, editing, animation, color grading,
            and sound design. My goal is to breathe life into ideas,
            transforming visions into compelling visual stories that captivate
            audiences and leave a lasting impact.
          </p>
      </div>
    </section>
  );
};

export default IntroSection;
