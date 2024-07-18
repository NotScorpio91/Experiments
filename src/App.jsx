import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  List,
  Image_Slider,
  Hidden_image_hover_effect,
  Bg_Changing_Card,
} from "./pages/Index";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/3D-Image-Slider" element={<Image_Slider />} />
          <Route
            path="/Hidden-image-hover-effect"
            element={<Hidden_image_hover_effect />}
          />
          <Route path="/Bg_Changing_Card" element={<Bg_Changing_Card />} />
          {/* <Route path="/quote" element={<Quote />} />
                    <Route path="/hire-dev" element={<HireDev />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/work/:slug" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/career/:slug" element={<CareerForm/>} />
                    <Route path="*" exact element={<PageNotfound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
