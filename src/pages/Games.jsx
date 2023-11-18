// GamePage.jsx
import React from 'react';

const GamePage = ({ match }) => {
  // Check if match.params is defined before trying to access its properties
  const gameName = match?.params?.gameName;

  if (!gameName) {
    // Handle the case where gameName is undefined
    return <div>Invalid game name</div>;
  }

  return (
    <div>
      <h2>{gameName} Game Page</h2>
      {/* Render your game component based on the gameName */}
    </div>
  );
};

export default GamePage;
