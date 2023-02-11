import styled from 'styled-components';

const ContactFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ mode, theme }) => (mode ? '#363953' : '#97C8E7')};
  position: relative;
  z-index: 3;
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

    background: ${({ mode, theme }) => (mode ? '#2c2f48' : theme.colors.white)};
    color: ${({ mode }) => (mode ? 'white' : 'gray')};
    width: 100%;
    border-radius: 0.3rem;
    margin: 8px;
  }
  textarea {
    min-height: 100px;
  }
  #emailsub {
    width: 100%;
    color: white;
    background-color: ${({ theme, mode }) =>
      mode ? theme.colors.orange : theme.colors.blue};
  }
`;

export default ContactFormLayout;
