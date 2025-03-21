import React from "react";

const WhyChooseUsComp = () => {
  // Technology logos data
  const technologies = [
    // First row
    { name: "Flutter", logo: "/api/placeholder/80/40" },
    { name: "Angular", logo: "/api/placeholder/80/40" },
    { name: "AWS", logo: "/api/placeholder/80/40" },
    { name: "Python", logo: "/api/placeholder/80/40" },
    { name: "Laravel", logo: "/api/placeholder/80/40" },

    // Second row
    { name: "Spring", logo: "/api/placeholder/80/40" },
    { name: "Node.js", logo: "/api/placeholder/80/40" },
    { name: "Odoo", logo: "/api/placeholder/80/40" },
    { name: "Figma", logo: "/api/placeholder/80/40" },
    { name: "Photoshop", logo: "/api/placeholder/80/40" },

    // Third row (repeating some technologies)
    { name: "Flutter", logo: "/api/placeholder/80/40" },
    { name: "Angular", logo: "/api/placeholder/80/40" },
    { name: "AWS", logo: "/api/placeholder/80/40" },
    { name: "Python", logo: "/api/placeholder/80/40" },
    { name: "Laravel", logo: "/api/placeholder/80/40" },
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
          <span className="text-white font-light"> Us ?</span>
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">
          <span className="text-yellow-400 font-semibold">Technologies</span>
          <span className="text-white font-light"> We Excel In</span>
        </h2>

        <div className="space-y-8">
          {rowsOfTechnologies.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center flex-wrap gap-4">
              {row.map((tech, techIndex) => (
                <div
                  key={`${rowIndex}-${techIndex}`}
                  className="bg-white rounded-lg p-4 flex items-center justify-center w-48 h-16"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="max-h-10 max-w-full"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsComp;
