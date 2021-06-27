import React from "react";
import "./About.css";

type AboutProps = {};

export const About: React.FC<AboutProps> = () => {
  return (
    <div className="about">
      <div className="ui teal three stackable cards">
        <div className="card">
          <div className="content">
            <div className="header">LANGUAGES</div>
            <div className="ui section divider"></div>
            <div className="description">
              <img src="/assets/img/Csharp.png" alt=""></img>
              <img src="/assets/img/Js.jpg" alt=""></img>
              <img src="/assets/img/sql.jpg" alt=""></img>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="header">BACK-END</div>
            <div className="ui section divider"></div>
            <div className="description">
              <img src="/assets/img/NETCore.png" alt=""></img>
              <img src="/assets/img/API.png" alt=""></img>
              <img src="/assets/img/aspMVC.png" alt=""></img>
              <img src="/assets/img/ef.png" alt=""></img>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="header">FRONT-END</div>
            <div className="ui section divider"></div>
            <div className="description">
              <img src="/assets/img/react.png" alt=""></img>
              <img src="/assets/img/js.jpg" alt=""></img>
              <img src="/assets/img/html.png" alt=""></img>
              <img src="/assets/img/css.png" alt=""></img>
              <img src="/assets/img/sass.png" alt=""></img>
              <img src="/assets/img/bootstrap.jpg" alt=""></img>
              <img src="/assets/img/jquery.jpg" alt=""></img>
              <img src="/assets/img/native.jpg" alt=""></img>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="header">TESTING</div>
            <div className="ui section divider"></div>
            <div className="description">
              <img src="/assets/img/selenium.png" alt=""></img>
              <img src="/assets/img/mstest.png" alt=""></img>
              <img src="/assets/img/xunit.jpg" alt=""></img>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="header">TOOLING</div>
            <div className="ui section divider"></div>
            <div className="description">
              <img src="/assets/img/tfs.png" alt=""></img>
              <img src="/assets/img/git.png" alt=""></img>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="header">CONCEPTS</div>
            <div className="ui section divider"></div>
            <div className="description">
              <img src="/assets/img/rest.png" alt=""></img>
              <img src="/assets/img/oop.jpg" alt=""></img>
              <img src="/assets/img/mvc.png" alt=""></img>
              <img src="/assets/img/agile.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="ui teal cards">
        <div className="ui fluid card">
          <div className="content">
            <div className="header">Education</div>
          </div>
          <div className="content">
            <h4 className="description">
              Diploma of Software Development - TAFE Petersham
              <span className="meta"> , Feb 21 - Jun 21</span>
            </h4>
            <div className="ui small feed">
              <div className="content">
                <div className="summary">
                  Focused on designing and developing web applications in
                  ASP.NET Core, EF Core, MVC, React, React Native, Testing,
                  Source control, Validation and Project Management.
                </div>
              </div>
            </div>
            <div className="ui section divider"></div>
            <h4 className="description">
              Certificate IV of Programming - TAFE Petersham{" "}
              <span className="meta">, Jul 20 - Dec 20 </span>
            </h4>
            <div className="ui small feed">
              <div className="content">
                <div className="summary">
                  Focused on Programming Fundamentals, C#, HTML, CSS,
                  JavaScript, React, React Native, Testing, Validation and
                  Object Oriented Analysis and Design.
                </div>
              </div>
            </div>
            <div className="ui section divider"></div>
            <h4 className="description">
              Master of Construction Project Management - University of Tehran
              <span className="meta"> , Sep 15 - Jul 17</span>
            </h4>
            <div className="ui small feed">
              <div className="content"></div>
            </div>
            <div className="ui section divider"></div>
            <h4 className="description">
              Bachelor of Architecture - University of Tehran
              <span className="meta"> , Sep 09 - Jul 14</span>
            </h4>
            <div className="ui small feed">
              <div className="content"></div>
            </div>
          </div>
        </div>
        <hr />

        <div className="ui fluid card">
          <div className="content">
            <div className="header">Other Interests</div>
          </div>
          <div className="content">
            Everything related to creating, from painting to cooking
            <div className="ui section divider"></div>
            Traveling and adventure, trying new foods and learning about new
            cultures
            <div className="ui section divider"></div>
            Pet care and plant care
            <div className="ui section divider"></div>
            Running and fitness
            <div className="ui section divider"></div>
            Music, dancing, movies and cinema
          </div>
        </div>
      </div>
    </div>
  );
};
