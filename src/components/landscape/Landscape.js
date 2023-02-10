import LandscapeLayout from './Landscape.layout';

const Landscape = ({ mode }) => {
  return (
    <LandscapeLayout mode={mode}>
      <div className="campfire">
        <img
          src={mode ? '/images/campfireNight.png' : 'images/campfireDay.png'}
          className={mode ? 'fire' : null}
          alt="campfire"
        />
      </div>
      <div className="ground-layer1"></div>
      <div className="ground-layer2"></div>
      <div className="ground-layer3"></div>
      {mode ? null : (
        <img className="bones" src="../images/bones.png" alt="dinosaur bones" />
      )}
      {mode ? null : (
        <img className="rocks" src="../images/rocks.png" alt="rocks" />
      )}
    </LandscapeLayout>
  );
};

export default Landscape;
