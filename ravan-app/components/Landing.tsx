import Image from '@/node_modules/next/image'
import React from 'react'
import bg from "@/logos/homephoto.png"

const Landing = () => {
  return (
    <div className='relative felx'>
        <Image src={bg} alt="Photo of dubai skyline with burj khalifa" className="z-0 object-fill w-[100vw] h-[87vh]"/>
        <div className='absolute flex-col items-center justify-center z-10 space-x-8 top-1/4 left-64 w-fit'>
            <h1 className='text-white font-black text-5xl text-center mb-28'>Turning Property Dreams into Reality</h1>
            <button className='btn-custom'>
                Commercial
            </button>
            <button className='btn-custom'>
                Resdential
            </button>
            <button className='btn-custom'>
                Off Plan
            </button>
        </div>
        

    </div>
  )
}

export default Landing
