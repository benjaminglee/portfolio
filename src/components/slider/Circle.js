const Circle = ({ idx, currentIdx, setCurrentIdx }) => {
  return idx === currentIdx ? (
    <span className="circle-active" onClick={() => setCurrentIdx(idx)} />
  ) : (
    <span className="circle" onClick={() => setCurrentIdx(idx)} />
  );
};

export default Circle;
