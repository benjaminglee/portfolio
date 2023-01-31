import styled from 'styled-components';

const BurgerLayout = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: none;
  z-index: 2;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? 'grey' : 'black')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(30%)' : 'translateX(0%)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export default BurgerLayout;
