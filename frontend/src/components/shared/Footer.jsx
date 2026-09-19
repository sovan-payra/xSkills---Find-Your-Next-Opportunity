import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              x<span className="text-[#2242c4]">Skills</span>
            </h2>

            <p className="text-sm text-gray-500">
              &copy; 2026 xSkills. All rights reserved
            </p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/sovan.payra.0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1877F2] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>

            <a
              href="https://x.com/SovanPayra2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="X"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/sovan-payra-8a17b9321/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

            <a
              href="https://www.instagram.com/x.sovannn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#E4405F] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;