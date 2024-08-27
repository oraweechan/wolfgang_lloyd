import ServiceItem from "./ui/ServiceItem";

const Services = () => {
  const serviceData = [
    {
      title: "Creative",
      listItemArr: [
        "Research & Idea Development",
        "Script Writing",
        "Effective Messaging",
      ],
    },
    {
      title: "Pre-Production",
      listItemArr: [
        "Location Scouting",
        "Set Design",
        "Actor Casting",
        "Storyboards",
      ],
    },
    {
      title: "Production",
      listItemArr: [
        "Filming",
        "Directing",
        "Cinematography",
        "Sound Recording",
      ],
    },
    {
      title: "Post-Production",
      listItemArr: [
        "Editing",
        "Color Grading",
        "Sound Design",
        "Visual Effects",
      ],
    },
  ];
  return (
    <section className="flex py-10 md:pt-20 md:pb-28 flex-col w-full items-center ">
      <div className="flex flex-col p-4 md:min-w-[1024px] md:flex-row">
        <div className="flex-1 ">
          <h2 className="text-4xl/relaxed md:text-8xl marker font-black	inline-block">
            Services
          </h2>
        </div>
        <div className="flex flex-col gap-10 flex-auto divide-y-2 divide-black md:pl-16">
          {serviceData.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              listItemArr={service.listItemArr}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
