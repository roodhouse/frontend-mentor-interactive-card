import React from 'react'

function Cvc({ register, recordCvc}) {
  return (
    <>
        <div id="CvcContainer">
            <div id="labelCvcContainer" className='text-veryDarkViolet font-["Space_Grotesk"] text-xs font-medium tracking-[2px] mb-[9px] text-left'>
              <label htmlFor="cvc">CVC</label>
            </div>
            <div id="theCvcContainer">
              <input type="text" id='cvc' name='cvc' placeholder='e.g. 123' className='w-full font-["Space_Grotesk"] text-[18px] text-veryDarkViolet border border-solid rounded-lg border-lightGrayishViolet pl-4 py-[11px] placeholder:text-veryDarkViolet placeholder:text-[18px] placeholder:font-["Space_Grotesk"] placeholder:font-medium placeholder:opacity-25'
                {...register('cvc',{
                  onChange: (e) => {
                    recordCvc(e.target.value)
                  }
                })}
              />
            </div>
            <div id="cardHolderCvcError" className='h-5 text-error text-xs font-["Space_Grotesk"] font-medium mt-2 text-left'>
              <p id='cvcError' className='hidden pt-2'>Can't be blank</p>
            </div>
          </div>
    </>
  )
}

export default Cvc