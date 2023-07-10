import React from 'react'
import CardHolderName from './form/CardHolderName'
import CardHolderNumber from './form/CardHolderNumber'
import Exp from './form/Exp'
import Cvc from './form/Cvc'
import Submit from './form/Submit'

function Form() {
  return (
    <>
      <div id="formContainer">
        <form noValidate className='w-full flex flex-col items-start'>
          <div id="cardHolderNameWrapper" className='w-full mb-1'>
            <CardHolderName />
          </div>
          <div id="cardHolderNumberWrapper" className='w-full mb-1'>
            <CardHolderNumber />
          </div>
          <div id="expCvcWrapper" className='w-full flex mb-7'>
            <div id="expWrapper" className='mr-[11px]'>
              <Exp />
            </div>
            <div id="CvcWrapper" className='w-full'>
              <Cvc />
            </div>
          </div>
          <div id="submitWrapper" className='w-full'>
            <Submit />
          </div>
        </form>
      </div>
    </>
  )
}

export default Form