import "./assets/styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Form from "./pages/MyProjectForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/formulaire" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
