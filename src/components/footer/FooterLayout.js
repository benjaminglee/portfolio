import styled from 'styled-components';

const FooterLayout = styled.div`
  color: ${({ theme, mode }) =>
    mode ? theme.colors.red : theme.colors.lightGreen};
  position: absolute;
  width: 100%;
  background-color: ${({ theme, mode }) =>
    mode ? theme.colors.lightOrange : theme.colors.darkGreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .footer-icons {
    display: flex;
    margin: 15px 30px 50px 30px;
    .footer-icon-wrapper {
      margin: 10px;
      cursor: pointer;
      a {
        color: ${({ theme, mode }) =>
          mode ? theme.colors.red : theme.colors.lightGreen};
      }
      a:hover {
        color: ${({ theme, mode }) => (mode ? theme.colors.darkRed : 'white')};
      }
    }
  }
  .credit {
    position: absolute;
    top: 60%;
    font-size: 18px;
  }
`;

export default FooterLayout;
