import React, { useState } from "react";
import history from "../history";
import "./SideBar.css";

type SideBarProps = {
  pages: string[];
  activePage: string;
  setActivePage: Function;
  visible: boolean;
  setVisible: Function;
};

export const SideBar: React.FC<SideBarProps> = ({
  pages,
  activePage,
  setActivePage,
  visible,
  setVisible,
}) => {
  return (
    <aside className="side-bar" style={{ width: visible ? "5rem" : "3rem" }}>
      <div className="top">
        <div className="nav-items">
          {visible ? (
            pages.map((page, index) => (
              <div
                className={`item ${activePage === page ? "active" : ""}`}
                onClick={() => {
                  setActivePage(page);
                  setVisible(false);
                  history.push(page);
                }}
                key={index}
              >
                {page}
              </div>
            ))
          ) : (
            <div onClick={() => setVisible(true)} className="burger">
              <i className="align justify icon big"></i>
            </div>
          )}
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
