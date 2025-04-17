import React from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} text-gray-900 shadow-md sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className={`${styles.title} text-3xl tracking-tight`}>Kento Yokozuka</h1>
        <nav className="flex space-x-8 text-sm font-medium uppercase">
          <HashLink
            to="/portfolio/#profile"
            className="hover:text-blue-400 transition duration-200"
            smooth
          >
            Profile
          </HashLink>
          <HashLink
            to="/portfolio/#about"
            className="hover:text-blue-400 transition duration-200"
            smooth
          >
            About Me
          </HashLink>
          <HashLink
            to="/portfolio/#contact"
            className="hover:text-blue-400 transition duration-200"
            smooth
          >
            Contact
          </HashLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;