import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
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

            <div className="flex items-center gap-2 mb-4">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>Kerala</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <a
                href="tel:+919447178089"
                className="hover:text-yellow-500 transition-colors"
              >
                +91 9447178089
              </a>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <a
                href="mailto:admin@beonpix.in"
                className="hover:text-yellow-500 transition-colors"
              >
                admin@beonpix.in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-500 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="hover:text-yellow-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://facebook.com"
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  Linked In
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6">
        <a
          href="#top"
          className="bg-yellow-500 text-white flex flex-col items-center justify-center h-16 w-16 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <span className="text-xs">Top</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
