import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Option } from "./Components/Option";
import Button from "../../components/Buttons/Button";

const API_URL =
    "https://opentdb.com/api.php?amount=8&difficulty=easy&type=multiple";

const Game = () => {
    const [quiz, setQuiz] = useState([]);
    const [score, setScore] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [finished, setFinished] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then(resp => resp.json())
            .then(data => {
                setQuiz(data.results || []);
                setLoaded(true);
            });
    }, []);

    const options = [
        quiz[currentQuiz]?.correct_answer,
        ...(quiz[currentQuiz]?.incorrect_answers || []),
    ].sort(() => Math.random() - 0.5);
 
    const nextQuiz = index => {
        if (options[index] === quiz[currentQuiz]?.correct_answer) {
            setScore(prev => prev + 1);
        }
        if (currentQuiz === quiz.length - 1) {
            setFinished(true)
            return
        }
        setCurrentQuiz(prev => prev + 1);
    };

    const restartQuiz = () => {
        setFinished(false)
        setCurrentQuiz(0) 
        setScore(0)
    }

    console.log(quiz);
    console.log(options);

    return (
        <div className="center-game">
            <div className=" max-w-xl w-full rounded border-2 bg-slate-750">
                <header className="bg-slate-800 p-3 text-center text-2xl">
                    General Knowledge
                </header>
                {finished ? (
                    <div className="flex flex-col items-center justify-center gap-1 ">
                        <h1 className="text-3xl">Your score is {score}</h1>
                        <Button onClick={restartQuiz}>Restart</Button>
                    </div>
                ) : (
                    <div className={!loaded && `center-game`}>
                        {loaded ? (
                            <div className="p-4">
                                <h2>
                                    Question {currentQuiz + 1} of {quiz?.length}
                                </h2>
                                <div className="my-3 flex flex-col gap-2">
                                    <p>{quiz[currentQuiz]?.question}</p>
                                    <h3>Options:</h3>
                                    <ul className=" flex flex-col gap-1">
                                        {options.map((option, index) => {
                                            return (
                                                <Option
                                                    onClick={() => nextQuiz(index)}
                                                    key={index}
                                                    index={index + 1}
                                                >
                                                    {option}
                                                </Option>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <ThreeDots color="lightblue" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Game;
