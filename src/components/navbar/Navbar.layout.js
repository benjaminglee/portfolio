import styled from 'styled-components';

const NavbarLayout = styled.div`
  position: fixed;
  z-index: 4;
  .arrow-top {
    z-index: 10;
    height: 40px;
    width: 40px;
    left: 75px;
    top: 15px;
    position: fixed;
    perspective: 1000px;
    .arrow-inner {
      width: 100%;
      height: 100%;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .arrow-face {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 10px;
      border: 3px solid
        ${({ theme, mode }) => (mode ? theme.colors.pale : theme.colors.pale)};
      background-color: ${({ theme, mode }) =>
        mode ? theme.colors.orange : theme.colors.darkGreen};
      color: ${({ theme, mode }) => theme.colors.pale};
    }
  }
  .logo {
    left: -10px;
    top: 20px;
    position: absolute;
    margin-left: 20px;
    font-weight: 600;
    font-size: 40px;
    color: white;
    line-height: 0.9;
    cursor: pointer;
    .first {
      color: ${({ theme, mode }) => theme.colors.darkRed};
      position: absolute;
    }
    .last {
      padding-top: 2px;
      padding-left: 3px;
      color: ${({ theme, mode }) => theme.colors.red};
    }
    .dev {
      color: ${({ theme }) => theme.colors.red};
      font-weight: 1000;
    }
    span {
      font-weight: 1000;
      color: ${({ theme }) => theme.colors.pale};
    }
  }
  .navbar-main {
    padding-top: 12px;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    background-color: ${({ theme, mode }) =>
      mode ? theme.colors.lightOrange : theme.colors.lightGreen};
    border-bottom: 12px solid
      ${({ theme, mode }) =>
        mode ? theme.colors.orange : theme.colors.darkGreen};
    font-weight: 400;
  }
  .navbar {
    display: flex;
    width: 60%;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;
    opacity: 1;
    a {
      opacity: 1;
      padding: 10px;
      text-decoration: none;
    }
    a:hover {
      color: ${({ theme, mode }) =>
        mode ? theme.colors.white : theme.colors.darkGreen};
    }

    @media (max-width: 838px) {
      display: none;
    }
  }
  .linkwrapper {
    margin-left: 22px;
    a {
      padding: 10px;
      text-decoration: none;
      color: ${({ theme, mode }) => (mode ? theme.colors.pale : 'white')};
    }
  }
`;

export default NavbarLayout;
