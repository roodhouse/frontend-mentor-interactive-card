import React from 'react'

function CardHolderName() {
  return (
    <>
        <div id="cardHolderNameContainer">
            <div id="labelNameContainer" className='text-veryDarkViolet font-["Space_Grotesk"] text-xs font-medium tracking-[2px] mb-[9px] text-left'>
              <label htmlFor="cardHolderName">CARDHOLDER NAME</label>
            </div>
            <div id="theNameContainer">
              <input type="text" id='cardHolderName' name='cardHolderName' placeholder='e.g. Jane Appleseed' className='w-full font-["Space_Grotesk"] text-[18px] text-veryDarkViolet border border-solid rounded-lg border-lightGrayishViolet pl-4 py-[11px] placeholder:text-veryDarkViolet placeholder:text-[18px] placeholder:font-["Space_Grotesk"] placeholder:font-medium placeholder:opacity-25' />
            </div>
            <div id="cardHolderNameError" className='h-5 text-error text-xs font-["Space_Grotesk"] font-medium mt-2 text-left'>
              <p id='nameError' className='hidden pt-2'>Name is required</p>
            </div>
          </div>
    </>
  )
}

export default CardHolderName