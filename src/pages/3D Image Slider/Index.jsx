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
    <div className="app">
      <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src={dragon_1} alt="" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={dragon_2} alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={dragon_3} alt="" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={dragon_4} alt="" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={dragon_5} alt="" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={dragon_6} alt="" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={dragon_7} alt="" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img src={dragon_8} alt="" />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img src={dragon_9} alt="" />
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <img src={dragon_10} alt="" />
          </div>
        </div>
        <div className="content">
          <h1 data-content="Scorpio">Scorpio</h1>
          <div className="author">
            <div className="flex flex-col items-start ">
              <span className="text-2xl">Hi,I&#39;m</span>
              <h2 className="font-bold text-5xl text-gray-900">Scorpio</h2>
            </div>
            <p>
              <b>A Front-End Web Developer</b>
            </p>
            <p>LET&#39;S BUILD SOMETHING TOGETHER</p>
          </div>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
}

export default Index;
