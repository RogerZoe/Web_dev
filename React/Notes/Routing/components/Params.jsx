import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const {id}=useParams();
    console.log(id);
  return (
    <div>
      Params is: {id}
    </div>
  )
}

export default Params
