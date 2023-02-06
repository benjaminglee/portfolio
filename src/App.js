import { Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/constants';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
