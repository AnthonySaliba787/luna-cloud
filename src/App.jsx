import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
