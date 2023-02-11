import styled from 'styled-components';

const ProjectsLayout = styled.section`
  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    .projectHeader {
      margin-bottom: 61px;
    }
    .singleProject {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 150px;
      .projectTitle {
        margin: 0;
      }
      .project-info {
        margin-top: 5px;
        background-color: ${({ theme, mode }) =>
          mode ? 'rgba(76,0,43,.7)' : 'rgba(103,139,229,.7)'};
        max-width: 800px;
        padding: 20px;
        border-radius: 5px;
        // border: 1px solid white;
        width: 75%;
        color: ${({ theme, mode }) => (mode ? theme.colors.pale : 'white')};
        font-size: 1rem;
        .button-container {
          display: flex;
          justify-content: center;
          button {
            background-color: ${({ theme, mode }) =>
              mode ? theme.colors.red : '#97C8E7'};
            width: 70px;
            height: 30px;
            border: none;
            margin: 0 10px 0 0;
            cursor: pointer;
            border-radius: 3px;
            font-weight: 600;
            color: ${({ theme, mode }) =>
              mode ? theme.colors.darkRed : 'white'};
            &:hover {
              color: ${({ theme }) => theme.colors.blue};
            }
          }
        }
      }
      .skills {
        color: ${({ theme, mode }) =>
          mode ? theme.colors.lightOrange : 'white'};
        span {
          color: ${({ theme, mode }) =>
            mode ? theme.colors.orang : theme.colors.yellow};
        }
      }
    }
    #picky {
      margin-bottom: 200px;
    }
  }
`;
export default ProjectsLayout;
