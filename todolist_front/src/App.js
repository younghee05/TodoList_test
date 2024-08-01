import { Global } from '@emotion/react';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import { reset } from './styles/global';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import JoinPage from './pages/JoinPage/JoinPage';

function App() {
  return (
    <>
      <Global styles={reset}/>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/api/v1/join" element={<JoinPage />}/>
            <Route path="/api/v1/main" element={<MainPage />}/>
        </Routes>
    </>
  );
}

export default App;
