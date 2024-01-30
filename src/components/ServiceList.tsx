import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";

const ServiceList = ({ services = [] }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleOpenChange = (value) => {
    setOpenItem(value);
  };

  return (
    <section className="w-full">
      <Accordion.Root
        className="w-full"
        type="single"
        collapsible
        onValueChange={handleOpenChange}
      >
        {services.map((service, index) => (
          <Accordion.Item
            value={`service_${index + 1}`}
            key={service.id}
            className="w-full py-6 border-b border-zinc-800 justify-between items-center flex-col"
          >
            <Accordion.Header className="flex w-full cursor-pointer">
              <Accordion.Trigger className="w-full h-[38px] justify-between items-center gap-3 flex animate-service-icon">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-[30.09px] h-[30.09px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover"
                      src={service.icon}
                      alt="service-menu"
                    />
                  </div>
                  <div className="text-zinc-800 text-[22px] font-semibold font-['Inter'] leading-[38px]">
                    {service.title}
                  </div>
                </div>

                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={`${
                      openItem === `service_${index + 1}`
                        ? "/minus.svg"
                        : "/plus.svg"
                    }`}
                    alt={`${
                      openItem === `service_${index + 1}`
                        ? "minus-icon"
                        : "plus-icon"
                    }`}
                  />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={`animate-accordion`}>
              {service.description}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default ServiceList;
