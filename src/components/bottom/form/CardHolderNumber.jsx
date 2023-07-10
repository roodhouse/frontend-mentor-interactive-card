import React from 'react'

function CardHolderNumber() {
  return (
    <>
        <div id="cardHolderNumberContainer">
            <div id="labelNumberContainer" className='text-veryDarkViolet font-["Space_Grotesk"] text-xs font-medium tracking-[2px] mb-[9px] text-left'>
              <label htmlFor="cardHolderNumber">CARD NUMBER</label>
            </div>
            <div id="theNumberContainer">
              <input type="text" id='cardHolderNumber' name='cardHolderNumber' placeholder='e.g. 1234 5678 9123 0000' className='w-full font-["Space_Grotesk"] text-[18px] text-veryDarkViolet border border-solid rounded-lg border-lightGrayishViolet pl-4 py-[11px] placeholder:text-veryDarkViolet placeholder:text-[18px] placeholder:font-["Space_Grotesk"] placeholder:font-medium placeholder:opacity-25'/>
            </div>
            <div id="cardHolderNumberError" className='h-5 text-error text-xs font-["Space_Grotesk"] font-medium mt-2 text-left'>
              <p id='numberError' className='hidden pt-2'>Wrong format, numbers only</p>
            </div>
          </div>
    </>
  )
}

export default CardHolderNumber