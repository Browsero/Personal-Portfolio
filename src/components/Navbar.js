import React, { useState } from "react";

import {
  AiOutlineHome,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineClose,
} from "react-icons/ai";
import { SiDevdotto } from "react-icons/si";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BiLinkExternal } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <>
      <nav className="shadow-lg max-w-sm mx-auto rounded-lg border bg-white border-gray-200 mt-8 flex justify-around sm:max-w-xl md:border-0 md:shadow-none md:max-w-none md:rounded-none md:mt-4">
        <div className="hidden md:flex space-x-4 text-2xl">
          <ul className="flex space-x-8">
            <li>
              <a href="https://twitter.com/HubertMadej01">
                <AiOutlineTwitter className="text-gray-700 cursor-pointer transition md:hover:scale-110" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hubert-madej-774801227/">
                <AiOutlineLinkedin className="text-gray-700 cursor-pointer transition md:hover:scale-110" />
              </a>
            </li>
            <li>
              <a href="https://dev.to/browser">
                <SiDevdotto className="text-gray-700 cursor-pointer transition md:hover:scale-110" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Browsero">
                <AiFillGithub className="text-gray-700 cursor-pointer transition md:hover:scale-110" />
              </a>
            </li>
          </ul>
        </div>
        <div className="p-2 md:p-0">
          <ul className="flex flex-row space-x-8">
            <li className="flex flex-col items-center">
              <AiOutlineHome className="text-4xl md:hidden" />
              <a className=" text-gray-700 font-medium" href="./#header">
                Home
              </a>
            </li>
            <li className="flex flex-col items-center">
              <HiOutlineBookOpen className="text-4xl md:hidden" />
              <a className="text-gray-700 font-medium" href="./#projects">
                Work
              </a>
            </li>
            <li className="flex flex-col items-center">
              <BiLinkExternal className="text-4xl md:hidden" />
              <a className=" text-gray-700 font-medium" href="./#contact">
                Contact
              </a>
            </li>
            <li className="flex flex-col items-center">
              {!menuClicked ? (
                <GiHamburgerMenu
                  onClick={() => {
                    setMenuClicked(true);
                  }}
                  className="text-4xl md:hidden"
                />
              ) : (
                <AiOutlineClose
                  onClick={() => {
                    setMenuClicked(false);
                  }}
                  className="text-4xl md:hidden"
                />
              )}
              <a className="text-gray-700 font-medium md:hidden" href="#">
                {!menuClicked ? "Menu" : "Close"}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {menuClicked && (
        <div
          className="shadow-lg max-w-sm mx-auto rounded-lg border border-gray-200 mt-8 flex sm:max-w-xl md:shadow-none md:max-w-none md:rounded-none md:mt-4 md:hidden"
          data-aos="slide-up"
        >
          <ul className="p-4">
            <li>
              <a
                className="font-medium"
                href="https://twitter.com/HubertMadej01"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="font-medium"
                href="https://www.linkedin.com/in/hubert-madej-774801227/"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a className="font-medium" href="https://dev.to/browser">
                Dev.to
              </a>
            </li>
            <li>
              <a className="font-medium" href="https://github.com/Browsero">
                Github
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
