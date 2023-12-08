import React from "react";
import {Option} from './Components/Option'
import { ThreeDots } from "react-loader-spinner";

export const QuizUI = ({loaded, currentQuiz, quiz, options, nextQuiz}) => {
    return (
        <div className={loaded ? undefined : `center-game`}>
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
    );
};
