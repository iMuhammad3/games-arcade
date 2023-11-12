// Main.jsx
import { useState } from "react";
import Game from "./Game";
import SearchInput from "./Input";

function Main() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (gameName) => {
    setSelectedGame(gameName);
    console.log(selectedGame)
  };

  const renderGamePage = () => {
      if (selectedGame) {
      // Render the game page or component based on the selected game
      return (
        <div>
          <h2>{selectedGame} Game Page</h2>
          {/* Add logic to render the specific game component */}
        </div>
      );
    }

    return null;
  };

  return (
    <main className="dark:bg-slate-850 dark:text-slate-100 py-10 px-16 flex flex-col gap-6">
      <SearchInput forHeader={false} />
      {renderGamePage()}
      <ul className="flex justify-center flex-wrap gap-6">
        <Game name="Typing Game" handleClick={() => handleGameClick("typing-game")} />
        {/* Add more games with their respective onClick handlers */}
      </ul>
    </main>
  );
}

export default Main;
