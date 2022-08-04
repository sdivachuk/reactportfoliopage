import React from "react";

const Portfolio = () => {
  return (
    <div className="contact">
      <h1>Portfolio</h1>
      <section id="portSec">
        <card className="profileCard hoverImage">
          <div>
            <img
              src="quizScreenShot.png"
              alt="code quiz"
              className="portfolioImg"
            ></img>
          </div>
          <div className="hoverLink">
            <a
              href="https://sdivachuk.github.io/JSQuiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/sdivachuk/JSQuiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
        </card>

        <card className="profileCard">
          <div className="hoverImage">
            <img
              src="SocialNetworkingImg.png"
              alt="social networking"
              className="portfolioImg"
            ></img>
          </div>
          <div className="hoverLink">
            <a
              href="https://www.awesomescreenshot.com/video/10055701?key=15719bf514264f6e7f03505d114730e1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/sdivachuk/SocialNetworking"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
        </card>

        <card className="profileCard">
          <div className="hoverImage">
            <img
              src="teamProfileGenPic.png"
              alt="team profile"
              className="portfolioImg"
            ></img>
          </div>
          <div className="hoverLink">
            <a
              href="https://github.com/sdivachuk/team-profile-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
        </card>

        <card className="profileCard">
          <div className="hoverImage">
            <img
              src="HTMLPortfolio.png"
              alt="html portfolio"
              className="portfolioImg"
            ></img>
          </div>
          <div className="hoverLink">
            <a
              href="https://sdivachuk.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/sdivachuk/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
        </card>

        <card className="profileCard">
          <div className="hoverImage">
            <img
              src="spiritsListed.png"
              alt="spirits listed"
              className="portfolioImg"
            ></img>
          </div>
          <div className="hoverLink">
            <a
              href="https://nicklthompson.github.io/Spirits-Listed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/NickLThompson/Spirits-Listed"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
        </card>

        <card className="profileCard">
          <div className="hoverImage">
            <img
              src="moviePreferences.png"
              alt="movie preferences"
              className="portfolioImg"
            ></img>
          </div>
          <div className="hoverLink">
            <a
              href="https://shielded-waters-71876.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/okdavekk/movie-preferences"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
        </card>
      </section>
    </div>
  );
};

export default Portfolio;
