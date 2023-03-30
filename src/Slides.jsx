import React, { useState } from 'react'
import { Images } from './images'

const Slides = () => {
    const [status, setStatus] = useState(0)
  console.log(status)
  const previousOrNextImage = (action) => {
    console.log('hola')
    if (action === 'next' && status !== 28) {
      setStatus(status + 1)
    } else if (action === 'previous' && status !== 0) {
      setStatus(status -1)
    } else if (status === 27) {
    }
  }
  return (
    <div className="container">
      <img className="image" src={Images[status].url} alt='asd'></img>
      <span className={Images[status].style}>{Images[status].text}</span>
      <button className={status === 0 ? "hidden" : "leftButton" } onClick={() => previousOrNextImage('previous')}>←</button>
      <button className={status === 28 ? "hidden" : "rightButton" } onClick={() => previousOrNextImage('next')}>→</button>
      <button className={status === 28 ? 'goToSlide' : 'hidden'} onClick={() => window.open('https://wa.me/5491168927091')} >Continuar</button>

    </div>
  )
}

export default Slides