import React from "react";
import { Option } from "./Components/Option";
import { ThreeDots } from "react-loader-spinner";
import Button from "../../components/Buttons/Button";
import {Loader} from "../../components/loaders/Loader.jsx"

export const QuizUI = ({
    loaded,
    currentQuiz,
    quiz,
    options,
    nextQuiz,
    finished,
    score,
    restartQuiz
}) => {

    const decodeText = (encodedText) => {
        return new DOMParser().parseFromString(encodedText, "text/html").body.textContent;
    }

    const scoreDisplay = (
        <div className="flex flex-col items-center justify-center gap-3 py-8">
            <h1 className="text-3xl">Your score is {score}</h1>
            <Button onClick={restartQuiz}>Restart</Button>
        </div>
    );

    const quizDisplay = (
        <div className="p-4">
            <h2>
                Question {currentQuiz + 1} of {quiz?.length}
            </h2>
            <div className="my-3 flex flex-col gap-2">
                <p>{decodeText(quiz[currentQuiz]?.question)}</p>
                <h3>Options:</h3>
                <ul className=" flex flex-col gap-1">
                    {options.map((option, index) => {
                        return (
                            <Option
                                onClick={() => nextQuiz(index)}
                                key={index}
                                number={index + 1}
                            >
                                {decodeText(option)}
                            </Option>
                        );
                    })}
                </ul>
            </div>
        </div>
    );

    // if game is finished then display score ui
    // else if loaded is true then display quiz
    // else display a loader until loaded is true
    return (
        <div className=" max-w-xl w-full rounded border-2 overflow-hidden select-none">
            <header className="bg-nightblue-900/70 p-3 text-center text-2xl">
                Quiz
            </header>
            <div className={loaded ? undefined : `center-game`}>
                {finished ? (
                    scoreDisplay
                ) : (
                    <>
                        {loaded ? quizDisplay : <ThreeDots color="lightblue" />} 
                    </>
                )}
            </div>
        </div>
    );
};
