
import React, { useState } from 'react';
import Main from '../components/Main'
import Header from '../components/Header';

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className='flex flex-col min-w-full'>
      <Header setSelectedGame={setSelectedGame} selectedGame={selectedGame} />
      <Main setSelectedGame={setSelectedGame} selectedGame={selectedGame} />
    </div>
  );
};

export default Home;
