import { useState } from 'react';
import SliderLayout from './Slider.layout';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import Circle from './Circle';

const Slider = ({ slides, mode }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const handlePrev = (e) => {
    e.preventDefault();
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
    else setCurrentIdx(slides.length - 1);
  };
  const handleNext = (e) => {
    e.preventDefault();
    if (currentIdx < slides.length - 1) setCurrentIdx(currentIdx + 1);
    else setCurrentIdx(0);
  };
  return (
    <SliderLayout mode={mode}>
      <div className="imageContainer">
        <img alt="website screenshots" src={slides[currentIdx].src} />

        <div onClick={handlePrev} className="sliderButton">
          <FaAngleLeft color="#2C0A2D" />
        </div>

        <div onClick={handleNext} className="sliderButton" id="next">
          <FaAngleRight color="#2C0A2D" />
        </div>
      </div>
      <div className="legend">
        {slides.map((slide, idx) => (
          <Circle
            idx={idx}
            currentIdx={currentIdx}
            setCurrentIdx={setCurrentIdx}
            key={idx}
          />
        ))}
      </div>
    </SliderLayout>
  );
};

export default Slider;
