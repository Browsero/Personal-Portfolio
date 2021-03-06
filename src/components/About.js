import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./About.css";
import { v4 as uuidv4 } from "uuid";

export default function About() {
  const techStack = [
    "JavaScript",
    "GIT",
    "HTML/CSS",
    "React",
    "Firebase",
    "SCSS",
    "Tailwind CSS",
    "NODE.JS",
  ];
  return (
    
    <section
      id="about"
      className="max-w-xs mx-auto sm:max-w-lg md:max-w-3xl lg:max-w-5xl mb-16"
    >
      <div className="bg-white shadow-2xl border border-gray-200 md:flex rounded-t-lg">
        <div className="rounded-tl-lg">
          <img
            className="w-full object-cover rounded-t-lg md:rounded-none md:rounded-tl-lg md:h-full md:w-96"
            src={process.env.PUBLIC_URL + '/about.jpg'}
            alr="img"
            alt="about"
          />
        </div>
        <div className="flex flex-col space-y-4 p-4 md:p-8 md:pt-40 md:pb-40 md:w-4/5 xl:p-8 xl:pt-24 xl:pb-10">
          <div>
            <h1 className="link link-underline link-underline-black font-medium max-w-fit text-3xl text-slate-800 md:text-4xl">
              About me
            </h1>
          </div>
          <div>
            <p className="text-slate-500">
              I am a first-year student of the Silesian University of Technology
              in the field of Computer Science. I have widely developed
              communication skills. I communicate fluently in English. I
              associate my professional future with programming, so I would like
              to gain my first experience in the IT industry as a Junior
              Frontend Developer.
            </p>
          </div>
          <div>
            <p className="text-slate-500">
              To widen my programming skills I'm learning Angular to develop more scalable web applications and Java for better backend experience.
    
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-2 gap-4">
              {techStack.map((item) => {
                return (
                  <li key={uuidv4()} className="flex items-center space-x-2">
                    <AiOutlineRight />
                    <p className="text-slate-600">{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
