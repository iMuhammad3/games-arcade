import React, { useEffect, useState } from "react";
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
    const [errorMessage, setErrorMessage] = useState("");

    const [difficulty, setDifficulty] = useState("easy");
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(9);
    const [questionCount, setQuestionCount] = useState(10);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const result = await fetch(CATEGORIES_API);
                const data = await result.json();
                // Check if the response indicates a rate limit exceeded error
                if (result.status === 429) {
                    // Implement rate limit handling
                    const retryAfter = result.headers.get("Retry-After") || 5; // Default to 5 seconds if Retry-After header is not present
                    console.log(
                        `Rate limit exceeded. Retrying after ${retryAfter} seconds.`
                    );

                    // Wait for the specified duration before retrying
                    await new Promise(resolve =>
                        setTimeout(resolve, retryAfter * 1000)
                    );

                    // Retry the API request
                    return fetchQuiz();
                }

            } catch (err) {
                console.error(err);
            }
        };
        fetchCategories();
    }, []);

    const debounce = (func, delay) => {
        let timeoutId;
      
        return (...args) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func(...args);
          }, delay);
        };
      };
    useEffect(() => {
        debounce(fetchQuiz, 1000)
    }, [difficulty, categoryId, questionCount, finished]);

    useEffect(() => {
        const newOptions = [
            quiz[currentQuiz]?.correct_answer,
            ...(quiz[currentQuiz]?.incorrect_answers || []),
        ].sort(() => Math.random() - 0.5);

        setOptions(newOptions);
    }, [currentQuiz]);

    console.log(quiz);
    console.log(options);

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
            const result = await fetch(
                API_URL(questionCount, difficulty, categoryId)
            );
            const data = await result.json();
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
                setCategories={setCategories}
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
