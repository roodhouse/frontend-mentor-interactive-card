import React from 'react'
import Form from './bottom/Form'
import Thanks from './bottom/Thanks'

function Bottom() {
  return (
    <>
      <div id="bottomContainer" className='px-6'>
        <div id="formWrapper" className=''>
          <Form />
        </div>
        <div id="thanksWrapper" className='hidden'>
          <Thanks />
        </div>
      </div>
    </>
  )
}

export default Bottom