import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./SideBar.css";

type SideBarProps = {
  pages: string[];
  activePage: string;
  setActivePage: Function;
};

export const SideBar: React.FC<SideBarProps> = ({
  pages,
  activePage,
  setActivePage,
}) => {
  const history = useHistory();

  return (
    <aside className="side-bar">
      <div className="top">
        <div className="nav-items">
          {pages.map((page, index) => (
            <div
              className={`item ${activePage === page ? "active" : ""}`}
              onClick={() => {
                setActivePage(page);
                history.push(page);
              }}
              key={index}
            >
              {page}
            </div>
          ))}
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <a href="https://www.linkedin.com/in/n-tavakoli/" target="blank">
            <i className="linkedin icon large"></i>
          </a>
        </div>
        <div className="item">
          <a href="https://github.com/NastaranTavakoli/" target="blank">
            <i className="github icon large"></i>
          </a>
        </div>
        <div className="item">
          <a href="mailto:nastaran.tavakoli.91@gmail.com">
            <i className="envelope icon large"></i>
          </a>
        </div>
      </div>
    </aside>
  );
};
