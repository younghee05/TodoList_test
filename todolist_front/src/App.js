import { Global } from '@emotion/react';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import { reset } from './styles/global';

function App() {
  return (
    <>
      <Global styles={reset}/>
      <MainPage />
    </>
  );
}

export default App;
