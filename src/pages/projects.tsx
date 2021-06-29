import React from "react";
import { ProjectCard } from "../components";
import "./Projects.css";

type ProjectsProps = {};
type Project = {
  name: string;
  description: string;
  code: string;
  about?: string;
  website?: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "Placeholder Restaurant Reservation",
    description:
      "A restaurant reservation platform for businesses and customers developed in ASP .Net MVC and .Net Web APIs to communicate with the mobile app, Mar 21 – May 21",
    code: "https://github.com/NastaranTavakoli/ASP.NetCoreMVC-RestaurantReservationSystem",
    about: "https://youtu.be/wiPlTQ-g1wM",
    website: "https://nastaran.azurewebsites.net/",
    image: "assets/img/projects/placeholder.png",
  },
  {
    name: "Reservation System Mobile App",
    description:
      "A mobile app for customers to login, create and manage their reservations, Developed in React native to communicate with the .Net APIs, Jun 21",
    code: "https://github.com/NastaranTavakoli/ReservationSystem-MobileApp",
    about: "https://youtu.be/SaHN_mcuYcI",
    image: "assets/img/projects/placeholder-mobile.png",
  },
  {
    name: "Portfolio Website",
    description: "Portfolio Website built with React and Typescript, Jun 21",
    code: "https://github.com/NastaranTavakoli/React-Portfolio",
    about: "https://youtu.be/0ugXdzkz3kk",
    website: "https://nastarantavakoli.github.io/",
    image: "assets/img/projects/portfolio.png",
  },
  {
    name: "V & V Club Management System",
    description:
      "A simple club management system for admins to perform CRUD operations and filter and sort the results using ASP .Net MVC, Apr 21",
    code: "https://github.com/NastaranTavakoli/V-VClubManagement-ASP.NET-MVC-and-XUnit",
    about: "https://youtu.be/BG0dRpbZcXA",
    website: "https://vandv-club.azurewebsites.net/",
    image: "assets/img/projects/vandv.png",
  },
  {
    name: "Notepad",
    description: "A React Notepad app for managing notes, Mar 21",
    code: "https://github.com/NastaranTavakoli/React-Notepad",
    about: "https://youtu.be/yR9s22iZ-fU",
    website: "https://nas-notepad.github.io/",
    image: "assets/img/projects/notepad.png",
  },
  {
    name: "Vega",
    description:
      "Web APIs for a car dealership application to register cars in the database and browse them. Developed in ASP .Net core to talk to an angular client app, Jan 21",
    code: "https://github.com/NastaranTavakoli/ASP.NetCore-Vega",
    image: "assets/img/projects/vega.png",
  },
  {
    name: "XYZ & Co. Order Management System",
    description:
      "A simple order and stock management system developed using C# ADO.NET and WPF, Oct 20 - Nov 20",
    code: "https://github.com/NastaranTavakoli/OMS-C-ADO.NET-and-WPF",
    about: "https://youtu.be/U3z8zlfuBMY",
    image: "assets/img/projects/oms.png",
  },
  {
    name: "ROI Contact Management Mobile App",
    description:
      "A react native application that communicates with an ASP.NET Web Service for managing the contact information of employees, Nov 20",
    code: "https://github.com/NastaranTavakoli/Contact-Management-ReactNative ",
    about: "https://youtu.be/fdBv1GJmP3c",
    image: "assets/img/projects/contacts.png",
  },
  {
    name: "Sorrento By The Sea",
    description:
      "A simple holiday apartment Website built with HTML, CSS and JS, August 20",
    code: "https://github.com/NastaranTavakoli/SorentoByTheSea-html-css-js",
    about: "https://youtu.be/VDZwTtRj8X8",
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
