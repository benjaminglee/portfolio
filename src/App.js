import Main from './components/main/Main';
import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/constants';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />

        <Main />

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
