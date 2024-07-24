import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Img1 from './Images/img1.jpg';
import Img2 from './Images/img2.jpg';
import Img3 from './Images/img3.jpg';
import Img4 from './Images/img4.jpg';
import Img5 from './Images/img5.jpg';
import Img6 from './Images/img6.jpg';

function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ImageCarousel() {
  const slides = [Img1, Img2, Img3,Img4,Img5,Img6];

  return (
    <div className="relative app min-h-[100vh] flex justify-center items-center">
      <div className="max-w-lg">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
