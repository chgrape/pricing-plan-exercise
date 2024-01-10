import React from 'react'
import check_mark from "./../assets/Check_mark_9x9.svg.png"

function Card(props) {

  return (
    <div style={{width: "22rem", height:"97%"}} className='flex flex-col mb-6'>
        <div className='rounded-t-lg border-2 border-gray-100 p-5 sm:text-sm'>
            <h2 className='font-medium mb-4'>{props.title}</h2>
            <p className='text-gray-500'>{props.desc}</p>
            <div className='mt-8 mb-8 flex flex-row items-end text-end'>
                <h1 className='text-3xl font-bold'>{props.price}</h1>
                <p className='text-gray-500'>/mo</p>
            </div>
            <button className="text-white bg-black rounded-lg w-full h-10 text-sm">Buy {props.title}</button>
        </div>
        <div className=' h-full border-x-2 rounded-b-lg border-gray-100 p-5 border-b-2'>
            <h2 className='font-medium mb-4'>What's included</h2>
            <div className='flex flex-row gap-5 items-center'>
            <img className='h-aspect-1 w-aspect-1 h-4 w-4' src={check_mark} />
            <p className='text-gray-500'>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Card