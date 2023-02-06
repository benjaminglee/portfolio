import styled from 'styled-components';

const NavbarLayout = styled.div`
  position: fixed;
  z-index: 2;
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
      color: ${({ theme }) => theme.colors.darkRed};
      position: absolute;
    }
    .last {
      padding-top: 2px;
      padding-left: 3px;
      color: ${({ theme }) => theme.colors.red};
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
    background-color: ${({ theme }) => theme.colors.lightOrange};
    border-bottom: 12px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.pale};
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
      color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: 838px) {
      display: none;
    }
  }
  .linkwrapper {
    margin-left: 40px;
    a {
      padding: 10px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.pale};
    }
  }
`;

export default NavbarLayout;
