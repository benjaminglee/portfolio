import { useEffect, useRef } from 'react';

const useScrollHandler = (handler) => {
  useEffect(() => {
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);
};

const ParallaxDiv = (props) => {
  const ref = useRef();
  const handler = () => {
    ref.current.style.transform = `translate(${
      window.scrollY * props.speedX * -1
    }px, ${window.scrollY * props.speedY * -1}px)`;
  };
  useScrollHandler(handler);
  return <div ref={ref} {...props} />;
};

export default ParallaxDiv;
