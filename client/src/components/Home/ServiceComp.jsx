import React, { useState, useEffect } from "react";
import img from "../../assets/images/brando-makes-branding-ljurPRAnLAQ-unsplash.jpg";
const ServiceComp = () => {
  const [highlightedService, setHighlightedService] =
    useState("Mobile Development");

  const services = ["Mobile Development", "Web Development", "UI/UX Design"];

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
      title: "Mobile Development",
      image: img,
      description:
        "We empower businesses with innovative, high-performance mobile applications for iOS and Android, next-generation technology, intuitive design, and seamless functionality. Our solutions are designed to enhance user...",
    },
    {
      title: "Web Development",
      image: img,
      description:
        "We craft dynamic, high-performing websites tailored to meet the evolving needs of businesses. Our web development solutions combine cutting-edge technology, intuitive design, and seamless functionality to deliver exceptional user experience...",
    },
    {
      title: "UI/UX Design",
      image: img,
      description:
        "We design immersive, user-centric UI/UX solutions that blend creativity with functionality. Our approach focuses on intuitive navigation, visually compelling aesthetics, and seamless interactions to enhance user engagement...",
    },
    {
      title: "Graphic Design",
      image: img,
      description:
        "We create visually captivating and strategically crafted graphic designs that leave a lasting impact. Our designs combine creativity, innovation, and brand storytelling to enhance visual identity and audience engagement...",
    },
    {
      title: "Branding",
      image: img,
      description:
        "We build powerful and memorable brand identities that resonate with audiences and drive business success. Our branding solutions combine strategic thinking, creative storytelling, and visual excellence...",
    },
    {
      title: "Academic Projects",
      image: img,
      description:
        "We provide expert guidance and development for academic projects, delivering high-quality research, innovative solutions, and structured methodologies. Our services cater to students and professionals...",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6">
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
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-800 flex flex-col"
          >
            {/* Image */}
            <div className="h-64 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-8 flex-grow">
                {service.description}
              </p>
              <a
                href="#"
                className="mt-auto bg-yellow-400 text-black rounded-full px-6 py-2 flex items-center font-medium hover:bg-yellow-300 transition self-start"
              >
                Learn More
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComp;
