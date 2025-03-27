import React from "react";
import video from "../../assets/images/globe.mp4";

const WhyChooseUsComp = () => {
  // Technology logos data
  const technologies = [
    { name: "Flutter", logo: "/api/placeholder/80/40" },
    { name: "Angular", logo: "/api/placeholder/80/40" },
    { name: "AWS", logo: "/api/placeholder/80/40" },
    { name: "Python", logo: "/api/placeholder/80/40" },
    { name: "Laravel", logo: "/api/placeholder/80/40" },
    { name: "Spring", logo: "/api/placeholder/80/40" },
    { name: "Node.js", logo: "/api/placeholder/80/40" },
    { name: "Odoo", logo: "/api/placeholder/80/40" },
    { name: "Figma", logo: "/api/placeholder/80/40" },
    { name: "Photoshop", logo: "/api/placeholder/80/40" },
  ];

  // Group technologies into rows of 5
  const rowsOfTechnologies = [];
  for (let i = 0; i < technologies.length; i += 5) {
    rowsOfTechnologies.push(technologies.slice(i, i + 5));
  }

  return (
    <div className="bg-black text-white py-16 px-6">
      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl mb-8">
          <span className="text-yellow-400 font-semibold">Why Choose</span>
          <span className="text-white font-light"> Us?</span>
        </h2>

        <p className="text-lg leading-relaxed">
          At Beonpix, we craft scalable, robust IT solutions that evolve with
          your business. Our custom software enhances user experience, drives
          efficiency, and fuels long-term success. Let's build innovative
          solutions that delight your customers and accelerate your growth in
          the digital era.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Video Section */}
        <div className="mb-12">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsComp;
