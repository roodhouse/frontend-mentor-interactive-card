import React from 'react'
import CardHolderName from './form/CardHolderName'
import CardHolderNumber from './form/CardHolderNumber'
import Exp from './form/Exp'
import Cvc from './form/Cvc'

function Form() {
  return (
    <>
      <div id="formContainer">
        <form noValidate className='w-full flex flex-col items-start'>
          <div id="cardHolderNameWrapper" className='w-full'>
            <CardHolderName />
          </div>
          <div id="cardHolderNumberWrapper" className='w-full'>
            <CardHolderNumber />
          </div>
          <div id="expCvcWrapper" className='w-full'>
            <div id="expWrapper">
              <Exp />
            </div>
            <div id="CvcWrapper" className='w-full'>
              <Cvc />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form