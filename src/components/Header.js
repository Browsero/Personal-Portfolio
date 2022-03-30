import React from "react";

export default function Header() {
  const year = new Date().getFullYear();
  const age = year - 2002;
  return (
    <>
      <header className="mt-8 mb-80 py-16 mx-auto md:mt-48 md:pb-96 lg:mt-32 lg:pb-32 xl:mt-44">
        <div className="mx-auto flex flex-col justify-center items-center text-center space-y-2 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-7xl xl:max-w-9xl">
          <div>
            <h2 className="font-medium text-lg sm:text-xl md:text-2xl text-gray-600">
              Hi, I'Name
            </h2>
          </div>
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl xl:text-8xl">
              I'm a computer science student and begginer Web Developer.
            </h1>
          </div>
          <div className="md:max-w-4xl">
            <p className="text-lg md:text-xl md:mt-5 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div>
            <button className="text-white bg-gray-800 flex flex-wrap p-4 mt-8 transition delay-150 md:hover:scale-110 duration-300">
              Check out my projects!
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
