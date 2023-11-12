// import Header from "/Users/mac/Desktop/Projects/games-arcade/src/components/Header.jsx"
// import Main from '/Users/mac/Desktop/Projects/games-arcade/src/components/Main.jsx'

// function Home(){
//     return (
//         <div className="flex flex-col min-h-screen select-none bg-slate-50 dark:bg-slate-900 dark:text-slate-50">
//             <Header />
//             <Main />
//         </div>
//     )
// }
// export default Home

// HomePage.jsx
import React from 'react';
import Main from '../components/Main'
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {
  const games = ['typing-game']; // Add more games as needed

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default HomePage;
