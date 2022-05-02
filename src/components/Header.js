import React from "react";

export default function Header() {
  const year = new Date().getFullYear();
  const age = year - 2002;
  return (
    <>
      <header className="mt-16 py-24 px-4 mx-auto min-h-screen h-96 md:mt-4 md:flex md:items-center" data-aos='slide-up'>
        <div className="mx-auto flex flex-col justify-center items-center text-center space-y-2 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-7xl xl:max-w-9xl">
          <div>
            <h2 className="font-medium text-lg sm:text-xl md:text-5xl text-gray-600">
              Hi, I'm Hubert
            </h2>
          </div>
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl xl:text-7xl">
              I'm a computer science student and trainee Web Developer.
            </h1>
          </div>
          <div className="md:max-w-5xl">
            <p className="text-lg md:text-2xl md:mt-5 text-gray-600">
              I'm {age} years old Web Developer and currently I'm working on my
              personal projects to improve my skills and gain experience which I
              will be able to use in my future job.
            </p>
          </div>
          <div>
            <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-wrap p-4 mt-8 transition delay-150 md:hover:scale-110 duration-300">
              <a href="./#projects">Check out my projects!</a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
