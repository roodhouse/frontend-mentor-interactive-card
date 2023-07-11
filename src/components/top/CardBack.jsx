import React from 'react'

function CardBack({ cvc }) {
  return (
    <>
        <div id="cardBackContainer" className='pt-8 pr-4 pl-[73px] pb-[51px]'>
            <div id="cardBack" className='bg-[url("/src/images/bg-card-back.png")] bg-contain bg-no-repeat h-[157px]'>
                <div id="cvs" className='pt-[71px] pb-[73px] pl-[228px] pr-[37px] text-white font-["Space_Grotesk"] text-[9px] font-medium tracking-[1.286px]'>
                    <p>{cvc}</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default CardBack