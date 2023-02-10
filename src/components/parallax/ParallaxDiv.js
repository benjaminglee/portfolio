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
  console.log(props);
  const ref = useRef();
  const handler = () => {
    ref.current.style.transform = `translateY(${
      window.scrollY * props.speed * -1
    }px)`;
  };
  useScrollHandler(handler);
  return <div ref={ref} {...props} />;
};

export default ParallaxDiv;
