import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer () {
  return (
    <footer className="bg-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
          <p className="text-xs leading-5 text-gray-400 mb-2 md:mb-0">
            © 2024 Westwood High School Speech and Debate. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/nischalkotamraju/westwood-debate" className="text-gray-400 hover:text-white">
              <FaGithub className="text-lg" />
            </a>
            <a href="https://www.instagram.com/westwooddebate/?hl=en" className="text-gray-400 hover:text-white">
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};