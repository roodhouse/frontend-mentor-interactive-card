import React from 'react'
import Form from './bottom/Form'
import Thanks from './bottom/Thanks'

function Bottom({ recordName, recordNumber, recordMonth, recordYear, recordCvc }) {
  return (
    <>
      <div id="bottomContainer" className='px-6 xl:w-[381px] xl:mt-[275px] xl:ml-[127px] xl:px-0'>
        <div id="formWrapper" className=''>
          <Form recordName={recordName} recordNumber={recordNumber} recordMonth={recordMonth} recordYear={recordYear} recordCvc={recordCvc}/>
        </div>
        <div id="thanksWrapper" className='hidden xl:pt-[30px]'>
          <Thanks />
        </div>
      </div>
    </>
  )
}

export default Bottom