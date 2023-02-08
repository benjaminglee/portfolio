import Main from './components/main/Main';
import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/constants';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />

        <Main />

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
