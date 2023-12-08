import React, { useEffect, useState } from "react";
import Video from "./video"; // Adjust the path as needed
import "./HomePage.css"; // Add your styles here

const Home = ({ onStartClick }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  let lastKey = "";

  const handleStartClick = () => {
    setQuizStarted(true);
    onStartClick();
  };

  function handleKeyDown(event) {
    if (lastKey !== "Control") {
      lastKey = event.key;
    } else {
      if (event.key == "Enter") {
        handleStartClick()
      }
    }

  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDescription(true);
    }, 2000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  document.addEventListener("keydown", handleKeyDown);

  return (
    <div className="home-page">
      {quizStarted ? (
        <div>
          {/* Your quiz component can go here */}
          <p>Quiz Started!</p>
        </div>
      ) : (
        <div>
          {/* Use Video component instead of <video> */}
          <Video />
          {showDescription ? (
            <div className="description">
              <h1>Quiz App</h1>
              
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Home;
