import React from 'react'
import Buttons from './Buttons'

function Header() {
  return (
    <section className='flex justify-center items-center w-90 flex-col gap-5 m-auto p-5'>
        <h1 className='text-4xl font-bold'>Pricing Plans</h1>
        <p>Start building for free, then add a site plan to go live</p>
        <Buttons />
    </section>
  )
}

export default Header