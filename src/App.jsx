import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import About from "./components/About";
import NoPage from "./components/NoPage";

function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
