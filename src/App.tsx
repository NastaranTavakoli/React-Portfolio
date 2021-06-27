import { useState } from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { NavBar, SideBar } from "./components";
import { About, Contact, Home, Projects, ProjectDetails } from "./pages";
import "./App.css";

const pages = ["Home", "About", "Projects", "Contact"];

function App() {
  const history = useHistory();
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
