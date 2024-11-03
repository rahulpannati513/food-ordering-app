import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-gray-800 p-6 mt-8 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* About Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-orange-600">About Us</h2>
          <p className="text-gray-600">
            We strive to provide the best food delivery experience right to your
            door.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-orange-600">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-orange-600">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500">
        © {new Date().getFullYear()} Food Delivery Service. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
