import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Home, About, Projects, Contact } from "../pages";

export const Routes: React.FC = () => {
  return (
    <Container style={{ position: "absolute" }}>
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
    </Container>
  );
};
