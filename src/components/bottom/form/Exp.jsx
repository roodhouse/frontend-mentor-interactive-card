import React from 'react'

function Exp({ register, recordMonth, recordYear, errors }) {
  return (
    <>
        <div id="expContainer">
            <div id="labelExpContainer" className='text-veryDarkViolet font-["Space_Grotesk"] text-xs font-medium tracking-[2px] mb-[9px] text-left xl:text-sm xl:tracking-[2px]'>
              <label htmlFor="exp">EXP. DATE (MM/YY)</label>
            </div>
            <div id="expDate" className='flex'>
                <div id="theExpMonthContainer" className='mr-2'>
                    <input type="text" id='cardHolderExpMonth' maxLength={2} name='cardHolderExpMonth' placeholder='MM' className='w-full font-["Space_Grotesk"] text-[18px] text-veryDarkViolet border border-solid rounded-lg border-lightGrayishViolet pl-4 py-[11px] placeholder:text-veryDarkViolet placeholder:text-[18px] placeholder:font-["Space_Grotesk"] placeholder:font-medium placeholder:opacity-25 cursor-pointer hover:border-veryDarkViolet'
                      {...register('cardHolderExpMonth',{
                        required: 'Can\'t be blank',
                        maxLength: {
                          value: 2,
                          message: 'Must be 2 digits'
                        },
                        minLength: {
                          value: 2,
                          message: 'Must be 2 digits'
                        },
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Wrong format, numbers only'
                        },
                        onChange: (e) => {
                          recordMonth(e.target.value)
                        }
                      })}
                    />
                </div>
                <div id="theExpYearContainer">
                    <input type="text" id='cardHolderExpYear' maxLength={2} name='cardHolderExpYear' placeholder='YY' className='w-full font-["Space_Grotesk"] text-[18px] text-veryDarkViolet border border-solid rounded-lg border-lightGrayishViolet pl-4 py-[11px] placeholder:text-veryDarkViolet placeholder:text-[18px] placeholder:font-["Space_Grotesk"] placeholder:font-medium placeholder:opacity-25 cursor-pointer hover:border-veryDarkViolet' 
                      {...register('cardHolderExpYear',{
                        required: 'Can\'t be blank',
                        maxLength: {
                          value: 2,
                          message: 'Must be 2 digits'
                        },
                        minLength: {
                          value: 2,
                          message: 'Must be 2 digits'
                        },
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Wrong format, numbers only'
                        },
                        onChange: (e) => {
                          recordYear(e.target.value)
                        }
                      })}
                    />
                </div>
            </div>
            <div id="cardHolderExpMonthError" className='h-5 text-error text-xs font-["Space_Grotesk"] font-medium mt-2 text-left xl:h-[34px]'>
              <p id='expError' className='hidden pt-2 xl:pt-0'>{errors.cardHolderExpMonth?.message || errors.cardHolderExpYear?.message}</p>
            </div>
          </div>
    </>
  )
}

export default Exp