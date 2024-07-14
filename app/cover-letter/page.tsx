"use client";
import React, { useState, useEffect } from "react";
import Loading from "../components/loading";
import Navigation from "../components/navigation";
import Image from "next/image";
import thumnail from "../../public/assets/facetec-1.png";
import jwks from "../../public/assets/jwtsjwks_pubprivatejwt.png";
import profile from "../../public/assets/cv-profile.png";
import redisImage from "../../public/assets/redis-image.png";
import { navigationMenus } from "../data";

export default function Home() {
  useEffect(() => {
    const mybutton = document.getElementById("topBtn") as HTMLButtonElement;

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  const [loadingComplete, setLoadingComplete] = useState(false);
  const handleComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div>
      <a id="topBtn" href="#hello">
        <span className="nes-btn is-error">^</span>
      </a>
      {!loadingComplete && <Loading onComplete={handleComplete} />}
      {loadingComplete && (
        <div id="hello">
          <main className="flex flex-col items-center justify-between p-4">
            <Navigation list={navigationMenus} />

            {/* Greetings */}
            <div className="nes-container with-title is-centered bg-blue-200 w-[70rem] mb-5">
              <p className="title">Greetings!</p>
              <p>
                My primary goal is to utilize my technical expertise throughout the full software development life cycle to ensure the production and delivery of high-quality products and services. My experiences as a software engineer have enhanced my abilities in designing, implementing, testing, and continuously improving software. I strive to stay updated with the latest industry trends and technologies.
              </p>
            </div>

            {/* Profile */}
            <div className="nes-container is-rounded bg-white w-[70rem]">
              <p>Mr.Panuwat Boonrod - Software Engineer</p>
              <hr></hr>
              <div className="flex">
                <Image src={profile} alt="profile-img" style={{ width: "22%", gap: "3", marginTop: "1rem" }} />
                <ul className="nes-list is-disc ml-8 mt-4">
                  <li>I`m passionate about learning and development</li>
                  <li>Develop future goals for self-improvement</li>
                  <li>Big motivation with sofware engineering</li>
                  <li>Latte & Americano addicted</li>
                  <li>Star wars fans!</li>
                  <li>Dog lover</li>
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "right", gap: "1rem" }}>
                <a href="https://github.com/newzpanuwat" target="_blank">
                  <i className="nes-icon github is-medium"></i>
                </a>
                <a href="mailto:panuwat.brd@gmail.com" target="_blank">
                  <i className="nes-icon google is-medium"></i>
                </a>
                <a href="https://www.linkedin.com/in/newzpanuwat/" target="_blank">
                  <i className="nes-icon linkedin is-medium"></i>
                </a>
                <a href="https://medium.com/@newzpanuwat" target="_blank">
                  <i className="nes-icon medium is-medium"></i>
                </a>
              </div>
            </div>
            <br />
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
                <p>::DevOps</p>
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
            <br />

            {/* Others */}
            <div className="flex flex-col items-center justify-between mt-5">
              <p id="poc" className="title">
                ::Others & POC::
              </p>
              {/* redis */}
              <div className="nes-container is-rounded bg-white w-[70rem]">
                <a href="https://github.com/newzpanuwat/poc-redis" target="_blank">
                  POC::Redis Queue
                </a>
                <hr></hr>
                <div className="flex mb-5 ">
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image
                      id="redis-image"
                      src={redisImage}
                      alt="redis-image"
                      style={{ width: "300", height: "auto", margin: "2rem" }}
                    />
                  </div>
                  <p style={{ margin: "2rem" }}>
                    Redis, with its support for list and set data structures, can be effectively used as a message
                    queue. This means that it can handle multiple tasks that are lined up for processing. The tasks can
                    be processed either immediately or at a certain scheduled time. The ability to use Redis as a queue
                    opens up a wide range of possibilities for handling distributed jobs and messages
                  </p>
                </div>
              </div>
              <br />
              {/* facetec */}
              <div className="nes-container is-rounded bg-white w-[70rem]">
                <a href="https://github.com/newzpanuwat/poc-facetec" target="_blank">
                  POC/facetec(development)
                </a>
                <hr></hr>
                <div className="flex mb-5">
                  <Image
                    src={thumnail}
                    alt="facetec-img"
                    style={{ width: "20%", height: "40%", marginTop: "0.5rem" }}
                  />
                  <p style={{ margin: "1rem" }}>
                    This POC is contain features of liveness-3d, 2d-2d with Browser SDK facetec, You can fork this repo,
                    then improve with another processor e.g. PhotoIDMatch, Enrollment, this POC can scan your face with
                    development server, but in development account with limte exceed limit from facetec
                  </p>
                </div>
              </div>
              <br />
              {/* auth/jwks-express */}
              <div className="nes-container is-rounded bg-white w-[70rem]">
                <a href="https://github.com/newzpanuwat/express-auth-poc" target="_blank">
                  POC/JWTKS Auth
                </a>
                <hr></hr>
                <div className="flex mb-5">
                  <Image
                    src={jwks}
                    alt="auth1-img"
                    style={{ width: "20%", height: "40%", gap: "2", marginTop: "0.5rem" }}
                  />
                  <p style={{ margin: "1rem" }}>
                    In a modern web application, particularly one that involves user-specific content or restricted
                    access areas, authentication and secure token management are critical. Using JSON Web Tokens (JWTs)
                    along with JWKS (JSON Web Key Set) provides a robust mechanism for ensuring secure access and
                    efficient user management.
                  </p>
                </div>
              </div>
            </div>

            <br />

            {/* Contact */}
            <p id="contact" className="title">
              ::Contact::
            </p>
            <div className="flex items-center mb-5 gap-6">
              <a href="https://github.com/newzpanuwat" target="_blank">
                <i className="nes-icon github is-medium"></i>
              </a>
              <a href="mailto:panuwat.brd@gmail.com" target="_blank">
                <i className="nes-icon google is-medium"></i>
              </a>
              <a href="https://www.linkedin.com/in/newzpanuwat/" target="_blank">
                <i className="nes-icon linkedin is-medium"></i>
              </a>
              <a href="https://medium.com/@newzpanuwat" target="_blank">
                <i className="nes-icon medium is-medium"></i>
              </a>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
