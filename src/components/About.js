import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function About() {
  const techStack = [
    "JavaScript",
    "Github",
    "Three.js",
    "React",
    "Firebase",
    "Next.js",
    'Tailwind',
    'Ruby'
  ];
  return (
    <main className="max-w-xs mx-auto sm:max-w-lg md:max-w-3xl lg:max-w-5xl mb-16 lg:pt-32">
      <div className="bg-white shadow-2xl border border-gray-200 md:flex rounded-t-lg">
        <div className="rounded-tl-lg">
          <img
            className="w-full object-cover rounded-t-lg md:rounded-none md:rounded-tl-lg md:h-full"
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=800"
            alr="img"
          />
        </div>
        <div className="flex flex-col space-y-4 p-4 md:p-8 md:pt-40 md:pb-40 md:w-4/5 xl:p-8 xl:pt-24 xl:pb-10">
          <div>
            <h1 className="font-medium text-3xl text-slate-800 md:text-4xl">
              About me
            </h1>
          </div>
          <div>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-2 gap-4">
              {techStack.map((item) => {
                return (
                  <li className="flex items-center space-x-2">
                    <AiOutlineRight />
                    <p className="text-slate-600">{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
