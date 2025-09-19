import React from 'react'
import ChildB from './ChildB'

const ChildA = () => {
  return (
    <div className='bg-red-400'>
        <p>Im in child A</p>
       <br />
       <ChildB/>
    </div>
  )
}

export default ChildA