import styled from 'styled-components';

const ToggleLayout = styled.div`
  z-index: 10;
  height: 40px;
  width: 40px;
  left: 15px;
  top: 15px;
  position: fixed;
  perspective: 1000px;
  .inner {
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease-in-out;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
    transform: ${({ mode }) => (mode ? 'null' : 'rotateY(180deg)')};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.colors.pale};
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.yellow};
  }
  .back {
    transform: rotateY(180deg);
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.lightOrange};
  }
`;

export default ToggleLayout;
