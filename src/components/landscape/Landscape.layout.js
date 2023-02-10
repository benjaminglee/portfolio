import styled from 'styled-components';

const LandscapeLayout = styled.div`
  width: 100%;
  background-color: ${({ mode }) => (mode ? '#1a191c' : '#dec9b8')};
  height: 100px;
  z-index: 2;
  position: relative;
  .campfire {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    img {
      position: absolute;
      top: -36px;
      z-index: 1;
    }
    .fire {
      top: -265px;
      padding-left: 2px;
    }
  }
  .ground-layer1 {
    background-color: ${({ mode }) => (mode ? '#403b4d' : '#2d8c59')};
    height: 5px;
    width: 100%;
  }
  .ground-layer2 {
    background-color: ${({ mode }) => (mode ? '#27242e' : '#755d49')};
    height: 10px;
    width: 100%;
  }
  .ground-layer3 {
    background-color: ${({ mode }) => (mode ? '#1a191c' : '#c4a78f')};
    height: 35px;
    width: 100%;
  }
  .bones {
    position: absolute;
    left: 30%;
    bottom: 10px;
  }
  .rocks {
    position: absolute;
    right: 20%;

    bottom: 55px;
  }
`;

export default LandscapeLayout;
