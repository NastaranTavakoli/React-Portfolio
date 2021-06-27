import { useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { NavBar, SideBar } from "./components";
import { About, Contact, Home, Projects, ProjectDetails } from "./pages";
import history from "./history";
import "./App.css";

const pages = ["Home", "About", "Projects", "Contact"];

function App() {
  let path = history.location.pathname;
  path = path.slice(1, path.length);
  const [activePage, setActivePage] = useState(
    pages.includes(path) ? path : "Home"
  );

  return (
    <div className="app">
      <NavBar
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main>
        <section>
          <Router history={history}>
            <Switch>
              <Route exact path="/Home">
                <Home />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/Projects">
                <Projects />
              </Route>
              <Route exact path="/Projects/:id">
                <ProjectDetails />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Redirect to="Home" />
            </Switch>
          </Router>
        </section>
        <SideBar
          pages={pages}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </main>
    </div>
  );
}

export default App;
