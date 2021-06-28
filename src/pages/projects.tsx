import React from "react";
import { ProjectCard } from "../components";
import "./Projects.css";

type ProjectsProps = {};
type Project = {
  name: string;
  description: string;
  code: string;
  about: string;
  website?: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "Placeholder Restaurant Reservation",
    description:
      "A restaurant reservation platform for businesses and customers using ASP .Net MVC and .Net Web APIs to communicate with the mobile app, Mar 21 – May 21",
    code: "https://github.com/NastaranTavakoli/ASP.NetCoreMVC-RestaurantReservationSystem",
    about: "/Projects/1",
    website: "https://nastaran.azurewebsites.net/",
    image: "assets/img/projects/placeholder.png",
  },
  {
    name: "Reservation System Mobile App",
    description:
      "A mobile app for customers to login, create and manage their reservations, Developed in React native and Typescript to communicate with the .Net APIs, Jun 21",
    code: "https://github.com/NastaranTavakoli/ReservationSystem-MobileApp",
    about: "/Projects/2",
    image: "assets/img/projects/placeholder-mobile.png",
  },
  {
    name: "Portfolio Website",
    description: "Portfolio Website built with React and Typescript, Jun 21",
    code: "https://github.com/NastaranTavakoli/React-Portfolio",
    about: "/Projects/3",
    website: "https://nastaran.azurewebsites.net/",
    image: "assets/img/projects/portfolio.png",
  },
  {
    name: "V & V Club Management System",
    description:
      "A simple club management system for admins to perform CRUD operations and filter and sort the results using ASP .Net MVC, Apr 21",
    code: "https://github.com/NastaranTavakoli/V-VClubManagement-ASP.NET-MVC-and-XUnit",
    about: "/Projects/4",
    website: "https://nastaran.azurewebsites.net/",
    image: "assets/img/projects/vandv.png",
  },
  {
    name: "Notepad",
    description: "A React Notepad app for managing notes, Mar 21",
    code: "https://github.com/NastaranTavakoli/React-Notepad",
    about: "/Projects/5",
    website: "https://nastaran.azurewebsites.net/",
    image: "assets/img/projects/notepad.png",
  },
  {
    name: "Vega",
    description:
      "Web APIs for a car dealership website to talk to an angular app. Admins can register cars in the database and browse the cars. Developed in ASP .Net core applying repository pattern, Jan 21 ",
    code: "https://github.com/NastaranTavakoli/ASP.NetCore-Vega",
    about: "/Projects/6",
    image: "assets/img/projects/vega.png",
  },
  {
    name: "XYZ & Co. Order Management System",
    description:
      "A simple order and stock management system developed using C# ADO.NET and WPF, Oct 20 - Nov 20",
    code: "https://github.com/NastaranTavakoli/OMS-C-ADO.NET-and-WPF",
    about: "/Projects/7",
    image: "assets/img/projects/oms.png",
  },
  {
    name: "ROI Contact Management Mobile App",
    description:
      "A react native application that communicates with an ASP.NET Web Service for managing the contact information of employees, Nov 20",
    code: "https://github.com/NastaranTavakoli/Contact-Management-ReactNative ",
    about: "/Projects/8",
    image: "assets/img/projects/contacts.png",
  },
  {
    name: "Sorrento By The Sea",
    description:
      "Simple holiday apartment Website built with HTML, CSS and JS, August 20",
    code: "https://github.com/NastaranTavakoli/SorentoByTheSea-html-css-js",
    about: "/Projects/9",
    image: "assets/img/projects/sorrento.png",
  },
];

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="projects">
      <div className="ui three stackable special cards relaxed doubling">
        {projects.map((p) => (
          <ProjectCard
            projectName={p.name}
            image={p.image}
            projectDescription={p.description}
            codeLink={p.code}
            readMoreLink={p.about}
            websiteLink={p.website || undefined}
          />
        ))}
      </div>
    </div>
  );
};
