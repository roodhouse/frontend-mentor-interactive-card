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
        <div id="cardFrontWrapper" className=''>
        <CardFront />
        </div>
            
        </div>
    </>
  )
}

export default Top