import { Fragment } from "react";

import ProjectCard from "@/components/pages/home/ProjectCard";
import { Projects, PersonalProjects } from "@/components/pages/home/ProjectCard/ProjectContent";
import Header from "@/components/pages/home/Header";

export default function Home() {
  return (
    <Fragment>
      <div className="m-12 mx-48 select-none">
        <Header>Projects that &apos; worked on</Header>
        <div className="flex flex-wrap mt-8 justify-center">
          {Projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
        <div className="text-center tracking-widest mt-12">
          <Header delay={0.5}>Personal Projects</Header>
        </div>
        <div className="flex flex-wrap mt-8 justify-center">
          {PersonalProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
