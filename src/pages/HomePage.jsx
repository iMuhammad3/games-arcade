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
import { Link } from 'react-router-dom';

const HomePage = () => {
  const games = ['typing-game']; // Add more games as needed

  return (
    <div>
      <h2>Game List</h2>
      <ul>
        {games.map((game) => (
          <li key={game}>
            <Link to={`/game/${game}`}>{game}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
