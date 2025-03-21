import React from "react";

const VissionAndMissionComp = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Our Mission - Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-light">
              <span className="text-yellow-400 font-semibold">Our</span> Mission
            </h2>

            <p className="text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem
            </p>
          </div>

          {/* Our Mission - Right Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-light">
              <span className="text-yellow-400 font-semibold">Our</span> Mission
            </h2>

            <p className="text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VissionAndMissionComp;
