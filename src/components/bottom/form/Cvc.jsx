import React from 'react'

function Cvc() {
  return (
    <>
        <div id="CvcContainer">
            <div id="labelCvcContainer" className='text-veryDarkViolet font-["Space_Grotesk"] text-xs font-medium tracking-[2px] mb-[9px] text-left'>
              <label htmlFor="cvc">CVC</label>
            </div>
            <div id="theCvcContainer">
              <input type="text" id='cvc' name='cvc' placeholder='e.g. 123' className='w-full border border-solid rounded-lg border-lightGrayishViolet pl-4 py-[11px] placeholder:text-veryDarkViolet placeholder:text-[18px] placeholder:font-["Space_Grotesk"] placeholder:font-medium placeholder:opacity-25'/>
            </div>
          </div>
    </>
  )
}

export default Cvc