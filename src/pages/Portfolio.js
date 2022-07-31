import React from 'react'

const Portfolio = () => {
  return (
    <div className="contact" >
      <h1>Portfolio</h1>
      <section id="portSec" >

    <card className="profileCard">
      <img src="quizScreenShot.png" alt="code quiz" className="portfolioImg"></img>
    </card>

      <card className="profileCard">
      <img src="SocialNetworkingImg.png" alt="social networking" className="portfolioImg"></img>
      </card>

      <card className="profileCard">
      <img src="teamProfileGenPic.png" alt="team profile" className="portfolioImg"></img>
      </card>

      <card className="profileCard">
      <img src="HTMLPortfolio.png" alt="html portfolio" className="portfolioImg"></img>
      </card>

      <card className="profileCard">
      <img src="spiritsListed.png" alt="spirits listed" className="portfolioImg"></img>
      </card>
        
      <card className="profileCard">
      <img src="moviePreferences.png" alt="movie preferences" className="portfolioImg"></img>
      </card>

      </section>
    </div>
  )
}

export default Portfolio