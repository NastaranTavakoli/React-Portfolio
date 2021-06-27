import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

type ProjectCardProps = {
  projectName: string;
  projectDescription: string;
  codeLink: string;
  readMoreLink: string;
  websiteLink?: string;
  image: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectDescription,
  codeLink,
  readMoreLink,
  websiteLink,
  image,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="card project-card">
      <div
        className={`blurring dimmable image ${hovered ? "dimmed" : ""}`}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <div
          className={`ui dimmer transition ${
            hovered ? "visible active" : "hidden"
          }`}
        >
          <div className="content">
            <div className="center">
              <a className="ui inverted button" href={codeLink} target="blank">
                <i className="code icon"></i>
              </a>
              {websiteLink && (
                <a
                  className="ui inverted button"
                  href={websiteLink}
                  target="blank"
                >
                  <i className="globe icon"></i>
                </a>
              )}
              <Link className="ui inverted button" to={readMoreLink}>
                Read More
              </Link>
            </div>
          </div>
        </div>
        <img src={image} alt="" />
      </div>
      <div className="content bottom">
        <Link className="header" to={readMoreLink}>
          {projectName}
        </Link>
        <hr />
        <div className="meta">{projectDescription}</div>
      </div>
    </div>
  );
};
