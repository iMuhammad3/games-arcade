import React, { useEffect, useState } from "react";
import Button from "../../components/Buttons/Button";
import { GameSettings } from "./components/GameSettings";
import { QuizUI } from "./QuizUI";

const API_URL = (questionCount, difficulty, categoryId) => 
    `https://opentdb.com/api.php?amount=${questionCount}&difficulty=${difficulty}&type=multiple&category=${categoryId}`;
const CATEGORIES_API = "https://opentdb.com/api_category.php";

const Game = () => {
    const [quiz, setQuiz] = useState([]);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [finished, setFinished] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const [difficulty, setDifficulty] = useState("easy");
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(9);
    const [questionCount, setQuestionCount] = useState(10);

    useEffect(() => {
        const fetchCategories = async () => {
            try{
                const result = await fetch(CATEGORIES_API)
                const data = await result.json()
                setCategories(data.trivia_categories)
            } catch (err){
                console.error(err);
            }
        }
        fetchCategories();
    }, []) 

    useEffect(() => {
        fetchQuiz();
    }, [finished]);

    useEffect(() => {
        fetchQuiz();
        setCurrentQuiz(0);
    }, [difficulty, categoryId, questionCount])

    useEffect(() => {
        const newOptions = [
            quiz[currentQuiz]?.correct_answer,
            ...(quiz[currentQuiz]?.incorrect_answers || []),
        ].sort(() => Math.random() - 0.5);

        setOptions(newOptions);
    }, [currentQuiz]);

    console.log(quiz);
    console.log(options);
    console.log(currentQuiz);

    const nextQuiz = index => {
        if (options[index] === quiz[currentQuiz]?.correct_answer) {
            setScore(prev => prev + 1);
        }
        if (currentQuiz === quiz.length - 1) {
            setFinished(true);
            return;
        }
        setCurrentQuiz(prev => prev + 1);
    };

    const fetchQuiz = async () => {
        setLoaded(false);
        try {
            const result = await fetch(API_URL(questionCount, difficulty, categoryId));
            const data = await result.json();
            setQuiz(data.results || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoaded(true);
        }
    };

    const restartQuiz = () => {
        setFinished(false);
        setCurrentQuiz(0);
        setScore(0);
    };

    return (
        <div className="center-game">
            <GameSettings
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                categories={categories}
                setCategories={setCategories}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                questionCount={questionCount}
                setQuestionCount={setQuestionCount}
            />
            <div className=" max-w-xl w-full rounded border-2 overflow-hidden">
                <header className="bg-nightblue-900/70 p-3 text-center text-2xl">
                    General Knowledge
                </header>
                {finished ? (
                    <div className="flex flex-col items-center justify-center gap-3 py-8">
                        <h1 className="text-3xl">Your score is {score}</h1>
                        <Button onClick={restartQuiz}>Restart</Button>
                    </div>
                ) : (
                    <QuizUI
                        loaded={loaded}
                        currentQuiz={currentQuiz}
                        quiz={quiz}
                        options={options}
                        nextQuiz={nextQuiz}
                    />
                )}
            </div>
        </div>
    );
};
export default Game;
