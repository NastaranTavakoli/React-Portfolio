import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

type NavBarProps = {
  pages: string[];
  activePage: string;
  setActivePage: Function;
};

export const NavBar: React.FC<NavBarProps> = ({
  pages,
  activePage,
  setActivePage,
}) => {
  const history = useHistory();

  return (
    <div className="nav-bar">
      <div className="left">
        <div className="image-wrapper">
          <img
            src="https://media-exp3.licdn.com/dms/image/C4E03AQF-jgDq0LV6zA/profile-displayphoto-shrink_800_800/0/1550196698502?e=1629936000&v=beta&t=CvnSzMKGyOW3KHC7HrcRYEn027BJ48eQi6zRbUxRcb4"
            alt="avatar"
          />
        </div>
        <div className="name">Nas Tavakoli</div>
      </div>
      <div className="right">
        <div className="nav-items">
          {pages.map((page, index) => (
            <div
              className={`nav-item ${activePage === page ? "active" : ""}`}
              onClick={() => {
                setActivePage(page);
                history.push(page);
              }}
              key={index}
            >
              {page}
              {activePage === page && <i className="angle down icon"></i>}
            </div>
          ))}
        </div>
        <div className="resume">
          <a href="/assets/docs/CV.docx" target="blank">
            <Button inverted circular animated="vertical" size="massive">
              <Button.Content visible>Résumé</Button.Content>
              <Button.Content hidden>
                <Icon name="download" />
              </Button.Content>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
