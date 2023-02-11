import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import ToggleLayout from './Toggle.layout';

const Toggle = ({ mode, setMode }) => {
  return (
    <ToggleLayout mode={mode} onClick={() => setMode(!mode)}>
      <div className="inner">
        <div className="face">
          <BsFillSunFill size="25px" />
        </div>
        <div className="face back">
          <FaMoon size="20px" />
        </div>
      </div>
    </ToggleLayout>
  );
};

export default Toggle;
