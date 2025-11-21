// src/pages/GuidedCookingPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const GuidedCookingPage = ({ recipes = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === id);

  // no recipe or no steps
  if (!recipe || !Array.isArray(recipe.steps) || recipe.steps.length === 0) {
    return (
      <div className="guided-page">
        <p>No guided steps available for this recipe.</p>
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  // default 5 min per step if no duration specified
  const getInitialSeconds = (index) =>
    recipe.steps[index]?.durationSeconds ?? 5 * 60;

  const [secondsLeft, setSecondsLeft] = useState(getInitialSeconds(0));

  // reset timer when step changes
  useEffect(() => {
    setSecondsLeft(getInitialSeconds(currentIndex));
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // countdown effect
  useEffect(() => {
    if (secondsLeft <= 0) return;

    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsLeft]);

  const step = recipe.steps[currentIndex];

  const handleNextStep = () => {
    if (currentIndex < recipe.steps.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // last step -> redirect back to recipe page (or show "Done")
      navigate(`/recipe/${id}`);
    }
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(1, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes} : ${seconds}`;
  };

  return (
    <div className="guided-page">
      <h1 className="guided-heading">Guided Cooking</h1>

      <section className="guided-main">
        {/* Left side: step title + instructions */}
        <div className="guided-left">
          <h2 className="guided-step-title">
            Step {currentIndex + 1}: {step.title}
          </h2>

          <ol className="guided-step-list">
            {step.instructions.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ol>
        </div>

        {/* Right side: timer + button */}
        <div className="guided-right">
          <div className="guided-timer">{formatTime(secondsLeft)}</div>

          <button className="btn-dark guided-next-btn" onClick={handleNextStep}>
            {currentIndex < recipe.steps.length - 1 ? 'Next step' : 'Finish'}
          </button>
        </div>
      </section>
    </div>
  );
};
