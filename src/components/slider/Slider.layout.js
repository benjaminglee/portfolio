import styled from 'styled-components';

const SliderLayout = styled.div`
  width: 80%;
  max-width: 700px;
  z-index: 1;
  .imageContainer {
    position: relative;
  }
  img {
    border: 3px solid ${({ mode }) => (mode ? '#c29895' : 'white')};
    border-radius: 10px;
    max-width: 700px;
    width: 100%;
    object-fit: scale-down;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    transition: transform 0.3s;
  }
  .imageContainer:hover {
    img {
      transform: scale(1.02);
      transition-timing-function: ease-in-out;
    }
  }
  .sliderButton {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 20px);
    left: -20px;
    cursor: pointer;
  }
  .sliderButton:hover {
    background-color: white;
  }
  #next {
    left: initial;
    right: -25px;
  }
  .legend {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .circle {
      width: 12px;
      height: 12px;
      background-color: ${(p) => (p.mode ? p.theme.colors.pale : 'white')};
      margin: 10px;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.6s ease;
    }
    .circle-active {
      width: 12px;
      height: 12px;
      background-color: ${(p) =>
        p.mode ? p.theme.colors.lightOrange : p.theme.colors.yellow};
      margin: 10px;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid
        ${(p) => (p.mode ? p.theme.colors.lightOrange : 'white')};
      transition: background-color 0.6s ease;
    }
  }
`;

export default SliderLayout;
