import React from 'react'
import CardBack from './top/CardBack'
import CardFront from './top/CardFront'

function Top({ name, number, exp, cvc }) {
  return (
    <>
      <div id="topContainer" className='w-full mb-[48px] xl:h-full'>
        <div id="cardBackWrapper" className='bg-[url("/src/images/bg-main-mobile.png")] bg-no-repeat h-[240px] xl:bg-[url("/src/images/bg-main-desktop.png")] xl:w-[483px] xl:h-[1001px] xl:bg-cover'>
        <CardBack cvc={cvc} />
        </div>
        <div id="cardFrontWrapper" className='drop-shadow-[0px_39px_60px_rgba(0,0,0,0.14)]'>
        <CardFront name={name} number={number} exp={exp} />
        </div>
            
        </div>
    </>
  )
}

export default Top