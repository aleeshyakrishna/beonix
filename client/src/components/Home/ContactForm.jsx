import React, { useState } from "react";
import logo from "../../assets/images/logo.png"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    interest: "",
    companyName: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12 bg-gray-800 p-8 rounded-lg">
        {/* Left Section (Centered Text) */}
        <div className="md:w-1/3 flex flex-col items-center text-center justify-center">
          <div className="mb-5">
              <img src={logo} alt="" className="h-[30px] w-auto" />
            <h1 className="text-3xl font-bold text-white mb-6">
              Let's Get to Work
            </h1>
            <p className="text-gray-300">
              Drop us a message, and we'll get back to you within three business
              days.
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm mb-2">
                  *Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full p-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  *Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full p-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm mb-2">
                  *Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  className="w-full p-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm mb-2">
                  I'm interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500 appearance-none"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="design">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm mb-2">
                Company name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company name"
                className="w-full p-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="projectDetails" className="block text-sm mb-2">
                Tell us about your project
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Write.."
                rows="6"
                className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
              ></textarea>
            </div>

            {/* Contact Button Centered */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-full flex items-center"
              >
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
