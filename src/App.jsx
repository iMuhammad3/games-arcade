
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import Header from './components/Header'
import Main from './components/Main';

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};


export default App;
{/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/:gameName" element={<GamePage />} />
        </Routes> */}