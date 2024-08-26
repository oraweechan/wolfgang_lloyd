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
    <section className="flex items-start justify-center py-10 md:py-20  md:pb-16 flex-col w-full md:flex-row ">
      <div className="service-header flex-1 container-padding ">
        <h2 className="text-4xl md:text-9xl marker font-black	">Services</h2>
      </div>
      <div className="services-container flex flex-col gap-10 flex-auto divide-y-2 divide-black pl-10">
        {serviceData.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            listItemArr={service.listItemArr}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
