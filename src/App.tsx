import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar, SideBar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import "./App.css";

const pages = ["Home", "About", "Projects", "Contact"];

function App() {
  const [activePage, setActivePage] = useState(pages[0]);

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
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route>404 not found.</Route>
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
