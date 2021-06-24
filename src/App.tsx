import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import { Header, Routes } from "./components";

function App() {
  const pages = ["Home", "About", "Projects", "Contact"];
  const [page, setPage] = useState(pages[0]);
  const history = useHistory();

  const onItemClick = (item: string) => {
    setPage(item);
    history.push(`/${item}`);
  };

  return (
    <div className="App">
      <Routes />
      <Header activeItem={page} onClick={onItemClick} items={pages} />
    </div>
  );
}

export default App;
