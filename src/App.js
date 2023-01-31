import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
