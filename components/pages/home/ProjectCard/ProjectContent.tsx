import { Fragment } from "react";
import PilarImage from "@/images/pilar.png";

export const Projects = [
  {
    name: "Pilar",
    description: (
      <Fragment>
        PILAR Industry is an e-commerce application that accomodates products
        and donations for programs that are held by PILAR Jakarta
        <br />
        <br />
        Tech stack: React.js, Django, Flutter, Docker
      </Fragment>
    ),
    image: "/images/pilar.png",
  },
  {
    name: "Diskuy",
    description: (
      <Fragment>
        Diskuy is a forum based platform for Functional Programming class
        students at the Faculty of Computer Science, Universitas Indonesia.
        Diskuy is bulit in collaboration with Universitas Indonesia lecturer,
        Ade Azurat.
        <br />
        <a href="https://funpro.cs.ui.ac.id" className="text-blue-500">
          Link
        </a>
        <br />
        <br />
        Tech stack: React.js, Elixir, Docker
      </Fragment>
    ),
    image: "/images/diskuy.png",
  },
  {
    name: "EstimatePro",
    description: (
      <Fragment>
        EstimatePRO is an application that my team and I made for the company
        PT. Reefconindo Cemerlang Inti. I led a team of 9 people to work on a
        website for the company which served as a database for the company to
        work on. Our team is tasked to kick start the project and implement the
        core features needed. The team and I use the python Django framework to
        make the website because of the company hardware limitations. I
        personally oversee and direct my team's work from the requirements
        provided by the client. The project lasted up to about 4 months in
        total, starting from designing to finishing the core product.
        <br />
        <br />
        Tech stack: React.js, Next.js, Django
      </Fragment>
    ),
    image: "/images/estimatepro.png",
  },
  {
    name: "Riliv",
    description: (
      <Fragment>
        Riliv is a platform for meditation and counseling
        <br />
        <a href="https://riliv.co" className="text-blue-500">
          Link
        </a>
        <br />
        <br />
        Tech stack: React.js, Next.js, Express.js
      </Fragment>
    ),
    image: "/images/riliv.png",
  },
];

export const PersonalProjects = [
  {
    name: "Discord Breakout Bot",
    description: (
      <Fragment>
        Discord Breakout Bot is a Discord bot that functions to make breakout
        rooms like zoom
        <br />
        <br />
        Tech stack: Node.js
      </Fragment>
    ),
    image: "/images/breakoutbot.gif",
  },
  {
    name: "LINE PI Bot",
    description: (
      <Fragment>
        PI Bot is a LINE bot and a small project that I made for my group of
        friends to track the amount of profanity that every individual has
        spoken. Every individual has their own counter on which they can check
        24/7.
        <br />
        <br />
        Tech stack: Flask, PostgeSQL
      </Fragment>
    ),
    image: "/images/pibot.png",
  },
  {
    name: "JSON to Spreadsheet Table",
    description: (
      <Fragment>
        JSON to Spreadsheet table is a passion mini-project where it can convert
        JSON to spreadsheet format. The spreadsheet is formatted like any other
        table that displays data, but the user can directly edit the element
        inside it and it will send a request to change the data to the server
        that is defined
        <br />
        <br />
        Tech stack: React.js, Next.js
      </Fragment>
    ),
  },
  {
    name: "Personalized Website",
    description: (
      <Fragment>
        This project is made for my significant other
        <br />
        <br />
        Tech stack: Django
      </Fragment>
    ),
		image: "/images/personalized.png",
  },
];
