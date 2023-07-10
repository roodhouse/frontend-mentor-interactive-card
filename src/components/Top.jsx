import React from 'react'
import CardBack from './top/CardBack'
import CardFront from './top/CardFront'

function Top() {
  return (
    <>
      <div id="topContainer" className='w-full mb-[48px]'>
        <div id="cardBackWrapper" className='bg-[url("/src/images/bg-main-mobile.png")] bg-no-repeat h-[240px]'>
        <CardBack />
        </div>
        <div id="cardFrontWrapper" className='drop-shadow-[0px_39px_60px_rgba(0,0,0,0.14)]'>
        <CardFront />
        </div>
            
        </div>
    </>
  )
}

export default Top