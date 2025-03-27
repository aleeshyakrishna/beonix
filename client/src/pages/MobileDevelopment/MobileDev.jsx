import React from "react";
import Navbar from "../../components/Navbar/Naavbar";
const MobileDev = () => {
  const services = [
    "Custom App Development – Tailored solutions for iOS & Android.",
    "Cross-Platform App Development – Using Flutter, React Native, or other frameworks.",
    "AI-Powered Apps – Integrating AI/ML for smart functionalities.",
    "E-Commerce Apps – Online store development with secure payments.",
    "On-Demand Apps – Ride-sharing, food delivery, home services, etc.",
    "Enterprise Apps – Internal business applications for productivity and automation.",
    "Social Networking Apps – Community-building platforms.",
    "Healthcare & Fitness Apps – Telemedicine, wellness tracking, appointment booking.",
    "Educational Apps – E-learning, LMS platforms, and interactive learning tools.",
    "Finance & Banking Apps – Digital wallets, expense tracking, and financial services.",
    "Booking & Reservation Apps – Travel, hotel, events, and appointment booking solutions.",
    "Wearable & IoT Apps – Apps for smartwatches, IoT devices, and connected technology.",
    "App UI/UX Design – Stunning, user-friendly interfaces.",
    "App Maintenance & Support – Regular updates, bug fixes, and performance optimization.",
  ];

  const techLogos = [
    { name: "Flutter" },
    {  name: "React Native" },
    { name: "Firebase" },
    {  name: "Node.js" },
    {  name: "Python" },
    {  name: "PHP" },
    {  name: "Java" },
    { name: "Go" },
    { name: ".NET" },
  ];

    return (
        <div className="bg-black text-white min-h-screen p-8">
        <Navbar/>
      <h1 className="text-4xl text-center mb-12 font-bold">
        "Innovative Mobile App Development for the Digital Age"
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Mobile Development Section */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl mb-4 text-yellow-400">Mobile Development</h2>
          <div className="flex mb-4">
            <img
              src="/api/placeholder/370/250?text=Mobile+Development"
              alt="Mobile Development"
              className="w-1/2 object-cover rounded-lg mr-4"
            />
            <p className="text-sm">
              We design cutting-edge mobile applications for iOS and Android,
              helping businesses thrive in the digital era. With a focus on
              innovation, we combine advanced technology, intuitive design, and
              seamless functionality to create high-performance solutions
              tailored to your vision.
            </p>
          </div>
        </div>

        {/* Our Service Section */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl mb-4 text-yellow-400">Our Service</h2>
          <ul className="text-sm list-disc pl-5 grid grid-cols-2 gap-x-4">
            {services.map((service, index) => (
              <li key={index} className="mb-2">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Frontend Development Section */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl mb-4 text-yellow-400">
            Frontend Development
          </h2>
          <div className="flex items-center">
            <img
              src="/api/placeholder/370/250?text=Frontend+Development"
              alt="Frontend Development"
              className="w-1/2 object-cover rounded-lg mr-4"
            />
            <ul className="text-sm list-disc pl-5">
              <li>
                Flutter (Dart) – Develop high-performance, visually stunning,
                and natively compiled apps for both iOS and Android
              </li>
              <li>
                React Native (JavaScript/TypeScript) – Build dynamic, fast, and
                responsive mobile applications with a seamless native-like
                experience
              </li>
              <li>
                Firebase Integration – Enable real-time databases,
                authentication, cloud storage, and robust backend support for
                scalable and efficient apps
              </li>
            </ul>
          </div>
        </div>

        {/* Backend Development Section */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl mb-4 text-yellow-400">Backend Development</h2>
          <div className="flex items-center">
            <img
              src="/api/placeholder/370/250?text=Backend+Development"
              alt="Backend Development"
              className="w-1/2 object-cover rounded-lg mr-4"
            />
            <ul className="text-sm list-disc pl-5">
              <li>
                Node.js (Express.js, Nest.js) – For high-performance, scalable,
                and real-time web applications
              </li>
              <li>
                Python (Django, Flask, FastAPI) – For secure, efficient, and
                data-driven web solutions
              </li>
              <li>
                PHP (Laravel, CodeIgniter) – For robust, feature-rich, and
                dynamic web applications
              </li>
              <li>
                Java (Spring Boot) – For enterprise-level, secure, and
                high-performance applications
              </li>
              <li>
                .NET (ASP.NET Core) – For powerful, scalable, and
                business-centric web solutions
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Logos */}
      <div className="flex justify-center items-center space-x-8 bg-gray-900 p-6 rounded-lg">
        {techLogos.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-sm mt-2">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileDev;
