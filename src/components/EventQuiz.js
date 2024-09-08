import React, { useState } from 'react';

const debateQuestions = [
    {
        text: "How do you prefer to debate?",
        options: ["Alone", "With a partner/group", "Against many people"]
    },
    {
        text: "What aspect of debate interests you most?",
        options: ["Intensive research", "Strictly topic-related debates", "Working in a trio"]
    }
];

const speechQuestions = [
    {
        text: "Are you interested in current events and social issues?",
        options: ["Very interested", "Somewhat interested", "Not interested"]
    },
    {
        text: "How comfortable are you with limited preparation time?",
        options: ["Very comfortable", "Somewhat comfortable", "Not comfortable"]
    },
    {
        text: "Do you prefer to write and memorize your own speech?",
        options: ["Yes", "No", "Somewhat"]
    },
    {
        text: "Are you interested in educating your audience on a specific topic?",
        options: ["Yes", "Somewhat", "No"]
    }
];

export default function EventQuiz() {
    const [category, setCategory] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const handleCategorySelection = (selectedCategory) => {
        setCategory(selectedCategory);
        setCurrentQuestion(0);
        setAnswers([selectedCategory]);
    };

    const handleAnswer = (answer) => {
        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);

        if (category === "Debate") {
            if (currentQuestion === 0) {
                if (answer === "Alone") {
                    setResult("Lincoln-Douglas Debate");
                } else if (answer === "Against many people") {
                    setResult("Congressional Debate");
                } else {
                    setCurrentQuestion(currentQuestion + 1);
                }
            } else if (currentQuestion === 1) {
                if (answer === "Intensive research") {
                    setResult("Policy Debate");
                } else if (answer === "Strictly topic-related debates") {
                    setResult("Public Forum Debate");
                } else {
                    setResult("World Schools Debate");
                }
            }
        } else {
            const questions = speechQuestions;
            if (currentQuestion === questions.length - 1) {
                determineEvent(newAnswers);
            } else {
                setCurrentQuestion(currentQuestion + 1);
            }
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setAnswers(answers.slice(0, -1));
            setResult(null);
        } else if (currentQuestion === 0 && category) {
            setCategory(null);
            setAnswers([]);
        }
    };

    const determineEvent = (finalAnswers) => {
        if (finalAnswers[1] === "Very interested" && finalAnswers[2] === "Very comfortable") {
            setResult("Extemporaneous Speaking");
        } else if (finalAnswers[3] === "Yes") {
            setResult("Original Oratory");
        } else {
            setResult("Informative Speaking");
        }
    };

    const questions = category === "Debate" ? debateQuestions : speechQuestions;

    return (
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 min-h-screen text-white flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-8 text-center school-color">Let's find the right event for you.</h1>
            {!category && !result ? (
                <div className="w-full max-w-2xl bg-neutral-800 rounded-xl shadow-2xl p-8 transition-all duration-300 hover:scale-105">
                    <h2 className="text-2xl mb-6 text-center">Are you more interested in Debate or Speech?</h2>
                    <div className="flex flex-col space-y-4 mb-6">
                        <button onClick={() => handleCategorySelection("Debate")} className="bg-neutral-700 text-white py-3 px-6 rounded transition-colors duration-300">Debate</button>
                        <button onClick={() => handleCategorySelection("Speech")} className="bg-neutral-700 text-white py-3 px-6 rounded transition-colors duration-300">Speech</button>
                    </div>
                </div>
            ) : result ? (
                <div className="text-center bg-neutral-800 rounded-xl shadow-2xl p-8 transition-all duration-300 hover:scale-105 ">
                    <h2 className="text-2xl mb-4">Your Recommended Event:</h2>
                    <p className="text-3xl font-bold school-color mb-6">{result}</p>
                    <button onClick={() => {setResult(null); setCategory(null); setCurrentQuestion(0); setAnswers([]);}} className="mt-4 mr-3 inline-block bg-orange-600 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:rotate-3">
                        RETAKE QUIZ
                    </button>
                    <a href='/events'>
                        <button className="mt-4 inline-block bg-orange-600 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:rotate-3">
                            RETURN TO EVENTS
                        </button>
                    </a>
                </div>
            ) : (
                <div className="w-full max-w-2xl bg-neutral-800 rounded-xl shadow-2xl p-8 transition-all duration-300 hover:scale-105">
                    <h2 className="text-2xl mb-6 text-center">{questions[currentQuestion].text}</h2>
                    <div className="flex flex-col space-y-4 mb-6">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className={`bg-neutral-700 text-white py-3 px-6 rounded transition-colors duration-300 ${answers[currentQuestion + 1] === option ? 'ring-2 ring-orange-500' : ''}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={goToPreviousQuestion}
                            className="bg-orange-600 text-white py-2 px-4 rounded-lg duration-300 hover:scale-105 hover:-rotate-3 transition"
                        >
                            PREVIOUS
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <p>{currentQuestion + 1} of {questions.length}</p>
                    </div>
                </div>
            )}
        </div>
    );
}