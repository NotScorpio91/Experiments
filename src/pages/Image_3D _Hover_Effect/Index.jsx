import React from "react";
import "./index.css";
import dragon_1 from "./images/dragon_1.jpg";
import dragon_2 from "./images/dragon_2.jpg";
import dragon_3 from "./images/dragon_3.jpg";
import dragon_4 from "./images/dragon_4.jpg";
import dragon_5 from "./images/dragon_5.jpg";
import dragon_6 from "./images/dragon_6.jpg";
import dragon_7 from "./images/dragon_7.jpg";
import dragon_8 from "./images/dragon_8.jpg";
import dragon_9 from "./images/dragon_9.jpg";
import dragon_10 from "./images/dragon_10.jpg";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="bbody h-screen ">
      <main className="flex flex-col justify-center items-center gap-20">
        <h1 className="text-3xl font-semibold font-roboto">3D Hover Effect</h1>
        <h2></h2>

        <div class="gallery">
          <div class="gallery-panel">
            <img src={dragon_1} alt="Jane Doe" />
          </div>

          <div class="gallery-panel">
            <img src={dragon_2} alt="John Doe" />
          </div>

          <div class="gallery-panel">
            <img src={dragon_3} alt="Jane Doe" />
          </div>

          <div class="gallery-panel">
            <img src={dragon_4} alt="Jane Doe" />
          </div>

          <div class="gallery-panel">
            <img src={dragon_5} alt="John Doe" />
          </div>

          <div class="gallery-panel">
            <img src={dragon_6} alt="Jane Doe" />
          </div>

          <div class="gallery-panel">
            <img src={dragon_7} alt="Jane Doe" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
