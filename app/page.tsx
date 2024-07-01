"use client";
import React, { useState, useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div>
      {!loadingComplete && <Loading onComplete={handleComplete} />}
      {loadingComplete && (
        <div id="hello">
          <main className="flex flex-col items-center justify-between p-4">
            <div className="navbar flex mb-5 gap-6">
              <a href="#hello">
                <span className="nes-btn is-primary">Hello!</span>
              </a>
              <a href="#skills">
                <span className="nes-btn is-success">Theses my skills</span>
              </a>
              <a href="#exp">
                <span className="nes-btn is-warning">Experiences</span>
              </a>
              <a href="#contact">
                <span className="nes-btn is-error"> Contact me!</span>
              </a>
            </div>
            <div className="mb-5">
              <h1>Are you looking for warior software engineer or web developer ?</h1>
            </div>
            <div className="nes-container with-title is-centered bg-blue-200 w-[70rem] mb-5">
              <p className="title">Greetings!</p>
              <p>
                My primary goal is to apply my technical expertise all throughout the full software life cycle to ensure
                the production and delivery of products and services. My experiences 7 years as a software engineer
                enhanced my abilities in designing, implementing, testing, and upgrading software. One of my objectives
                is to keep updated with the latest IT trends and technologies.
              </p>
            </div>
            <button id="skills" type="button" className="nes-btn is-warning">
              Hire me, Click
            </button>

            {/* Skills */}
            <div className="flex flex-col items-center justify-between mt-5">
              <p>::Skills::</p>
              <div className="nes-container is-rounded bg-green-400 w-[70rem]">
                <p>::Programming Languages</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-warning">Javascript</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">Typescript</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error mr-3">Ruby</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Java</span>
                  </a>
                  <a href="https://www.python.org/" target="_blank" className="nes-badge">
                    <span className="is-primary">Python</span>
                  </a>
                </div>
              </div>
              <br />
              <div className="nes-container is-rounded bg-red-200 w-[70rem]">
                <p>::Framework</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-primary mr-3">React.js</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-warning">Next.js</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Nest.js</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">RoR</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-success">Express</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-success">Spring</span>
                  </a>
                </div>
              </div>
              <br />
              <div className="nes-container is-rounded bg-blue-200 w-[70rem]">
                <p>::State management & CSS library</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-primary">React-redux</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">RTK</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">Redux-saga</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">MUI</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">Tailwind</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Styled-comp</span>
                  </a>
                </div>
              </div>
              <br />
              <div className="nes-container is-rounded bg-green-200 w-[70rem]">
                <p id="my-element">::Testing</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-success">Vitest</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Jest</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Rspec</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-warning">jUnit</span>
                  </a>
                </div>
              </div>
              <br />
              <div className="nes-container is-rounded bg-purple-200 w-[70rem]">
                <p>::Database</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-primary mr-3">Mysql</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-success">Mongo DB</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Redis</span>
                  </a>
                </div>
              </div>
              <br />
              <div className="nes-container is-rounded bg-blue-200 w-[70rem]">
                <p>::Deployment</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-primary">Docker</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Jenkins</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">k8s</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-warning">k3s</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
