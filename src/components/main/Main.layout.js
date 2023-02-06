import styled from 'styled-components';

const MainLayout = styled.div`
  section {
    scroll-snap-align: start;
  }
  .desc-background {
    // background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
  }
  .name {
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
      color: ${({ theme }) => theme.colors.purple};
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
      color: ${({ theme }) => theme.colors.purple};
    }
  }
  .hero {
    color: white;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contact {
    height: 100vh;
  }
  .projectWrapper {
    display: flex;
    border-radius: 5px;
    margin-bottom: 3rem;
    img {
      height: 40vh;
      width: auto;
    }
  }
  .projectDesc {
    padding: 2rem;
    background-color: orange;
    border-radius: 10px;
    margin: 10px;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    .projectWrapper {
      flex-direction: column;
      img {
        height: 20vh;
      }
    }
  }
`;

export default MainLayout;
