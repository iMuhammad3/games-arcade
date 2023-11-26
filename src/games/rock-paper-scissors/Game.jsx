import { useReducer, useState } from "react";
import { SvgContainer } from "./components/SvgContainer";
import { useSVG } from "./hooks/useSVG";
import { PlayerSection } from "./components/PlayerSection";
import Button from "../../components/Buttons/Button";
import {
    RESET_GAME,
    SET_COMPUTER_SCORE,
    SET_MESSAGE,
    SET_RANDOM_MOVE,
    SET_ROUND,
    SET_USER_SCORE,
    gameReducer,
    initialState,
} from "./components/GameReducer";

const Game = () => {
    const moves = ["rock", "paper", "scissors"];
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const { message, round, maxRound, randomMove, userScore, computerScore } =
        state;

    const handleClick = index => {
        if (round === maxRound) {
            // game ends
            dispatch({ type: SET_MESSAGE, payload: "Game over!" });
            return;
        }
        const winner = checkWinner(moves[index], randomMove);
        if (winner === "user") {
            // user wins
            dispatch({ type: SET_USER_SCORE, payload: userScore + 1 });
        } else if (winner === "computer") {
            // computer wins
            dispatch({ type: SET_COMPUTER_SCORE, payload: computerScore + 1 });
        } else {
            //draw
        }
        dispatch({ type: SET_ROUND, payload: round + 1 });
        dispatch({
            type: SET_RANDOM_MOVE,
            payload: moves[Math.floor(Math.random() * 3)],
        });
    };

    const restartGame = () => {
        dispatch({ type: RESET_GAME });
    };

    return (
        <div className="center-game !justify-normal">
            <div className="mt-20 flex flex-col items-center justify-between gap-10 w-full max-w-[550px]">
                <h1 className="text-center">
                    Round {round} of {maxRound}
                </h1>
                <h2>{message}</h2>
                <div className="flex flex-col md:flex-row-reverse items-center gap-14 select-none">
                    <PlayerSection>
                        <h2>Computer's score: {computerScore}</h2>
                        <SvgContainer computer={true}>
                            {useSVG(randomMove)}
                        </SvgContainer>
                    </PlayerSection>
                    <PlayerSection>
                        <h2>Your score: {userScore}</h2>
                        <div className="flex gap-2">
                            {moves.map((move, index) => {
                                const svg = useSVG(move);
                                return (
                                    <SvgContainer
                                        onClick={() => handleClick(index)}
                                    >
                                        {svg}
                                    </SvgContainer>
                                );
                            })}
                        </div>
                    </PlayerSection>
                </div>
                <Button onClick={restartGame}>Restart</Button>
            </div>
        </div>
    );
};

const checkWinner = (userMove, computerMove) => {
    if (
        (userMove === "rock" && computerMove === "scissors") ||
        (userMove === "paper" && computerMove === "rock") ||
        (userMove === "scissors" && computerMove === "paper")
    ) {
        return "user";
    } else if (
        (userMove === "rock" && computerMove === "paper") ||
        (userMove === "paper" && computerMove === "scissors") ||
        (userMove === "scissors" && computerMove === "rock")
    ) {
        return "computer";
    } else {
        return "draw";
    }
};

export default Game;
