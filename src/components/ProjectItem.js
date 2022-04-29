import React from "react";
import { AiOutlineLink } from "react-icons/ai";

export default function ProjectItem(props) {
  return (
    <div
      className={`max-w-sm mx-auto relative border-gray-500 border-2 shadow-lg mb-36 md:max-w-5xl md:flex md:border-0 md:shadow-none ${
        props.id % 2 !== 0 && "md:flex-row-reverse"
      }`}
      data-aos="zoom-in-up"
    >
      <img className="h-80 w-full object-cover" alt="img" src={props.img} />
      <div
        className={`z-10 absolute top-0 bg-neutral-300 bg-opacity-90 w-full h-full p-5 flex flex-col space-y-4 md:w-1/2 md:h-80 md:bg-transparent md:static ${
          props.id % 2 !== 0 ? "md:items-end" : "md:items-start"
        }`}
      >
        <div
          className={`md:w-full ${
            props.id % 2 !== 0 ? "md:text-left" : "md:text-right"
          }`}
        >
          <h1 className="font-bold text-3xl">{props.title}</h1>
        </div>
        <div
          className={`${
            props.id % 2 !== 0 ? "md:text-left" : "md:text-right"
          } md:shadow-lg md:border-gray-700 md:p-4 md:z-12 md:relativ md:bg-white`}
        >
          <p>{props.description}</p>
        </div>
        <div className="md:w-full">
          <ul className="grid grid-cols-3 text-lg text-gray-500 md:flex md:space-x-4">
            {props.techstack.map((item) => {
              return (
                <li>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
          <div className="text-2xl text-zinc-600 flex justify-end">
            <a href="https://spotify-wrapped.vercel.app/">
              <AiOutlineLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
