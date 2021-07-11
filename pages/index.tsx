import { Fragment } from "react";
import Head from "next/head";

import ProjectCard from "@/components/pages/home/ProjectCard";
import {
  Projects,
  PersonalProjects,
} from "@/components/pages/home/ProjectCard/ProjectContent";
import Header from "@/components/pages/home/Header";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>FadhilP Portfolio</title>
      </Head>
      <div className="sm:m-12 mx-2 sm:mx-48 select-none">
        <Header>Projects that I&apos;ve worked on</Header>
        <div className="flex flex-wrap mt-8 justify-center">
          {Projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
        <div className="text-center tracking-widest mt-12">
          <Header delay={0.5}> Personal Projects</Header>
        </div>
        <div className="flex flex-wrap mt-8 justify-center">
          {PersonalProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
        <div className="text-2xl mt-8 text-center">
          This site is a work in progress <br /> This project&apos;s repository: {"  "}
          <a
            href="https://github.com/FadhilP/FadhilP.github.io"
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            Click here
          </a>
        </div>
      </div>
    </Fragment>
  );
}
