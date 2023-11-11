// import Header from "./components/Header"
// import Main from './components/Main'

// function App() {
//   return (
    
//   )
// }

// export default App

// App.jsx
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

const App = () => {
  return (
    <Router>
      <div className='text-white'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:gameName" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
