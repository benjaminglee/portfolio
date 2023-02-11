import styled from 'styled-components';

const ContactLayout = styled.section`
  a {
    font-weight: 600;
    color: ${({ theme, mode }) =>
      mode ? theme.colors.orange : theme.colors.yellow};
  }
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    #contactHeader {
      align-self: center;
      margin-bottom: 61px;
    }
  }
  .contact-main {
    height: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: space-around;
  }
  .contact-text {
    width: 40%;
    color: ${({ theme, mode }) => (mode ? theme.colors.orange : 'white')};
    font-size: 16px;
  }
  .map-wrapper {
    display: flex;
    justify-content: center;
    width: 50%;
    max-width: 500px;
    height: 40vh;
    margin-bottom: 50px;
    position: relative;
    .overlay {
      position: absolute;
      border: 3px solid white;
      height: 100%;
      width: 100%;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
    }
    iframe {
      width: 100%;
      height: 100%;
      max-width: 1000px;
      border: 2px solid white;
      z-index: 3;
      border-radius: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      -ms-border-radius: 10px;
      -o-border-radius: 10px;
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

export default ContactLayout;
