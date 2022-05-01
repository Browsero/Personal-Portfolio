import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section id="projects" className="pt-64 pb-16">
      <div className="text-5xl font-bold mx-auto max-w-sm mb-12 md:mb-32 md:max-w-none md:text-center">
        <h1>My work and Projects</h1>
      </div>
      <ProjectItem
        id={1}
        title="Spotify Wrapped"
        url="https://spotify-wrapped.vercel.app/"
        img={process.env.PUBLIC_URL + "/slide-1.png"}
        description="Simple web application based on spotify API. After login via Spotify, user is able to see top artists and tracks. User can filter favourite tracks and artists
        by time. There are three time spans available: Month, 6 months and all time. Mockup designed by rawpixel.com"
        techstack={["React", "SpotifyAPI", "Node.Js", "Figma", "Vercel"]}
      />
      <ProjectItem
        id={2}
        title="Tips Calculator"
        url="https://tips-calculator-eight.vercel.app/"
        img={process.env.PUBLIC_URL + "/tips.png"}
        description="Simple tip calculator app, which was made to practice all basic React functionalities (like states management, effects, context) and web-design. To style this app I used Tailwind CSS and Frontend mentor styling to train remaking designs from Figma."
        techstack={["React", "Tailwind", "Vercel"]}
      />
    </section>
  );
}
