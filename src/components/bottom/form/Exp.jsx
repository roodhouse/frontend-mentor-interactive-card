import React from 'react'

function Exp() {
  return (
    <>
        <div id="expContainer">
            <div id="labelExpContainer" className='text-veryDarkViolet font-["Space_Grotesk"] text-xs font-medium tracking-[2px] mb-[9px] text-left'>
              <label htmlFor="exp">EXP. DATE (MM/YY)</label>
            </div>
            <div id="expDate" className='flex'>
                <div id="theExpMonthContainer" className='mr-2'>
                    <input type="text" id='expMonth' name='expMonth' placeholder='MM' className='w-full font-["Space_Grotesk"] text-[18px] text-veryDarkViolet border border-solid rounded-lg border-lightGrayishViolet pl-4 py-[11px] placeholder:text-veryDarkViolet placeholder:text-[18px] placeholder:font-["Space_Grotesk"] placeholder:font-medium placeholder:opacity-25' />
                </div>
                <div id="theExpYearContainer">
                    <input type="text" id='expYear' name='expYear' placeholder='YY' className='w-full font-["Space_Grotesk"] text-[18px] text-veryDarkViolet border border-solid rounded-lg border-lightGrayishViolet pl-4 py-[11px] placeholder:text-veryDarkViolet placeholder:text-[18px] placeholder:font-["Space_Grotesk"] placeholder:font-medium placeholder:opacity-25' />
                </div>
            </div>
            <div id="cardHolderExpError" className='h-5 text-error text-xs font-["Space_Grotesk"] font-medium mt-2 text-left'>
              <p id='expError' className='hidden pt-2'>Can't be blank</p>
            </div>
          </div>
    </>
  )
}

export default Exp