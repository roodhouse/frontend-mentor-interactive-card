import React from 'react'

function CardBack({ cvc }) {
  return (
    <>
        <div id="cardBackContainer" className='pt-8 pr-4 pl-[73px] pb-[51px] xl:pl-[258px] xl:pt-[456px]'>
            <div id="cardBack" className='bg-[url("/src/images/bg-card-back.png")] bg-contain bg-no-repeat h-[157px] xl:h-[245px] xl:w-[447px]'>
                <div id="cvs" className='pt-[71px] pb-[73px] pl-[228px] pr-[37px] text-white font-["Space_Grotesk"] text-[9px] font-medium tracking-[1.286px] xl:text-sm xl:tracking-[2px] xl:mr-[-110px] xl:pt-[110px]'>
                    <p>{cvc}</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default CardBack