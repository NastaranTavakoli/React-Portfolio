import React from "react";
import "./Home.css";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="column left">
          <div className="image-wrapper"></div>
        </div>
        <div className="column right">
          <div className="top-div">
            <div className="circle-text">
              <p>
                Nas <br />
                Tavakoli   
              </p>
              <p className="second-line">Full Stack Developer</p> 
            </div>
          </div>
          <div className="bottom-div">
            <p>
              Started learning to code for the purpose of optimization for
              construction projects in my research and ended up absolutely
              loving it. Focused on software development since then and took
              programming and software development courses at TAFE to learn
              more. Now I am looking forward to growing as a software developer
              every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
