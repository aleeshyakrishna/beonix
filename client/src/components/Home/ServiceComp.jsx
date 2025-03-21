import React, { useState, useEffect } from "react";
import { Code, Monitor, Smartphone } from "lucide-react";

const ServiceComp = () => {
  const [highlightedService, setHighlightedService] =
    useState("Academic Projects");

  const services = ["Academic Projects", "UI/UX Design", "Web Development"];

  // Rotate through service titles
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedService((current) => {
        const currentIndex = services.indexOf(current);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Service card data
  const serviceCards = [
    {
      title: "UI/UX Design",
      icon: <Monitor className="w-16 h-16 text-yellow-400" />,
      description:
        "We empower businesses with state-of-the-art mobile applications for iOS and Android, blending blending next-generation technology, intuitive design,...",
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-16 h-16 text-yellow-400" />,
      description:
        "We empower businesses with state-of-the-art mobile applications for iOS and Android, blending blending next-generation technology, intuitive design,...",
    },
    {
      title: "Web Development",
      icon: <Code className="w-16 h-16 text-yellow-400" />,
      description:
        "We empower businesses with state-of-the-art mobile applications for iOS and Android, blending blending next-generation technology, intuitive design,...",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 h-screen">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light mb-2">We Provide Services</h2>
        <h2 className="text-4xl font-light mb-8">
          And Solutions To Enterprise
        </h2>
        <h2 className="text-4xl">
          <span className="text-yellow-400 font-semibold">
            {highlightedService.split(" ")[0]}
          </span>
          <span className="text-white">
            {" "}
            {highlightedService.split(" ").slice(1).join(" ")}
          </span>
        </h2>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceCards.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-800 flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.icon}</div>

            <h3 className="text-xl font-medium mb-4">{service.title}</h3>

            <p className="text-gray-300 text-sm mb-8">{service.description}</p>

            <a
              href="#"
              className="mt-auto bg-yellow-400 text-black rounded-full px-6 py-2 flex items-center font-medium hover:bg-yellow-300 transition"
            >
              Learn More
              <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComp;
