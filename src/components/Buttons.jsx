import React from 'react'

function Buttons() {
  return (
    <div className='m-5 flex flex-row bg-gray-100 rounded-lg p-1 font-light text-sm'>
        <p className='bg-white p-2 pr-5 pl-5 rounded-lg'>Monthly billing</p>
        <p className='p-2 pr-5 pl-5'>Yearly billing</p>
    </div>
  )
}

export default Buttons