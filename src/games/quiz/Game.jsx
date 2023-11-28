import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Option } from "./Components/Option";

const API_URL =
    "https://opentdb.com/api.php?amount=8&difficulty=easy&type=multiple";

const Game = () => {
    const [quiz, setQuiz] = useState([]);
    const [currentQuiz, setCurrentQuiz] = useState(0);
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
        ...quiz[currentQuiz]?.incorrect_answers,
    ].sort(() => Math.random() - 0.5);

    console.log(quiz);

    return (
        <div className="center-game">
            <div className=" max-w-xl w-full rounded border-2 bg-slate-750">
                <header className="bg-slate-800 p-3 text-center text-2xl">
                    General Knowledge
                </header>
                {loaded ? (
                    <div className="p-4">
                        <h2>Question {currentQuiz + 1} of {quiz?.length}</h2>
                        <div className="my-3 flex flex-col gap-2">
                            <p>{quiz[currentQuiz]?.question}</p>
                            <h3>Options:</h3>
                            <ul className=" flex flex-col gap-1">
                                {options.map((option, index) => {
                                    return (
                                        <Option key={index} index={index + 1}>
                                            {option}
                                        </Option>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <ThreeDots />
                )}
            </div>
        </div>
    );
};
export default Game;
