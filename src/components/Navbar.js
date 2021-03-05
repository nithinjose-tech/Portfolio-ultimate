import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Nithin
          </NavLink>

          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white 200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts and Achievements
          </NavLink>

          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white 200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white 200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
        </nav>

        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="http://twitter.com/NithinJ90403043"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="http://linkedin.com/in/nithin-jose-6741011b6"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="http://youtube.com/channel/UCKEQyELj8NJPbSb3qMnq2vg"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="http://github.com/nithinjose-tech"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
