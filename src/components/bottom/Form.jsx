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

  function onError() {
    console.log('error')
  }

  return (
    <>
      <div id="formContainer">
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)} className='w-full flex flex-col items-start'>
          <div id="cardHolderNameWrapper" className='w-full mb-1'>
            <CardHolderName register={register} recordName={recordName} />
          </div>
          <div id="cardHolderNumberWrapper" className='w-full mb-1'>
            <CardHolderNumber register={register} recordNumber={recordNumber} />
          </div>
          <div id="expCvcWrapper" className='w-full flex mb-7'>
            <div id="expWrapper" className='mr-[11px]'>
              <Exp register={register} recordMonth={recordMonth} recordYear={recordYear}/>
            </div>
            <div id="CvcWrapper" className='w-full'>
              <Cvc register={register} recordCvc={recordCvc} />
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