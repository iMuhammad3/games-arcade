import { useEffect, useRef, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Timer from "./components/Timer";
import { Character } from "./components/Character";

const Game = () => {
  const textareaRef = useRef()
  const [userInput, setUserInput] = useState([]);
  const [charArray, setCharArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // fetches a random quote from api
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        // data is an object and data.content is the actual quote 
        setCharArray(data.content.split(""));
        setIsLoaded(true);
      } catch (err) {
        console.error(err);
        setIsLoaded(false);
      }
    };

    if (!isLoaded) {
      fetchData();
    }
    
    // Check if textareaRef.current is not null before calling focus
    if (textareaRef.current) {
      textareaRef.current.focus();
    }

  }, [isLoaded]);

  const handleCorrect = async () => {
    setUserInput([]);
    // Set isLoaded to false to trigger a new fetch on the next render
    setIsLoaded(false);
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setUserInput(inputValue.split(""));

    // check if value of text in the textarea(where the user types) is
    // equal to the quote
    if (inputValue === charArray.join("")) {
      handleCorrect();
    }
  };

  const characters = () => {
    if (isLoaded) {
      return charArray.map((char, index) => (
        <Character
          correct={userInput[index] ? userInput[index] === char : undefined}
          char={char}
          key={index}
        />
      ));
    }
  };

  const GameUI = (
    <>
      <Timer />
      <div className="bg-slate-200 dark:bg-slate-750 md:w-[550px] w-full mx-2 md:mx-0 p-4 flex flex-col gap-4 rounded-md shadow-lg">
        <p>{characters()}</p>
        <textarea
          ref={textareaRef}
          value={userInput.join("")}
          onChange={handleInput}
          rows="7"
          className="bg-slate-100 dark:bg-slate-850 px-4 py-2 w-full rounded outline-none resize-none"
        ></textarea>
      </div>
    </>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-10 flex-grow">
      {isLoaded ? GameUI : <ThreeDots color="lightblue" />}
    </div>
  );
};

export default Game;
