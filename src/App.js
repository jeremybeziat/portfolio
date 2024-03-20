import "./assets/styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Flowers from "./pages/Flowers";
import Marguerite from "./pages/Marguerite";
import Joker from "./pages/Joker";
import LinearDesign from "./pages/LinearDesign";
import Nuclear from "./pages/Nuclear";
import Smile from "./pages/Smile";
import RainingStars from "./pages/RainingStars";
import Help from "./pages/Help";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/work/flowers" element={<Flowers />} />
          <Route exact path="/work/marguerite" element={<Marguerite />} />
          <Route exact path="/work/joker" element={<Joker />} />
          <Route exact path="/work/linear-design" element={<LinearDesign />} />
          <Route exact path="/work/help" element={<Help />} />
          <Route exact path="/work/nuclear" element={<Nuclear />} />
          <Route exact path="/work/smile" element={<Smile />} />
          <Route exact path="/work/raining-stars" element={<RainingStars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
