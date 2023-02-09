import { useState } from 'react';
import BurgerLayout from './Burger.layout';
import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerLayout open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerLayout>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
};

export default Burger;
