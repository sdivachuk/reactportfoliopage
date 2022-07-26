import React from 'react'
import { Parallax } from 'react-parallax'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

    <Parallax blur={10} bgImage="https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png" bgImageAlt="colorful" strength={200}>
        Content goes here. Parallax height grows with content height.
        <div style={{ height: '300px' }} />

    </Parallax>
    </div>
  )
}

export default Home