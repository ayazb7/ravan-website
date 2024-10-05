import React from 'react'
import CardProp from '@/components/CardProp'
import bg from "@/logos/cardImage.png"
const Discover = () => {
  return (
    <div className='bg-black w-full  flex flex-col items-center justify-center '>
        <h2 className='text-3xl text-center text-white'>Discover Properties in Dubai</h2>
        <div className='flex w-[20vw] h-[10vh]'>
            <button>
                To Rent 
            </button>
            <button>
                For Sale
            </button>
        </div>
        <div className='flex w-full h-full items-center justify-center space-x-10'>
            <CardProp imageSrc={bg} text="AED 3000 p/m" content="2 bedroom, 1 bathroom
Emaar Tower, Dubai"  />
            <CardProp imageSrc={bg} text="AED 3000 p/m" content="2 bedroom, 1 bathroom
Emaar Tower, Dubai"  />
            <CardProp imageSrc={bg} text="AED 3000 p/m" content="2 bedroom, 1 bathroom
Emaar Tower, Dubai" />

        </div>
    </div>
  )
}

export default Discover