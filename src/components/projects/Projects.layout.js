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
        background-color: ${({ theme }) => theme.colors.darkRed};
        max-width: 800px;
        padding: 20px;
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
    #picky {
      margin-bottom: 200px;
    }
  }
`;
export default ProjectsLayout;
