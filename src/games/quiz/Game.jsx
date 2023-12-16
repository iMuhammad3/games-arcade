import React, { useEffect, useState } from "react";
import { GameSettings } from "./components/GameSettings";
import { QuizUI } from "./QuizUI";
import { useCategories } from "./hooks/useCategories";

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
    const [categoryId, setCategoryId] = useState(9);
    const [questionCount, setQuestionCount] = useState(10);
    const categories = useCategories(CATEGORIES_API)
    
    useEffect(() => {
        fetchQuiz()
    }, [difficulty, questionCount, categoryId]);

    useEffect(() => {
        const newOptions = [
            quiz[currentQuiz]?.correct_answer,
            ...(quiz[currentQuiz]?.incorrect_answers || []),
        ].sort(() => Math.random() - 0.5);

        setOptions(newOptions);
    }, [currentQuiz, quiz]);

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
        let timeoutId
        setLoaded(false);
        try {
            const result = await fetch(
                API_URL(questionCount, difficulty, categoryId)
            ); 
            const data = await result.json();
            // Too many requests have occurred
            if(data.response_code === 5){
                clearTimeout(timeoutId)
                timeoutId = setTimeout(() => {
                    fetchQuiz()
                }, 5500)
                return
            }
            setQuiz(data.results || []);
            setCurrentQuiz(0);
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
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                questionCount={questionCount}
                setQuestionCount={setQuestionCount}
            />
            <QuizUI
                score={score}
                restartQuiz={restartQuiz}
                finished={finished}
                loaded={loaded}
                currentQuiz={currentQuiz}
                quiz={quiz}
                options={options}
                nextQuiz={nextQuiz}
            />
        </div>
    );
};
export default Game;
