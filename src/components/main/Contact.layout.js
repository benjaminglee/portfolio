import styled from 'styled-components';

const ContactLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #363953;
  position: relative;
  z-index: 1;
  padding: 15px;
  border-radius: 5px;
  #contact-heading {
    align-self: flex-start;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin-left: 10px;
    margin-right: 10px;
  }
  input,
  textarea {
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    border: none;
    outline: none;
    padding: 10px;
    background: #2c2f48;
    color: #fff;
    width: 100%;
    border-radius: 0.4rem;
    margin: 8px;
  }
  textarea {
    min-height: 100px;
  }
  #emailsub {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;

export default ContactLayout;
