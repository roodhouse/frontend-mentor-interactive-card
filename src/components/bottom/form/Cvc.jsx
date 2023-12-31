import React from 'react'

function Cvc({ register, recordCvc, errors }) {
  return (
    <>
        <div id="CvcContainer">
            <div id="labelCvcContainer" className='text-veryDarkViolet font-["Space_Grotesk"] text-xs font-medium tracking-[2px] mb-[9px] text-left xl:text-sm xl:tracking-[2px]'>
              <label htmlFor="cvc">CVC</label>
            </div>
            <div id="theCvcContainer">
              <input type="text" id='cardHolderCvc' maxLength={3} name='cardHolderCvc' placeholder='e.g. 123' className='w-full font-["Space_Grotesk"] text-[18px] text-veryDarkViolet border border-solid rounded-lg border-lightGrayishViolet pl-4 py-[11px] placeholder:text-veryDarkViolet placeholder:text-[18px] placeholder:font-["Space_Grotesk"] placeholder:font-medium placeholder:opacity-25 cursor-pointer hover:border-veryDarkViolet'
                {...register('cardHolderCvc',{
                  required: 'Can\'t be blank',
                  pattern: {
                    value: /^[0-9]*$/,
                    message: 'Numbers only'
                  },
                  maxLength: {
                    value: 3,
                    message: 'Must be 3 digits'
                  },
                  minLength: {
                    value: 3,
                    message: 'Must be 3 digits'
                  },
                  onChange: (e) => {
                    recordCvc(e.target.value)
                  }
                })}
              />
            </div>
            <div id="cardHolderCvcError" className='h-5 text-error text-xs font-["Space_Grotesk"] font-medium mt-2 text-left xl:h-[34px]'>
              <p id='cvcError' className='hidden pt-2 xl:pt-0'>{errors.cardHolderCvc?.message}</p>
            </div>
          </div>
    </>
  )
}

export default Cvc