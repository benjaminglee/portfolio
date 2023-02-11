import styled from 'styled-components';

const MainLayout = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: -2;
  .navPad {
    width: 100%;
    height: 60px;
  }
  .cloud1 {
    z-index: -1;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    overflow-x: hidden;
    width: 100%;
    img {
      max-width: 63%;
      height: 100%;
    }
  }

  .cloud2 {
    z-index: -1;
    display: flex;
    justify-content: flex-start;
    position: absolute;
    right: 20px;
    overflow-x: hidden;
    width: 100%;
    img {
      max-width: 63%;
    }
  }

  #cloud3 {
    z-index: -1;
    bottom: 700px;
  }
  #cloud4 {
    bottom: -800px;
    opacity: 0.8;
  }
  .moon {
    left: 100px;
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: -1;
    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
    }
  }
  .bird {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    right: 20px;
    overflow-x: hidden;
    width: 100%;
    img {
      max-width: 63%;
    }
  }
  @media (max-width: 838px) {
    .moon {
      left: 30px;
      width: 250px;
      height: 250px;
    }
    .cloud1 {
      height: 200px;
    }
    .cloud2 {
      height: 200px;
    }
  }
  .tree {
    position: absolute;
    background-color: white;
    height: 3000px;
    bottom: 0;
    width: 50px;
    left: 100px;
  }
  section {
    overflow-x: hidden;
    scroll-snap-align: start;
  }
  .desc-background {
    border-radius: 10px;
  }
  .name {
    position: initial;
    font-size: 1.5rem;
    padding: 1rem;
    margin: 1rem;
    pointer-events: none;
    color: ${({ mode, theme }) =>
      mode ? theme.colors.orange : theme.colors.white};

    a {
      pointer-events: auto;
      text-decoration: none;
      color: ${({ mode, theme }) => (mode ? theme.colors.pale : '#ffe33b')};
      text-decoration: underline;
      text-decoration-color: ${({ mode, theme }) =>
        mode ? theme.colors.lightOrange : '#ffb749'};
    }
    a:hover {
      color: ${({ theme, mode }) => (mode ? theme.colors.red : '#8ce172')};
    }
    span {
      font-size: 3rem;
    }
  }
  .desc {
    font-size: 1.5rem;
    padding: 1rem;
    margin: 1rem;
    pointer-events: none;
    color: ${({ theme, mode }) =>
      mode ? theme.colors.orange : theme.colors.white};
    span {
      font-size: 2.8rem;
    }
    a {
      pointer-events: auto;
      text-decoration: none;
      color: ${({ mode, theme }) => (mode ? theme.colors.pale : '#ffe33b')};
    }
    a:hover {
      color: ${({ theme, mode }) =>
        mode ? theme.colors.lightOrange : '#8ce172'};
    }
  }
  .hero {
    color: white;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ground {
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
  }
`;

export default MainLayout;
