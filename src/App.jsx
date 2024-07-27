import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Projects,
  About,
  Image_Slider,
  Hidden_image_hover_effect,
  Bg_Changing_Card,
  Todo,
  ImageSlider,
  PageNotfound,
  // Quote,
  // HireDev,
  // Project,
} from "./pages/Index";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/3D-Image-Slider" element={<Image_Slider />} />
          <Route
            path="/Hidden-image-hover-effect"
            element={<Hidden_image_hover_effect />}
          />
          <Route path="/color-picker" element={<Bg_Changing_Card />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/image-slider" element={<ImageSlider />} />

          <Route path="*" exact element={<PageNotfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
