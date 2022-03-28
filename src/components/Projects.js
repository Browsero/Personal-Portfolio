import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section className="pt-64 pb-16">
      <div className="text-5xl font-bold mx-auto max-w-sm mb-12 md:mb-32 md:max-w-none md:text-center">
        <h1>My work and Projects</h1>
      </div>
      <ProjectItem
        id={1}
        title="Netflix"
        img="https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
        techstack={["React", "Ruby", "Tailwind", "Firebase", "Figma", "Vercel"]}
      />
      <ProjectItem
        id={2}
        title="Uber"
        img="https://images.unsplash.com/photo-1554672408-758865e7274a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
        techstack={["React", "Ruby", "Tailwind", "Firebase", "Figma", "Vercel"]}
      />
    </section>
  );
}
