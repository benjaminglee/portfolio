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
  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    .singleProject {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 150px;
      .projectTitle {
      }
      .project-info {
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
  }
  .contact {
    display: flex;
    flex-direction: column;
    #contactHeader {
      align-self: center;
    }
  }
  .contact-main {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .contact-text {
    width: 40%;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 16px;
  }
  .map-wrapper {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 40vh;
    iframe {
      width: 100%;
      height: 100%;
      max-width: 1000px;
    }
  }
  @media (max-width: 838px) {
    .contact-main {
      flex-direction: column;
      align-items: center;
    }
    .contact-text {
      width: 90%;
    }
    .map-wrapper {
      width: 90%;
    }
  }
`;

export default MainLayout;
