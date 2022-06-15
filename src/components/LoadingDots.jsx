import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../img/loading-dots.json'

export default function LoadingDots() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, height: 150 }}
    />
  )
}
