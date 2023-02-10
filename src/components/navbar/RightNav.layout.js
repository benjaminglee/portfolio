import styled from 'styled-components';

const RightNavLayout = styled.div`
  .navbar-right {
    display: none;
    .rightNavLink {
      margin-top: 50px;
      font-weight: 500;
    }
    a {
      text-decoration: none;
      color: ${({ mode, theme }) => (mode ? 'white' : theme.colors.darkGreen)};
    }

    @media (max-width: 838px) {
      padding-top: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(200%)')};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      background-color: ${({ theme, mode }) =>
        mode ? theme.colors.orange : theme.colors.lightGreen};
      transition: transform 0.3s ease-in-out;
    }
  }
`;
export default RightNavLayout;
