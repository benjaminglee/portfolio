import { useState } from 'react';
import BurgerLayout from './Burger.layout';
import RightNav from './RightNav';

const Burger = ({ mode }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
  };
  const handleClose = (open) => {
    setOpen(!open);
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
  };
  return (
    <>
      <BurgerLayout
        mode={mode}
        open={open}
        onClick={open ? handleClose : handleOpen}
      >
        <div />
        <div />
        <div />
      </BurgerLayout>
      <RightNav
        mode={mode}
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
      />
    </>
  );
};

export default Burger;
