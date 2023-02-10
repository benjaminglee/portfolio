import styled from 'styled-components';

const ContactLayout = styled.section`
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
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    overflow: hidden;
    iframe {
      width: 100%;
      height: 100%;
      max-width: 1000px;
      z-index: 3;
      border-radius: 10px;
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
