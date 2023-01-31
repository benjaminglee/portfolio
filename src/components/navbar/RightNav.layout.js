import styled from 'styled-components';

const RightNavLayout = styled.div`
  .navbar {
    display: flex;

    a {
      padding: 10px;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      position: fixed;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(200%)')};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      transition: transform 0.3s ease-in-out;
    }
  }
`;
export default RightNavLayout;