import styled from 'styled-components';

const BurgerLayout = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 22px;
  right: 20px;
  display: none;
  z-index: 11;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open, theme, mode }) =>
      open && mode
        ? theme.colors.red
        : mode
        ? theme.colors.darkRed
        : open && !mode
        ? theme.colors.darkGreen
        : theme.colors.darkGreen};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 838px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export default BurgerLayout;
