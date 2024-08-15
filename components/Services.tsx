const Services = () => {
  return (
    <section className="flex items-start justify-center py-10 md:py-20  md:pb-16 flex-col w-full md:flex-row ">
      <div className="service-header flex-1 container-padding">
        <h2 className="text-4xl md:text-9xl marker">Services</h2>
      </div>
      <div className="services-container flex flex-col gap-10 flex-auto divide-y-2 divide-black pl-10">
        <div className="creative-container  pt-10">
          <div className="creative flex flex-row">
            <h3 className="w-44 md:w-80 md:text-4xl">Creative</h3>
            <ul className=" list-disc ">
              <li>Research & Idea Development</li>
              <li>Script Writing</li>
              <li>Effective Messaging</li>
            </ul>
          </div>
        </div>
        <div className="production-container pt-10">
          <div className="production flex flex-row">
            <h3 className=" w-44 md:w-80  md:text-4xl">Pre-Production</h3>
            <ul className=" list-disc ">
              <li>Location Scouting</li>
              <li>Set Design</li>
              <li>Actor Casting</li>
              <li>Storyboards</li>
            </ul>
          </div>
        </div>
        <div className="production-container pt-10">
          <div className="production flex flex-row">
            <h3 className=" w-44 md:w-80  md:text-4xl">Pre-Production</h3>
            <ul className=" list-disc ">
              <li>Location Scouting</li>
              <li>Set Design</li>
              <li>Actor Casting</li>
              <li>Storyboards</li>
            </ul>
          </div>
        </div>
        <div className="production-container pt-10">
          <div className="production flex flex-row">
            <h3 className=" w-44 md:w-80  md:text-4xl">Pre-Production</h3>
            <ul className=" list-disc ">
              <li>Location Scouting</li>
              <li>Set Design</li>
              <li>Actor Casting</li>
              <li>Storyboards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
