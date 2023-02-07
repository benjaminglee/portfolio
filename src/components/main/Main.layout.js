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
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 500;
    font-size: 1.75rem;
    margin-top: 100px;
  }
  .about {
    color: ${({ theme }) => theme.colors.pale};
    min-height: 100vh;
  }
  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    &-info {
      background-color: ${({ theme }) => theme.colors.darkRed};
      max-width: 600px;
      padding: 10px;
      border-radius: 5px;
      width: 75%;
      color: ${({ theme }) => theme.colors.pale};
      font-size: 1rem;
      .button-container {
        display: flex;
        justify-content: center;
        button {
          background-color: ${({ theme }) => theme.colors.red};
          width: 70px;
          height: 30px;
          border: none;
          margin: 0 10px 0 0;
          cursor: pointer;
          border-radius: 3px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.darkRed};
          &:hover {
            color: ${({ theme }) => theme.colors.pale};
          }
        }
      }
    }
    .skills {
      color: ${({ theme }) => theme.colors.lightOrange};
      span {
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }
  .contact {
    height: 100vh;
  }
`;

export default MainLayout;
