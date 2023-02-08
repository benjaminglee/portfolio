import styled from 'styled-components';

const MainLayout = styled.div`
  section {
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
    color: ${({ theme }) => theme.colors.orange};

    a {
      pointer-events: auto;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.pale};
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.lightOrange};
    }
    a:hover {
      color: ${({ theme }) => theme.colors.red};
    }
    span {
      color: ${({ theme }) => theme.colors.orange};
      font-size: 3rem;
    }
  }
  .desc {
    font-size: 1.5rem;
    padding: 1rem;
    margin: 1rem;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.orange};
    span {
      color: ${({ theme }) => theme.colors.pale};
      font-size: 2.8rem;
    }
    a {
      pointer-events: auto;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.pale};
    }
    a:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
  .hero {
    color: white;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    color: ${({ theme }) => theme.colors.pale};
    font-weight: 500;
    font-size: 2.5rem;
  }
  h3 {
    color: ${({ theme }) => theme.colors.lightOrange};
    font-weight: 500;
    font-size: 1.75rem;
  }
`;

export default MainLayout;
