import { useState } from 'react';
import BurgerLayout from './Burger.layout';
import RightNav from './RightNav';
import { theme } from '../../styles/constants';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerLayout theme={theme} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerLayout>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
