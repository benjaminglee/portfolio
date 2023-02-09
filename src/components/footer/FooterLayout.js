import styled from 'styled-components';

const FooterLayout = styled.div`
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightOrange};
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
        color: ${({ theme }) => theme.colors.red};
      }
      a:hover {
        color: ${({ theme }) => theme.colors.darkRed};
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
