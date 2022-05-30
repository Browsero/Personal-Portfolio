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
        key = {1}
        title="Spotify Wrapped"
        url="https://spotify-wrapped.vercel.app/"
        img={process.env.PUBLIC_URL + "/slide-1.jpg"}
        description="Simple web application based on spotify API. After login via Spotify, user is able to see top artists and tracks. User can filter favourite tracks and artists
        by time. There are three time spans available: Month, 6 months and all time. Mockup designed by rawpixel.com"
        techstack={["React", "SpotifyAPI", "Node.Js", "Figma", "Vercel"]}
      />
      <ProjectItem
        id={2}
        key = {2}
        title="NoteX"
        url="https://www.notex.in/"
        img={process.env.PUBLIC_URL + "/slide-2.jpg"}
        description={`An application that, after logging in, allows you to quickly create
        short notes in the form of "sticky-notes". Notes are stored in a
        database, which allows you to access them from any device. Soon
        the application will be expanded with a more extensive notes
        function using the markdown editor.`}
        techstack={["React", "Tailwind", "Styled-Components", "Firebase"]}
      />
    </section>
  );
}
