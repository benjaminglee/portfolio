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
  .about {
    color: ${({ theme }) => theme.colors.orange};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
    padding: 15px;
    margin-bottom: 100px;
    .about-main {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 1100px;
    }
    .answer {
      position: relative;
      background-color: ${({ theme }) => theme.colors.darkRed};
      margin: 10px;
      width: 75%;
      max-width: 800px;
      align-self: flex-start;
      border-radius: 10px;
      padding: 0 10px;
    }
    .answer-right {
      position: relative;
      background-color: ${({ theme }) => theme.colors.darkRed};
      margin: 10px;
      width: 75%;
      max-width: 800px;
      align-self: flex-end;
      border-radius: 10px;
      padding: 0 10px;
    }
    .answer-right:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-left-color: ${({ theme }) => theme.colors.darkRed};
      border-right: 0;
      border-bottom: 0;
      margin-top: -10px;
      margin-right: -20px;
    }
    .answer:after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-right-color: ${({ theme }) => theme.colors.darkRed};
      border-left: 0;
      border-bottom: 0;
      margin-top: -10px;
      margin-left: -20px;
    }
    .question-left {
      align-self: flex-start;
    }
    .question-right {
      align-self: flex-end;
    }
    span {
      color: ${({ theme }) => theme.colors.pale};
    }
  }
`;

export default MainLayout;
