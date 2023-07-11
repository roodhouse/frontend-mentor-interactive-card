import React from 'react'
import Form from './bottom/Form'
import Thanks from './bottom/Thanks'

function Bottom({ recordName, recordNumber, recordMonth, recordYear, recordCvc }) {
  return (
    <>
      <div id="bottomContainer" className='px-6'>
        <div id="formWrapper" className=''>
          <Form recordName={recordName} recordNumber={recordNumber} recordMonth={recordMonth} recordYear={recordYear} recordCvc={recordCvc}/>
        </div>
        <div id="thanksWrapper" className='hidden'>
          <Thanks />
        </div>
      </div>
    </>
  )
}

export default Bottom