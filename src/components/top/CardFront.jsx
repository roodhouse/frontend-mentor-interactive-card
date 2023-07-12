import React from 'react'
import Logo from '../../images/card-logo.svg'

function CardFront({ name, number, exp }) {
    
  return (
    <>
        <div id="cardFrontContainer" className='h-[156px] pl-[17px] pr-[73px] mt-[-119px] xl:pl-[164px] xl:pr-0 xl:mt-[-827px]'>
            <div id="cardFont" className='bg-[url("/src/images/bg-card-front.png")] bg-cover h-full w-[285px] pt-[17px] pl-[19px] pb-[20px] pr-[20px] xl:h-[245px] xl:w-[447px] xl:pt-[28px] xl:pl-8 xl:pb-[26px] xl:pr-[26px]'>
                <div id="logoContainer" className='w-[54px] h-[30px] mb-[37px] xl:w-[84px] xl:h-[47px] xl:mb-16'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div id="numberContainer" className='text-white font-["Space_Grotesk"] text-[18px] font-medium tracking-[2.2px] mb-[17px] xl:text-left xl:text-[28px] xl:tracking-[3.422px] xl:mb-[25px]'>
                    <p>{number}</p>
                </div>
                <div id="nameDateWrapper" className='flex justify-between'>
                    <div id="nameContainer" className='text-white font-["Space_Grotesk"] text-[9px] font-medium tracking-[1.286px] uppercase xl:text-sm xl:tracking-[2px]'>
                        <p>{name}</p>
                    </div>
                    <div id="dateContainer" className='text-white font-["Space_Grotesk"] text-[9px] font-medium tracking-[1.286px] xl:text-sm xl:tracking-[2px]'>
                        <p>{exp}</p>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default CardFront