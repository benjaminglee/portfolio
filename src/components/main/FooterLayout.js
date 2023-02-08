import styled from 'styled-components';

const FooterLayout = styled.div`
  color: ${({ theme }) => theme.colors.orange};
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .footer-icons {
    display: flex;
    margin: 30px;
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
`;

export default FooterLayout;
