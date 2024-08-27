type ServiceItemProps = {
  title: string;
  listItemArr: string[];
};

const ServiceItem = ({ title, listItemArr }: ServiceItemProps) => {
  const listItems = listItemArr.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div className="pt-10">
      <div className="flex flex-row">
        <h3 className="w-44 text-2xl md:w-80  md:text-4xl">{title}</h3>
        <ul className="list-disc">{listItems}</ul>
      </div>
    </div>
  );
};

export default ServiceItem;
