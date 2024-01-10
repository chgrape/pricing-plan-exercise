import React from 'react'
import Header from './components/Header'
import "./index.css"
import Card from './components/Card'

function App() {

  return (
    <div className='flex flex-col font-poppins w-full h-screen'>
     <Header />
     <div className="mt-6 mb-6 flex justify-evenly flex-grow flex-wrap flex-row">
      <Card title={'Hobby'} desc={'Lorem Ipsum'} price={'$12'}/>
      <Card title={'Freelancer'} desc={'Lorem Ipsum'}  price={'$12'} />
      <Card title={'Startup'} desc={'Lorem Ipsum'} price={'$12'} />
      <Card title={'Enterprise'} desc={'Lorem Ipsum'} price={'$12'} />
     </div>
    </div>
  )
}

export default App
