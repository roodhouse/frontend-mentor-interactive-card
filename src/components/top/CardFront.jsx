import React from 'react'
import Logo from '../../images/card-logo.svg'

function CardFront({ name, number, exp }) {
    
  return (
    <>
        <div id="cardFrontContainer" className='h-[156px] pl-[17px] pr-[73px] mt-[-119px] xl:pl-[164px] xl:pr-0 xl:mt-[-827px]'>
            <div id="cardFont" className='bg-[url("/src/images/bg-card-front.png")] bg-cover h-full w-[285px] pt-[17px] pl-[19px] pb-[20px] pr-[20px] xl:h-[245px] xl:w-[447px]'>
                <div id="logoContainer" className='w-[54px] h-[30px] mb-[37px]'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div id="numberContainer" className='text-white font-["Space_Grotesk"] text-[18px] font-medium tracking-[2.2px] mb-[17px]'>
                    <p>{number}</p>
                </div>
                <div id="nameDateWrapper" className='flex justify-between'>
                    <div id="nameContainer" className='text-white font-["Space_Grotesk"] text-[9px] font-medium tracking-[1.286px] uppercase'>
                        <p>{name}</p>
                    </div>
                    <div id="dateContainer" className='text-white font-["Space_Grotesk"] text-[9px] font-medium tracking-[1.286px]'>
                        <p>{exp}</p>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default CardFront