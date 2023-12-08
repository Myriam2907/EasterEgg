import { useState } from 'react';
import './quiz.css';

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  // Define your questions and answers statically
  const questions = [
    {
      question: 'Lequel des éléments suivants est un gaz à effet de serre (GES) ?',
      choices: ['co2','ch4','Tout ce qui précède'],
      correctAnswer: 'Tout ce qui précède',
    },
    {
      question: 'Qu’est-ce qui a été convenu dans « l’Accord de Paris » issu de la COP-21, tenue à Paris en 2015 ?',
      choices: ['protéger la biodiversité et mettre fin à la déforestation des forêts tropicales mondiales', 'Maintenir la hausse de la température mondiale bien en dessous de 2 ℃ par rapport aux niveaux préindustriels et poursuivre la voie visant à limiter le réchauffement à 1,5 ℃', 'Limiter l’élévation du niveau de la mer à 3 pieds au-dessus des niveaux actuels'],
      correctAnswer: 'Maintenir la hausse de la température mondiale bien en dessous de 2 ℃ par rapport aux niveaux préindustriels et poursuivre la voie visant à limiter le réchauffement à 1,5 ℃',
    },
    {
        question: 'Quel pourcentage des émissions mondiales de gaz à effet de serre le secteur des transports émet-il ? des éléments suivants est un gaz à effet de serre (GES) ?',
        choices: ['1%','70%','20%','33%'],
        correctAnswer: '20%',
      },

      {question: 'Lequel de ces pays émet le plus de dioxyde de carbone ?',
      choices: ['china','USA','Russia'],
      correctAnswer: 'china',},

      {question: 'Vrai ou faux : L’écrasante majorité des scientifiques s’accordent sur le fait que le changement climatique est réel et causé par l’homme?',
      choices: ['vrai','faux'],
      correctAnswer: 'vrai',}
    // Add more questions as needed
  ];

  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer === correctAnswer);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(questions.length)}</span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
