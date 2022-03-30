import React from "react";

export default function Contact() {
  return (
    <section className="max-w-sm mx-auto mb-36 md:max-w-xl">
      <div className="p-4 text-center flex flex-col space-y-4">
        <div>
          <h1 className="font-bold text-4xl md:text-6xl">Get In Touch</h1>
        </div>
        <div>
          <p className="text-md text-gray-600 md:text-xl">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
        </div>
        <div>
          <button className="border border-gray-700 p-2 w-48 transition rounded-lg duration-300 ease-in-out hover:scale-110 hover:bg-slate-700 hover:text-white">Say Hello</button>
        </div>
      </div>
    </section>
  );
}
