import styled from 'styled-components';

const RightNavLayout = styled.div`
  .navbar-right {
    display: none;

    a {
      text-decoration: none;
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
      background-color: ${({ theme }) => theme.colors.orange};
      transition: transform 0.3s ease-in-out;
    }
  }
`;
export default RightNavLayout;
