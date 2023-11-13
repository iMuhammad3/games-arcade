
import React, { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main';

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  return (
    <>
      <Header setSelectedGame={setSelectedGame} />
      <Main setSelectedGame={setSelectedGame} selectedGame={selectedGame} />
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