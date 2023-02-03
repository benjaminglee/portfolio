import styled from 'styled-components';

const NavbarLayout = styled.div`
  .logo {
    left: 0;
    position: absolute;
    margin-left: 20px;
  }
  .navbar-main {
    padding-top: 12px;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    background-color: ${({ theme }) => theme.colors.red};
    border-bottom: 12px solid ${({ theme }) => theme.colors.darkRed};
    color: white;
    font-weight: 400;
  }
  .navbar {
    display: flex;
    width: 60%;
    justify-content: flex-end;
    margin-right: 30px;
    opacity: 1;
    a {
      opacity: 1;
      padding: 10px;
      text-decoration: none;
      color: white;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
  .linkwrapper {
    margin-left: 40px;
    color: white;
    a {
      padding: 10px;
      text-decoration: none;
      color: white;
    }
  }
`;

export default NavbarLayout;
