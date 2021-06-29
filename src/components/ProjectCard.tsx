import React, { useState } from "react";
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
        onClick={() => {
          setHovered(true);
        }}
        onBlur={() => {
          setHovered(false);
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
              <a
                className="ui inverted button"
                href={readMoreLink}
                target="blank"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
        <img src={image} alt="" />
      </div>
      <div className="content bottom">
        <span className="header">{projectName}</span>
        <div className="ui section divider"></div>
        <div className="meta">{projectDescription}</div>
      </div>
    </div>
  );
};
