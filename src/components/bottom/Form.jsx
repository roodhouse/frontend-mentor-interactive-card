import React, { useState } from 'react'
import CardHolderName from './form/CardHolderName'
import CardHolderNumber from './form/CardHolderNumber'
import Exp from './form/Exp'
import Cvc from './form/Cvc'
import Submit from './form/Submit'
import { useForm } from 'react-hook-form'

function Form({ recordName, recordNumber, recordMonth, recordYear, recordCvc }) {

  const { register, handleSubmit, formState: {errors} } = useForm({defaultValues: {
    cardHolderName: '',
    cardHolderNumber: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  }})

  function onSubmit() {
    const formWrapper = document.getElementById('formWrapper')
    const thanksWrapper = document.getElementById('thanksWrapper')
    formWrapper.style.display = 'none'
    thanksWrapper.style.display = 'block'
  }

  function onError(e) {
    for (let error in e ) {
      const errorInput = document.getElementById(error)
      errorInput.style.borderColor = '#FF5050'
      
      if (error === 'cardHolderExpYear') {
        error = 'cardHolderExpMonth'
      }
      
      const errorDiv = document.getElementById(error +'Error').firstChild
      errorDiv.style.display = 'block'

      errorInput.addEventListener('input', function(){
        errorInput.style.borderColor = '#DFDEE0'
      })
    }
  }

  return (
    <>
      <div id="formContainer">
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)} className='w-full flex flex-col items-start'>
          <div id="cardHolderNameWrapper" className='w-full mb-1'>
            <CardHolderName register={register} recordName={recordName} errors={errors} />
          </div>
          <div id="cardHolderNumberWrapper" className='w-full mb-1'>
            <CardHolderNumber register={register} recordNumber={recordNumber} errors={errors} />
          </div>
          <div id="expCvcWrapper" className='w-full flex mb-7 xl:mb-[15px]'>
            <div id="expWrapper" className='mr-[11px]'>
              <Exp register={register} recordMonth={recordMonth} recordYear={recordYear} errors={errors} />
            </div>
            <div id="CvcWrapper" className='w-full'>
              <Cvc register={register} recordCvc={recordCvc} errors={errors} />
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