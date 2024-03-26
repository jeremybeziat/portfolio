import "./assets/styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
