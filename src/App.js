import React, { useState } from 'react';
import './App.css';
import Quiz from './Quiz';
import Home from './Home';
import ReactPlayer from 'react-player';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  
  return (
    <div className="App">
      <header className="App-header">
        {quizStarted ? (
          <Quiz />
        ) : (
          <Home onStartClick={handleStartQuiz} />
        )}
      </header>
      <div>
      </div>
     
    </div>
  );
}

export default App;
