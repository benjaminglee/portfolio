import Main from './components/main/Main';
import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/constants';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState(true);
  return (
    <div style={{ overflowX: 'hidden' }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles mode={mode} />
        <Navbar mode={mode} setMode={setMode} />
        <Main mode={mode} />

        <Footer mode={mode} />
      </ThemeProvider>
    </div>
  );
}

export default App;
