import { useState } from 'react';
import RightNav from '../RightNav/RightNav';
import { StyledBurger } from './style';

const Burger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StyledBurger
        open={open}
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
