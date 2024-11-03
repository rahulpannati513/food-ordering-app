import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          About Us
        </h1>

        <p className="mt-4 text-gray-700 text-lg">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">Foodie Hub</span>! We
          are dedicated to delivering a curated selection of delicious meals
          from local restaurants straight to your doorstep.
        </p>

        <h2 className="mt-6 text-3xl font-semibold text-gray-800">
          What Sets Us Apart?
        </h2>
        <p className="mt-2 text-gray-600">
          At Foodie Hub, we pride ourselves on transparency and quality. Our
          platform highlights the unique dishes from each restaurant, making it
          easy for you to discover new favorites.
        </p>

        <h2 className="mt-6 text-3xl font-semibold text-gray-800">
          Our Mission
        </h2>
        <p className="mt-2 text-gray-600">
          Our mission is to bridge the gap between food enthusiasts and local
          eateries. We believe that great food should be accessible, and we
          strive to enhance your dining experience through technology.
        </p>

        <h2 className="mt-6 text-3xl font-semibold text-gray-800">
          Connect with Us
        </h2>
        <p className="mt-2 text-gray-600">
          We’d love to hear from you! Connect with us on our professional
          platforms:
        </p>
        <ul className="mt-2 text-gray-600 list-none">
          <li className="flex items-center mt-2">
            <img
              src="/path/to/github-logo.png"
              alt="GitHub Logo"
              className="w-6 h-6 mr-2"
            />
            <a
              href="https://github.com/[YourGitHubUsername]"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center mt-2">
            <img
              src="/path/to/linkedin-logo.png"
              alt="LinkedIn Logo"
              className="w-6 h-6 mr-2"
            />
            <a
              href="https://linkedin.com/in/[YourLinkedInUsername]"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center mt-2">
            <img
              src="/path/to/resume-logo.png"
              alt="Resume Logo"
              className="w-6 h-6 mr-2"
            />
            <a
              href="[Link to your Resume]"
              className="text-blue-600 hover:underline"
            >
              Resume
            </a>
          </li>
        </ul>

        <p className="mt-6 text-gray-600">
          Thank you for visiting! Join us on this culinary journey and
          experience the best your local restaurants have to offer.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
