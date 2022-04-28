import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-sm mx-auto mb-36 md:max-w-xl">
      <div className="p-4 text-center flex flex-col space-y-4">
        <div>
          <h1 className="font-bold text-4xl md:text-6xl">Get In Touch</h1>
        </div>
        <div>
          <p className="text-md text-gray-600 md:text-xl">
            If you have some questions, job offers or suggestions to my
            portfolio you can use the button below to contact me!
          </p>
        </div>
        <div>
          <a
            className="border border-gray-700 p-2 w-48 transition rounded-lg duration-300 ease-in-out hover:scale-110 hover:bg-slate-700 hover:text-white"
            href="mailto:hubertmadej02@protonmail.com?subject=[Q] Your Question Subject"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
