import React from 'react'
import { Parallax } from 'react-parallax'

const Portfolio = () => {
  return (
    <div>

    <Parallax blur={8} bgImage="https://thumbs.dreamstime.com/z/background-grey-brick-wall-great-cool-background-wallpaper-background-grey-brick-wall-great-cool-171615096.jpg" bgImageAlt="greyBrickWall" strength={200}>
        Content goes here. Parallax height grows with content height.
        <div style={{ height: '600px' }} />

    </Parallax>
    </div>
  )
}

export default Portfolio