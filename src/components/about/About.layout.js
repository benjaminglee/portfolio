import styled from 'styled-components';

const AboutLayout = styled.section`
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
    @media (max-width: 838px) {
      font-size: 18px;
    }
  }
`;

export default AboutLayout;
