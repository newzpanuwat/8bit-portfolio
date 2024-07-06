"use client";
import React, { useState, useEffect } from "react";

export default function Loading({ onComplete }: any) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading...");

  let values: Array<number> = [];
  let index: number = 0;

  const generateRandomNumbers = (): Array<number> => {
    const max = 100;

    values = Array.from({ length: 2 }, () => Math.floor(Math.random() * max));
    return values;
  };

  useEffect(() => {
    generateRandomNumbers();
    values.sort((a, b) => a - b).push(100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(values[index]);
      if (values[index] === 100) {
        setLoadingText("Loading... 100%");
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 1000); // Ensure the complete callback is called after fade-out
        }, 1000); // Duration of the fade-out transition
      }
      index = (index + 1) % values.length;
    }, 1000); // Change value every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`progress-container ${isVisible ? "visible" : "hidden"} flex flex-col items-center justify-between`}
    >
      <progress className="nes-progress is-success" value={progress} max="100"></progress>
      <span className="loading-text">{progress < 100 ? `Loading... ${progress}%` : loadingText}</span>
    </div>
  );
}
