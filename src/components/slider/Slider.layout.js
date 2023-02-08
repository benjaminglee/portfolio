import styled from 'styled-components';

const SliderLayout = styled.div`
  width: 80%;
  max-width: 700px;
  z-index: 1;
  .imageContainer {
    position: relative;
  }
  img {
    border: 1px solid ${(p) => p.theme.colors.pale};
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
      transform: scale(1.03);
      transition-timing-function: ease-in-out;
    }
  }
  .sliderButton {
    height: 50px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10%;
    position: absolute;
    top: calc(50% - 20px);
    left: -10px;
    cursor: pointer;
  }
  .sliderButton:hover {
    background-color: white;
  }
  #next {
    left: initial;
    right: -10px;
  }
  .legend {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .circle {
      width: 12px;
      height: 12px;
      background-color: ${(p) => p.theme.colors.pale};
      margin: 10px;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.6s ease;
    }
    .circle-active {
      width: 12px;
      height: 12px;
      background-color: ${(p) => p.theme.colors.lightOrange};
      margin: 10px;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid ${(p) => p.theme.colors.lightOrange};
      transition: background-color 0.6s ease;
    }
  }
`;

export default SliderLayout;
