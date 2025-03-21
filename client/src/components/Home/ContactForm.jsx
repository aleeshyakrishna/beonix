import React, { useState } from "react";

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
    <div className="bg-black text-white min-h-screen flex items-center justify-start p-8">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-white mb-4">
              Let's Get to Work
            </h1>
            <p className="text-gray-300">
              Drop us a message, and we'll get back to you within three business
              day.
            </p>
          </div>
          <div className="mb-6">
            <svg
              width="140"
              height="40"
              viewBox="0 0 140 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M104.176 30.6667V10H113.059C115.038 10 116.69 10.4833 118.014 11.45C119.339 12.4167 120.001 13.75 120.001 15.45C120.001 16.5167 119.724 17.4667 119.169 18.3C118.614 19.1167 117.837 19.7333 116.837 20.15C118.003 20.5 118.93 21.1667 119.617 22.15C120.304 23.1167 120.647 24.25 120.647 25.55C120.647 27.3667 120.001 28.8167 118.71 29.9C117.419 30.9833 115.64 31.5167 113.373 31.5167L104.176 30.6667ZM108.508 18.6H112.676C113.602 18.6 114.332 18.3833 114.865 17.95C115.399 17.5167 115.666 16.9167 115.666 16.15C115.666 15.3833 115.399 14.7833 114.865 14.35C114.332 13.9167 113.602 13.7 112.676 13.7H108.508V18.6ZM108.508 26.9667H113.096C114.089 26.9667 114.861 26.7333 115.412 26.2667C115.964 25.8 116.24 25.1667 116.24 24.3667C116.24 23.5667 115.964 22.9333 115.412 22.4667C114.861 22 114.089 21.7667 113.096 21.7667H108.508V26.9667Z"
                fill="#FFCB14"
              />
              <path
                d="M81.3333 31.3333V10.6667H85.6667V31.3333H81.3333Z"
                fill="#FFFFFF"
              />
              <path
                d="M69.8 31.3333L59.8 19.2V31.3333H55.4667V10.6667H59.8L69.8667 22.9333V10.6667H74.1333V31.3333H69.8Z"
                fill="#FFFFFF"
              />
              <path
                d="M39 31.3333L36.6667 25H27.3333L25 31.3333H20.3333L29.3333 10.6667H34.6667L43.6667 31.3333H39ZM32 14.5L28.6667 22H35.3333L32 14.5Z"
                fill="#FFFFFF"
              />
              <path
                d="M4.66667 31.3333V14.6667H0V10.6667H13.6667V14.6667H9V31.3333H4.66667Z"
                fill="#FFFFFF"
              />
              <path
                d="M130.69 31.3333V25.9756L129.834 27.0244L124.834 31.3333H118.834L127.167 23.6667L119.5 14.6667H125.5L130.834 20.6667L131.5 21.4667V14.6667H136.167V31.3333H130.69Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>

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
                  placeholder="email"
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
                  placeholder="Company name"
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

            <div className="flex justify-end">
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
