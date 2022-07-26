import React from 'react'
import { Parallax } from 'react-parallax'

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}

    <Parallax blur={10} bgImage="https://thumbs.dreamstime.com/z/background-grey-brick-wall-great-cool-background-wallpaper-background-grey-brick-wall-great-cool-171615096.jpg" bgImageAlt="greyBrickWall" strength={200}>
        Content goes here. Parallax height grows with content height.
        <div style={{ height: '500px' }} />

    </Parallax>
    </div>
  )
}

export default Home